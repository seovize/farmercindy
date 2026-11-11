"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, BookOpen, Sprout, ArrowRight, Play, Sun } from "lucide-react";

export function CinematicHero() {
  return (
    <section className="relative min-h-[75vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#EAF4FA] text-[#173D57]">
      {/* =========================================================================
          1. NATURAL AGRICULTURAL & SKY BACKGROUND (Lighter, Open Atmosphere)
         ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/regenerative_farm_sunrise.jpg"
          alt="Lush heirloom farm with morning sky, vibrant tomatoes, strawberries, and sunbeams"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center filter brightness-95 opacity-85"
        />

        {/* Lighter Sky Blue & Cream Gradient Wash (Replaces Heavy Dark Green Overlay) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EAF4FA]/90 via-[#FAF7F2]/85 to-[#FAF7F2] backdrop-blur-[0.5px]" />
      </div>

      {/* =========================================================================
          2. MAIN NATURE-LED EDITORIAL HERO CONTENT
         ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center flex flex-col items-center">
        {/* Subtle Nature Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#173D57]/15 text-[#173D57] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm mb-6 backdrop-blur-sm">
          <Sprout className="w-4 h-4 text-[#2B6E4F]" />
          <span>Heirloom Farming &amp; Community Nutrition</span>
        </div>

        {/* Master Headline (Short, Direct, Nature-Led) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-[#173D57] tracking-tight leading-[1.1] max-w-3xl">
          Growing food. <br />
          <span className="text-[#2B6E4F]">Sharing abundance.</span>
        </h1>

        {/* Supporting Narrative */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-[#173D57]/85 font-medium leading-relaxed max-w-2xl">
          Explore FarmerCindy's heirloom farming mission and the wholesome stories that help support a community where food is shared for free.
        </p>

        {/* Dual Primary Actions + Direct Watch Link */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
          <Link
            href="/donate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c58b43] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider border border-amber-400"
          >
            <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
            <span>Support the Farm</span>
          </Link>

          <Link
            href="/books"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold text-[#173D57] bg-white hover:bg-slate-50 border-2 border-[#173D57]/20 shadow-sm hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
          >
            <BookOpen className="w-4 h-4 text-[#2B6E4F]" />
            <span>Explore the Books</span>
          </Link>
        </div>

        {/* Direct Link to the Animated Story Film */}
        <div className="mt-6">
          <Link
            href="#story-film"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#173D57] hover:text-[#2B6E4F] transition-colors py-1 px-3 rounded-full hover:bg-white/60"
          >
            <span className="w-6 h-6 rounded-full bg-[#173D57] text-[#DDA15E] flex items-center justify-center shadow-xs">
              <Play className="w-3 h-3 fill-[#DDA15E] translate-x-0.5" />
            </span>
            <span>Watch the Book 1 Cartoon &amp; Giving Story</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#2B6E4F]" />
          </Link>
        </div>

        {/* Grounded Agricultural Pillars */}
        <div className="mt-12 pt-6 border-t border-[#173D57]/15 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm font-semibold text-[#173D57]/80">
          <div className="flex items-center gap-2">
            <Sprout className="w-4 h-4 text-[#2B6E4F]" />
            <span>Organic Heirloom Seeds</span>
          </div>
          <span className="hidden sm:inline text-[#173D57]/30">•</span>
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-[#DDA15E]" />
            <span>Community-Grown Fresh Produce</span>
          </div>
          <span className="hidden sm:inline text-[#173D57]/30">•</span>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#2B6E4F]" />
            <span>Book Sales Support Free Food</span>
          </div>
        </div>
      </div>
    </section>
  );
}
