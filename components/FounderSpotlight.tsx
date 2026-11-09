"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, BookOpen, Heart, Award, Sprout, CheckCircle2 } from "lucide-react";

export function FounderSpotlight() {
  return (
    <section className="py-20 bg-white border-t-2 border-[#3B2314]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Photography Grid */}
          <div className="lg:col-span-5 relative">
            {/* Primary Portrait Card */}
            <div className="relative aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#0D3829] bg-[#08241A]">
              <Image
                src="/images/farmer_cindy_author_portrait.jpg"
                alt="Farmer Cindy Official Portrait - Author & 501(c)(3) Founder"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider font-black text-[#DDA15E] block">
                  Author &amp; Agrarian Founder
                </span>
                <span className="text-xl font-heading font-black">
                  Farmer Cindy
                </span>
              </div>
            </div>

            {/* Overlapping Harvest Photo Badge */}
            <div className="hidden sm:block absolute -bottom-8 -right-4 w-44 h-56 rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <Image
                src="/images/farmer_cindy_harvest.jpg"
                alt="Farmer Cindy Harvesting Fresh Crops"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>

            {/* Living Soil Close-up Card */}
            <div className="hidden sm:block absolute -top-6 -left-4 w-36 h-36 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-900 transform -rotate-3">
              <Image
                src="/images/generated/fertile_soil_hands.jpg"
                alt="Hands holding rich living soil"
                fill
                sizes="150px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Column: Founder Authority & Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-[#0D3829] border border-emerald-300 mb-4 shadow-sm">
              <Sprout className="w-3.5 h-3.5 text-[#2B6E4F]" />
              <span>Founder Story &amp; Agricultural Mission</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#0D3829] tracking-tight leading-[1.15]">
              Rooted in Community: <br />
              <span className="text-[#DDA15E]">Meet Farmer Cindy</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#3B2314]/90 font-medium leading-relaxed">
              Farmer Cindy is an African American children's author, urban horticulturist, and the visionary founder of <strong>FarmerCindy, Inc. 501(c)(3)</strong>. Her journey began on a simple apartment windowsill, proving that you do not need hundreds of rural acres to grow wholesome, organic food and reconnect with the land.
            </p>

            <blockquote className="my-6 pl-5 border-l-4 border-[#DDA15E] text-base sm:text-lg italic font-heading font-bold text-[#0D3829] leading-snug">
              "When a child plants a tiny seed in living soil, watches it sprout into sweet strawberries, and harvests it with their own hands—their entire relationship with food and health changes forever."
            </blockquote>

            <p className="text-sm sm:text-base text-[#3B2314]/80 leading-relaxed font-normal">
              Through her beautifully illustrated picture books, *FarmerCindy Finds a Farm* and *What's Happening to Our Farming Community?*, Cindy educates young minds on seed saving, soil ecology, and pollinator preservation. All book proceeds and donations directly fund free windowsill seed kits and raised garden beds for Title I public elementary schools.
            </p>

            {/* Strategic Proof Points */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#3B2314]/15 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B6E4F] shrink-0 mt-0.5" />
                <div className="text-xs text-[#0D3829]">
                  <strong className="block font-black text-sm mb-0.5">Author Representation:</strong>
                  Inspiring children of all backgrounds with a proud Black agrarian role model.
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#3B2314]/15 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2B6E4F] shrink-0 mt-0.5" />
                <div className="text-xs text-[#0D3829]">
                  <strong className="block font-black text-sm mb-0.5">Title I School Visits:</strong>
                  Hands-on agricultural assemblies and free book donations for urban youth.
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0D3829] hover:bg-[#164E3D] text-white font-extrabold text-sm shadow transition"
              >
                <span>Read Cindy's Full Story</span>
                <BookOpen className="w-4 h-4 text-[#DDA15E]" />
              </Link>

              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#DDA15E] hover:bg-[#c58b43] text-slate-950 font-black text-sm transition shadow-md"
              >
                <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Make a Tax-Deductible Donation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
