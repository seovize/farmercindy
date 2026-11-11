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

      {/* Book Cover Container: Clean, Untouched, Zero Obscuring Overlays */}
      <div className="relative my-2 aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl border border-stone-200 bg-slate-900">
        {coverImage ? (
          <div className="relative w-full h-full">
            <Image
              src={coverImage}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover group-hover:scale-102 transition-transform duration-500"
              priority={asin === "B0HL5F734J"}
            />
            {/* Subtle Realistic Book Spine Highlight */}
            <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/30 via-white/10 to-transparent pointer-events-none" />
          </div>
        ) : (
          <div className={`relative w-full h-full p-6 text-white bg-gradient-to-br ${gradient} flex flex-col justify-between`}>
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded-lg bg-black/30 text-[10px] font-black uppercase tracking-widest text-amber-200">
                The Adventures of Farmer Cindy
              </div>
              <h3 className="mt-3 text-2xl font-black leading-tight">
                {title}
              </h3>
            </div>
          </div>
        )}
      </div>

      {/* Book Metadata & Synopsis */}
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <h3 className="font-heading font-black text-xl text-[#173D57] leading-snug">
              {title}
            </h3>
            <span className="text-[10px] font-black bg-[#EAF4FA] text-[#173D57] border border-sky-200 px-2.5 py-0.5 rounded-full shrink-0">
              {badgeText}
            </span>
          </div>

          <p className="text-xs font-bold text-[#2B6E4F]">
            {subtitle}
          </p>

          <p className="mt-3 text-xs text-slate-600 leading-relaxed font-medium">
            {synopsis}
          </p>
        </div>

        {/* Dedicated Retailer Links for this specific book */}
        <div className="mt-5 pt-4 border-t border-stone-200/80 space-y-2.5">
          <div className="flex items-center justify-between text-xs text-slate-500 font-bold mb-1">
            <span>{pages} Illustrated Pages</span>
            <span className="text-[#173D57] font-black">ASIN: {asin}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={`https://www.amazon.com/dp/${asin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-xl bg-[#FF9900] hover:bg-[#e68a00] text-slate-950 text-xs font-black text-center transition flex items-center justify-center gap-1 shadow-2xs"
            >
              <span>Amazon Prime</span>
            </a>
            <Link
              href={`/books#${asin}`}
              className="py-2 px-3 rounded-xl bg-[#173D57] hover:bg-[#112d40] text-white text-xs font-bold text-center transition flex items-center justify-center gap-1 shadow-2xs"
            >
              <span>View Edition</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
