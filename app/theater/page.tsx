import React from "react";
import Link from "next/link";
import { Film, Sparkles, BookOpen, Heart, ShieldCheck, Lightbulb } from "lucide-react";
import { KidSafeVideoPlayer } from "@/components/KidSafeVideoPlayer";
import { FloatingFarmElements } from "@/components/FloatingFarmElements";

export const metadata = {
  title: "Cartoon Video Theater | The Adventures of Farmer Cindy",
  description:
    "Watch animated cartoon trailers, storytime read-alouds, and soil science adventures with Farmer Cindy. Kid-safe, ad-free video player.",
};

export default function TheaterPage() {
  return (
    <div className="relative overflow-hidden paper-pattern py-12 md:py-20">
      <FloatingFarmElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-200 text-amber-950 mb-4 shadow-sm">
            <Film className="w-4 h-4 text-[#E63946]" />
            Storytime Cinema & Cartoons
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#264653] tracking-tight">
            Farmer Cindy <span className="text-[#E63946]">Video Theater</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Gather the family! Enjoy high-energy animated cartoon book trailers, bedtime read-alouds, and fun farm science episodes designed for curious young minds.
          </p>
        </div>

        {/* Video Player Component */}
        <div className="max-w-5xl mx-auto">
          <KidSafeVideoPlayer />
        </div>

        {/* Classroom & Family Discussion Questions */}
        <div className="max-w-4xl mx-auto mt-16 rounded-4xl bg-[#FFF8F0] p-8 md:p-10 border-3 border-amber-200/80 shadow-tactile">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#2A9D8F] text-white flex items-center justify-center font-bold">
              <Lightbulb className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#264653]">
                Storytime Discussion Questions for Parents & Teachers
              </h3>
              <p className="text-xs text-slate-500">
                Encourage reading comprehension and scientific curiosity after watching!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-white border border-amber-200/60 shadow-sm">
              <span className="text-xs font-black text-[#E63946] uppercase">Question 1</span>
              <p className="mt-2 text-sm text-slate-700 font-bold">
                "Why did Farmer Cindy decide she didn't need to move across the world to start her farm?"
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Helps children reflect on resourcefulness and windowsill gardening in apartments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-200/60 shadow-sm">
              <span className="text-xs font-black text-[#2A9D8F] uppercase">Question 2</span>
              <p className="mt-2 text-sm text-slate-700 font-bold">
                "What do honeybees and earthworms do to help strawberries and cherries grow sweet?"
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Introduces basic plant biology, pollination, and soil aeration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-amber-200/60 shadow-sm">
              <span className="text-xs font-black text-[#E9C46A] uppercase text-amber-700">Question 3</span>
              <p className="mt-2 text-sm text-slate-700 font-bold">
                "If you could plant one fruit or vegetable on your balcony today, what would you choose?"
              </p>
              <p className="mt-2 text-xs text-slate-500">
                Sparks excitement for fresh home nutrition and planting real seeds.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA to Books */}
        <div className="mt-14 text-center">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-lg hover:shadow-xl transition active:scale-95"
          >
            <BookOpen className="w-5 h-5" />
            Bring The Stories Home: Order Books on Amazon
          </Link>
        </div>
      </div>
    </div>
  );
}
