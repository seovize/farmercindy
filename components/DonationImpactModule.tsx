"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShieldCheck, Sprout, BookOpen, School } from "lucide-react";
import { GivingModal } from "@/components/GivingModal";

interface DonationTier {
  amount: number;
  label: string;
  badge: string;
  impactTitle: string;
  impactDesc: string;
  icon: any;
}

const tiers: DonationTier[] = [
  {
    amount: 25,
    label: "$25",
    badge: "Windowsill Sprout",
    impactTitle: "5 Community Strawberry Kits",
    impactDesc: "Supplies 5 families or students with personal heirloom seed kits, organic soil discs, and planting guides.",
    icon: Sprout,
  },
  {
    amount: 50,
    label: "$50",
    badge: "Community Soil",
    impactTitle: "Heirloom Seed & Soil Pack",
    impactDesc: "Provides 12 heirloom seed varieties and 40 lbs of nutrient-rich living compost to a community farm plot.",
    icon: Sprout,
  },
  {
    amount: 100,
    label: "$100",
    badge: "Most Popular",
    impactTitle: "Community Library & Book Gift",
    impactDesc: "Sponsors a community reading session and donates 10 hardcover FarmerCindy picture books to families and libraries.",
    icon: BookOpen,
  },
  {
    amount: 250,
    label: "$250",
    badge: "Garden Champion",
    impactTitle: "Full Raised Farm Bed",
    impactDesc: "Funds the construction of a complete cedar raised garden bed, living compost, irrigation, and heirloom produce plants.",
    icon: School,
  },
];

export function DonationImpactModule() {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const currentTier = tiers.find((t) => t.amount === selectedAmount) || {
    amount: parseInt(customAmount, 10) || selectedAmount,
    label: `$${customAmount || selectedAmount}`,
    badge: "Custom Generosity",
    impactTitle: "Heirloom Farm & Community Food Support",
    impactDesc: "Your generous contribution directly funds heirloom seeds, living soil, and organic garden beds to help feed families and neighbors for free.",
    icon: Heart,
  };

  const handleSelectTier = (amount: number) => {
    setIsCustom(false);
    setSelectedAmount(amount);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustom(true);
    setCustomAmount(e.target.value);
  };

  return (
    <section id="donate-section" className="py-12 bg-[#06080A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0F3D6E] text-sky-200 border border-sky-400/30 mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-rose-400 text-rose-400" />
            <span>Tax-Deductible 501(c)(3) Giving</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            Nourish a Family. <span className="text-[#FACC15]">Grow Abundance.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-medium">
            100% of your tax-deductible contribution to FarmerCindy, Inc. funds heirloom seeds, living soil, and community farm plots that grow free food.
          </p>

          {/* Giving Frequency Toggle */}
          <div className="mt-6 inline-flex items-center p-1.5 rounded-2xl bg-[#0D131C] border border-sky-400/25 shadow-sm">
            <button
              type="button"
              onClick={() => setIsMonthly(false)}
              className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                !isMonthly
                  ? "bg-[#1E5AA8] text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              One-Time Gift
            </button>
            <button
              type="button"
              onClick={() => setIsMonthly(true)}
              className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                isMonthly
                  ? "bg-[#1E5AA8] text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Monthly Champion</span>
              <span className="text-[10px] bg-[#FACC15] text-black font-black px-1.5 py-0.5 rounded-full">
                Sustain
              </span>
            </button>
          </div>
        </div>

        {/* Donation Selector Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Tiers Selection */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {tiers.map((tier) => {
                const isSelected = !isCustom && selectedAmount === tier.amount;
                return (
                  <button
                    key={tier.amount}
                    type="button"
                    onClick={() => handleSelectTier(tier.amount)}
                    className={`p-4 rounded-2xl border-2 text-center transition-all duration-200 flex flex-col items-center justify-between ${
                      isSelected
                        ? "bg-[#1E5AA8] border-sky-300 text-white shadow-lg shadow-sky-500/20 scale-102"
                        : "bg-[#0D131C] border-white/15 text-white hover:border-sky-400/50"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 ${
                        isSelected
                          ? "bg-[#FACC15] text-black"
                          : "bg-emerald-500/20 text-emerald-300"
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <span className="text-2xl font-black font-heading my-1">
                      {tier.label}
                    </span>
                    <span className={`text-[11px] font-bold ${isSelected ? "text-sky-100" : "text-slate-400"}`}>
                      {isMonthly ? "/ month" : "one-time"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Field */}
            <div className="p-4 rounded-2xl bg-[#0D131C] border border-white/15 flex items-center gap-3">
              <span className="text-sm font-black text-white shrink-0">Custom Amount:</span>
              <div className="relative flex-1">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">
                  $
                </span>
                <input
                  type="number"
                  min="5"
                  step="5"
                  placeholder="Enter other amount"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className="w-full pl-8 pr-4 py-2 rounded-xl bg-[#06080A] border border-white/20 text-sm font-black text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
            </div>

            {/* Tax Deductibility Guarantee */}
            <div className="p-5 rounded-2xl bg-[#0B1524] border border-sky-400/20 text-xs text-slate-300 leading-relaxed">
              <div className="flex items-center gap-2 font-black text-sm mb-1 text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Federal 501(c)(3) Tax-Exempt Status</span>
              </div>
              FarmerCindy, Inc. is recognized by the IRS as a 501(c)(3) public charity. Contributions are tax-deductible to the full extent permitted by law. You will receive an immediate printable receipt for your tax records.
            </div>
          </div>

          {/* Right: Tangible Impact Preview Card */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-[#0B2545] via-[#0F3D6E] to-[#081A33] text-white p-7 md:p-8 flex flex-col justify-between shadow-2xl border border-sky-400/30">
            <div>
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-sky-300 mb-4 pb-3 border-b border-sky-400/20">
                <span>Your Tangible Impact</span>
                <span className="text-[#FACC15]">
                  {isMonthly ? "Monthly Recurring" : "Direct Seed Gift"}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-heading font-black text-[#FACC15]">
                  ${isCustom ? customAmount || "0" : selectedAmount}
                </span>
                <span className="text-xs font-bold text-sky-200">
                  {isMonthly ? "per month" : "today"}
                </span>
              </div>

              <h3 className="text-xl font-heading font-black text-white mt-4 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-emerald-400" />
                {currentTier.impactTitle}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-sky-100/90 leading-relaxed font-medium">
                {currentTier.impactDesc}
              </p>

              {/* Vibrant Produce Impact Photo */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mt-5 border border-sky-400/30 bg-black">
                <Image
                  src="/images/generated/vibrant_cherries_strawberries_black.jpg"
                  alt="Vibrant cherries and strawberries grown for community harvest"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="mt-7">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#E11D48] hover:bg-[#F43F5E] text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-rose-500/25 transition-all active:scale-95 cursor-pointer border border-rose-400/40"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>Complete ${isCustom ? customAmount || "0" : selectedAmount} Contribution</span>
              </button>
              <span className="block text-center text-[10px] text-sky-200/80 mt-2">
                Secure 256-Bit SSL Encryption • Instant IRS Deduction Receipt
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive In-App Giving Modal */}
      <GivingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialAmount={isCustom ? parseInt(customAmount, 10) || 50 : selectedAmount}
        initialMonthly={isMonthly}
        impactTitle={currentTier.impactTitle}
      />
    </section>
  );
}
