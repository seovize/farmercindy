import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Star, Sparkles, School, Sprout, Sun, Bug, Heart, CheckCircle2, ArrowRight, Library, Users, Award } from "lucide-react";
import { MultiRetailerRow } from "@/components/MultiRetailerRow";
import { FloatingFarmElements } from "@/components/FloatingFarmElements";
import { BundleOrderBanner } from "@/components/BundleOrderBanner";

export const metadata = {
  title: "The Books | The Adventures of Farmer Cindy Picture Book Series",
  description:
    "Explore Book 1: FarmerCindy Finds a Farm and Book 2: What's Happening to Our Farming Community. Wholesome children's picture books on Amazon, Barnes & Noble, and IngramSpark.",
};

export default function BooksPage() {
  return (
    <div className="relative overflow-hidden paper-canvas py-12 md:py-20">
      <FloatingFarmElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300 shadow-sm mb-4">
            <BookOpen className="w-4 h-4 text-[#E63946]" />
            <span>Official Author Catalog • Volumes 1 & 2</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#264653] tracking-tight leading-[1.15]">
            Stories of <span className="text-[#E63946]">Soil</span>, <span className="text-[#2A9D8F]">Seeds</span> & <span className="text-[#E9C46A]">Sunshine</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Richly illustrated, character-driven picture books created to spark bedtime smiles, classroom circle times, and budding little windowsill gardeners (Ages 3–9).
          </p>
        </div>

        {/* =========================================================================
            BOOK 1 EDITORIAL SPREAD: FARMERCINDY FINDS A FARM
            Theme: Warm Sunlight, Heirloom Seeds & Urban Apartment Gardening
           ========================================================================= */}
        <section className="relative mb-24 md:mb-32">
          {/* Subtle Organic Background Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-100/50 via-red-50/30 to-amber-50/40 rounded-4xl -z-10 blur-xl opacity-70" />

          <div className="bg-white/90 backdrop-blur-sm rounded-4xl p-6 sm:p-10 lg:p-14 border-2 border-amber-200/90 shadow-tactile">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: 3D Hardcover Physical Book Showcase */}
              <div className="lg:col-span-5 text-center">
                <div className="relative mx-auto max-w-xs sm:max-w-sm">
                  {/* Perspective Book Shadow */}
                  <div className="absolute -bottom-6 inset-x-4 h-8 bg-amber-950/20 rounded-full blur-xl transform scale-95" />

                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-storybook border-4 border-white bg-slate-900 group">
                    <Image
                      src="/images/book1_cover.jpg"
                      alt="The Adventures of FarmerCindy: FarmerCindy Finds a Farm Cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      priority
                    />
                    {/* Realistic Hardcover Spine & Emboss Sheen */}
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/60 via-white/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-amber-300 border border-amber-400/30">
                        Volume 1
                      </span>
                      <span className="bg-[#E63946] text-white px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow">
                        Ages 3–9
                      </span>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-white">
                      <span className="text-xs font-bold drop-shadow-md">76 Full-Color Pages</span>
                      <span className="text-xs font-black bg-[#FF9900] text-slate-950 px-2.5 py-0.5 rounded shadow">
                        Amazon Prime
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hardcover Specification Metadata */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-600">
                  <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full">8.5" × 8.5" Premium Color</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">ISBN: 979-8893082784</span>
                  <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified ASIN: B0HL5F734J
                  </span>
                </div>
              </div>

              {/* Right Column: Narrative Storytelling & Conversion Logic */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="bg-amber-500/10 text-amber-900 border border-amber-300 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    Series Debut
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Pre-K to 3rd Grade Elementary Curriculum
                  </span>
                  <div className="flex items-center text-[#FF9900] ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#264653] tracking-tight leading-[1.15]">
                  The Adventures of FarmerCindy: <br />
                  <span className="text-[#E63946]">FarmerCindy Finds a Farm</span>
                </h2>

                {/* Author Excerpt Pull-Quote (Anti-Slop Editorial Touch) */}
                <div className="my-5 p-4 rounded-2xl bg-amber-50 border-l-4 border-[#E63946] text-slate-700 italic font-medium text-sm sm:text-base leading-relaxed">
                  "Desperate to find the perfect fertile soil to plant her rare heirloom seeds, Cindy traveled across the world visiting rolling valleys. In a heartwarming surprise, she discovered you don't need a hundred acres to grow an organic farm—you can build one right on your apartment windowsill!"
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  A joyous, empowering story that demystifies where fresh food comes from. Children discover that with a sunny window ledge, recycled containers, and living seeds, anyone can become a farmer.
                </p>

                {/* Thematic Story Pillars (Replaced SaaS Checklists with Wholesome Badges) */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                    <div className="w-8 h-8 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Sun className="w-4 h-4 text-[#E63946]" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#264653] uppercase tracking-wide">Urban Gardening</div>
                      <div className="text-xs text-slate-600 mt-0.5">How windowsill sunlight & patience turn tiny seeds into fresh strawberries.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <div className="w-8 h-8 rounded-xl bg-emerald-200 text-emerald-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Sprout className="w-4 h-4 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#264653] uppercase tracking-wide">Heirloom Seed Science</div>
                      <div className="text-xs text-slate-600 mt-0.5">STEM plant anatomy: roots, sprouts, and protecting botanical heritage.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-red-50/70 border border-red-200/80">
                    <div className="w-8 h-8 rounded-xl bg-red-200 text-red-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Heart className="w-4 h-4 text-[#E63946]" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#264653] uppercase tracking-wide">Family Nutrition</div>
                      <div className="text-xs text-slate-600 mt-0.5">Encourages kids to choose vibrant fruits and vegetables over processed snacks.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-teal-50/70 border border-teal-200/80">
                    <div className="w-8 h-8 rounded-xl bg-teal-200 text-teal-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-4 h-4 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#264653] uppercase tracking-wide">501(c)(3) Giving</div>
                      <div className="text-xs text-slate-600 mt-0.5">100% of author proceeds fund youth gardening kits in Title I schools.</div>
                    </div>
                  </div>
                </div>

                {/* Refined High-Converting Multi-Retailer Row */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <MultiRetailerRow
                    asin="B0HL5F734J"
                    bookTitle="The Adventures of FarmerCindy: FarmerCindy Finds a Farm"
                    price="$14.99"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            EDITORIAL INTERMISSION / STORY PROGRESSION CALLOUT
           ========================================================================= */}
        <div className="my-16 md:my-20 text-center max-w-3xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2A9D8F]" />
            <span>The Journey Expands</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#264653]">
            From Windowsill Sprouts to Protecting Our Shared Planet
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Once Cindy proved that food could grow anywhere, she faced a bigger question: what happens when open farm fields begin to disappear?
          </p>
        </div>

        {/* 2-Book Bundle Quick-Order Banner */}
        <BundleOrderBanner />

        {/* =========================================================================
            BOOK 2 EDITORIAL SPREAD: WHAT'S HAPPENING TO OUR FARMING COMMUNITY?
            Theme: Living Soil, Pollinator Guardians & Community Preservation
           ========================================================================= */}
        <section className="relative mb-24 md:mb-32">
          {/* Subtle Organic Meadow Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-emerald-100/50 via-teal-50/40 to-amber-50/30 rounded-4xl -z-10 blur-xl opacity-70" />

          <div className="bg-white/90 backdrop-blur-sm rounded-4xl p-6 sm:p-10 lg:p-14 border-2 border-emerald-200/90 shadow-tactile">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Desktop Left / Mobile Bottom: Narrative Content */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="bg-emerald-500/10 text-emerald-900 border border-emerald-300 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full">
                    Series Sequel • Volume 2
                  </span>
                  <span className="text-xs font-bold text-slate-500">
                    Illustrated by Sanii Arts
                  </span>
                  <div className="flex items-center text-[#FF9900] ml-auto">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#264653] tracking-tight leading-[1.15]">
                  The Adventures of FarmerCindy: <br />
                  <span className="text-[#2A9D8F]">What's Happening to Our Farming Community?</span>
                </h2>

                {/* Author Excerpt Pull-Quote */}
                <div className="my-5 p-4 rounded-2xl bg-emerald-50 border-l-4 border-[#2A9D8F] text-slate-700 italic font-medium text-sm sm:text-base leading-relaxed">
                  "When concrete begins replacing open green spaces, Cindy rallies friendly honeybees, hardworking earthworms, and local families to show why family farms are the living heartbeat of our food supply."
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  An eye-opening, hope-filled sequel addressing modern agricultural changes in a gentle, age-appropriate way. It teaches children civic awareness, teamwork, and the vital role pollinators play in everyday fruit and vegetables.
                </p>

                {/* Thematic Story Pillars */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                    <div className="w-8 h-8 rounded-xl bg-emerald-200 text-emerald-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Bug className="w-4 h-4 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#264653] uppercase tracking-wide">Pollinator Protection</div>
                      <div className="text-xs text-slate-600 mt-0.5">Why honeybees, bumblebees, and butterflies are required for 1-in-3 bites of food.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-amber-50/70 border border-amber-200/80">
                    <div className="w-8 h-8 rounded-xl bg-amber-200 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Sprout className="w-4 h-4 text-amber-800" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#264653] uppercase tracking-wide">Living Soil Ecology</div>
                      <div className="text-xs text-slate-600 mt-0.5">How subterranean earthworms aerate soil and deliver nutrients to strawberry roots.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-teal-50/70 border border-teal-200/80">
                    <div className="w-8 h-8 rounded-xl bg-teal-200 text-teal-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-4 h-4 text-[#2A9D8F]" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#264653] uppercase tracking-wide">Community Action</div>
                      <div className="text-xs text-slate-600 mt-0.5">Rallying neighbors, teachers, and townspeople to protect agricultural heritage.</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-2xl bg-red-50/70 border border-red-200/80">
                    <div className="w-8 h-8 rounded-xl bg-red-200 text-red-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Heart className="w-4 h-4 text-[#E63946]" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-[#264653] uppercase tracking-wide">Non-Profit Impact</div>
                      <div className="text-xs text-slate-600 mt-0.5">Funds school garden plots and free produce distribution boxes for children.</div>
                    </div>
                  </div>
                </div>

                {/* Refined Multi-Retailer Row */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <MultiRetailerRow
                    asin="B0HL53WTS8"
                    bookTitle="The Adventures of FarmerCindy: What's Happening to Our Farming Community?"
                    price="$14.99"
                  />
                </div>
              </div>

              {/* Desktop Right / Mobile Top: Physical Book Showcase */}
              <div className="lg:col-span-5 text-center order-1 lg:order-2">
                <div className="relative mx-auto max-w-xs sm:max-w-sm">
                  {/* Perspective Book Shadow */}
                  <div className="absolute -bottom-6 inset-x-4 h-8 bg-emerald-950/20 rounded-full blur-xl transform scale-95" />

                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-storybook border-4 border-white bg-slate-900 group">
                    <Image
                      src="/images/book2_cover.jpg"
                      alt="The Adventures of FarmerCindy: What's Happening to Our Farming Community? Cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 420px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Realistic Hardcover Spine & Emboss Sheen */}
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/60 via-white/20 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent pointer-events-none" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                      <span className="bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider text-emerald-300 border border-emerald-400/30">
                        Volume 2
                      </span>
                      <span className="bg-[#2A9D8F] text-white px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider shadow">
                        Community & Nature
                      </span>
                    </div>

                    {/* Bottom Metadata */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-white">
                      <span className="text-xs font-bold drop-shadow-md">76 Full-Color Pages</span>
                      <span className="text-xs font-black bg-[#2A9D8F] text-white px-2.5 py-0.5 rounded shadow">
                        Series Sequel
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hardcover Specification Metadata */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-slate-600">
                  <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full">8.5" × 8.5" Premium Color</span>
                  <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full">Newman Springs Publishing</span>
                  <span className="bg-emerald-100 text-emerald-900 px-3 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Verified ASIN: B0HL53WTS8
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            INSTITUTIONAL, SCHOOL & LIBRARY BULK ORDER CENTER
            Replaced B2B Corporate Dark Box with Warm Editorial Educational Hub
           ========================================================================= */}
        <section className="relative rounded-4xl bg-gradient-to-br from-[#1B4332] via-[#264653] to-[#1E293B] text-white p-8 sm:p-12 lg:p-14 shadow-2xl overflow-hidden">
          {/* Subtle Ambient Decorative Circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider mb-5 shadow-sm">
              <Library className="w-4 h-4 text-slate-950" />
              <span>For Public School Districts, Title I & Libraries</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-heading font-black tracking-tight text-white">
              Classroom Sets, Author Visits & Tax-Exempt Purchasing
            </h3>

            <p className="mt-4 text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl mx-auto">
              All Farmer Cindy picture books are registered with <strong>IngramSpark Wholesale</strong>, allowing public schools, homeschool co-ops, and municipal libraries to place tax-exempt bulk orders using official purchase orders (PO).
            </p>

            {/* Feature Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-3xl mx-auto">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="text-amber-300 font-black text-sm uppercase">Institutional PO</div>
                <div className="text-xs text-emerald-100 mt-1">Accepts standard district purchase orders with NET-30 terms through Ingram.</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="text-amber-300 font-black text-sm uppercase">Free Sample Copy</div>
                <div className="text-xs text-emerald-100 mt-1">Verified educators can request a free physical review copy for curriculum review.</div>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                <div className="text-amber-300 font-black text-sm uppercase">Author Assemblies</div>
                <div className="text-xs text-emerald-100 mt-1">Virtual Zoom read-alouds or in-person elementary storytime sessions.</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-slate-950 bg-[#E9C46A] hover:bg-[#dfb758] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition active:translate-y-0"
              >
                <School className="w-5 h-5 text-slate-950" />
                <span>Request Free Educator Review Copy & Visit</span>
              </Link>

              <a
                href="https://www.ingramcontent.com/retailers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Wholesale Ordering via IngramSpark</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
