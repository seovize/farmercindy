"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, ShieldCheck, Film, RotateCcw, Volume2, VolumeX, Heart, ArrowRight } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  episodeTag: string;
  duration: string;
  nativeVideo?: string;
  youtubeId?: string;
  thumbnail: string;
  description: string;
  curriculumBadge: string;
}

const defaultPlaylist: VideoItem[] = [
  {
    id: "cindy-cartoon-1",
    title: "The Adventures of Farmer Cindy: Finding the Patch & Community Donations (Official Animation)",
    episodeTag: "Official Cartoon #1 • Book 1 Finale",
    duration: "0:37",
    nativeVideo: "/videos/farmer_cindy_cartoon_1.mp4",
    thumbnail: "/images/book1_cindy_check_presentation.jpg",
    description: "Cindy's official animated cartoon! Watch Farmer Cindy's journey to find fertile earth, culminating in the heartwarming finale where the neighborhood presents her with donations and tools to build the farm.",
    curriculumBadge: "Book 1 Climax: Community Giving",
  },
  {
    id: "cindy-cartoon-2",
    title: "Farmer Cindy & The Farming Community (Official Animation)",
    episodeTag: "Official Cartoon #2",
    duration: "0:32",
    nativeVideo: "/videos/farmer_cindy_cartoon_2.mp4",
    thumbnail: "/images/cartoon_thumb_2.jpg",
    description: "Cindy's second animated cartoon short! Watch what happens when friends and neighbors join hands to help community gardens bloom.",
    curriculumBadge: "Book 2: Community Farming",
  },
];

export function KidSafeVideoPlayer() {
  const [activeVideo, setActiveVideo] = useState(defaultPlaylist[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="rounded-4xl bg-[#FFF8F0] p-6 md:p-10 border-4 border-amber-200/80 shadow-tactile my-10">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Video Frame (16:9) */}
        <div className="lg:w-2/3">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-950 border-4 border-amber-300 shadow-2xl flex items-center justify-center">
            {isPlaying ? (
              activeVideo.nativeVideo ? (
                <div className="relative w-full h-full bg-slate-950 flex items-center justify-center">
                  <video
                    ref={videoRef}
                    src={activeVideo.nativeVideo}
                    controls
                    autoPlay
                    playsInline
                    poster={activeVideo.thumbnail}
                    className="max-h-full max-w-full object-contain mx-auto"
                  />
                  {/* Floating Mute Toggle for Ease */}
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute video" : "Mute video"}
                    className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur border border-white/20 transition"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>
              ) : (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              )
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
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-[#2B6E4F] text-white shadow">
                    {activeVideo.curriculumBadge}
                  </span>
                </div>

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-[#DDA15E] hover:bg-[#c99252] text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/80">
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
                  Show Poster Card
                </button>
              )}
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Kid-Safe Theater (Zero Tracking Cookies • Safe Streaming)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 font-bold text-slate-500">
              <span>Duration: {activeVideo.duration}</span>
              <span>•</span>
              <span className="text-emerald-700 font-black">Official Cindy Animation</span>
            </div>
          </div>

          {/* Book 1 Finale Giving Connection Spotlight */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-[#0D3829] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-emerald-500/30 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#DDA15E] text-slate-950 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 fill-slate-950" />
              </div>
              <div className="text-left">
                <span className="text-xs font-black uppercase tracking-wider text-[#DDA15E] block">
                  Book 1 Finale Connection
                </span>
                <p className="text-xs text-emerald-100 font-medium mt-0.5">
                  At the end of Book 1, Farmer Cindy receives community donations that bring her farm dream to life. Your 501(c)(3) tax-deductible gift empowers this exact dream for real school children!
                </p>
              </div>
            </div>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow transition shrink-0"
            >
              <span>Sponsor Seeds &amp; Books</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Playlist Selector */}
        <div className="lg:w-1/3 flex flex-col justify-between">
          <div>
            <h4 className="font-heading font-black text-xl text-[#0D3829] flex items-center gap-2 mb-4">
              <Film className="w-5 h-5 text-[#2B6E4F]" />
              Animation &amp; Story Playlist
            </h4>

            <div className="space-y-3">
              {defaultPlaylist.map((video) => {
                const isSelected = activeVideo.id === video.id;
                return (
                  <button
                    key={video.id}
                    type="button"
                    onClick={() => handleSelectVideo(video)}
                    className={`w-full p-3 rounded-2xl text-left transition-all duration-200 border-2 flex items-center gap-3.5 ${
                      isSelected
                        ? "bg-amber-100/90 border-[#2B6E4F] shadow-md"
                        : "bg-white hover:bg-amber-50/60 border-amber-200/50"
                    }`}
                  >
                    {/* Small thumbnail preview */}
                    <div className="relative w-20 h-14 rounded-xl overflow-hidden shrink-0 bg-slate-900 border border-slate-200">
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
            <strong>Cindy's Note:</strong> Enjoy Cindy's hand-crafted animations directly in our ad-free, kid-safe theater designed for bedtime smiles and family classrooms!
          </div>
        </div>
      </div>
    </div>
  );
}
