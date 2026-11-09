import React from "react";
import Link from "next/link";
import { Film, BookOpen, Heart, ShieldCheck, Lightbulb, Download, ArrowRight } from "lucide-react";
import { KidSafeVideoPlayer } from "@/components/KidSafeVideoPlayer";

export const metadata = {
  title: "Cartoon Video Theater | The Adventures of Farmer Cindy",
  description:
    "Watch animated cartoon trailers, storytime read-alouds, and soil science adventures with Farmer Cindy. Kid-safe, ad-free video player.",
};

export default function TheaterPage() {
  const discussionQuestions = [
    {
      num: "01",
      question: "Why did Farmer Cindy decide she didn't need to move across the world to start her farm?",
      teachingTip: "Encourages children to recognize resourcefulness and discover that balcony planters and sunny windowsills can produce real, nutritious food.",
      badge: "Book 1 Theme",
      badgeColor: "bg-[#0D3829] text-[#DDA15E]",
    },
    {
      num: "02",
      question: "What do friendly honeybees and earthworms do to help strawberries and cherries grow sweet?",
      teachingTip: "Introduces foundational botanical science: floral pollination, soil aeration, and how living ecosystems protect our food supply.",
      badge: "Book 2 Theme",
      badgeColor: "bg-emerald-100 text-[#0D3829]",
    },
    {
      num: "03",
      question: "If you could plant one fruit or heirloom vegetable in your room today, what would you choose?",
      teachingTip: "Sparks excitement for fresh fruits and vegetables over processed snacks, inspiring young minds to start their own seed journal.",
      badge: "Family Action",
      badgeColor: "bg-amber-100 text-amber-900",
    },
    {
      num: "04",
      question: "How did neighbors help Farmer Cindy build her farm at the end of the animated cartoon?",
      teachingTip: "Highlights the value of community giving and teamwork, connecting directly to Cindy's 501(c)(3) school garden programs.",
      badge: "Community Giving",
      badgeColor: "bg-[#DDA15E] text-slate-950",
    },
  ];

  return (
    <div className="relative overflow-hidden paper-canvas py-12 md:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] border border-emerald-500/30 mb-4 shadow-sm">
            <Film className="w-4 h-4 text-[#DDA15E]" />
            <span>Storytime Cinema &amp; STEM Episodes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0D3829] tracking-tight leading-[1.15]">
            Farmer Cindy <span className="text-[#2B6E4F]">Video Theater</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Gather the family! Enjoy high-energy animated cartoon book trailers, read-aloud episodes, and fun farm science discoveries designed for curious growing minds.
          </p>
        </div>

        {/* Video Player Component */}
        <div className="max-w-5xl mx-auto">
          <KidSafeVideoPlayer />
        </div>

        {/* Classroom & Family Discussion Questions */}
        <section className="max-w-5xl mx-auto mt-16 md:mt-20 rounded-4xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F4EFE6] p-6 sm:p-10 lg:p-12 border-2 border-[#DDA15E]/40 shadow-tactile">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#0D3829] text-[#DDA15E] flex items-center justify-center font-bold shadow shrink-0 border border-emerald-500/30">
              <Lightbulb className="w-6 h-6 text-[#DDA15E]" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0D3829]">
                Storytime Discussion Prompts for Parents &amp; Teachers
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Encourage reading comprehension, scientific curiosity, and wholesome food dialogue after watching!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discussionQuestions.map((q) => (
              <div
                key={q.num}
                className="p-6 rounded-3xl bg-white border-2 border-stone-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black font-heading text-[#DDA15E]">
                      {q.num}
                    </span>
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full ${q.badgeColor}`}>
                      {q.badge}
                    </span>
                  </div>

                  <p className="text-sm font-extrabold text-[#0D3829] leading-snug mb-3">
                    "{q.question}"
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
                  <strong className="text-[#2B6E4F] block mb-0.5">Teaching Tip:</strong>
                  {q.teachingTip}
                </div>
              </div>
            ))}
          </div>

          {/* Activity Kit & 501(c)(3) Giving Cross-Promotions */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-amber-50/90 border border-amber-300/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-xs font-black uppercase tracking-wider text-[#0D3829]">
                  Free Companion Activity Sheet
                </div>
                <div className="text-xs text-slate-700 mt-0.5">
                  Download the free 12-page Strawberry Sprout &amp; Seed Journal for printable coloring sheets!
                </div>
              </div>
              <Link
                href="/#activity-kit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow transition shrink-0"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Get Free PDF Kit</span>
              </Link>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D3829] text-white border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-xs font-black uppercase tracking-wider text-[#DDA15E]">
                  As Seen In Video Climax: Community Giving
                </div>
                <div className="text-xs text-emerald-100/90 mt-0.5">
                  Just like neighbors gave to build the farm, your tax-deductible gift empowers Title I student gardens!
                </div>
              </div>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow transition shrink-0"
              >
                <Heart className="w-3.5 h-3.5 fill-slate-950" />
                <span>Donate 501(c)(3)</span>
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
