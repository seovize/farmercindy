"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ShieldCheck, CheckCircle2, Sprout, BookOpen, School, ExternalLink } from "lucide-react";

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
    impactTitle: "5 Classroom Strawberry Kits",
    impactDesc: "Supplies 5 elementary students in an urban classroom with personal windowsill seed kits, organic soil discs, and planting guides.",
    icon: Sprout,
  },
  {
    amount: 50,
    label: "$50",
    badge: "Community Soil",
    impactTitle: "Heirloom Seed & Soil Pack",
    impactDesc: "Provides 12 heirloom seed varieties and 40 lbs of nutrient-rich organic soil to a community youth garden.",
    icon: Sprout,
  },
  {
    amount: 100,
    label: "$100",
    badge: "Most Popular",
    impactTitle: "School Library & Author Visit",
    impactDesc: "Sponsors an official Farmer Cindy educational reading assembly and donates 10 hardcover picture books to an underserved elementary school library.",
    icon: BookOpen,
  },
  {
    amount: 250,
    label: "$250",
    badge: "Garden Champion",
    impactTitle: "Full Raised Classroom Bed",
    impactDesc: "Funds the construction of a complete cedar raised garden bed, organic compost, irrigation, and pollinator plants for a Title I school.",
    icon: School,
  },
];

export function DonationImpactModule() {
  const [selectedAmount, setSelectedAmount] = useState<number>(100);
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const currentTier = tiers.find((t) => t.amount === selectedAmount) || {
    amount: parseInt(customAmount, 10) || selectedAmount,
    label: `$${customAmount || selectedAmount}`,
    badge: "Custom Generosity",
    impactTitle: "Heirloom Farm & Literacy Support",
    impactDesc: "Your generous gift directly empowers youth agricultural literacy and expands our 501(c)(3) free food growing programs across the nation.",
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
    <section id="donate-section" className="py-20 bg-[#FAF7F2] border-t-2 border-[#3B2314]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-[#0D3829] border border-emerald-300 mb-4 shadow-sm">
            <Heart className="w-3.5 h-3.5 fill-[#2B6E4F] text-[#2B6E4F]" />
            <span>Tax-Deductible 501(c)(3) Giving</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#0D3829] tracking-tight">
            Nourish a Child. <span className="text-[#DDA15E]">Grow a Future.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#3B2314]/80 leading-relaxed max-w-2xl mx-auto font-medium">
            100% of your tax-deductible contribution to FarmerCindy, Inc. funds living agricultural programs, hands-on seed kits, and educational book donations for Title I classrooms.
          </p>

          {/* Giving Frequency Toggle */}
          <div className="mt-6 inline-flex items-center p-1.5 rounded-2xl bg-white border-2 border-[#3B2314]/15 shadow-sm">
            <button
              type="button"
              onClick={() => setIsMonthly(false)}
              className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                !isMonthly
                  ? "bg-[#0D3829] text-white shadow"
                  : "text-[#3B2314]/70 hover:text-[#0D3829]"
              }`}
            >
              One-Time Gift
            </button>
            <button
              type="button"
              onClick={() => setIsMonthly(true)}
              className={`px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                isMonthly
                  ? "bg-[#0D3829] text-white shadow"
                  : "text-[#3B2314]/70 hover:text-[#0D3829]"
              }`}
            >
              <span>Monthly Champion</span>
              <span className="text-[10px] bg-[#DDA15E] text-[#0D3829] font-black px-1.5 py-0.5 rounded-full">
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
                        ? "bg-[#0D3829] border-[#0D3829] text-white shadow-lg scale-102"
                        : "bg-white border-[#3B2314]/20 text-[#0D3829] hover:border-[#2B6E4F]"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mb-1 ${
                        isSelected
                          ? "bg-[#DDA15E] text-[#0D3829]"
                          : "bg-emerald-50 text-[#2B6E4F]"
                      }`}
                    >
                      {tier.badge}
                    </span>
                    <span className="text-2xl font-black font-heading my-1">
                      {tier.label}
                    </span>
                    <span className={`text-[11px] font-bold ${isSelected ? "text-emerald-200" : "text-[#3B2314]/60"}`}>
                      {isMonthly ? "/ month" : "one-time"}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Custom Amount Field */}
            <div className="p-4 rounded-2xl bg-white border-2 border-[#3B2314]/20 flex items-center gap-3">
              <span className="text-sm font-black text-[#0D3829] shrink-0">Custom Amount:</span>
              <div className="relative flex-1">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-[#3B2314]/60">
                  $
                </span>
                <input
                  type="number"
                  min="5"
                  step="5"
                  placeholder="Enter other amount"
                  value={customAmount}
                  onChange={handleCustomChange}
                  className="w-full pl-8 pr-4 py-2 rounded-xl bg-[#FAF7F2] border border-[#3B2314]/20 text-sm font-black text-[#0D3829] focus:outline-none focus:ring-2 focus:ring-[#2B6E4F]"
                />
              </div>
            </div>

            {/* Tax Deductibility Guarantee */}
            <div className="p-5 rounded-2xl bg-emerald-900/10 border border-emerald-700/20 text-xs text-[#0D3829] leading-relaxed">
              <div className="flex items-center gap-2 font-black text-sm mb-1 text-[#0D3829]">
                <ShieldCheck className="w-4 h-4 text-[#2B6E4F]" />
                <span>Federal 501(c)(3) Tax-Exempt Status</span>
              </div>
              FarmerCindy, Inc. is recognized by the IRS as a 501(c)(3) public charity. Contributions are tax-deductible to the full extent permitted by law. You will receive an immediate printable receipt for your tax records.
            </div>
          </div>

          {/* Right: Tangible Impact Preview Card */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0D3829] text-white p-7 md:p-8 flex flex-col justify-between shadow-2xl border-2 border-emerald-500/30">
            <div>
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-emerald-300 mb-4 pb-3 border-b border-emerald-800">
                <span>Your Tangible Impact</span>
                <span className="text-[#DDA15E]">
                  {isMonthly ? "Monthly Recurring" : "Direct Seed Gift"}
                </span>
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl sm:text-5xl font-heading font-black text-[#DDA15E]">
                  ${isCustom ? customAmount || "0" : selectedAmount}
                </span>
                <span className="text-xs font-bold text-emerald-200">
                  {isMonthly ? "per month" : "today"}
                </span>
              </div>

              <h3 className="text-xl font-heading font-black text-white mt-4 flex items-center gap-2">
                <Sprout className="w-5 h-5 text-[#DDA15E]" />
                {currentTier.impactTitle}
              </h3>

              <p className="mt-3 text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
                {currentTier.impactDesc}
              </p>

              {/* Documentary Impact Photo */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mt-5 border border-emerald-700/50">
                <Image
                  src="/images/generated/community_school_garden.jpg"
                  alt="Students planting heirloom vegetables in school garden"
                  fill
                  sizes="400px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="mt-7">
              <a
                href="mailto:giving@farmercindy.org?subject=FarmerCindy%20501(c)(3)%20Donation&body=I%20would%20like%20to%20support%20FarmerCindy%20Inc%20with%20a%20gift."
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-[#DDA15E] hover:bg-[#c58b43] text-[#0D3829] font-black text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
              >
                <Heart className="w-4 h-4 fill-[#0D3829] text-[#0D3829]" />
                <span>Complete ${isCustom ? customAmount || "0" : selectedAmount} Contribution</span>
              </a>
              <span className="block text-center text-[10px] text-emerald-300/80 mt-2">
                Secure 256-Bit SSL Encryption • Instant IRS Deduction Receipt
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
