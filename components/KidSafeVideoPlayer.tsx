"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Pause, ShieldCheck, Film, Sparkles, Volume2, RotateCcw, Maximize2 } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  episodeTag: string;
  duration: string;
  youtubeId: string;
  thumbnail: string;
  description: string;
  curriculumBadge: string;
}

const defaultPlaylist: VideoItem[] = [
  {
    id: "strawberries",
    title: "How Do Strawberries Grow? (Farmer Cindy Strawberry Patch Edition)",
    episodeTag: "Book 1 Companion",
    duration: "4:12",
    youtubeId: "ghbNc0IjAXA",
    thumbnail: "/images/theater_thumbnail.jpg",
    description: "Discover how tiny white flowers transform into juicy red strawberries! Learn how sunlight, water, and rich soil help Farmer Cindy's strawberries grow.",
    curriculumBadge: "Plant Life Cycle (Pre-K to 2nd)",
  },
  {
    id: "pollinators",
    title: "Like Fruit? Thank a Bee! (Community Farming Edition)",
    episodeTag: "Book 2 Companion",
    duration: "3:48",
    youtubeId: "ta154f5Rp5Y",
    thumbnail: "https://img.youtube.com/vi/ta154f5Rp5Y/hqdefault.jpg",
    description: "Explore why honeybees, bumblebees, and butterflies are vital friends for community gardens and fruit orchards.",
    curriculumBadge: "Pollinators & Biodiversity",
  },
  {
    id: "earthworms",
    title: "Worms Are Wonderful! (Soil Science for Young Gardeners)",
    episodeTag: "Farm Science",
    duration: "4:05",
    youtubeId: "l-zc_1vjLnI",
    thumbnail: "https://img.youtube.com/vi/l-zc_1vjLnI/hqdefault.jpg",
    description: "Meet the wiggly soil superheroes that keep the earth rich, airy, and full of organic nutrients for heirloom vegetables.",
    curriculumBadge: "Soil Health & Ecology",
  },
];

export function KidSafeVideoPlayer() {
  const [activeVideo, setActiveVideo] = useState(defaultPlaylist[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="rounded-4xl bg-[#FFF8F0] p-6 md:p-10 border-4 border-amber-200/80 shadow-tactile my-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Video Frame (16:9) */}
        <div className="lg:w-2/3">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border-4 border-amber-300 shadow-2xl">
            {isPlaying ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
                {/* Real High-Res Thumbnail Image */}
                <Image
                  src={activeVideo.thumbnail}
                  alt={activeVideo.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />

                {/* Cinematic Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase bg-black/60 backdrop-blur-md text-amber-200 border border-white/20">
                    <Film className="w-3.5 h-3.5" />
                    {activeVideo.episodeTag}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-[#E63946] text-white shadow">
                    {activeVideo.curriculumBadge}
                  </span>
                </div>

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#E63946] hover:bg-[#B82835] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/80">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Video Metadata */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg sm:text-2xl font-black drop-shadow-md leading-tight">
                    {activeVideo.title}
                  </h3>
                  <p className="mt-1 text-xs text-amber-100 line-clamp-2 max-w-xl opacity-90 drop-shadow">
                    {activeVideo.description}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* User Controls & Child Safety Notice */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              {isPlaying && (
                <button
                  type="button"
                  onClick={() => setIsPlaying(false)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Show Thumbnail
                </button>
              )}
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Kid-Safe Theater (Zero Tracking Cookies • No External Ads)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 font-bold text-slate-500">
              <span>Duration: {activeVideo.duration}</span>
              <span>•</span>
              <span>Full HD 1080p</span>
            </div>
          </div>
        </div>

        {/* Playlist Selector */}
        <div className="lg:w-1/3 flex flex-col justify-between">
          <div>
            <h4 className="font-heading font-black text-xl text-[#264653] flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#E9C46A]" />
              Storytime Playlist
            </h4>

            <div className="space-y-3">
              {defaultPlaylist.map((video) => {
                const isSelected = activeVideo.id === video.id;
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => {
                      setActiveVideo(video);
                      setIsPlaying(true);
                    }}
                    className={`w-full p-3 rounded-2xl text-left transition-all duration-200 border-2 flex items-center gap-3.5 ${
                      isSelected
                        ? "bg-amber-100/90 border-[#E63946] shadow-md"
                        : "bg-white hover:bg-amber-50/60 border-amber-200/50"
                    }`}
                  >
                    {/* Small thumbnail preview */}
                    <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-800 border border-slate-200">
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-current opacity-80" />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between text-[10px] font-black uppercase text-[#2A9D8F]">
                        <span>{video.episodeTag}</span>
                        <span className="text-slate-400">{video.duration}</span>
                      </div>
                      <div className="font-extrabold text-xs text-[#264653] mt-0.5 line-clamp-2 leading-snug">
                        {video.title}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 p-4 rounded-2xl bg-amber-100/60 border border-amber-200 text-xs text-amber-950">
            <strong>For Parents & Teachers:</strong> Use these videos as educational conversation starters to teach children about plant germination and pollinators!
          </div>
        </div>
      </div>
    </div>
  );
}
