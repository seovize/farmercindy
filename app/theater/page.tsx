import React from "react";
import Link from "next/link";
import { Film, BookOpen, Heart, ShieldCheck, Lightbulb, Download, ArrowRight } from "lucide-react";
import { KidSafeVideoPlayer } from "@/components/KidSafeVideoPlayer";

export const metadata = {
  title: "Cartoon Video Theater | The Adventures of FarmerCindy",
  description:
    "Watch animated cartoon stories and heirloom soil adventures with FarmerCindy. Kid-safe, ad-free full-width cinema.",
};

export default function TheaterPage() {
  const farmLessons = [
    {
      num: "01",
      title: "Community Solidarity & The Giving Climax",
      description: "At the end of Book 1, neighbors arrive with wheelbarrows, tools, and the Community Farm Fund check to clear pastures and build the farm together.",
      theme: "Book 1 Climax",
      badgeColor: "bg-[#173D57] text-[#DDA15E]",
    },
    {
      num: "02",
      title: "Living Soil & Heirloom Seeds",
      description: "Cultivating non-GMO heritage varieties in rich living compost creates nutrient-dense produce that protects children and family health naturally.",
      theme: "Botanical Stewardship",
      badgeColor: "bg-emerald-100 text-[#173D57]",
    },
    {
      num: "03",
      title: "Growing Food to Feed People for Free",
      description: "The heartbeat of FarmerCindy, Inc. is simple: an heirloom farming community dedicated to growing wholesome food and sharing the harvest with neighbors.",
      theme: "Community Harvest",
      badgeColor: "bg-amber-100 text-amber-950",
    },
    {
      num: "04",
      title: "Books & Merchandise Funding the Land",
      description: "Every copy of Book 1 and Book 2 ordered directly purchases organic seeds, cedar planter beds, and tools to expand community food gardens.",
      theme: "501(c)(3) Mission",
      badgeColor: "bg-[#DDA15E] text-slate-950",
    },
  ];

  return (
    <div className="relative overflow-hidden paper-canvas py-12 md:py-20 bg-[#06080A] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0F3D6E] text-[#FACC15] border border-sky-400/30 mb-4 shadow-sm">
            <Film className="w-4 h-4 text-[#FACC15]" />
            <span>Official Animated Shorts &amp; Story Films</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-white tracking-tight leading-[1.15]">
            FarmerCindy <span className="text-emerald-400">Video Theater</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
            Watch FarmerCindy's official animated cartoon stories! See how community solidarity, heirloom farming, and sharing fresh food bring neighbors together from a single seed to a thriving community farm.
          </p>
        </div>

        {/* Video Player Component */}
        <div className="max-w-5xl mx-auto" id="watch">
          <KidSafeVideoPlayer />
        </div>

        {/* Community Agricultural Lessons Section */}
        <section className="max-w-5xl mx-auto mt-16 md:mt-20 rounded-4xl bg-[#0D131C] p-6 sm:p-10 lg:p-12 border border-sky-400/25 shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#0F3D6E] text-[#FACC15] flex items-center justify-center font-bold shadow shrink-0 border border-sky-400/30">
              <Lightbulb className="w-6 h-6 text-[#FACC15]" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                The Community Farming Lessons Behind the Animated Stories
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Explore the real-world values depicted across Book 1 &amp; Book 2 animated films.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {farmLessons.map((item) => (
              <div
                key={item.num}
                className="p-6 rounded-3xl bg-[#06080A] border border-white/15 shadow-sm hover:border-sky-400/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-heading text-[#FACC15]">
                      {item.num}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${item.badgeColor}`}>
                      {item.theme}
                    </span>
                  </div>

                  <h4 className="text-base font-extrabold text-white leading-snug mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Activity Kit & 501(c)(3) Giving Cross-Promotions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#06080A] border border-sky-400/25 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-xs font-black uppercase tracking-wider text-emerald-400">
                  Free Companion Activity Guide
                </div>
                <div className="text-xs text-slate-300 mt-0.5">
                  Download the 12-page Strawberry Sprout &amp; Seed Journal for fun family coloring sheets!
                </div>
              </div>
              <Link
                href="/#activity-kit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-black bg-[#FACC15] hover:bg-yellow-300 shadow transition shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get Free PDF Kit</span>
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0F3D6E] to-[#1E5AA8] text-white border border-sky-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-xs font-black uppercase tracking-wider text-[#FACC15]">
                  As Seen In Video Climax: Community Giving
                </div>
                <div className="text-xs text-sky-100/90 mt-0.5">
                  Just like neighbors gave to build the farm, your tax-deductible gift empowers real community food gardens!
                </div>
              </div>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-white bg-[#E11D48] hover:bg-[#F43F5E] shadow transition shrink-0"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Support the Farm</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom CTA to Books */}
        <div className="mt-14 text-center">
          <Link
            href="/books"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition active:translate-y-0"
          >
            <BookOpen className="w-5 h-5" />
            <span>Bring The Stories Home: Order Books on Amazon Prime</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
