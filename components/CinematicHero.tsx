"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Heart, BookOpen, Volume2, VolumeX, Sparkles, Sprout, ArrowRight, Play } from "lucide-react";

export function CinematicHero() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#08241A] text-white">
      {/* =========================================================================
          AMBIENT AUTOPLAYING BACKGROUND VIDEO LAYER (Kiss The Ground Benchmark)
         ========================================================================= */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster="/images/generated/regenerative_farm_sunrise.jpg"
          className="w-full h-full object-cover object-center scale-105 filter brightness-95"
        >
          <source src="/videos/cindy_farm_reel_2.mp4" type="video/mp4" />
          <source src="/videos/cindy_farm_reel_1.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Vignette Overlay (Rich Pine Green Gradient for WCAG AAA Contrast) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08241A] via-[#0D3829]/75 to-[#08241A]/85 backdrop-blur-[1px]" />
      </div>

      {/* Floating Sound Toggle */}
      <button
        type="button"
        onClick={toggleSound}
        aria-label={isMuted ? "Unmute farm audio" : "Mute farm audio"}
        className="absolute top-24 right-6 sm:top-28 sm:right-10 z-20 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/60 hover:bg-black/80 text-emerald-200 border border-emerald-500/30 backdrop-blur-md text-xs font-bold transition shadow-lg"
      >
        {isMuted ? (
          <>
            <VolumeX className="w-4 h-4 text-emerald-300" />
            <span className="hidden sm:inline">Sound Off</span>
          </>
        ) : (
          <>
            <Volume2 className="w-4 h-4 text-[#DDA15E]" />
            <span className="hidden sm:inline">Sound On</span>
          </>
        )}
      </button>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Authoritative 501(c)(3) Federal Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm font-black uppercase tracking-wider backdrop-blur-md shadow-lg mb-6">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>FarmerCindy, Inc. • Registered 501(c)(3) Non-Profit Organization</span>
        </div>

        {/* Master Headline (Literary & Environmental Authority) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white tracking-tight leading-[1.1] max-w-4xl drop-shadow-md">
          Cultivating Healthy Minds &amp; Nourishing Generations Through{" "}
          <span className="text-[#DDA15E]">Living Soil</span>
        </h1>

        {/* Mission Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-emerald-100/90 font-medium leading-relaxed max-w-2xl drop-shadow">
          Meet <strong>Farmer Cindy</strong>—author, urban agriculturist, and non-profit founder. We inspire youth in underserved communities to embrace heirloom gardening, natural nutrition, and environmental stewardship through storybooks and classroom garden kits.
        </p>

        {/* Dual Primary Call-to-Action Row */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="#donate-section"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-[#1C3127] bg-[#DDA15E] hover:bg-[#c58b43] shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
          >
            <Heart className="w-4 h-4 fill-[#0D3829] text-[#0D3829]" />
            <span>Support Our 501(c)(3) Mission</span>
          </a>

          <Link
            href="/books"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-extrabold text-white bg-emerald-900/70 hover:bg-emerald-800 border-2 border-emerald-400/50 backdrop-blur-md shadow-lg hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider"
          >
            <BookOpen className="w-4 h-4 text-[#DDA15E]" />
            <span>Explore The Adventures</span>
          </Link>
        </div>

        {/* Proof Row (American Farmland Trust / Kiss The Ground Standard) */}
        <div className="mt-14 pt-8 border-t border-emerald-500/20 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-heading font-black text-[#DDA15E]">
              12,500+
            </span>
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-200 mt-1">
              Children Educated
            </span>
            <span className="text-[11px] text-emerald-300/70 mt-0.5">
              Title I schools &amp; community readings
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-heading font-black text-[#DDA15E]">
              100%
            </span>
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-200 mt-1">
              Tax-Deductible
            </span>
            <span className="text-[11px] text-emerald-300/70 mt-0.5">
              Direct public charity funding
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-3xl sm:text-4xl font-heading font-black text-[#DDA15E]">
              48+
            </span>
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-200 mt-1">
              Classroom Gardens
            </span>
            <span className="text-[11px] text-emerald-300/70 mt-0.5">
              Heirloom seeds &amp; raised soil beds
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
