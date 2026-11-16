"use client";

import React from "react";
import { Sprout, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

export function RareSeedsSponsor() {
  return (
    <section
      id="seed-sponsor"
      className="py-16 bg-[#06080A] border-t border-white/10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-gradient-to-br from-[#0B2218] via-[#0F3D6E]/70 to-[#09131C] border-2 border-emerald-400/35 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Baker Creek Heirloom Seeds / RareSeeds.com Brand Lockup */}
            <div className="lg:col-span-5 flex flex-col items-center text-center p-6 sm:p-8 rounded-3xl bg-[#FDFBF7] text-slate-900 shadow-xl border-2 border-emerald-500/40">
              <div className="w-16 h-16 rounded-2xl bg-[#1B4332] text-[#FACC15] flex items-center justify-center shadow-md mb-4">
                <Sprout className="w-9 h-9 stroke-[2.2]" />
              </div>

              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-[#2B6E4F] mb-1">
                Official Heirloom Seed Sponsor
              </span>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#1B4332] tracking-tight">
                RareSeeds.com
              </h3>

              <p className="text-xs sm:text-sm font-extrabold text-[#0F3D6E] mt-1">
                Baker Creek Heirloom Seeds
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-[11px] font-bold text-[#1B4332]">
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300">
                  100% Non-GMO
                </span>
                <span className="px-2.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900">
                  Open-Pollinated
                </span>
                <span className="px-2.5 py-1 rounded-full bg-sky-100 border border-sky-300 text-sky-900">
                  Pure Heirloom
                </span>
              </div>
            </div>

            {/* Right: Partnership Story & Direct Seed Store Link */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>Community Seed Packet Partner</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white leading-tight">
                Grow the Same Heirloom Seeds We Plant on Our Farm
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                Our friends at{" "}
                <strong className="text-[#FACC15]">
                  Baker Creek Heirloom Seeds (RareSeeds.com)
                </strong>{" "}
                are proud supporters of FarmerCindy&apos;s mission, sponsoring
                pure heirloom seed packets for our community. Explore their
                extraordinary catalog of rare, colorful, non-GMO vegetables,
                fruits, and flowers and order directly from them for your own
                garden.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-emerald-300 pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Official Sponsor of FarmerCindy Seed Packets
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Direct Access to Rare Heirloom Varieties
                </span>
              </div>

              <div className="pt-3">
                <a
                  href="https://www.rareseeds.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-black text-black bg-[#FACC15] hover:bg-yellow-300 shadow-xl shadow-yellow-500/20 hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
                >
                  <Sprout className="w-4 h-4 text-[#1B4332]" />
                  <span>Buy Heirloom Seeds at RareSeeds.com</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
