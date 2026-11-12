"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, Pause, ShieldCheck, Film, RotateCcw, Volume2, VolumeX, Heart, ArrowRight, Sparkles } from "lucide-react";

export interface VideoItem {
  id: string;
  title: string;
  episodeTag: string;
  duration: string;
  nativeVideo: string;
  thumbnail: string;
  description: string;
  curriculumBadge: string;
}

export const cartoonVideos: VideoItem[] = [
  {
    id: "cindy-cartoon-1",
    title: "Book 1: Finding the Farm & The Giving Climax (Narrated Edition)",
    episodeTag: "Official Cartoon #1 • Narrated Edition",
    duration: "0:37",
    nativeVideo: "/videos/farmer_cindy_cartoon_1.mp4",
    thumbnail: "/images/book1_cindy_check_presentation.jpg",
    description: "Cindy's official Book 1 cartoon! Watch Cindy find fertile earth, culminating in the heartwarming finale where the neighborhood rallies together to present donations, heirloom seeds, and tools to build the farm.",
    curriculumBadge: "Book 1 Climax: Community Giving",
  },
  {
    id: "cindy-cartoon-2",
    title: "Book 2: What's Happening to Our Farming Community? (Voiced by Farmer Cindy)",
    episodeTag: "Official Cartoon #2 • Cindy's Voice",
    duration: "0:32",
    nativeVideo: "/videos/farmer_cindy_cartoon_2.mp4",
    thumbnail: "/images/cartoon_thumb_2.jpg",
    description: "Cindy's official Book 2 cartoon voiced by Farmer Cindy herself! A wholesome story showing what happens when neighbors and families join hands to protect green spaces and cultivate heirloom gardens.",
    curriculumBadge: "Book 2: Community Farming",
  },
];

interface KidSafeVideoPlayerProps {
  initialVideoId?: "cindy-cartoon-1" | "cindy-cartoon-2";
  standalone?: boolean;
}

export function KidSafeVideoPlayer({
  initialVideoId = "cindy-cartoon-1",
  standalone = false,
}: KidSafeVideoPlayerProps) {
  const initialVideo = cartoonVideos.find((v) => v.id === initialVideoId) || cartoonVideos[0];
  const [activeVideo, setActiveVideo] = useState<VideoItem>(initialVideo);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [needsSoundGesture, setNeedsSoundGesture] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Attempt unmuted auto-play on load with graceful tap-for-sound fallback
  useEffect(() => {
    const playVideo = async () => {
      if (!videoRef.current) return;
      try {
        videoRef.current.muted = false;
        await videoRef.current.play();
        setIsPlaying(true);
        setIsMuted(false);
        setNeedsSoundGesture(false);
      } catch (err) {
        // Browser autoplay restriction: start muted and show "Tap for Sound" badge
        if (videoRef.current) {
          videoRef.current.muted = true;
          try {
            await videoRef.current.play();
            setIsPlaying(true);
            setIsMuted(true);
            setNeedsSoundGesture(true);
          } catch (playbackErr) {
            setIsPlaying(false);
          }
        }
      }
    };

    playVideo();
  }, [activeVideo]);

  const handleSelectVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted) setNeedsSoundGesture(false);
    }
  };

  const handleUnmuteGesture = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      setNeedsSoundGesture(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      {/* Top Theater Switcher (Only if NOT standalone) */}
      {!standalone && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {cartoonVideos.map((video) => {
            const isSelected = activeVideo.id === video.id;
            return (
              <button
                key={video.id}
                type="button"
                onClick={() => handleSelectVideo(video)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 shadow-sm ${
                  isSelected
                    ? "bg-[#173D57] text-[#DDA15E] shadow-md border-2 border-sky-300/40 scale-102"
                    : "bg-white hover:bg-slate-50 text-[#173D57] border-2 border-stone-200"
                }`}
              >
                <Film className="w-4 h-4 text-[#DDA15E]" />
                <span>{video.episodeTag}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Full-Width Cinematic Video Theater Screen */}
      <div className="rounded-4xl bg-[#FFFDF9] p-4 sm:p-7 md:p-8 border-3 border-[#DDA15E]/40 shadow-tactile">
        <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-950 border-4 border-[#173D57]/30 shadow-2xl flex items-center justify-center">
          {isPlaying ? (
            <div className="relative w-full h-full bg-slate-950 flex items-center justify-center group">
              <video
                ref={videoRef}
                src={activeVideo.nativeVideo}
                controls
                autoPlay
                playsInline
                poster={activeVideo.thumbnail}
                className="max-h-full max-w-full object-contain mx-auto"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Floating Mute/Unmute Control */}
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video audio" : "Mute video audio"}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 hover:bg-black/90 text-white backdrop-blur border border-white/20 transition shadow-lg"
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-amber-300" /> : <Volume2 className="w-5 h-5 text-emerald-300" />}
              </button>

              {/* Tap for Sound Indicator (When browser forced initial mute) */}
              {needsSoundGesture && isMuted && (
                <button
                  type="button"
                  onClick={handleUnmuteGesture}
                  className="absolute bottom-4 left-4 z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DDA15E] hover:bg-[#c99252] text-slate-950 font-black text-xs uppercase tracking-wider shadow-2xl animate-bounce border-2 border-white"
                >
                  <VolumeX className="w-4 h-4 fill-slate-950" />
                  <span>Tap to Unmute Audio</span>
                </button>
              )}
            </div>
          ) : (
            <div className="relative w-full h-full group cursor-pointer" onClick={() => setIsPlaying(true)}>
              <Image
                src={activeVideo.thumbnail}
                alt={activeVideo.title}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/40" />

              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase bg-black/60 backdrop-blur-md text-amber-200 border border-white/20">
                  <Film className="w-3.5 h-3.5" />
                  {activeVideo.episodeTag}
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-black bg-[#2B6E4F] text-white shadow">
                  {activeVideo.curriculumBadge}
                </span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-[#DDA15E] hover:bg-[#c99252] text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 border-4 border-white/80">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
              </div>

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
            <div className="flex items-center gap-1.5 text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ad-Free &amp; Kid-Safe Theater</span>
            </div>
          </div>

          <div className="flex items-center gap-3 font-bold text-slate-500">
            <span>Duration: {activeVideo.duration}</span>
            <span>•</span>
            <span className="text-emerald-700 font-black">Official Animated Short</span>
          </div>
        </div>

        {/* Direct Giving Bridge */}
        <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#173D57] via-[#1A4563] to-[#0F2D42] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-sky-300/30 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDA15E] text-slate-950 flex items-center justify-center shrink-0 shadow">
              <Heart className="w-5 h-5 fill-slate-950" />
            </div>
            <div className="text-left">
              <span className="text-xs font-black uppercase tracking-wider text-[#DDA15E] block">
                The Community Mission in Real Life
              </span>
              <p className="text-xs text-sky-100 font-medium mt-0.5">
                Just like neighbors in the cartoon rallied with donations to build the farm, your tax-deductible gift directly funds seeds and soil to feed families for free!
              </p>
            </div>
          </div>
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-black text-xs uppercase tracking-wider text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow transition shrink-0"
          >
            <span>Support the Farm</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
