"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Instagram, Heart, MessageCircle, Play, ExternalLink, CheckCircle2 } from "lucide-react";
import { GrownUpGateModal } from "@/components/GrownUpGateModal";

interface InstagramPost {
  id: string;
  type: "photo" | "reel";
  imageUrl: string;
  postUrl: string;
  date: string;
  caption: string;
  likes: string;
  comments: string;
  tags: string[];
}

const instagramPosts: InstagramPost[] = [
  {
    id: "post-1",
    type: "photo",
    imageUrl: "/images/instagram/post_nov06.jpg",
    postUrl: "https://www.instagram.com/iamfarmercindy_/p/DfaogPBCjws/",
    date: "November 6, 2026",
    caption: "The official print release is here! Both Book 1 & Book 2 are now printed and reaching young readers. Every page was written to spark curiosity about real food! 🌻📚",
    likes: "148",
    comments: "24",
    tags: ["#FarmerCindy", "#KidsBooks", "#HeirloomSeeds"],
  },
  {
    id: "post-2",
    type: "reel",
    imageUrl: "/images/instagram/reel_oct17.jpg",
    postUrl: "https://www.instagram.com/iamfarmercindy_/reel/Den3iq3ArJk/",
    date: "October 17, 2026",
    caption: "Little sneak peek at our animated cartoon adventures! Cindy's journey from a sunny balcony to discovering how fruits bloom. Watch in our kid-safe theater! 🎬🍓",
    likes: "312",
    comments: "42",
    tags: ["#CartoonAnimation", "#ChildrensLiterature", "#StemEducation"],
  },
  {
    id: "post-3",
    type: "photo",
    imageUrl: "/images/instagram/post_nov04.jpg",
    postUrl: "https://www.instagram.com/iamfarmercindy_/p/DfWcuvKDWQj/",
    date: "November 4, 2026",
    caption: "Community farming starts right at home! Teaching youth that you don't need hundreds of acres to grow nutrition—just patience, soil, and sunshine. 🌱✨",
    likes: "189",
    comments: "31",
    tags: ["#UrbanGardening", "#501c3", "#CommunityFarms"],
  },
  {
    id: "post-4",
    type: "reel",
    imageUrl: "/images/instagram/reel_oct12.jpg",
    postUrl: "https://www.instagram.com/iamfarmercindy_/reel/DeZfysCuzot/",
    date: "October 12, 2026",
    caption: "Meet the friendly pollinators! Honeybees, bumblebees, and ladybugs are hard at work protecting our heirloom strawberries. 🐝🌸",
    likes: "275",
    comments: "38",
    tags: ["#PollinatorFriendly", "#BeeKind", "#Storytime"],
  },
  {
    id: "post-5",
    type: "photo",
    imageUrl: "/images/instagram/post_nov03.jpg",
    postUrl: "https://www.instagram.com/iamfarmercindy_/p/DfT36dViLD2/",
    date: "November 3, 2026",
    caption: "Approved print proofs are in hand! Ready for schools, public libraries, and non-profit youth garden programs across the nation. 📖❤️",
    likes: "164",
    comments: "19",
    tags: ["#AuthorLife", "#ClassroomLibrary", "#LiteracyMatters"],
  },
  {
    id: "post-6",
    type: "photo",
    imageUrl: "/images/instagram/post_nov02.jpg",
    postUrl: "https://www.instagram.com/iamfarmercindy_/p/DfQOo3xiiq1/",
    date: "November 2, 2026",
    caption: "Fresh harvest season! All proceeds from our book sales directly fund our 501(c)(3) heirloom farms and youth agricultural workshops. 🍅🌾",
    likes: "208",
    comments: "27",
    tags: ["#NonProfitWork", "#HeirloomCrops", "#YouthEmpowerment"],
  },
];

const highlights = [
  { name: "FarmerCindy.org", emoji: "🌻" },
  { name: "On Amazon", emoji: "📚" },
  { name: "Cartoons", emoji: "🎬" },
  { name: "Peace & Joy", emoji: "🕊️" },
  { name: "Ghana Farm", emoji: "🌍" },
  { name: "11:11", emoji: "✨" },
];

