"use client";

import React, { useState } from "react";
import { Heart, CheckCircle2, ShieldCheck, Sparkles, Sprout, BookOpen, School, ArrowRight, Award } from "lucide-react";
import { GrownUpGateModal } from "@/components/GrownUpGateModal";

export function DonationTierSelector() {
  const [selectedTier, setSelectedTier] = useState("50");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [customAmount, setCustomAmount] = useState("");
  const [gateOpen, setGateOpen] = useState(false);

  const tiers = [
    {
      id: "25",
      amount: 25,
      title: "Seed Starter Sponsor",
      desc: "Supplies 5 organic heirloom seed starter packets to eager young apartment growers.",
      icon: Sprout,
      impact: "5 Young Growers Equipped",
      badge: "Grassroots",
    },
    {
      id: "50",
      amount: 50,
      title: "Classroom Story & Seed Kit",
      desc: "Funds 1 hardcover picture book plus 15 seed packets for an elementary classroom.",
      icon: BookOpen,
      impact: "1 Classroom Funded",
      badge: "Most Popular",
      recommended: true,
    },
    {
      id: "100",
      amount: 100,
      title: "School Garden Raised Bed",
      desc: "Helps build a raised wooden garden bed with rich organic compost and watering supplies.",
      icon: School,
      impact: "1 Garden Bed Built",
      badge: "Community Champion",
    },
    {
      id: "250",
      amount: 250,
      title: "Assembly & Seed Library",
      desc: "Sponsors a virtual author visit, 30 books, and an heirloom seed library for Title I schools.",
      icon: Award,
      impact: "Full Grade Level Sponsored",
      badge: "Patron of Literacy",
    },
  ];

  const handleDonateClick = (e: React.FormEvent) => {
    e.preventDefault();
    setGateOpen(true);
  };

  const finalAmount = selectedTier === "custom" ? customAmount || "25" : selectedTier;

  return (
    <>
      <div className="rounded-4xl bg-gradient-to-br from-[#FFF8F0] via-[#FDFBF7] to-amber-50/70 p-6 sm:p-10 lg:p-12 border-3 border-amber-200/90 shadow-tactile my-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-950 border border-amber-300 mb-3 shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
            <span>Direct Tax-Deductible 501(c)(3) Giving</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#264653] tracking-tight">
            Sponsor Free Food & Youth Farm Literacy
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Every dollar donated to <strong>FarmerCindy, Inc.</strong> is 100% tax-deductible. We directly purchase heirloom seeds, soil kits, and picture books for underserved elementary classrooms.
          </p>

          {/* Donation Frequency Toggle */}
          <div className="inline-flex p-1 rounded-2xl bg-amber-100/80 border border-amber-200 mt-6 shadow-inner">
            <button
              type="button"
              onClick={() => setFrequency("one-time")}
              className={`px-5 py-2 rounded-xl text-xs font-black transition-all ${
                frequency === "one-time"
                  ? "bg-white text-[#264653] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              One-Time Gift
            </button>
            <button
              type="button"
              onClick={() => setFrequency("monthly")}
              className={`px-5 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-1.5 ${
                frequency === "monthly"
                  ? "bg-[#E63946] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Monthly Seed Sustainer</span>
              <span className="text-[10px] bg-amber-300 text-slate-950 px-1.5 py-0.2 rounded-full font-extrabold">
                12× Impact
              </span>
            </button>
          </div>
        </div>

        {/* Tiers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {tiers.map((t) => {
            const isSelected = selectedTier === t.id;
            const Icon = t.icon;
            return (
              <div
                key={t.id}
                onClick={() => setSelectedTier(t.id)}
                className={`cursor-pointer rounded-3xl p-5 transition-all duration-200 border-2 relative flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#E63946] shadow-xl ring-2 ring-[#E63946]/30 -translate-y-1"
                    : "bg-white/80 border-amber-200 hover:border-amber-300 hover:bg-white hover:-translate-y-0.5"
                }`}
              >
                {t.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#E63946] text-white text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md whitespace-nowrap">
                    {t.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#E63946]" />
                    </div>
                    <span className="text-2xl font-black font-heading text-[#264653]">
                      ${t.amount}
                      <span className="text-xs font-bold text-slate-400 block -mt-1 text-right">
                        {frequency === "monthly" ? "/mo" : "USD"}
                      </span>
                    </span>
                  </div>

                  <h4 className="font-extrabold text-sm text-[#264653] mb-1.5">
                    {t.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {t.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-extrabold text-[#2A9D8F] bg-emerald-50 px-2 py-0.5 rounded-full">
                    {t.impact}
                  </span>
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
            <span className="text-xs font-extrabold text-slate-600">Or choose your own amount:</span>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 font-black text-slate-500">$</span>
              <input
                type="number"
                min="5"
                placeholder="Other"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setSelectedTier("custom");
                }}
                className="w-28 pl-7 pr-3 py-2 rounded-xl border-2 border-amber-300 font-bold text-sm text-center focus:border-[#E63946] focus:outline-none bg-white shadow-sm"
              />
            </div>
            <span className="text-xs font-bold text-slate-400">USD</span>
          </div>

          <button
            type="button"
            onClick={handleDonateClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl text-base font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition active:translate-y-0"
          >
            <Heart className="w-5 h-5 fill-current" />
            <span>Donate ${finalAmount} {frequency === "monthly" ? "/ Month" : "Today"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1 text-emerald-700 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Official 501(c)(3) Receipt Issued Instantly</span>
            </span>
            <span>•</span>
            <span>Tax-Deductible to Legal Limit</span>
          </div>
        </div>
      </div>

      <GrownUpGateModal
        isOpen={gateOpen}
        onClose={() => setGateOpen(false)}
        targetUrl="https://donorbox.org/placeholder-farmercindy"
        retailerName="Official 501(c)(3) Donation Processor (Donorbox / Stripe)"
      />
    </>
  );
}
