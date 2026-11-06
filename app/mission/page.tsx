import React from "react";
import Link from "next/link";
import { Heart, ShieldCheck, Sparkles, BookOpen, Users, Sprout, ArrowRight } from "lucide-react";
import { DonationTierSelector } from "@/components/DonationTierSelector";
import { FloatingFarmElements } from "@/components/FloatingFarmElements";

export const metadata = {
  title: "501(c)(3) Non-Profit Mission | FarmerCindy, Inc.",
  description:
    "Learn how FarmerCindy, Inc. educates children about heirloom farming, fresh nutrition, and grows free food for communities in need. 100% tax-deductible support.",
};

export default function MissionPage() {
  return (
    <div className="relative overflow-hidden paper-pattern py-12 md:py-20">
      <FloatingFarmElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-200 text-amber-950 mb-4 shadow-sm">
            <Heart className="w-4 h-4 fill-[#E63946] text-[#E63946]" />
            501(c)(3) Non-Profit Organization
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#264653] tracking-tight">
            Our Mission: <span className="text-[#2A9D8F]">Growing Free Food</span> & Farm Literacy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Every child deserves to experience the magic of planting an heirloom seed, watching it sprout into food, and tasting real, nutrient-dense nutrition.
          </p>
        </div>

        {/* The Origin Story */}
        <div className="rounded-4xl bg-[#FFF8F0] p-8 md:p-12 border-3 border-amber-200/80 shadow-tactile mb-16 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-[#E63946] text-white flex items-center justify-center text-2xl shadow">
              🌱
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#264653]">
                The Story of FarmerCindy, Inc.
              </h2>
              <span className="text-xs font-bold text-[#2A9D8F] uppercase tracking-wider">
                Founded by Author & Educator Cindy
              </span>
            </div>
          </div>

          <div className="space-y-4 text-base text-slate-700 leading-relaxed">
            <p>
              In our fast-paced modern world, many children grow up believing that strawberries, cherries, and vegetables simply come from plastic containers on grocery store shelves. They have never felt rich soil in their fingers, seen a honeybee pollinate a blossom, or experienced the patience of waiting for a tiny seed to become a meal.
            </p>
            <p>
              <strong>FarmerCindy, Inc.</strong> was born out of a simple conviction: <em>When you teach a child how to grow their own food, you give them health, self-reliance, and respect for nature that lasts a lifetime.</em>
            </p>
            <p>
              Cindy began writing <em>The Adventures of FarmerCindy</em> picture book series not just to tell heartwarming stories, but as a sustainable fundraising engine for agricultural literacy. **100% of book proceeds are reinvested directly into buying organic heirloom seeds, school garden supplies, and educational reading kits for underserved elementary classrooms.**
            </p>
          </div>
        </div>

        {/* The "Book-to-Seed" Educational Model Infographic */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#E63946] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
              The Virtuous Cycle
            </span>
            <h3 className="mt-3 text-3xl font-heading font-black text-[#264653]">
              The "Book-to-Seed" Educational Engine
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="p-6 rounded-3xl bg-white border-2 border-amber-200 text-center shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl mx-auto mb-4 font-black">
                1
              </div>
              <h4 className="font-extrabold text-base text-[#264653] mb-2">You Order A Book</h4>
              <p className="text-xs text-slate-600">
                You purchase Book 1 or Book 2 on Amazon, Barnes & Noble, or Lulu.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-amber-200 text-center shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl mx-auto mb-4 font-black">
                2
              </div>
              <h4 className="font-extrabold text-base text-[#264653] mb-2">100% Direct Profit</h4>
              <p className="text-xs text-slate-600">
                All author royalties flow directly into FarmerCindy, Inc. 501(c)(3).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-amber-200 text-center shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-800 flex items-center justify-center text-2xl mx-auto mb-4 font-black">
                3
              </div>
              <h4 className="font-extrabold text-base text-[#264653] mb-2">Heirloom Kits</h4>
              <p className="text-xs text-slate-600">
                We assemble organic heirloom seed kits and planter beds for Title I schools.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white border-2 border-amber-200 text-center shadow-md">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center text-2xl mx-auto mb-4 font-black">
                4
              </div>
              <h4 className="font-extrabold text-base text-[#264653] mb-2">Free Food Grown</h4>
              <p className="text-xs text-slate-600">
                Kids grow fresh strawberries, cherries, and vegetables to share with families!
              </p>
            </div>
          </div>
        </div>

        {/* Direct Donation Tier Selector */}
        <div id="donate" className="max-w-4xl mx-auto">
          <DonationTierSelector />
        </div>

        {/* 501(c)(3) IRS Confirmation & Disclosures */}
        <div className="mt-12 p-6 rounded-3xl bg-white/80 border border-amber-200 text-xs text-slate-500 max-w-3xl mx-auto text-center leading-relaxed">
          <p>
            <strong>Official 501(c)(3) Notice:</strong> FarmerCindy, Inc. is a non-profit organization organized under Section 501(c)(3) of the Internal Revenue Code. Contributions are tax-deductible to the fullest extent permitted by U.S. federal and state law. Donors receive an automated electronic receipt for tax records immediately upon submission.
          </p>
        </div>
      </div>
    </div>
  );
}
