import React from "react";
import Link from "next/link";
import { BookOpen, Heart, ShieldCheck, ArrowRight, Star, Sprout, Users, Award, Sun, Bug, CheckCircle2, Download } from "lucide-react";
import { CinematicHero } from "@/components/CinematicHero";
import { FounderSpotlight } from "@/components/FounderSpotlight";
import { TiltBookCard } from "@/components/TiltBookCard";
import { MultiRetailerRow } from "@/components/MultiRetailerRow";
import { ActivityKitLeadMagnet } from "@/components/ActivityKitLeadMagnet";
import { KidSafeVideoPlayer } from "@/components/KidSafeVideoPlayer";
import { InstagramSocialFeed } from "@/components/InstagramSocialFeed";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden paper-canvas">
      {/* =========================================================================
          1. CINEMATIC AUTOPLAYING VIDEO HERO (Kiss The Ground Benchmark)
         ========================================================================= */}
      <CinematicHero />

      {/* =========================================================================
          2. AUTHENTIC FOUNDER & AUTHOR SPOTLIGHT (Real Cindy Photos & Heritage)
         ========================================================================= */}
      <FounderSpotlight />

      {/* =========================================================================
          3. OFFICIAL BOOKS CATALOG & MULTI-RETAILER ROW
         ========================================================================= */}
      <section className="py-20 bg-gradient-to-b from-[#FAF7F2] via-white to-[#FAF7F2] border-t-2 border-[#3B2314]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#0D3829]">
              Two Wholesome Books for Curious Growing Minds
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#3B2314]/80 font-medium leading-relaxed">
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
          4. VIDEO THEATER & CARTOON TEASER (Cindy's Original Animations)
         ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t-2 border-[#3B2314]/10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0D3829]">
            Farmer Cindy Cartoon Theater
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#3B2314]/80">
            Enjoy safe, ad-free animated cartoon adventures and authentic garden reels featuring Cindy's original animations.
          </p>
        </div>

        <KidSafeVideoPlayer />
      </section>

      {/* =========================================================================
          5. FREE 12-PAGE ACTIVITY KIT LEAD MAGNET
         ========================================================================= */}
      <section id="activity-kit" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24 my-10">
        <ActivityKitLeadMagnet />
      </section>

      {/* =========================================================================
          6. INSTAGRAM LIVE SOCIAL FEED & EDITORIAL SHOWCASE
         ========================================================================= */}
      <InstagramSocialFeed />

      {/* =========================================================================
          7. 501(c)(3) NON-PROFIT MISSION CLOSE (Farmland.org Standard)
         ========================================================================= */}
      <section className="py-20 bg-[#08241A] text-white border-t-4 border-[#DDA15E]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-3xl bg-[#0D3829] text-[#DDA15E] flex items-center justify-center mx-auto mb-6 border border-emerald-500/30 shadow-lg">
            <Heart className="w-8 h-8 fill-[#DDA15E]" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
            Every Seed Plants a Generation of Change
          </h2>
          <p className="mt-5 text-base sm:text-lg text-emerald-100/90 leading-relaxed font-medium max-w-2xl mx-auto">
            FarmerCindy, Inc. is an official 501(c)(3) public charity on a mission to reconnect children with living soil and nutritious food. 100% of our picture book royalties and public contributions directly fund windowsill seed kits, raised garden beds, and reading assemblies in Title I elementary schools.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-[#0D3829] bg-[#DDA15E] hover:bg-[#c58b43] shadow-lg transition active:scale-95 uppercase tracking-wider text-sm"
            >
              <Heart className="w-4 h-4 fill-[#0D3829]" />
              <span>Make a Tax-Deductible Donation</span>
            </Link>

            <Link
              href="/mission"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-400/40 transition text-sm"
            >
              <Sprout className="w-4 h-4 text-[#DDA15E]" />
              <span>Learn About Our Mission</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
