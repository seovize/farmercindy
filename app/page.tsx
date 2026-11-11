import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Heart, ArrowRight, Sprout, Sun, Apple, Users, Film, CheckCircle2 } from "lucide-react";
import { CinematicHero } from "@/components/CinematicHero";
import { TiltBookCard } from "@/components/TiltBookCard";
import { MultiRetailerRow } from "@/components/MultiRetailerRow";
import { ActivityKitLeadMagnet } from "@/components/ActivityKitLeadMagnet";
import { KidSafeVideoPlayer } from "@/components/KidSafeVideoPlayer";
import { InstagramSocialFeed } from "@/components/InstagramSocialFeed";
import { DonationImpactModule } from "@/components/DonationImpactModule";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#FAF7F2] text-[#173D57]">
      {/* =========================================================================
          1. NATURE-LED OPENING HERO (Visible Sky, Produce & Heirloom Agriculture)
         ========================================================================= */}
      <CinematicHero />

      {/* =========================================================================
          2. THE FARMING COMMUNITY MISSION IN CONCRETE LANGUAGE
         ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-t border-[#173D57]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2B6E4F] bg-[#EAF4FA] border border-sky-200 mb-3">
              <Sprout className="w-3.5 h-3.5" />
              <span>Our Farming Mission</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#173D57] tracking-tight">
              Feeding People with Real Food, <br className="hidden sm:inline" />
              Grown from Living Soil
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              Farmer Cindy is building an heirloom farming community dedicated to growing wholesome organic food and sharing harvest abundance with neighbors and families for free.
            </p>
          </div>

          {/* Three Concrete Agricultural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-7 rounded-3xl bg-[#FAF7F2] border-2 border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF4FA] text-[#173D57] flex items-center justify-center mb-5 border border-sky-200">
                  <Sprout className="w-6 h-6 text-[#2B6E4F]" />
                </div>
                <h3 className="text-xl font-heading font-black text-[#173D57] mb-2">
                  Heirloom Seed Stewardship
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  We cultivate non-GMO, heritage varieties of strawberries, sweet tomatoes, and dark leafy greens that produce true seeds generation after generation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-bold text-[#2B6E4F]">
                100% Organic &amp; Heritage Crops
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF7F2] border-2 border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF4FA] text-[#173D57] flex items-center justify-center mb-5 border border-sky-200">
                  <Sun className="w-6 h-6 text-[#DDA15E]" />
                </div>
                <h3 className="text-xl font-heading font-black text-[#173D57] mb-2">
                  Shared Community Harvest
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Our farm's purpose is simple: grow nutrient-dense organic produce and share the harvest with families, children, and elderly neighbors for free.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-bold text-[#2B6E4F]">
                Free Wholesome Nutrition
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#FAF7F2] border-2 border-stone-200/90 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#EAF4FA] text-[#173D57] flex items-center justify-center mb-5 border border-sky-200">
                  <BookOpen className="w-6 h-6 text-[#173D57]" />
                </div>
                <h3 className="text-xl font-heading font-black text-[#173D57] mb-2">
                  Books Funding the Land
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Every purchase of Cindy's children's picture books directly funds organic seeds, living soil, and raised beds to bring community farming to life.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-200 text-xs font-bold text-[#2B6E4F]">
                Storybooks That Plant Real Seeds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. APPROVED BOOK 1 CARTOON & THE GIVING STORY CLIMAX
         ========================================================================= */}
      <section id="story-film" className="py-20 bg-[#EAF4FA] border-t border-[#173D57]/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-4xl bg-gradient-to-br from-[#173D57] via-[#1A4563] to-[#0F2D42] text-white p-6 sm:p-10 lg:p-12 shadow-xl border border-sky-300/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Ultra-HD Check Presentation Artwork */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-slate-900 group">
                  <Image
                    src="/images/book1_cindy_check_presentation.jpg"
                    alt="Farmer Cindy Receiving Community Farm Fund Donations in Book 1 Finale Scene"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#DDA15E] block">
                      Book 1 Climax Scene
                    </span>
                    <span className="text-xs font-bold text-stone-200">
                      "Community Fund - Strong Farms Stronger Futures"
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative of the Giving Scene */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#DDA15E] text-slate-950 shadow-sm">
                  <Heart className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
                  <span>The Story That Inspires The Mission</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white leading-tight">
                  In Book 1, A Community Gathered. <br />
                  <span className="text-[#DDA15E]">Together, We Are Building That Farm.</span>
                </h3>

                <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed font-medium">
                  At the heartwarming climax of <em>FarmerCindy Finds a Farm</em>, neighbors arrive with wheelbarrows, heirloom seeds, and a $15,000 Community Farm Fund check to help Cindy clear the pastures and build the farm. That story represents our living goal: neighbors uniting to build community farms that nurture soil, feed families, and share fresh food.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c58b43] shadow-md transition active:scale-95 uppercase tracking-wider text-xs"
                  >
                    <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
                    <span>Support the Community Farm</span>
                  </Link>
                  <Link
                    href="#video-theater"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition text-xs"
                  >
                    <span>Watch Both Cartoons Below</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#DDA15E]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. OFFICIAL BOOKS CATALOG (Separate Purchase Links & Clean Covers)
         ========================================================================= */}
      <section id="books-catalog" className="py-20 bg-white border-t border-[#173D57]/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2B6E4F] bg-[#EAF4FA] border border-sky-200 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>The Official Picture Books</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#173D57]">
              Two Wholesome Stories of Seeds, Soil &amp; Community
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              Written by Farmer Cindy to inspire curious minds with the wonder of living soil and the joy of community farming.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Book 1 with Clean Front Cover */}
            <TiltBookCard
              asin="B0HL5F734J"
              volume="Volume 1"
              title="FarmerCindy Finds a Farm"
              subtitle="Urban Gardening & Heirloom Sprouts"
              ageRange="Ages 3–9"
              pages={76}
              coverImage="/images/book1_publisher_front.jpg"
              gradient="from-[#173D57] via-[#2B6E4F] to-[#0D3829]"
              accentColor="#173D57"
              badgeText="Series Debut"
              synopsis="Traveling the globe in search of open pastures, Cindy learns that real organic farming begins in your own home with a few heirloom seeds, soil, and love."
            />

            {/* Book 2 with Clean Front Cover */}
            <TiltBookCard
              asin="B0HL53WTS8"
              volume="Volume 2"
              title="What's Happening to Our Farming Community?"
              subtitle="Soil Health, Pollinators & Teamwork"
              ageRange="Ages 3–9"
              pages={76}
              coverImage="/images/book2_publisher_front.jpg"
              gradient="from-[#2B6E4F] via-[#164E3D] to-[#173D57]"
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-[#173D57] hover:bg-[#112d40] shadow-md transition hover:-translate-y-0.5"
            >
              <span>Explore Book Details, Sample Pages &amp; Library Sets</span>
              <ArrowRight className="w-4 h-4 text-[#DDA15E]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. CARTOON THEATER (Approved Video Cartoons Only)
         ========================================================================= */}
      <section id="video-theater" className="py-20 bg-[#FAF7F2] border-t border-[#173D57]/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#2B6E4F] bg-white border border-slate-200 mb-3 shadow-2xs">
              <Film className="w-3.5 h-3.5" />
              <span>Animated Story Theater</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#173D57]">
              Watch Cindy's Animated Cartoons
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Watch Cindy's official animated adventures and see how community teamwork turns seeds into flourishing gardens.
            </p>
          </div>

          <KidSafeVideoPlayer />
        </div>
      </section>

      {/* =========================================================================
          6. WORKING COMMUNITY GIVING MODULE (Direct In-App Contribution)
         ========================================================================= */}
      <section id="giving-section" className="py-20 bg-white border-t border-[#173D57]/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#DDA15E] mb-3">
              <Heart className="w-3.5 h-3.5 fill-slate-950" />
              <span>Support the Harvest</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#173D57]">
              Plant Seeds with Farmer Cindy
            </h2>
            <p className="mt-3 text-base text-slate-600 font-medium">
              Every tax-deductible contribution directly funds heirloom seeds, living soil, and raised beds so more families and children can enjoy fresh food for free.
            </p>
          </div>

          <DonationImpactModule />
        </div>
      </section>

      {/* =========================================================================
          7. FREE 12-PAGE SEED & SPROUT JOURNAL
         ========================================================================= */}
      <section id="activity-kit" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 scroll-mt-24">
        <ActivityKitLeadMagnet />
      </section>

      {/* =========================================================================
          8. LIVE COMMUNITY & GARDEN JOURNAL (Instagram Showcase)
         ========================================================================= */}
      <InstagramSocialFeed />
    </div>
  );
}
