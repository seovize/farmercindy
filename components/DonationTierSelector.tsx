"use client";

import React, { useState } from "react";
import { Heart, CheckCircle2, ShieldCheck, Sprout, BookOpen, School, ArrowRight, Award } from "lucide-react";
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
      <div className="rounded-4xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F4EFE6] p-6 sm:p-10 lg:p-12 border-2 border-[#DDA15E]/40 shadow-tactile my-8">
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] border border-emerald-500/30 mb-3 shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
            <span>Direct Tax-Deductible 501(c)(3) Giving</span>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0D3829] tracking-tight">
            Sponsor Free Food &amp; Youth Farm Literacy
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
                  ? "bg-white text-[#0D3829] shadow-sm"
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
                  ? "bg-[#0D3829] text-[#DDA15E] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Monthly Seed Sustainer</span>
              <span className="text-[10px] bg-[#DDA15E] text-slate-950 px-1.5 py-0.2 rounded-full font-extrabold">
                Save
              </span>
            </button>
          </div>
        </div>

        {/* Giving Tiers Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiers.map((tier) => {
            const isSelected = selectedTier === tier.id;
            const Icon = tier.icon;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier.id)}
                className={`relative rounded-3xl p-6 cursor-pointer transition-all duration-300 border-2 flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#2B6E4F] shadow-xl ring-2 ring-[#2B6E4F]/30 -translate-y-1"
                    : "bg-white/80 border-stone-200 hover:border-stone-300 hover:shadow-md"
                }`}
              >
                {tier.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0D3829] text-[#DDA15E] text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full shadow-md whitespace-nowrap border border-emerald-500/30">
                    {tier.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#2B6E4F]" />
                    </div>
                    <span className="text-2xl font-black font-heading text-[#0D3829]">
                      ${tier.amount}
                    </span>
                  </div>

                  <h4 className="font-heading font-black text-base text-[#0D3829]">
                    {tier.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100">
                  <div className="text-[11px] font-extrabold text-[#2B6E4F] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>{tier.impact}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-center">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? "bg-[#0D3829] border-[#0D3829] text-[#DDA15E]" : "border-slate-300"
                      }`}
                    >
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#DDA15E]" />}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button & Tax Note */}
        <div className="mt-10 max-w-xl mx-auto text-center">
          <button
            type="button"
            onClick={handleDonateClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl text-base font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition active:translate-y-0"
          >
            <Heart className="w-5 h-5 fill-slate-950" />
            <span>
              Contribute ${finalAmount} {frequency === "monthly" ? "/ month" : "Once"} to FarmerCindy, Inc.
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="mt-3 text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#2B6E4F]" />
            <span>100% Tax-Deductible 501(c)(3) Charitable Contribution • EIN Provided</span>
          </p>
        </div>
      </div>

      <GrownUpGateModal
        isOpen={gateOpen}
        onClose={() => setGateOpen(false)}
        targetUrl="https://donorbox.org/farmercindy"
        retailerName="FarmerCindy 501(c)(3) Giving Portal"
      />
    </>
  );
}
