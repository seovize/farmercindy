"use client";

import React from "react";
import { BookOpen, Sun, Sprout } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface TiltBookCardProps {
  asin: string;
  title: string;
  subtitle: string;
  volume: string;
  ageRange: string;
  pages: number;
  gradient: string;
  accentColor: string;
  coverImage?: string;
  synopsis: string;
  badgeText: string;
}

export function TiltBookCard({
  asin,
  title,
  subtitle,
  volume,
  ageRange,
  pages,
  gradient,
  accentColor,
  coverImage,
  synopsis,
  badgeText,
}: TiltBookCardProps) {
  return (
    <div
      className="relative rounded-3xl p-6 bg-gradient-to-b from-[#FFFDF9] to-[#FAF7F2] border-2 border-amber-200/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
    >
      {/* Top Meta Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white shadow-sm border border-amber-200 text-[#0D3829]">
          <BookOpen className="w-3.5 h-3.5 text-[#2B6E4F]" />
          {volume}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#2B6E4F] text-white shadow-sm">
          {ageRange}
        </span>
      </div>

      {/* Book Cover Container with Flat Tactile Depth */}
      <div
        className="relative my-2 aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col justify-between border-2 border-white/80 bg-slate-900"
      >
        {coverImage ? (
          <div className="relative w-full h-full">
            <Image
              src={coverImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority={asin === "B0HL5F734J"}
            />
            {/* Book Spine Highlight Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-5 bg-gradient-to-r from-black/50 via-white/20 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
              <span className="text-[11px] font-black text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/20">
                Official Edition
              </span>
              <span className="text-[10px] font-black bg-[#DDA15E] text-[#0D3829] px-2.5 py-1 rounded-full shadow">
                {badgeText}
              </span>
            </div>
          </div>
        ) : (
          <div className={`relative w-full h-full p-6 text-white bg-gradient-to-br ${gradient} flex flex-col justify-between`}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/25 via-transparent to-black/30 pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/40 via-white/20 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-lg bg-black/30 backdrop-blur-sm text-[10px] font-black uppercase tracking-widest text-amber-200 border border-white/20">
                The Adventures of Farmer Cindy
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black leading-tight drop-shadow-md">
                {title}
              </h3>
              <p className="mt-1 text-xs text-amber-100 font-bold opacity-90 drop-shadow">
                {subtitle}
              </p>
            </div>

            <div className="relative z-10 my-auto text-center py-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/40 shadow-xl group-hover:scale-110 transition-transform duration-300 p-4">
                {asin === "B0HL5F734J" ? (
                  <Sprout className="w-10 h-10 text-emerald-200" />
                ) : (
                  <Sun className="w-10 h-10 text-amber-200" />
                )}
              </div>
            </div>

            <div className="relative z-10 flex items-end justify-between border-t border-white/20 pt-3">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-amber-200 font-bold">Author</div>
                <div className="font-extrabold text-sm text-white">Farmer Cindy</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] font-black bg-[#DDA15E] text-[#0D3829] px-2.5 py-1 rounded-full shadow">
                  {badgeText}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Book Metadata & Synopsis */}
      <div className="mt-4">
        <h3 className="font-heading font-black text-xl text-[#0D3829] leading-snug">
          {title}
        </h3>
        <p className="text-xs font-bold text-[#2B6E4F] mt-0.5">
          {subtitle}
        </p>

        <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
          {synopsis}
        </p>

        <div className="mt-4 pt-3 border-t border-amber-200/60 flex items-center justify-between text-xs text-slate-500 font-bold">
          <span>{pages} Illustrated Pages</span>
          <span className="text-[#0D3829] font-black">ASIN: {asin}</span>
        </div>
      </div>
    </div>
  );
}
