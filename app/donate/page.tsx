import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, CheckCircle2, Sprout, BookOpen, School, ArrowRight, Award, Users, Download, Film, Lock, HelpCircle } from "lucide-react";
import { DonationImpactModule } from "@/components/DonationImpactModule";
import { KidSafeVideoPlayer } from "@/components/KidSafeVideoPlayer";

export const metadata = {
  title: "Donate to FarmerCindy, Inc. 501(c)(3) | Nourish Children & Grow Living Food",
  description:
    "Make an official 100% tax-deductible charitable donation to FarmerCindy, Inc. 501(c)(3). Every gift directly funds organic heirloom seed kits, raised school beds, and picture books for Title I classrooms across America.",
};

export default function DonatePage() {
  const impactStats = [
    { value: "100%", label: "Tax-Deductible", desc: "Recognized 501(c)(3) public charity under the IRS Code" },
    { value: "12,400+", label: "Seed Packets Given", desc: "Distributed directly to elementary students nationwide" },
    { value: "48", label: "School Raised Beds", desc: "Built with organic living soil in Title I school courtyards" },
    { value: "$0", label: "Corporate Waste", desc: "100% of public gifts fund seeds, books, and youth garden tools" },
  ];

  return (
    <div className="relative overflow-hidden paper-canvas py-12 md:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] border border-emerald-500/30 shadow-sm mb-4">
            <Heart className="w-4 h-4 fill-[#DDA15E] text-[#DDA15E]" />
            <span>Official 501(c)(3) Public Charity Giving</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0D3829] tracking-tight leading-[1.15]">
            From Bedtime Story to Living Reality: <br />
            <span className="text-[#2B6E4F]">Sponsor an Heirloom Garden</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
            In <em>The Adventures of FarmerCindy</em>, Cindy's farm dream blossomed because a caring community rallied together to donate seeds, tools, and love. Your tax-deductible gift brings that exact story to life for children across the country.
          </p>
        </div>

        {/* Hero Impact Spotlight Card: Featuring Authentic Community Donation Image */}
        <section className="mb-20 rounded-4xl bg-white/95 backdrop-blur-sm border-2 border-[#DDA15E]/40 p-6 sm:p-10 lg:p-12 shadow-tactile">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual: Authentic Community Donation Celebration Photo */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                <Image
                  src="/images/generated/community_donation_presentation.jpg"
                  alt="FarmerCindy, Inc. 501(c)(3) Community Garden Donation Celebration with Founder Cindy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DDA15E] animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-wider drop-shadow-md">
                      Real-Life Community Giving in Action
                    </span>
                  </div>
                  <span className="text-xs font-bold text-amber-200 drop-shadow">Title I Garden Partner</span>
                </div>
              </div>
            </div>

            {/* Narrative Context: Linking Book 1 Finale to Real Giving */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-300/60 inline-flex items-center gap-1.5">
                <Sprout className="w-3.5 h-3.5 text-[#2B6E4F]" />
                <span>As Seen in Book 1 &amp; Our Cartoon Finale</span>
              </span>

              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#0D3829] leading-tight">
                Where Dreams Meet Fertile Soil
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                At the conclusion of <em>FarmerCindy Finds a Farm</em>, Farmer Cindy discovers that true agriculture isn't about vast empty acreage—it's about the heart of a community coming together. When neighbors gave what they could, her seeds sprouted into an abundance that fed everyone.
              </p>

              <blockquote className="my-6 pl-6 border-l-2 border-[#DDA15E] text-base sm:text-lg italic font-heading font-bold text-[#0D3829] leading-relaxed">
                "When a child watches a seed grow into food with their own hands, hunger loses its grip, and confidence takes root for life."
                <span className="block mt-1 font-black not-italic text-sm text-[#2B6E4F]">— Farmer Cindy, Founder &amp; Author</span>
              </blockquote>

              <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2B6E4F]" />
                  <span>501(c)(3) Tax-Exempt</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-[#2B6E4F]" />
                  <span>Secure 256-Bit SSL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Where Every Dollar Goes: Transparent Financial Ledger */}
        <section className="mb-20 rounded-3xl bg-white p-6 sm:p-10 border-2 border-stone-200/90 shadow-sm max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-heading font-black text-[#0D3829]">
              How Your Tax-Deductible Gift Translates to Real Food
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-600">
              100% of public contributions directly purchase seeds, living compost, and student planters for Title I classrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-amber-200/80">
              <span className="text-2xl font-black font-heading text-[#DDA15E] block">$25</span>
              <span className="text-xs font-black uppercase text-[#0D3829] block mt-1">5 Student Seed Kits</span>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Supplies 5 elementary students with personal windowsill seed discs and planting guides.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-emerald-200/80">
              <span className="text-2xl font-black font-heading text-[#2B6E4F] block">$50</span>
              <span className="text-xs font-black uppercase text-[#0D3829] block mt-1">Classroom Soil &amp; Seeds</span>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Provides 12 heirloom seed varieties and 40 lbs of nutrient-dense organic soil.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-emerald-200/80">
              <span className="text-2xl font-black font-heading text-[#0D3829] block">$100</span>
              <span className="text-xs font-black uppercase text-[#0D3829] block mt-1">Library &amp; School Reading</span>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Sponsors an author reading assembly and donates 10 hardcover picture books to a Title I library.</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-stone-300">
              <span className="text-2xl font-black font-heading text-[#3B2314] block">$250</span>
              <span className="text-xs font-black uppercase text-[#0D3829] block mt-1">Full Raised Garden Bed</span>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">Funds construction of a full cedar garden plot, compost, and pollinator plants for a public school.</p>
            </div>
          </div>
        </section>

        {/* Master Giving Module (Farmland.org / Kiss The Ground Standard) */}
        <section className="mb-20">
          <DonationImpactModule />
        </section>

        {/* Authentic Black Agrarian Heritage & School Gardens Showcase */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300/60">
              Grassroots Impact
            </span>
            <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#0D3829]">
              How Your Donations Grow in Real Communities
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              From Title I elementary school courtyards to urban raised beds, every dollar directly empowers young growers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story 1: Elementary School Garden Plots */}
            <div className="rounded-4xl bg-white border-2 border-stone-200/90 overflow-hidden shadow-tactile flex flex-col justify-between group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <Image
                  src="/images/generated/black_children_school_garden.jpg"
                  alt="African American children planting organic strawberry seedlings in elementary school raised bed"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0D3829] text-[#DDA15E] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow border border-emerald-500/30">
                  Classroom Raised Beds
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h4 className="font-heading font-black text-xl text-[#0D3829]">
                  Teaching Elementary Students Where Real Food Comes From
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Your $50 and $100 donations directly supply elementary classrooms with organic heirloom seeds, rich potting compost, and children's picture books so young minds experience the science and joy of harvesting their own food.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2B6E4F]">
                  <span>Sponsored by Donor Seed Funds</span>
                  <CheckCircle2 className="w-4 h-4 text-[#2B6E4F]" />
                </div>
              </div>
            </div>

            {/* Story 2: Urban Agriculture & Family Food Security */}
            <div className="rounded-4xl bg-white border-2 border-stone-200/90 overflow-hidden shadow-tactile flex flex-col justify-between group">
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <Image
                  src="/images/generated/black_farmers_community_sunrise.jpg"
                  alt="African American community farmers tending raised beds of strawberries and kale at sunrise"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0D3829] text-[#DDA15E] text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow border border-emerald-500/30">
                  Urban Farming Heritage
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h4 className="font-heading font-black text-xl text-[#0D3829]">
                  Empowering Black Agrarian Leadership &amp; Fresh Nutrition
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  FarmerCindy, Inc. honors historical agrarian roots by ensuring African American children and families see themselves proudly represented as farmers, scientists, and environmental leaders growing nutritious produce in city spaces.
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2B6E4F]">
                  <span>Cultivating Future Agricultural Stewards</span>
                  <CheckCircle2 className="w-4 h-4 text-[#2B6E4F]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Connection Spotlight: Book 1 Finale Connection */}
        <section className="mb-20 rounded-4xl bg-gradient-to-br from-[#08241A] via-[#0D3829] to-[#112017] text-white p-8 sm:p-12 lg:p-14 border border-emerald-500/20 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDA15E] text-slate-950 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
              <Film className="w-4 h-4 text-slate-950" />
              <span>Video Spotlight • The Story Behind The Giving</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white">
              Watch The Book 1 Finale: How Community Giving Built The Farm
            </h3>

            <p className="mt-3 text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto">
              See the exact scene from Farmer Cindy's animated cartoon where the neighborhood gathers to donate seeds, tools, and encouragement—proving that teamwork makes anything possible.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <KidSafeVideoPlayer />
          </div>
        </section>

        {/* 501(c)(3) Institutional Trust & Legal Assurance Notice */}
        <section className="p-8 sm:p-10 rounded-4xl bg-white border-2 border-[#DDA15E]/40 max-w-4xl mx-auto shadow-sm text-center leading-relaxed">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#0D3829] flex items-center justify-center mx-auto mb-4 border border-emerald-300">
            <ShieldCheck className="w-8 h-8 text-[#2B6E4F]" />
          </div>

          <h4 className="font-heading font-black text-xl text-[#0D3829] mb-2">
            IRS 501(c)(3) Non-Profit Public Charity Guarantee
          </h4>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            FarmerCindy, Inc. is an official non-profit public charity organized under Section 501(c)(3) of the U.S. Internal Revenue Code. All charitable contributions, book donations, and recurring gifts are tax-deductible to the fullest extent permitted by law.
          </p>

          <div className="mt-6 pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-600">
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="text-[#0D3829] font-black uppercase">Instant Tax Receipts</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Automated IRS acknowledgment letter sent upon contribution</div>
            </div>
            <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <div className="text-[#0D3829] font-black uppercase">GuideStar Transparency</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Committed to highest non-profit financial transparency</div>
            </div>
            <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="text-[#0D3829] font-black uppercase">Employer Match Ready</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Eligible for corporate matching via Benevity &amp; CyberGrants</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
