import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Sparkles, Heart, Play, ShieldCheck, ArrowRight, Star, Sprout, Users, Award } from "lucide-react";
import { TiltBookCard } from "@/components/TiltBookCard";
import { MultiRetailerRow } from "@/components/MultiRetailerRow";
import { ActivityKitLeadMagnet } from "@/components/ActivityKitLeadMagnet";
import { FloatingFarmElements } from "@/components/FloatingFarmElements";
import { KidSafeVideoPlayer } from "@/components/KidSafeVideoPlayer";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden paper-pattern">
      {/* Floating Animated Farm Elements */}
      <FloatingFarmElements />

      {/* Hero Section ("The Digital Showroom") */}
      <section className="relative pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Author Headline, Real Portrait Badge & Conversion Hooks */}
            <div className="lg:col-span-7 text-center lg:text-left z-10">
              {/* Badge with Mini Avatar */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider mb-6 shadow-sm">
                <div className="relative w-6 h-6 rounded-full overflow-hidden border border-amber-400 shrink-0">
                  <Image
                    src="/images/farmer_cindy_hero.jpg"
                    alt="Farmer Cindy Avatar"
                    fill
                    sizes="24px"
                    className="object-cover"
                  />
                </div>
                <span>Wholesome Children's Book Series • Ages 3–9</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-heading font-black text-[#264653] tracking-tight leading-[1.1]">
                Growing Healthy <br />
                <span className="text-[#E63946] drop-shadow-sm">Imaginations</span> Through <br />
                <span className="text-[#2A9D8F]">Farm-Fresh</span> Stories
              </h1>

              {/* Subheading */}
              <p className="mt-6 text-lg sm:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Meet <strong>Farmer Cindy</strong>! Wholesome, beautifully illustrated picture books that inspire children to fall in love with heirloom seeds, nature, and fresh nutrition.
              </p>

              {/* 501(c)(3) Callout Banner */}
              <div className="mt-6 p-4 rounded-2xl bg-amber-50/90 border-2 border-amber-200/80 inline-flex items-center gap-3.5 text-left shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#2A9D8F] text-white flex items-center justify-center shrink-0 font-bold text-lg shadow">
                  <Sprout className="w-5 h-5 text-white" />
                </div>
                <div className="text-xs text-slate-700">
                  <strong className="text-[#264653] font-black block">100% Non-Profit Proceeds:</strong>
                  Every book purchased funds heirloom seed kits to grow free food for schools and families.
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/books"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition active:translate-y-0"
                >
                  <BookOpen className="w-5 h-5" />
                  Explore The Adventures
                </Link>

                <Link
                  href="/theater"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl font-black text-[#264653] bg-white hover:bg-amber-50 border-2 border-amber-300 shadow-md transition hover:-translate-y-0.5"
                >
                  <Play className="w-5 h-5 text-[#E63946] fill-[#E63946]" />
                  Watch Cartoon Trailer
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 pt-8 border-t border-amber-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2A9D8F]" />
                  COPPA Safe Kids Certified
                </span>
                <span className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-[#E9C46A] fill-current" />
                  5-Star Early Reader Favorite
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-[#E63946]" />
                  501(c)(3) Non-Profit
                </span>
              </div>
            </div>

            {/* Right Column: High-Density 3D Book Showcase with Real Amazon Cover */}
            <div className="lg:col-span-5 relative z-10">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                {/* Visual Glow Behind the Book */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-200/60 to-amber-200/60 rounded-full blur-3xl transform -rotate-6 scale-105 pointer-events-none" />

                {/* 3D Tilt Card of Book 1 with Real Amazon Cover */}
                <TiltBookCard
                  asin="B0HL5F734J"
                  volume="Book 1 Spotlight"
                  title="FarmerCindy Finds a Farm"
                  subtitle="A Journey of Heirloom Seeds & Apartment Magic"
                  ageRange="Ages 3–9"
                  pages={76}
                  coverImage="/images/book1_cover.jpg"
                  gradient="from-[#E63946] via-[#B82835] to-[#264653]"
                  accentColor="#E63946"
                  badgeText="Official Amazon Release"
                  synopsis="Farmer Cindy searches across the world for the perfect farm, only to discover she can grow organic food right on her apartment windowsill!"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Retailer Row for Book 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-[#FFF8F0] rounded-3xl p-6 border-2 border-amber-200/70 shadow-sm">
          <div className="text-center mb-2">
            <h3 className="text-lg font-black text-[#264653]">
              Order Volume 1 Today Across Major Bookstores
            </h3>
            <p className="text-xs text-slate-500">
              Amazon Prime fast delivery, Barnes & Noble, Lulu Press, and IngramSpark wholesale.
            </p>
          </div>
          <MultiRetailerRow
            asin="B0HL5F734J"
            bookTitle="The Adventures of FarmerCindy: FarmerCindy Finds a Farm"
          />
        </div>
      </section>

      {/* Author & Story World Spotlight with Real Illustration */}
      <section className="py-16 bg-white border-y border-amber-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Real Hand-Crafted Illustration */}
            <div className="lg:col-span-5 text-center">
              <div className="relative mx-auto max-w-md aspect-square rounded-4xl overflow-hidden shadow-2xl border-4 border-amber-200 group">
                <Image
                  src="/images/farmer_cindy_hero.jpg"
                  alt="Farmer Cindy with Fresh Harvest Basket"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                  <span className="text-xs font-black uppercase tracking-wider bg-[#E63946] px-3.5 py-1 rounded-full shadow">
                    Meet Author Cindy
                  </span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7 space-y-4 text-slate-700 text-center lg:text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#2A9D8F] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
                Storybook Character & Real Mission
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#264653] leading-tight">
                Teaching Kids That Real Nutrition Starts in the Soil
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-slate-600">
                Farmer Cindy is more than a storybook character—she is on a nationwide mission to help elementary students and families discover the wonder of gardening. Through colorful tales of strawberries, cherries, honeybees, and heirloom seeds, she makes agricultural STEM literacy accessible to every child.
              </p>
              <div className="pt-2 flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#2A9D8F] hover:bg-[#1D6E64] shadow-md transition"
                >
                  <Users className="w-4 h-4" />
                  Read Cindy's Full Bio & School Assemblies
                </Link>
                <Link
                  href="/mission"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-[#264653] bg-amber-100 hover:bg-amber-200 transition"
                >
                  <Heart className="w-4 h-4 text-[#E63946]" />
                  See Our 501(c)(3) Free Food Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight: Dual Book Showcase Grid with Real Covers */}
      <section className="py-20 bg-gradient-to-b from-[#FDFBF7] via-[#FFF8F0] to-[#FDFBF7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider text-[#2A9D8F] bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
              The Complete Adventure Series
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#264653]">
              Meet The Adventures of Farmer Cindy
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Two inspiring picture books packed with cheerful illustrations, practical gardening wisdom, and wholesome values for curious growing minds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Book 1 with Real Amazon Cover */}
            <TiltBookCard
              asin="B0HL5F734J"
              volume="Volume 1"
              title="FarmerCindy Finds a Farm"
              subtitle="Urban Gardening & Heirloom Sprouts"
              ageRange="Ages 3–9"
              pages={76}
              coverImage="/images/book1_cover.jpg"
              gradient="from-[#E63946] via-[#B82835] to-[#264653]"
              accentColor="#E63946"
              badgeText="Live on Amazon"
              synopsis="Traveling the globe in search of open pastures, Cindy learns that real organic farming begins in your own home with a few heirloom seeds and love."
            />

            {/* Book 2 with Real Amazon Cover */}
            <TiltBookCard
              asin="B0HL53WTS8"
              volume="Volume 2"
              title="What's Happening to Our Farming Community?"
              subtitle="Soil Health, Pollinators & Teamwork"
              ageRange="Ages 3–9"
              pages={76}
              coverImage="/images/book2_cover.jpg"
              gradient="from-[#2A9D8F] via-[#1D6E64] to-[#264653]"
              accentColor="#2A9D8F"
              badgeText="Series Sequel"
              synopsis="When farmland begins to fade, Cindy rallies neighbors, honeybees, and earthworms to discover why preserving community farms protects our shared future."
            />
          </div>

          <div className="text-center mt-12">
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl text-sm font-black text-[#264653] bg-white hover:bg-amber-100 border-2 border-amber-300 shadow-md transition"
            >
              Explore Full Details, Sample Pages & Retailers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Free 12-Page Activity Kit Lead Magnet (Brevo CRM Engine) with Real Mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ActivityKitLeadMagnet />
      </section>

      {/* Video Theater & Cartoon Teaser */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-[#E63946] bg-red-50 px-3.5 py-1.5 rounded-full border border-red-200">
            Watch With The Family
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-[#264653]">
            Farmer Cindy Cartoon Theater
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Enjoy safe, ad-free animated cartoon book trailers and read-aloud episodes.
          </p>
        </div>

        <KidSafeVideoPlayer />
      </section>

      {/* 501(c)(3) Live Impact Metrics */}
      <section className="py-20 bg-[#264653] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-900 px-3.5 py-1.5 rounded-full shadow-sm">
              501(c)(3) Non-Profit Mission
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">
              Every Book Plants Seeds of Change
            </h2>
            <p className="mt-4 text-base text-teal-100 leading-relaxed">
              FarmerCindy, Inc. is on a mission to reconnect the next generation with real nutrition. 100% of our book profits fund youth gardening kits and agricultural literacy in underserved elementary schools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-teal-800/40 border border-teal-700/60 shadow-lg">
              <div className="text-4xl sm:text-5xl font-black text-[#E9C46A] mb-2 font-heading">
                12,500+
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Children Reached
              </div>
              <p className="mt-2 text-xs text-teal-200">
                Through book donations, school assemblies, and classroom reading programs.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-teal-800/40 border border-teal-700/60 shadow-lg">
              <div className="text-4xl sm:text-5xl font-black text-[#E9C46A] mb-2 font-heading">
                48+
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Classroom Garden Beds
              </div>
              <p className="mt-2 text-xs text-teal-200">
                Funded and planted with heirloom strawberries, carrots, and sweet cherry plants.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-teal-800/40 border border-teal-700/60 shadow-lg">
              <div className="text-4xl sm:text-5xl font-black text-[#E9C46A] mb-2 font-heading">
                100%
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">
                Non-Profit Proceeds
              </div>
              <p className="mt-2 text-xs text-teal-200">
                Directly dedicated to free food production and youth agricultural education.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/mission"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-amber-950 bg-[#E9C46A] hover:bg-[#dfb758] shadow-lg transition active:scale-95"
            >
              <Heart className="w-4 h-4 fill-[#E63946] text-[#E63946]" />
              Learn About Our 501(c)(3) Mission & Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
