import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, ShieldCheck, BookOpen, Users, Sprout, ArrowRight, CheckCircle2, Award, School, Sun, Globe } from "lucide-react";

export const metadata = {
  title: "501(c)(3) Non-Profit Mission | FarmerCindy, Inc.",
  description:
    "Learn how FarmerCindy, Inc. educates children about heirloom farming, fresh nutrition, and grows free food for communities in need. 100% tax-deductible support.",
};

export default function MissionPage() {
  const steps = [
    {
      num: "01",
      title: "You Order A Picture Book",
      desc: "Families, schools, and libraries purchase Volume 1 or Volume 2 on Amazon Prime, Barnes & Noble, or directly on our platform.",
      icon: BookOpen,
      badge: "Direct Purchase",
    },
    {
      num: "02",
      title: "100% Profits Dedicated",
      desc: "All author royalties flow directly into FarmerCindy, Inc., a registered 501(c)(3) public charity.",
      icon: Heart,
      badge: "100% Non-Profit",
    },
    {
      num: "03",
      title: "Heirloom Seed Kits Built",
      desc: "We assemble organic non-GMO heirloom seeds, peat pots, and child-safe botanical journals for classrooms.",
      icon: Sprout,
      badge: "STEM Learning",
    },
    {
      num: "04",
      title: "Free Food is Harvested",
      desc: "Students grow strawberries, sweet cherry tomatoes, and greens to share with their families and food pantries.",
      icon: Sun,
      badge: "Community Health",
    },
  ];

  return (
    <div className="relative overflow-hidden paper-canvas py-12 md:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] border border-emerald-500/30 mb-4 shadow-sm">
            <Heart className="w-4 h-4 fill-current text-[#DDA15E]" />
            <span>FarmerCindy, Inc. • 501(c)(3) Non-Profit</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0D3829] tracking-tight leading-[1.15]">
            Planting Seeds of <span className="text-[#2B6E4F]">Free Food</span> &amp; Living Nutrition
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Every child deserves to experience the wonder of planting an heirloom seed, watching it sprout into food, and tasting real, farm-fresh nutrition grown by their own hands.
          </p>
        </div>

        {/* The Origin Story & Founder's Letter */}
        <section className="rounded-4xl bg-white/95 backdrop-blur-sm p-8 sm:p-12 lg:p-14 border-2 border-[#DDA15E]/30 shadow-tactile mb-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Column: Authentic Cindy Photo with Fresh Greens */}
            <div className="lg:col-span-5 text-center">
              <div className="relative mx-auto max-w-xs aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#DDA15E]/40 group">
                <Image
                  src="/images/farmer_cindy_harvest.jpg"
                  alt="Farmer Cindy Founder with fresh organic greens"
                  fill
                  sizes="(max-width: 1024px) 100vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-center">
                  <span className="text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] px-3 py-1 rounded-full shadow border border-emerald-500/30">
                    Farmer Cindy • Founder &amp; Author
                  </span>
                </div>
              </div>

              <div className="mt-4 p-3 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-slate-600">
                <strong className="text-[#0D3829] block">501(c)(3) Mission Pledge:</strong>
                Zero corporate overhead. Every dollar funds seeds, books, and youth planter kits.
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-7 space-y-4 text-base text-slate-700 leading-relaxed">
              <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-300/60">
                The Origin Story
              </span>

              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#0D3829]">
                Why We Started FarmerCindy, Inc.
              </h2>

              <p>
                In our modern grocery-aisle world, millions of children grow up believing strawberries and sweet cherries simply come from plastic clamshell containers. They have never felt warm, living soil between their fingers or experienced the quiet thrill of seeing a tiny green sprout emerge after days of patient watering.
              </p>

              <blockquote className="my-6 pl-6 border-l-2 border-[#DDA15E] text-slate-800 font-heading text-lg sm:text-xl italic font-bold leading-relaxed">
                "When you teach a child how to grow their own food, you don't just teach a hobby—you grant them lifelong health, self-reliance, and deep respect for the planet."
              </blockquote>

              <p>
                Cindy created <em>The Adventures of Farmer Cindy</em> picture book series not merely to entertain, but to serve as a sustainable fundraising engine for agricultural literacy. <strong>One hundred percent of book royalties</strong> are channeled directly into providing free organic seeds, classroom planters, and literacy kits to Title I elementary schools and underserved communities.
              </p>
            </div>
          </div>
        </section>

        {/* The "Book-to-Seed" Educational Pipeline */}
        <section className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100/80 px-3.5 py-1.5 rounded-full border border-emerald-300/60">
              Sustainable Social Impact
            </span>
            <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#0D3829]">
              The "Book-to-Seed" Educational Engine
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              See how a simple bedtime book purchase turns into real produce grown by young students.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.num}
                  className="relative p-6 rounded-3xl bg-white border-2 border-stone-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black font-heading text-[#DDA15E] tracking-wider">
                        {s.num}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-[#0D3829]">
                        {s.badge}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#0D3829] border border-amber-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 stroke-[2.2]" />
                    </div>

                    <h4 className="font-heading font-black text-lg text-[#0D3829] mb-2 leading-tight">
                      {s.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#2B6E4F] font-bold">
                    <span>Step {idx + 1} of 4</span>
                    <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Direct Donation Invitation (American Farmland Trust / Kiss The Ground Standard) */}
        <section className="my-20 p-8 sm:p-12 lg:p-16 rounded-4xl bg-[#08241A] text-white border-2 border-[#DDA15E]/40 shadow-2xl text-center max-w-4xl mx-auto">
          <div className="w-16 h-16 rounded-3xl bg-[#0D3829] text-[#DDA15E] flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
            <Heart className="w-8 h-8 fill-[#DDA15E]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">
            Support Our 501(c)(3) Agricultural Mission
          </h2>
          <p className="mt-4 text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed">
            Your tax-deductible gift directly funds free windowsill seed kits, raised school garden beds, and author reading assemblies for Title I elementary classrooms.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-[#0D3829] bg-[#DDA15E] hover:bg-[#c58b43] transition shadow-lg text-sm uppercase tracking-wider"
            >
              <span>Explore Giving Tiers &amp; Donate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/books"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-400/40 transition text-sm"
            >
              <BookOpen className="w-4 h-4 text-[#DDA15E]" />
              <span>Order Books (100% Profits Fund Mission)</span>
            </Link>
          </div>
        </section>

        {/* 501(c)(3) Transparency & IRS Confirmation Notice */}
        <section className="p-8 rounded-3xl bg-white/95 border-2 border-[#DDA15E]/30 text-xs text-slate-600 max-w-3xl mx-auto text-center leading-relaxed shadow-sm mt-12">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-[#0D3829] mb-3">
            <ShieldCheck className="w-6 h-6 text-[#2B6E4F]" />
          </div>
          <h4 className="font-heading font-black text-sm text-[#0D3829] uppercase tracking-wide mb-1">
            Official Non-Profit Legal Notice
          </h4>
          <p>
            FarmerCindy, Inc. is an educational public charity recognized under Section 501(c)(3) of the Internal Revenue Code. All contributions are tax-deductible to the fullest extent permitted by U.S. federal and state laws. Electronic donation receipts with our non-profit EIN are automatically delivered upon submission for your tax accounting records.
          </p>
        </section>
      </div>
    </div>
  );
}
