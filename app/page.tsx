import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Heart, ArrowRight, Sprout, Sun, Film } from "lucide-react";
import { CinematicHero } from "@/components/CinematicHero";
import { TiltBookCard } from "@/components/TiltBookCard";
import { MultiRetailerRow } from "@/components/MultiRetailerRow";
import { ActivityKitLeadMagnet } from "@/components/ActivityKitLeadMagnet";
import { KidSafeVideoPlayer } from "@/components/KidSafeVideoPlayer";
import { InstagramSocialFeed } from "@/components/InstagramSocialFeed";
import { DonationImpactModule } from "@/components/DonationImpactModule";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-[#06080A] text-slate-100">
      {/* =========================================================================
          1. DRAMATIC BLACK + VIBRANT PRODUCE HERO
         ========================================================================= */}
      <CinematicHero />

      {/* =========================================================================
          2. VIBRANT PRODUCE & LIVING FOLIAGE SHOWCASE ON BLACK CANVAS
         ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#06080A] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-emerald-300 bg-[#0F3D6E]/60 border border-sky-400/30 mb-3">
              <Sprout className="w-3.5 h-3.5 text-emerald-400" />
              <span>Our Heirloom Farming Mission</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white tracking-tight">
              Vibrant Produce Grown from <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#FACC15] to-rose-400">
                Living Soil, Shared for Free
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              FarmerCindy is building an heirloom farming community dedicated to cultivating colorful, nutrient-dense organic produce and sharing harvest abundance with neighbors and families for free.
            </p>
          </div>

          {/* 4-Photo Vibrant Produce & Community Harvest Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="group relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
              <Image
                src="/images/generated/vibrant_foliage_harvest_black.jpg"
                alt="Vibrant rainbow Swiss chard, emerald basil, red strawberries, carrots, and cherry tomatoes against a dramatic black background"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block">
                  Electric Color &amp; Foliage
                </span>
                <div className="text-base sm:text-lg font-black font-heading mt-0.5">
                  Rainbow Chard, Heirloom Greens &amp; Vine Tomatoes
                </div>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  Cultivated organically in living compost without synthetic chemicals.
                </p>
              </div>
            </div>

            <div className="group relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
              <Image
                src="/images/generated/vibrant_cherries_strawberries_black.jpg"
                alt="Glossy ruby-red cherries and ripe strawberries surrounded by lush green foliage on a black background"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider text-rose-400 block">
                  FarmerCindy's Signature Harvest 🍒🍓
                </span>
                <div className="text-base sm:text-lg font-black font-heading mt-0.5">
                  Sun-Ripened Cherries &amp; Sweet Strawberries
                </div>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  Bright, antioxidant-rich fruit grown to nourish families and children.
                </p>
              </div>
            </div>

            <div className="group relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
              <Image
                src="/images/generated/heirloom_harvest_basket.jpg"
                alt="Wooden basket overflowing with fresh heirloom tomatoes, strawberries, and swiss chard"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FACC15] block">
                  Daily Farm Abundance
                </span>
                <div className="text-base sm:text-lg font-black font-heading mt-0.5">
                  Heirloom Harvest Baskets Straight from the Soil
                </div>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  Cherokee purple tomatoes, golden sungolds, and crisp garden greens.
                </p>
              </div>
            </div>

            <div className="group relative aspect-[16/10] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-black">
              <Image
                src="/images/generated/community_harvest_solidarity.jpg"
                alt="Community volunteers sharing fresh organic produce with families for free"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-black uppercase tracking-wider text-sky-400 block">
                  Free Community Harvest
                </span>
                <div className="text-base sm:text-lg font-black font-heading mt-0.5">
                  Feeding Neighbors &amp; Families for Free
                </div>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  Growing food as a community and sharing abundance with open hands.
                </p>
              </div>
            </div>
          </div>

          {/* Three Concrete Agricultural Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-7 rounded-3xl bg-[#0D131C] border border-sky-400/20 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0F3D6E] text-emerald-400 flex items-center justify-center mb-5 border border-sky-400/30">
                  <Sprout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-black text-white mb-2">
                  Heirloom Seed Stewardship
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  We cultivate non-GMO, heritage varieties of strawberries, cherries, tomatoes, and vibrant leafy greens that produce true seeds generation after generation.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-bold text-emerald-400">
                100% Organic &amp; Heritage Crops
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#0D131C] border border-sky-400/20 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0F3D6E] text-[#FACC15] flex items-center justify-center mb-5 border border-sky-400/30">
                  <Sun className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-black text-white mb-2">
                  Shared Community Harvest
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Our farm's purpose is simple: grow colorful, nutrient-dense organic produce and share the harvest with families, children, and elderly neighbors for free.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-bold text-[#FACC15]">
                Free Wholesome Nutrition
              </div>
            </div>

            <div className="p-7 rounded-3xl bg-[#0D131C] border border-sky-400/20 shadow-lg flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#0F3D6E] text-rose-400 flex items-center justify-center mb-5 border border-sky-400/30">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-black text-white mb-2">
                  Books Funding the Land
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-medium">
                  Every purchase of FarmerCindy's colorful picture books directly funds organic seeds, living soil, and raised beds to bring community farming to life.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-xs font-bold text-sky-400">
                Storybooks That Plant Real Seeds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. CARTOON THEATER (Full-Width Center Stage, Auto-Playing on View)
         ========================================================================= */}
      <section id="video-theater" className="py-20 bg-[#090D14] border-t border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-300 bg-[#0F3D6E] border border-sky-400/30 mb-3 shadow-sm">
              <Film className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Animated Story Theater</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white">
              Watch FarmerCindy's Animated Cartoons
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300">
              Watch FarmerCindy's official animated adventures and see how community teamwork turns seeds into flourishing gardens.
            </p>
          </div>

          <KidSafeVideoPlayer />
        </div>
      </section>

      {/* =========================================================================
          4. APPROVED BOOK 1 CARTOON & THE GIVING STORY CLIMAX (BOOK BLUE)
         ========================================================================= */}
      <section id="story-film" className="py-20 bg-[#06080A] border-t border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-4xl bg-gradient-to-br from-[#0B2545] via-[#0F3D6E] to-[#081A33] text-white p-6 sm:p-10 lg:p-12 shadow-2xl border border-sky-400/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Ultra-HD Check Presentation Artwork */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-sky-300/30 bg-black group">
                  <Image
                    src="/images/book1_cindy_check_presentation.jpg"
                    alt="FarmerCindy Receiving Community Farm Fund Donations in Book 1 Finale Scene"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#FACC15] block">
                      Book 1 Climax Scene
                    </span>
                    <span className="text-xs font-bold text-slate-200">
                      "Community Fund - Strong Farms Stronger Futures"
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative of the Giving Scene */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#FACC15] text-black shadow-sm">
                  <Heart className="w-3.5 h-3.5 fill-black text-black" />
                  <span>The Story That Inspires The Mission</span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-white leading-tight">
                  In Book 1, A Community Gathered. <br />
                  <span className="text-[#FACC15]">Together, We Are Building That Farm.</span>
                </h3>

                <p className="text-sm sm:text-base text-sky-100/95 leading-relaxed font-medium">
                  At the heartwarming climax of <em>FarmerCindy Finds a Farm</em>, neighbors arrive with wheelbarrows, heirloom seeds, and a $15,000 Community Farm Fund check to help Cindy clear the pastures and build the farm. That story represents our living goal: neighbors uniting to build community farms that nurture soil, feed families, and share fresh food.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/donate"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-black text-white bg-[#E11D48] hover:bg-[#F43F5E] shadow-lg transition active:scale-95 uppercase tracking-wider text-xs border border-rose-400/40"
                  >
                    <Heart className="w-4 h-4 fill-white text-white" />
                    <span>Support the Community Farm</span>
                  </Link>
                  <Link
                    href="/books"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 transition text-xs"
                  >
                    <span>Explore Both Books &amp; Cartoons</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FACC15]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. OFFICIAL BOOKS CATALOG (Colorful Covers Popping Off Black Canvas)
         ========================================================================= */}
      <section id="books-catalog" className="py-20 bg-[#090D14] border-t border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-sky-300 bg-[#0F3D6E] border border-sky-400/30 mb-3">
              <BookOpen className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>The Official Picture Books</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">
              Two Colorful Stories of Seeds, Soil &amp; Community
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              Written by FarmerCindy to inspire curious minds with vibrant illustrations, living soil, and the joy of community farming.
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
              gradient="from-[#0F3D6E] via-[#1E5AA8] to-[#0B2545]"
              accentColor="#1E5AA8"
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
              gradient="from-[#14532D] via-[#15803D] to-[#0F3D6E]"
              accentColor="#15803D"
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
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-black text-white bg-[#1E5AA8] hover:bg-[#2563EB] shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 border border-sky-400/40"
            >
              <span>Explore Book Details, Cartoons &amp; Library Sets</span>
              <ArrowRight className="w-4 h-4 text-[#FACC15]" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WORKING COMMUNITY GIVING MODULE
         ========================================================================= */}
      <section id="giving-section" className="py-20 bg-[#06080A] border-t border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider text-black bg-[#FACC15] mb-3">
              <Heart className="w-3.5 h-3.5 fill-black" />
              <span>Support the Harvest</span>
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white">
              Plant Seeds with FarmerCindy 🍒🍓
            </h2>
            <p className="mt-3 text-base text-slate-300 font-medium">
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
