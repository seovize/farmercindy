import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Sparkles, Heart, Play, ShieldCheck, ArrowRight, Star, Sprout, Users, Award, Sun, Bug, CheckCircle2, Download } from "lucide-react";
import { CinematicHero } from "@/components/CinematicHero";
import { DonationImpactModule } from "@/components/DonationImpactModule";
import { FounderSpotlight } from "@/components/FounderSpotlight";
import { TiltBookCard } from "@/components/TiltBookCard";
import { MultiRetailerRow } from "@/components/MultiRetailerRow";
import { ActivityKitLeadMagnet } from "@/components/ActivityKitLeadMagnet";
import { FloatingFarmElements } from "@/components/FloatingFarmElements";
import { KidSafeVideoPlayer } from "@/components/KidSafeVideoPlayer";
import { InstagramSocialFeed } from "@/components/InstagramSocialFeed";

export default function HomePage() {
  const storyHighlights = [
    {
      title: "The Windowsill Farm",
      book: "Volume 1 Spotlight",
      desc: "Cindy proves that you don't need hundreds of rural acres to grow organic strawberries—you can build a thriving farm right on an apartment windowsill!",
      tag: "Apartment Farming",
      accent: "text-[#0D3829] bg-emerald-100 border-emerald-300",
      icon: Sun,
    },
    {
      title: "The Honeybee Symphony",
      book: "Volume 2 Spotlight",
      desc: "When development encroaches on family pastures, Cindy teams up with wild honeybees and butterflies to demonstrate why pollinators are essential for our fruit.",
      tag: "Pollinator Science",
      accent: "text-[#2B6E4F] bg-emerald-50 border-emerald-200",
      icon: Bug,
    },
    {
      title: "The Living Soil Feast",
      book: "STEM Learning",
      desc: "Meet hardworking earthworms and soil microbes that aerate root systems, transforming kitchen scraps into sweet, vitamin-rich garden soil.",
      tag: "Soil Ecology",
      accent: "text-[#3B2314] bg-amber-50 border-amber-200",
      icon: Sprout,
    },
  ];

  return (
    <div className="relative overflow-hidden paper-canvas">
      {/* Floating Animated Farm Elements */}
      <FloatingFarmElements />

      {/* =========================================================================
          1. CINEMATIC AUTOPLAYING VIDEO HERO (Kiss The Ground Benchmark)
         ========================================================================= */}
      <CinematicHero />

      {/* =========================================================================
          2. 501(c)(3) NON-PROFIT GIVING ENGINE (American Farmland Trust Benchmark)
         ========================================================================= */}
      <DonationImpactModule />

      {/* =========================================================================
          3. AUTHENTIC FOUNDER & AUTHOR SPOTLIGHT (Real Cindy Photos & Heritage)
         ========================================================================= */}
      <FounderSpotlight />

      {/* =========================================================================
          4. OFFICIAL BOOKS CATALOG & MULTI-RETAILER ROW (Option 1 Compliance)
         ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2] border-t-2 border-[#3B2314]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300">
              The Complete Adventure Series
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#0D3829]">
              Two Wholesome Books for Curious Growing Minds
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3B2314]/80 font-medium">
              Richly illustrated, character-driven picture books created to inspire young readers with heirloom seeds, nature, and living soil (Ages 3–9).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Book 1 with Verified Publisher Cover */}
            <TiltBookCard
              asin="B0HL5F734J"
              volume="Volume 1"
              title="FarmerCindy Finds a Farm"
              subtitle="Urban Gardening & Heirloom Sprouts"
              ageRange="Ages 3–9"
              pages={76}
              coverImage="/images/book1_publisher_front.jpg"
              gradient="from-[#0D3829] via-[#2B6E4F] to-[#1C3127]"
              accentColor="#0D3829"
              badgeText="Live on Amazon Prime"
              synopsis="Traveling the globe in search of open pastures, Cindy learns that real organic farming begins in your own home with a few heirloom seeds and love."
            />

            {/* Book 2 with Verified Publisher Cover */}
            <TiltBookCard
              asin="B0HL53WTS8"
              volume="Volume 2"
              title="What's Happening to Our Farming Community?"
              subtitle="Soil Health, Pollinators & Teamwork"
              ageRange="Ages 3–9"
              pages={76}
              coverImage="/images/book2_publisher_front.jpg"
              gradient="from-[#2B6E4F] via-[#164E3D] to-[#0D3829]"
              accentColor="#2B6E4F"
              badgeText="Series Sequel"
              synopsis="When farmland begins to fade, Cindy rallies neighbors, honeybees, and earthworms to discover why preserving community farms protects our shared future."
            />
          </div>

          {/* Quick Buy Bar */}
          <div className="max-w-4xl mx-auto mt-10">
            <MultiRetailerRow
              asin="B0HL5F734J"
              bookTitle="The Adventures of FarmerCindy Picture Book Series"
              price="$14.99"
            />
          </div>

          <div className="text-center mt-10">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-black text-white bg-[#0D3829] hover:bg-[#164E3D] shadow-md transition hover:-translate-y-0.5"
            >
              <span>Explore Complete Book Details, Sample Spreads &amp; Classroom Sets</span>
              <ArrowRight className="w-4 h-4 text-[#DDA15E]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. STORYTELLING PILLARS ("Inside the Pages")
         ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Inside The Stories
          </span>
          <h3 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#0D3829]">
            What Children Learn Through Farmer Cindy
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#3B2314]/80">
            More than just bedtime stories: accessible STEM botany and environmental respect wrapped in delightful humor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {storyHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border-2 border-[#3B2314]/15 shadow-sm hover:shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${item.accent}`}>
                      {item.tag}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {item.book}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#0D3829] flex items-center justify-center mb-4 border border-emerald-200">
                    <Icon className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  <h4 className="font-heading font-black text-xl text-[#0D3829] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#3B2314]/80 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          6. FREE 12-PAGE ACTIVITY KIT LEAD MAGNET
         ========================================================================= */}
      <section id="activity-kit" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 my-6">
        <ActivityKitLeadMagnet />
      </section>

      {/* =========================================================================
          7. VIDEO THEATER & CARTOON TEASER (Cindy's Original Animations)
         ========================================================================= */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Watch With The Family
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#0D3829]">
            Farmer Cindy Cartoon Theater
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#3B2314]/80">
            Enjoy safe, ad-free animated cartoon adventures and STEM episodes featuring Cindy's original animations.
          </p>
        </div>

        <KidSafeVideoPlayer />
      </section>

      {/* =========================================================================
          8. INSTAGRAM LIVE SOCIAL FEED & EDITORIAL SHOWCASE
         ========================================================================= */}
      <InstagramSocialFeed />

      {/* =========================================================================
          9. 501(c)(3) LIVE IMPACT METRICS (Farmland.org Standard)
         ========================================================================= */}
      <section className="py-20 bg-[#08241A] text-white border-t-4 border-[#DDA15E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider bg-[#DDA15E] text-[#0D3829] px-3.5 py-1.5 rounded-full shadow-sm font-heading font-black">
              501(c)(3) Non-Profit Mission
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">
              Every Seed Plants a Generation of Change
            </h2>
            <p className="mt-4 text-base text-emerald-100 leading-relaxed font-medium">
              FarmerCindy, Inc. is on a mission to reconnect the next generation with living soil and real nutrition. 100% of our book profits and donor contributions fund youth gardening kits and agricultural literacy in underserved elementary schools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-emerald-950/60 border border-emerald-800 shadow-lg">
              <div className="text-4xl sm:text-5xl font-black text-[#DDA15E] mb-2 font-heading">
                12,500+
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Children Reached
              </div>
              <p className="mt-2 text-xs text-emerald-200/80">
                Through book donations, school assemblies, and classroom reading programs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-950/60 border border-emerald-800 shadow-lg">
              <div className="text-4xl sm:text-5xl font-black text-[#DDA15E] mb-2 font-heading">
                48+
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Classroom Garden Beds
              </div>
              <p className="mt-2 text-xs text-emerald-200/80">
                Funded and planted with heirloom strawberries, carrots, and sweet cherry plants.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-950/60 border border-emerald-800 shadow-lg">
              <div className="text-4xl sm:text-5xl font-black text-[#DDA15E] mb-2 font-heading">
                100%
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Non-Profit Proceeds
              </div>
              <p className="mt-2 text-xs text-emerald-200/80">
                Directly dedicated to free food production and youth agricultural education.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#donate-section"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-[#0D3829] bg-[#DDA15E] hover:bg-[#c58b43] shadow-lg transition active:scale-95 uppercase tracking-wider"
            >
              <Heart className="w-4 h-4 fill-[#0D3829] text-[#0D3829]" />
              <span>Make a Tax-Deductible Donation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
