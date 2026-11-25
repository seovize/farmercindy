"use client";

import React from "react";
import { Sprout, ExternalLink, Award, CheckCircle2 } from "lucide-react";

export function RareSeedsSponsor() {
  return (
    <section
      id="seed-sponsor"
      className="py-16 bg-[#06080A] border-t border-white/10 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl bg-gradient-to-br from-[#0B2218] via-[#0F3D6E]/70 to-[#09131C] border-2 border-emerald-400/35 p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Baker Creek Heirloom Seeds / RareSeeds.com Animated Promo + Brand Lockup */}
            <div className="lg:col-span-5 flex flex-col items-center text-center p-5 sm:p-6 rounded-3xl bg-[#FDFBF7] text-slate-900 shadow-xl border-2 border-emerald-500/40">
              <div className="w-full mb-4 overflow-hidden rounded-2xl shadow-lg border-2 border-emerald-400/50 bg-black">
                <img
                  src="/images/baker_creek_seed_promo.gif"
                  alt="1 Free Baker Creek Heirloom Seed Packet with every FarmerCindy website book order"
                  className="w-full h-auto block"
                  loading="lazy"
                />
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
                <Award className="w-3.5 h-3.5 text-[#FACC15]" />
                <span>Approved Official Sponsor • 1 Free Seed Packet Incentive</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white leading-tight">
                1 Free Baker Creek Heirloom Seed Packet With Every Website Order
              </h2>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                Our friends at{" "}
                <strong className="text-[#FACC15]">
                  Baker Creek Heirloom Seeds (RareSeeds.com)
                </strong>{" "}
                officially sponsor heirloom seed packets for FarmerCindy 🍒🍓! Order
                any book directly on our website to receive{" "}
                <strong className="text-emerald-300">
                  1 FREE Baker Creek seed packet
                </strong>{" "}
                with your order, or visit RareSeeds.com directly to explore and
                buy from their full heirloom seed catalog.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-emerald-300 pt-1">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Official Sponsor of FarmerCindy 🍒🍓 Seed Packets
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