export function InstagramSocialFeed() {
  const [gateOpen, setGateOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);

  const handleOpenExternal = (url: string) => {
    setPendingUrl(url);
    setGateOpen(true);
  };

  return (
    <section className="relative py-20 bg-[#FAF7F2] border-t-2 border-[#3B2314]/15 overflow-hidden">
      {/* Decorative ambient gradients (Subtle olive and gold) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#DDA15E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Profile Card Header */}
        <div className="rounded-3xl bg-white border-2 border-[#3B2314]/15 p-6 sm:p-10 shadow-tactile mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 sm:gap-8">
            {/* Avatar & Bio */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              {/* Instagram Avatar with Gold/Emerald Ring */}
              <div className="relative p-1 rounded-full bg-gradient-to-tr from-[#DDA15E] via-[#2B6E4F] to-[#0D3829] shadow-md shrink-0">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-white bg-[#FAF7F2]">
                  <Image
                    src="/images/instagram/avatar.jpg"
                    alt="Farmer Cindy Official Profile"
                    fill
                    sizes="120px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#2B6E4F] text-white flex items-center justify-center border-2 border-white shadow">
                  <CheckCircle2 className="w-5 h-5 fill-[#2B6E4F] text-white" />
                </div>
              </div>

              {/* Handle & Credibility */}
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 mb-1.5">
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#0D3829]">
                    FarmerCindy🍒🍓
                  </h2>
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-[#0D3829] border border-emerald-300">
                    <Instagram className="w-3.5 h-3.5 text-[#2B6E4F]" />
                    @iamfarmercindy_
                  </span>
                </div>

                <p className="text-sm font-extrabold text-[#2B6E4F] mb-2">
                  Author • Urban Horticulturist • 501(c)(3) Non-Profit Founder
                </p>

                <p className="text-xs sm:text-sm text-[#3B2314]/80 max-w-xl leading-relaxed">
                  "We are a registered 501(c)(3) Non-Profit organization. 100% of book and merchandise proceeds directly fund our heirloom farms and youth agricultural literacy programs."
                </p>

                {/* Proof Pills */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mt-4 text-xs font-bold text-[#3B2314]">
                  <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#3B2314]/15 text-[#0D3829]">
                    <strong className="text-[#0D3829]">1,020+</strong> Community Followers
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#0D3829]">
                    <strong className="text-[#2B6E4F]">Official</strong> 501(c)(3) Non-Profit
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[#FAF7F2] border border-[#3B2314]/15 text-[#3B2314]">
                    Daily Stories &amp; Farm Updates
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="shrink-0 flex flex-col items-center md:items-end gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={() => handleOpenExternal("https://www.instagram.com/iamfarmercindy_/")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#0D3829] hover:bg-[#164E3D] text-white font-extrabold text-sm shadow-tactile transition-all duration-200 hover:-translate-y-0.5"
              >
                <Instagram className="w-5 h-5 text-[#DDA15E]" />
                <span>Follow on Instagram</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </button>
              <span className="text-[11px] text-[#3B2314]/60 font-medium">
                COPPA Protected • Opens Grown-Up Gate
              </span>
            </div>
          </div>

          {/* Story Highlights Bar */}
          <div className="mt-8 pt-6 border-t border-[#3B2314]/10 flex items-center gap-4 sm:gap-6 overflow-x-auto pb-2 scrollbar-none">
            <span className="text-xs font-black uppercase tracking-wider text-[#3B2314]/60 shrink-0">
              Story Highlights:
            </span>
            {highlights.map((h, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleOpenExternal("https://www.instagram.com/iamfarmercindy_/")}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F2] hover:bg-emerald-50 border border-[#3B2314]/20 text-xs font-bold text-[#0D3829] transition shrink-0 group"
              >
                <span className="text-base group-hover:scale-110 transition-transform">{h.emoji}</span>
                <span>{h.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-[#0D3829] border border-emerald-300 mb-3">
            <Instagram className="w-3.5 h-3.5 text-[#2B6E4F]" />
            <span>Live Social Stream</span>
          </div>
          <h3 className="text-3xl sm:text-4xl font-heading font-black text-[#0D3829]">
            Inside Cindy's <span className="text-[#DDA15E]">Farm &amp; Reading Community</span>
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#3B2314]/80">
            Real snapshots, animated cartoon sneak-peeks, and heirloom gardening tips fresh from Cindy's garden journal.
          </p>
        </div>

        {/* 6-Card Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {instagramPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => handleOpenExternal(post.postUrl)}
              className="group cursor-pointer rounded-3xl bg-white border-2 border-[#3B2314]/15 overflow-hidden shadow-tactile hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Media Container with 1:1 Aspect Ratio */}
              <div className="relative aspect-square overflow-hidden bg-slate-900">
                <Image
                  src={post.imageUrl}
                  alt={post.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Badge: Type Indicator */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                  {post.type === "reel" ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-md text-[#DDA15E] border border-white/20 shadow">
                      <Play className="w-3 h-3 fill-current" />
                      Reel / Cartoon
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-black/70 backdrop-blur-md text-white border border-white/20 shadow">
                      Photo Journal
                    </span>
                  )}
                </div>

                {/* Top Right: Instagram Icon */}
                <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur text-white flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition">
                  <Instagram className="w-4 h-4 text-[#DDA15E]" />
                </div>

                {/* Hover Center Indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-[#0D3829] font-black text-xs shadow-2xl">
                    View on Instagram
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Stats Overlay */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-bold text-white drop-shadow">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-[#DDA15E] text-[#DDA15E]" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-white/90" />
                      {post.comments}
                    </span>
                  </div>
                  <span className="text-[11px] text-white/80">{post.date}</span>
                </div>
              </div>

              {/* Caption Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <p className="text-xs sm:text-sm text-[#3B2314]/90 leading-relaxed font-medium line-clamp-3">
                  {post.caption}
                </p>

                <div className="mt-3 pt-3 border-t border-[#3B2314]/10 flex flex-wrap items-center gap-1.5">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-bold text-[#2B6E4F] hover:underline"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Conversion Strip */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white border-2 border-[#3B2314]/15 shadow-sm max-w-2xl mx-auto">
            <span className="text-sm font-extrabold text-[#0D3829]">
              Tag us in your classroom and window-sill garden photos!
            </span>
            <button
              type="button"
              onClick={() => handleOpenExternal("https://www.instagram.com/iamfarmercindy_/")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2B6E4F] hover:bg-[#20533c] text-white text-xs font-black shadow transition shrink-0"
            >
              <Instagram className="w-3.5 h-3.5 text-[#DDA15E]" />
              <span>Tag @iamfarmercindy_</span>
            </button>
          </div>
        </div>
      </div>

      {/* COPPA Safe Grown-Up Gate Modal */}
      <GrownUpGateModal
        isOpen={gateOpen}
        onClose={() => setGateOpen(false)}
        targetUrl={pendingUrl || "https://www.instagram.com/iamfarmercindy_/"}
        retailerName="Instagram"
      />
    </section>
  );
}
