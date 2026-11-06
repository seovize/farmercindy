import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Star, Sparkles, ShieldCheck, Download, Check, School, Heart } from "lucide-react";
import { MultiRetailerRow } from "@/components/MultiRetailerRow";
import { FloatingFarmElements } from "@/components/FloatingFarmElements";

export const metadata = {
  title: "The Books | The Adventures of Farmer Cindy Picture Book Series",
  description:
    "Explore Book 1: FarmerCindy Finds a Farm and Book 2: What's Happening to Our Farming Community. Order on Amazon, Barnes & Noble, Lulu, and IngramSpark.",
};

export default function BooksPage() {
  return (
    <div className="relative overflow-hidden paper-pattern py-12 md:py-20">
      <FloatingFarmElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-200 text-amber-950 mb-4 shadow-sm">
            <BookOpen className="w-4 h-4 text-[#E63946]" />
            Official Book Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#264653] tracking-tight">
            The Adventures of <span className="text-[#E63946]">Farmer Cindy</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Beautifully illustrated, character-rich children's books designed for bedtime smiles, classroom circle times, and budding little gardeners (Ages 3–9).
          </p>
        </div>

        {/* BOOK 1 DEEP SHOWCASE WITH REAL AMAZON COVER */}
        <div className="rounded-4xl bg-gradient-to-br from-[#FFF8F0] via-[#FDFBF7] to-amber-50/60 p-8 md:p-12 border-3 border-amber-200 shadow-tactile mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Book Cover Column */}
            <div className="lg:col-span-5 text-center">
              <div className="relative mx-auto max-w-xs sm:max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-storybook border-4 border-white bg-slate-900 group">
                <Image
                  src="/images/book1_cover.jpg"
                  alt="The Adventures of FarmerCindy: FarmerCindy Finds a Farm Cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                {/* Book Spine Simulation */}
                <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/50 via-white/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-amber-200 border border-white/20">
                    Volume 1
                  </span>
                  <span className="bg-[#E9C46A] text-slate-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
                    Ages 3–9
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-white">
                  <span className="text-xs font-bold drop-shadow">76 Pages</span>
                  <span className="text-xs font-extrabold bg-[#E63946] px-2.5 py-0.5 rounded-md shadow">
                    Amazon Prime
                  </span>
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2A9D8F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Amazon ASIN: B0HL5F734J</span>
              </div>
            </div>

            {/* Book Details Column */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full">
                  Volume 1
                </span>
                <span className="bg-red-100 text-red-800 text-xs font-extrabold px-3 py-1 rounded-full">
                  Pre-K to 3rd Grade
                </span>
                <div className="flex items-center text-[#E9C46A] ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#264653]">
                The Adventures of FarmerCindy: <br />
                <span className="text-[#E63946]">FarmerCindy Finds a Farm</span>
              </h2>

              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                Join FarmerCindy on an unforgettable journey! Desperate to find the perfect soil to plant her rare heirloom seeds, Cindy travels across the world visiting rolling meadows and distant valleys. In a heartwarming surprise, she realizes that you don’t need hundreds of acres to grow an organic farm—you can build one right on your apartment windowsill and sunny balcony!
              </p>

              {/* What Kids & Parents Learn */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span><strong>Urban & Windowsill Gardening:</strong> Growing food anywhere.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span><strong>Heirloom Seed Preservation:</strong> Real seed biodiversity.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span><strong>Patience & Persistence:</strong> Watching seeds germinate.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span><strong>501(c)(3) Support:</strong> 100% of proceeds fund free food.</span>
                </div>
              </div>

              {/* Multi-Retailer Row */}
              <div className="mt-8 pt-6 border-t border-amber-200/80">
                <MultiRetailerRow
                  asin="B0HL5F734J"
                  bookTitle="The Adventures of FarmerCindy: FarmerCindy Finds a Farm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BOOK 2 DEEP SHOWCASE WITH REAL AMAZON COVER */}
        <div className="rounded-4xl bg-gradient-to-br from-[#FFF8F0] via-[#FDFBF7] to-emerald-50/60 p-8 md:p-12 border-3 border-emerald-200 shadow-tactile mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Book Cover Column */}
            <div className="lg:col-span-5 text-center">
              <div className="relative mx-auto max-w-xs sm:max-w-sm aspect-[3/4] rounded-3xl overflow-hidden shadow-storybook border-4 border-white bg-slate-900 group">
                <Image
                  src="/images/book2_cover.jpg"
                  alt="The Adventures of FarmerCindy: What's Happening to Our Farming Community? Cover"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Book Spine Simulation */}
                <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/50 via-white/20 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-amber-200 border border-white/20">
                    Volume 2
                  </span>
                  <span className="bg-[#E9C46A] text-slate-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow">
                    Ages 3–9
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10 text-white">
                  <span className="text-xs font-bold drop-shadow">76 Pages</span>
                  <span className="text-xs font-extrabold bg-[#2A9D8F] px-2.5 py-0.5 rounded-md shadow">
                    Series Sequel
                  </span>
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold text-[#2A9D8F] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Amazon ASIN: B0HL53WTS8</span>
              </div>
            </div>

            {/* Book Details Column */}
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="bg-emerald-100 text-emerald-900 text-xs font-extrabold px-3 py-1 rounded-full">
                  Volume 2
                </span>
                <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-3 py-1 rounded-full">
                  Community & Pollinators
                </span>
                <div className="flex items-center text-[#E9C46A] ml-auto">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#264653]">
                The Adventures of FarmerCindy: <br />
                <span className="text-[#2A9D8F]">What's Happening to Our Farming Community?</span>
              </h2>

              <p className="mt-4 text-base text-slate-700 leading-relaxed">
                In this eye-opening sequel, FarmerCindy returns to explore what is happening to our local family farms and open green spaces. When development threatens nearby fields, Cindy teams up with friendly pollinators, hardworking earthworms, and local families to teach young readers why community agriculture is vital for our health and planet.
              </p>

              {/* What Kids & Parents Learn */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span><strong>Protecting Pollinators:</strong> Why honeybees and butterflies matter.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span><strong>Soil Regeneration:</strong> How earthworms keep crops alive.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span><strong>Community Teamwork:</strong> Working together for local food.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    ✓
                  </div>
                  <span><strong>Non-Profit Proceeds:</strong> Funds classroom garden beds.</span>
                </div>
              </div>

              {/* Multi-Retailer Row */}
              <div className="mt-8 pt-6 border-t border-emerald-200/80">
                <MultiRetailerRow
                  asin="B0HL53WTS8"
                  bookTitle="The Adventures of FarmerCindy: What's Happening to Our Farming Community?"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Institutional & School Bulk Order Banner */}
        <div className="rounded-3xl bg-[#264653] text-white p-8 md:p-10 text-center max-w-4xl mx-auto shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-black uppercase mb-4">
            <School className="w-4 h-4" />
            For Schools, Public Libraries & Non-Profits
          </div>
          <h3 className="text-2xl sm:text-3xl font-black">
            Classroom Bundles & Tax-Exempt Purchasing
          </h3>
          <p className="mt-3 text-sm text-teal-100 max-w-2xl mx-auto leading-relaxed">
            All Farmer Cindy titles are registered with <strong>IngramSpark Wholesale</strong>, allowing public school districts, Title I programs, and library systems to place tax-exempt bulk orders with institutional purchase orders (PO).
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-900 bg-[#E9C46A] hover:bg-[#dfb758] transition"
            >
              Request School Visit & Free Sample Copy
            </Link>
            <a
              href="https://www.ingramcontent.com/retailers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-teal-700 hover:bg-teal-600 transition"
            >
              Order via IngramSpark Wholesale →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
