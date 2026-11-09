import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShieldCheck, CheckCircle2, Sprout, BookOpen, School, ArrowRight, Award, Users, Download, Film, Lock, Play } from "lucide-react";
import { DonationImpactModule } from "@/components/DonationImpactModule";
import { KidSafeVideoPlayer } from "@/components/KidSafeVideoPlayer";

export const metadata = {
  title: "Donate to FarmerCindy, Inc. 501(c)(3) | The Book 1 Giving Story in Real Life",
  description:
    "Make an official 100% tax-deductible charitable donation to FarmerCindy, Inc. 501(c)(3). As shown at the climax of Book 1, community giving builds the farm. Every dollar directly funds heirloom seed kits, raised school beds, and picture books for Title I classrooms.",
};

export default function DonatePage() {
  const impactStats = [
    { value: "100%", label: "Tax-Deductible", desc: "Recognized 501(c)(3) public charity under IRS Code" },
    { value: "12,400+", label: "Seed Packets Given", desc: "Distributed directly to elementary students nationwide" },
    { value: "48", label: "School Raised Beds", desc: "Built with organic living soil in Title I school courtyards" },
    { value: "$0", label: "Corporate Waste", desc: "100% of public gifts fund seeds, books, and youth garden tools" },
  ];

  const storybookParallels = [
    {
      title: "Community Gathers with Seeds & Tools",
      cartoonDetail: "In Book 1, neighbors bring heirloom seeds, rich soil, and tools to help Cindy plant.",
      realLifeImpact: "Your donation provides Title I classrooms with organic seeds, living compost, and student gardening tools.",
      image: "/images/book1_community_donations_presentation.jpg",
      tag: "Storybook Climax",
    },
    {
      title: "The Community Farm Fund Check",
      cartoonDetail: "Neighbors present Cindy with a $15,000 Community Farm Fund check to build the farm.",
      realLifeImpact: "Your tax-deductible gift directly finances cedar raised beds, drip irrigation, and student garden kits.",
      image: "/images/book1_cindy_check_presentation.jpg",
      tag: "The Presentation Scene",
    },
    {
      title: "Tractor & Heavy Equipment Donated",
      cartoonDetail: "Community members donate a farm tractor and equipment to clear the pastures.",
      realLifeImpact: "Supplies school gardens with soil delivery, raised bed timber, wheelbarrows, and garden spades.",
      image: "/images/book1_tractor_donation.jpg",
      tag: "Community Equipment",
    },
  ];

  return (
    <div className="relative overflow-hidden paper-canvas py-12 md:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            1. SECTION HERO & EDITORIAL BADGE
           ========================================================================= */}
        <div className="text-center max-w-4xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] border border-emerald-500/30 shadow-sm mb-4">
            <Heart className="w-4 h-4 fill-[#DDA15E] text-[#DDA15E]" />
            <span>Official 501(c)(3) Public Charity Giving • IRS Recognized</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0D3829] tracking-tight leading-[1.15]">
            Where Community Support Builds Real Farms: <br />
            <span className="text-[#2B6E4F]">The Book 1 Giving Story in Real Life</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-3xl mx-auto">
            At the heartwarming climax of <em>The Adventures of FarmerCindy: FarmerCindy Finds a Farm</em> (Book 1), Cindy's dream blossomed because neighbors rallied together to donate seeds, tools, and farm funds. <strong>FarmerCindy, Inc. 501(c)(3)</strong> was founded to bring that exact storybook blessing to Title I elementary school children across America.
          </p>

          {/* Quick Metrics Banner */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {impactStats.map((stat) => (
              <div key={stat.label} className="p-3.5 rounded-2xl bg-white border border-[#3B2314]/15 shadow-sm text-center">
                <div className="text-xl sm:text-2xl font-black font-heading text-[#0D3829]">{stat.value}</div>
                <div className="text-[11px] font-black uppercase tracking-wider text-[#2B6E4F] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            2. THE BOOK 1 CLIMAX SPOTLIGHT (Cindy's Direct Video & Story Mandate)
           ========================================================================= */}
        <section className="mb-20 rounded-4xl bg-white/95 backdrop-blur-sm border-2 border-[#DDA15E]/50 p-6 sm:p-10 lg:p-12 shadow-tactile">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual: Authentic Book 1 Video Climax Presentation Frame */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0D3829] bg-slate-900 group">
                <Image
                  src="/images/book1_cindy_check_presentation.jpg"
                  alt="Farmer Cindy Receiving the Community Farm Fund Donation Check in Book 1 Official Cartoon Climax"
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover group-hover:scale-102 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] border border-emerald-500/40 shadow-md">
                    <Film className="w-3.5 h-3.5 text-[#DDA15E]" />
                    <span>Official Cartoon #1 Climax Scene (Sec 25–37)</span>
                  </span>
                </div>

                {/* Bottom Overlay Details */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#DDA15E] animate-pulse" />
                    <span className="text-xs font-black uppercase tracking-wider text-[#DDA15E] drop-shadow-md">
                      Book 1 Climax: Community Farm Fund Presentation
                    </span>
                  </div>
                  <p className="text-xs text-stone-200 line-clamp-2 drop-shadow">
                    Neighbors present Cindy with the Community Farm Fund check and donations to clear pastures and build the farm.
                  </p>
                </div>
              </div>

              {/* Sub-gallery of Scene Details */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-stone-200 shadow-sm group">
                  <Image
                    src="/images/book1_community_donations_presentation.jpg"
                    alt="Community Members Gathering with Donation Signs for Farmer Cindy"
                    fill
                    sizes="350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <span className="absolute bottom-2 left-2 right-2 text-[11px] font-black text-white leading-tight drop-shadow">
                    "Community Fund - Strong Farms Stronger Futures"
                  </span>
                </div>

                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border-2 border-stone-200 shadow-sm group">
                  <Image
                    src="/images/book1_tractor_donation.jpg"
                    alt="Community Donated Tractor in Book 1 Finale"
                    fill
                    sizes="350px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                  <span className="absolute bottom-2 left-2 right-2 text-[11px] font-black text-white leading-tight drop-shadow">
                    "Community Donated Farm Tractor &amp; Equipment"
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Context: Linking Book 1 Finale to Real Giving */}
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100/90 text-[#0D3829] border border-emerald-300">
                <Sprout className="w-3.5 h-3.5 text-[#2B6E4F]" />
                <span>The Moral of Book 1 • Community Power</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#0D3829] leading-tight">
                "When Neighbors Give, Dreams Take Root"
              </h2>

              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                In <em>The Adventures of FarmerCindy: FarmerCindy Finds a Farm</em>, Cindy discovers that true agriculture isn't about vast empty acres—it is about the heart of a community coming together. When the neighborhood gathers to present her with seeds, tools, and the Community Farm Fund check, her dream becomes a thriving sanctuary that feeds everyone.
              </p>

              {/* Authentic Founder Quote with Portrait */}
              <div className="p-5 rounded-3xl bg-[#FAF7F2] border-2 border-[#DDA15E]/40 shadow-sm">
                <div className="flex items-center gap-4 mb-3">
                  <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#0D3829] shadow shrink-0">
                    <Image
                      src="/images/farmer_cindy_glam_square.jpg"
                      alt="Farmer Cindy, Founder & Author"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-heading font-black text-sm text-[#0D3829]">Farmer Cindy</div>
                    <div className="text-[11px] font-black uppercase tracking-wider text-[#2B6E4F]">Author &amp; 501(c)(3) Founder</div>
                  </div>
                </div>

                <blockquote className="text-xs sm:text-sm italic font-heading font-bold text-[#0D3829] leading-relaxed">
                  "When I wrote the ending of Book 1 where the community gives Cindy donations to build the farm, that wasn't just fiction. It was my promise. Through our 501(c)(3) public charity, your donation directly puts heirloom seeds, living soil, and garden beds into Title I classrooms so every child learns where real food comes from."
                </blockquote>
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs font-bold text-slate-600">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2B6E4F]" />
                  <span>100% Tax-Deductible</span>
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

        {/* =========================================================================
            3. STORYBOOK PARALLELS: FROM BOOK 1 CLIMAX TO REAL CLASSROOMS
           ========================================================================= */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300/60">
              Direct Storybook Translation
            </span>
            <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#0D3829]">
              How Book 1 Inspires Real Community Impact
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
              See how every scene from the animated cartoon corresponds to real-world classroom programs funded by your gift.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storybookParallels.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white border-2 border-stone-200/90 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="400px"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#0D3829] text-[#DDA15E] text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full shadow border border-emerald-500/30">
                    {item.tag}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-black text-lg text-[#0D3829] leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed italic">
                      "{item.cartoonDetail}"
                    </p>
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <div className="text-[11px] font-black uppercase tracking-wider text-[#2B6E4F] mb-1">
                        Real-World 501(c)(3) Impact:
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed font-medium">
                        {item.realLifeImpact}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2B6E4F]">
                    <span>Funded by Public Donors</span>
                    <CheckCircle2 className="w-4 h-4 text-[#2B6E4F]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            4. WHERE EVERY DOLLAR GOES: TRANSPARENT FINANCIAL LEDGER
           ========================================================================= */}
        <section className="mb-20 rounded-3xl bg-white p-6 sm:p-10 border-2 border-stone-200/90 shadow-sm max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0D3829]">
              How Your Tax-Deductible Gift Translates to Real Food
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
              100% of public contributions directly purchase seeds, living compost, and student planters for Title I classrooms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-amber-200/80">
              <span className="text-2xl font-black font-heading text-[#DDA15E] block">$25</span>
              <span className="text-xs font-black uppercase text-[#0D3829] block mt-1">5 Student Seed Kits</span>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">Supplies 5 elementary students with personal windowsill seed discs and planting guides.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-emerald-200/80">
              <span className="text-2xl font-black font-heading text-[#2B6E4F] block">$50</span>
              <span className="text-xs font-black uppercase text-[#0D3829] block mt-1">Classroom Soil &amp; Seeds</span>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">Provides 12 heirloom seed varieties and 40 lbs of nutrient-dense organic soil.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-emerald-200/80">
              <span className="text-2xl font-black font-heading text-[#0D3829] block">$100</span>
              <span className="text-xs font-black uppercase text-[#0D3829] block mt-1">Library &amp; School Reading</span>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">Sponsors an author reading assembly and donates 10 hardcover picture books to a Title I library.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF7F2] border border-stone-300">
              <span className="text-2xl font-black font-heading text-[#3B2314] block">$250</span>
              <span className="text-xs font-black uppercase text-[#0D3829] block mt-1">Full Raised Garden Bed</span>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">Funds construction of a full cedar garden plot, compost, and pollinator plants for a public school.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. MASTER GIVING MODULE (Interactive Tiers & Frequency Selector)
           ========================================================================= */}
        <section className="mb-20">
          <DonationImpactModule />
        </section>

        {/* =========================================================================
            6. VIDEO CONNECTION SPOTLIGHT: WATCH THE BOOK 1 CARTOON FINALE
           ========================================================================= */}
        <section className="mb-20 rounded-4xl bg-gradient-to-br from-[#08241A] via-[#0D3829] to-[#112017] text-white p-8 sm:p-12 lg:p-14 border border-emerald-500/20 shadow-2xl">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DDA15E] text-slate-950 text-xs font-black uppercase tracking-wider mb-4 shadow-sm">
              <Film className="w-4 h-4 text-slate-950" />
              <span>Official Animated Cartoon • The Giving Scene</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white">
              Watch The Book 1 Climax: How Community Giving Built The Farm
            </h3>

            <p className="mt-3 text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto font-medium">
              Watch the exact animated cartoon scene from <em>The Adventures of FarmerCindy</em> (seconds 25–37) where the neighborhood gathers to present Cindy with farm donations—proving that teamwork and generosity make anything possible.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <KidSafeVideoPlayer />
          </div>
        </section>

        {/* =========================================================================
            7. AUTHENTIC BLACK AGRARIAN HERITAGE & SCHOOL GARDENS SHOWCASE
           ========================================================================= */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300/60">
              Grassroots Stewardship
            </span>
            <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#0D3829]">
              How Your Donations Grow in Real Communities
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 font-medium">
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
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
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
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
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

        {/* =========================================================================
            8. 501(c)(3) INSTITUTIONAL TRUST & LEGAL ASSURANCE NOTICE
           ========================================================================= */}
        <section className="p-8 sm:p-10 rounded-4xl bg-white border-2 border-[#DDA15E]/40 max-w-4xl mx-auto shadow-sm text-center leading-relaxed">
          <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-[#0D3829] flex items-center justify-center mx-auto mb-4 border border-emerald-300">
            <ShieldCheck className="w-8 h-8 text-[#2B6E4F]" />
          </div>

          <h4 className="font-heading font-black text-xl text-[#0D3829] mb-2">
            IRS 501(c)(3) Non-Profit Public Charity Guarantee
          </h4>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            FarmerCindy, Inc. is an official non-profit public charity organized under Section 501(c)(3) of the U.S. Internal Revenue Code. All charitable contributions, book donations, and recurring gifts are tax-deductible to the fullest extent permitted by law.
          </p>

          <div className="mt-6 pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-bold text-slate-600">
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="text-[#0D3829] font-black uppercase">Instant Tax Receipts</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Automated IRS acknowledgment letter sent upon contribution</div>
            </div>
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
              <div className="text-[#0D3829] font-black uppercase">GuideStar Transparency</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Committed to highest non-profit financial transparency</div>
            </div>
            <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200">
              <div className="text-[#0D3829] font-black uppercase">Employer Match Ready</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Eligible for corporate matching via Benevity &amp; CyberGrants</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
