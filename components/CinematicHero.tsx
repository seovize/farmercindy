"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Heart, BookOpen, Sprout, ArrowRight, Film, CheckCircle2 } from "lucide-react";

export function CinematicHero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#08241A] text-white">
      {/* =========================================================================
          1. AUTHENTIC DOCUMENTARY PHOTOGRAPHY BACKGROUND (Farmland.org Standard)
         ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/regenerative_farm_sunrise.jpg"
          alt="African American community farmers joyfully harvesting organic strawberries and kale at sunrise"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center filter brightness-90"
        />

        {/* High-Contrast Editorial Vignette (WCAG AAA Compliance) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08241A] via-[#0D3829]/80 to-[#08241A]/85 backdrop-blur-[0.5px]" />
      </div>

      {/* =========================================================================
          2. MAIN EDITORIAL HERO CONTENT
         ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Authoritative 501(c)(3) Federal Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/85 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-black uppercase tracking-wider backdrop-blur-md shadow-lg mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>FarmerCindy, Inc. • Registered 501(c)(3) Non-Profit Public Charity</span>
        </div>

        {/* Master Headline (Literary & Environmental Authority) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-md">
          Cultivating Healthy Minds &amp; Nourishing Generations Through{" "}
          <span className="text-[#DDA15E]">Living Soil</span>
        </h1>

        {/* Mission Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-emerald-100/90 font-medium leading-relaxed max-w-2xl drop-shadow">
          Meet <strong>Farmer Cindy</strong>—author, urban agriculturist, and non-profit founder. We inspire youth across America to embrace heirloom gardening, natural nutrition, and environmental stewardship through children's picture books and Title I classroom garden kits.
        </p>

        {/* Triple Call-to-Action Row (High CRO) */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/donate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c58b43] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider border border-amber-400"
          >
            <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Make a 501(c)(3) Donation</span>
          </Link>

          <Link
            href="/books"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-white bg-emerald-900/80 hover:bg-emerald-850 border-2 border-emerald-400/50 backdrop-blur-md shadow-lg hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
          >
            <BookOpen className="w-4 h-4 text-[#DDA15E]" />
            <span>Order Books on Amazon</span>
          </Link>

          <Link
            href="/theater"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-bold text-emerald-200 bg-black/40 hover:bg-black/60 border border-emerald-500/30 backdrop-blur-md transition text-xs sm:text-sm uppercase tracking-wider"
          >
            <Film className="w-4 h-4 text-[#DDA15E]" />
            <span>Watch Cartoon Theater</span>
          </Link>
        </div>

        {/* Institutional Trust Bar (American Farmland Trust / Kiss The Ground Standard) */}
        <div className="mt-14 pt-8 border-t border-emerald-500/20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm font-bold text-emerald-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#DDA15E]" />
            <span>Official 501(c)(3) Non-Profit Public Charity</span>
          </div>
          <span className="hidden sm:inline text-emerald-600">•</span>
          <div className="flex items-center gap-2">
            <Sprout className="w-4 h-4 text-[#DDA15E]" />
            <span>Organic Heirloom Seeds for Title I Classrooms</span>
          </div>
          <span className="hidden sm:inline text-emerald-600">•</span>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#DDA15E]" />
            <span>100% of Royalties Dedicated to Youth Farming</span>
          </div>
        </div>
      </div>
    </section>
  );
}
