"use client";

import React, { useState } from "react";
import { Heart, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { GrownUpGateModal } from "@/components/GrownUpGateModal";

export function DonationTierSelector() {
  const [selectedTier, setSelectedTier] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [gateOpen, setGateOpen] = useState(false);

  const tiers = [
    {
      id: "25",
      amount: 25,
      title: "Seed Packet Sponsor",
      desc: "Provides 5 organic heirloom seed starter packets to eager young growers.",
      badge: "Great Start",
    },
    {
      id: "50",
      amount: 50,
      title: "Classroom Story Kit",
      desc: "Funds 1 hardcover book + 15 seed packets for an underserved elementary classroom.",
      badge: "Most Popular",
      recommended: true,
    },
    {
      id: "100",
      amount: 100,
      title: "School Garden Planter",
      desc: "Helps construct a raised wooden garden bed with organic soil for school children.",
      badge: "Champion",
    },
  ];

  const handleDonateClick = (e: React.FormEvent) => {
    e.preventDefault();
    setGateOpen(true);
  };

  const finalAmount = selectedTier === "custom" ? customAmount || "25" : selectedTier;

  return (
    <>
      <div className="rounded-4xl bg-gradient-to-b from-[#FFF8F0] to-[#FDFBF7] p-8 md:p-12 border-3 border-amber-200 shadow-tactile my-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-200 text-amber-950 mb-3 shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
            Direct Tax-Deductible Support
          </span>

          <h3 className="text-2xl md:text-3xl font-black text-[#264653]">
            Sponsor Free Food & Youth Farming Literacy
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            Every dollar donated to <strong>FarmerCindy, Inc. 501(c)(3)</strong> is tax-deductible and directly purchases heirloom seeds, educational books, and classroom planting supplies.
          </p>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {tiers.map((t) => {
            const isSelected = selectedTier === t.id;
            return (
              <div
                key={t.id}
                onClick={() => setSelectedTier(t.id)}
                className={`cursor-pointer rounded-3xl p-6 transition-all duration-200 border-3 relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#E63946] shadow-xl scale-[1.02]"
                    : "bg-white/70 border-amber-200/60 hover:border-amber-300"
                }`}
              >
                {t.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E63946] text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow">
                    {t.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl font-black text-[#264653]">
                      ${t.amount}
                    </span>
                    <span className="text-xs font-bold text-[#2A9D8F] bg-emerald-50 px-2.5 py-1 rounded-full">
                      USD
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base text-[#264653] mb-2">
                    {t.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400">100% Tax-Deductible</span>
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center border-2 ${
                    isSelected ? "bg-[#E63946] border-[#E63946] text-white" : "border-slate-300"
                  }`}>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Amount & Action Row */}
        <div className="mt-8 max-w-lg mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-xs font-extrabold text-slate-600">Or custom amount:</span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-black text-slate-500">$</span>
              <input
                type="number"
                placeholder="Other"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedTier("custom");
                }}
                className="w-28 pl-7 pr-3 py-2 rounded-xl border-2 border-slate-300 font-bold text-sm text-center focus:border-[#E63946] focus:outline-none bg-white"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleDonateClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl text-base font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-lg hover:shadow-xl transition active:scale-95"
          >
            <Heart className="w-5 h-5 fill-current" />
            Donate ${finalAmount} to FarmerCindy, Inc.
          </button>

          <p className="mt-3 text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official 501(c)(3) Receipt Issued Instantly For Tax Filing</span>
          </p>
        </div>
      </div>

      <GrownUpGateModal
        isOpen={gateOpen}
        onClose={() => setGateOpen(false)}
        targetUrl="https://donorbox.org/placeholder-farmercindy"
        retailerName="Official Non-Profit Donation Portal (Donorbox/Stripe)"
      />
    </>
  );
}
