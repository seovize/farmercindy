"use client";

import React, { useState } from "react";
import { Play, ShieldCheck, Film, Sparkles } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  duration: string;
  youtubeId: string;
  description: string;
}

const defaultPlaylist: VideoItem[] = [
  {
    id: "trailer-1",
    title: "FarmerCindy Finds a Farm (Official Animated Trailer)",
    duration: "1:45",
    youtubeId: "dQw4w9WgXcQ", // Safe placeholder, can be replaced with Cindy's video
    description: "Follow Farmer Cindy as she journeys across the world and discovers you can grow an organic farm right on your apartment balcony!",
  },
  {
    id: "trailer-2",
    title: "What's Happening to Our Farming Community? (Teaser)",
    duration: "2:10",
    youtubeId: "dQw4w9WgXcQ",
    description: "Explore why family farms and heirloom seeds matter for healthy neighborhoods and buzzing honeybees.",
  },
  {
    id: "read-aloud",
    title: "Farmer Cindy Storytime: Chapter 1 Read-Aloud",
    duration: "4:30",
    youtubeId: "dQw4w9WgXcQ",
    description: "Listen along with Farmer Cindy as she reads from the colorful pages of her first children's book.",
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
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#264653] via-[#1D6E64] to-[#2A9D8F] text-white">
                {/* Visual Sheen and Badges */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase bg-black/40 backdrop-blur-sm text-amber-200 border border-white/20">
                  <Film className="w-3.5 h-3.5" />
                  Cartoon Story Theater
                </div>

                <div className="text-5xl md:text-6xl mb-4 animate-bounce">
                  🍓🎬
                </div>

                <h3 className="text-xl md:text-2xl font-black max-w-lg mb-2">
                  {activeVideo.title}
                </h3>
                <p className="text-xs md:text-sm text-teal-100 max-w-md line-clamp-2 mb-6">
                  {activeVideo.description}
                </p>

                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl text-sm font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-xl hover:scale-105 transition active:scale-95"
                >
                  <Play className="w-5 h-5 fill-current" />
                  Play Cartoon Animation
                </button>
              </div>
            )}
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Kid-Safe Theater (Zero Tracking Cookies • No External Ads)</span>
            </div>
            <span className="font-bold">Length: {activeVideo.duration}</span>
          </div>
        </div>

        {/* Playlist Selector */}
        <div className="lg:w-1/3 flex flex-col justify-between">
          <div>
            <h4 className="font-black text-lg text-[#264653] flex items-center gap-2 mb-4">
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
                    className={`w-full p-3.5 rounded-2xl text-left transition-all duration-200 border-2 ${
                      isSelected
                        ? "bg-amber-100/80 border-[#E63946] shadow-md"
                        : "bg-white hover:bg-amber-50/50 border-amber-200/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase text-[#2A9D8F]">
                        Episode {video.id === "trailer-1" ? "1" : video.id === "trailer-2" ? "2" : "3"}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400">
                        {video.duration}
                      </span>
                    </div>
                    <div className="font-extrabold text-sm text-[#264653] mt-1 leading-snug">
                      {video.title}
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
