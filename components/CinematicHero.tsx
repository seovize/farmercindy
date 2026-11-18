"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, BookOpen, Sprout, ArrowRight, Play, Sun } from "lucide-react";
import { FarmerCindyBrand } from "@/components/FarmerCindyBrand";

export function CinematicHero() {
  return (
    <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#06080A] text-white">
      {/* =========================================================================
          1. 2026 DUAL-ASPECT LIVE AUTO-PLAYING HERO VIDEO (16:9 Desktop / 9:16 Mobile)
         ========================================================================= */}
      <div className="absolute inset-0 z-0">
        {/* Static High-Res Poster / Reduced-Motion Fallback */}
        <Image
          src="/images/generated/black_farmers_community_sunrise.jpg"
          alt="Heirloom community farmers tending organic raised beds at golden sunrise"
          fill
          priority
          sizes="100vw"
          quality={90}
          className="object-cover object-center opacity-85"
        />

        {/* Desktop & Landscape (16:9 Native Widescreen Community Farm Film) */}
        <video
          src="/videos/hero_community_farm_16x9.mp4"
          poster="/images/generated/black_farmers_community_sunrise.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="hidden md:block motion-reduce:hidden absolute inset-0 w-full h-full object-cover object-center opacity-90"
        />

        {/* Mobile Portrait (9:16 Native Vertical Farm Reel) */}
        <video
          src="/videos/cindy_farm_reel_2.mp4"
          poster="/images/generated/vibrant_produce_black_hero.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="block md:hidden motion-reduce:hidden absolute inset-0 w-full h-full object-cover object-center opacity-85"
        />

        {/* Subtle Dark Gradient Scrim for WCAG AAA Typography Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-[#06080A]" />
        <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/80" />
      </div>

      {/* =========================================================================
          2. MAIN DRAMATIC EDITORIAL HERO CONTENT
         ========================================================================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Book-Blue & Community Farming Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#0F3D6E]/90 border border-sky-400/40 text-sky-200 text-xs sm:text-sm font-black tracking-wide shadow-lg mb-6 backdrop-blur-md">
          <Sprout className="w-4 h-4 text-emerald-400 shrink-0" />
          <FarmerCindyBrand iconSize="sm" className="text-base sm:text-lg" />
          <span className="uppercase tracking-wider">• Heirloom Farming Community</span>
        </div>

        {/* Master Headline (Community Farming & Books Funding 501(c)(3)) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white tracking-tight leading-[1.08] max-w-3xl drop-shadow-2xl">
          Heirloom Farming. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#FACC15] to-sky-400">
            Community &amp; Stories.
          </span>
        </h1>

        {/* Supporting Narrative (Honest 501(c)(3) Positioning) */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-200 font-medium leading-relaxed max-w-2xl drop-shadow-md">
          Official home of FarmerCindy&apos;s picture books and animated stories—raising funding to build our 501(c)(3) heirloom farming community.
        </p>

        {/* Dual Primary Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/donate"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-white bg-[#E11D48] hover:bg-[#F43F5E] shadow-xl shadow-rose-500/30 hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider border border-rose-400/50"
          >
            <Heart className="w-4 h-4 fill-white text-white" />
            <span>Support the Farm</span>
          </Link>

          <Link
            href="/books"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-white bg-[#1E5AA8] hover:bg-[#2563EB] border border-sky-400/50 shadow-xl shadow-sky-500/25 hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
          >
            <BookOpen className="w-4 h-4 text-[#FACC15]" />
            <span>Explore the Books</span>
          </Link>
        </div>

        {/* Direct Auto-Play Story Film Link */}
        <div className="mt-7">
          <Link
            href="#video-theater"
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-black text-white hover:text-[#FACC15] transition-colors py-2 px-4 rounded-full bg-black/65 hover:bg-black/85 border border-white/20 backdrop-blur-md shadow-lg"
          >
            <span className="w-6 h-6 rounded-full bg-[#FACC15] text-black flex items-center justify-center shadow-xs">
              <Play className="w-3 h-3 fill-black translate-x-0.5" />
            </span>
            <span>Watch FarmerCindy's Animated Cartoons</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </Link>
        </div>

        {/* Grounded Agricultural Pillars */}
        <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm font-bold text-slate-200">
          <div className="flex items-center gap-2">
            <Sprout className="w-4 h-4 text-emerald-400" />
            <span>Organic Heirloom Seeds</span>
          </div>
          <span className="hidden sm:inline text-white/25">•</span>
          <div className="flex items-center gap-2">
            <Sun className="w-4 h-4 text-[#FACC15]" />
            <span>Vibrant Living Produce</span>
          </div>
          <span className="hidden sm:inline text-white/25">•</span>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>Books Fund Our 501(c)(3) Mission</span>
          </div>
        </div>
      </div>
    </section>
  );
}
