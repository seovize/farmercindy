"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Star, BookOpen, Sparkles, Sun, Sprout } from "lucide-react";
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 120, damping: 18 });
  const mouseYSpring = useSpring(y, { stiffness: 120, damping: 18 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative rounded-3xl p-6 bg-gradient-to-b from-[#FFF8F0] to-[#FDFBF7] border-2 border-amber-200/60 shadow-tactile hover:shadow-tactile-hover transition-all duration-300 group flex flex-col justify-between"
    >
      {/* Top Meta Header */}
      <div style={{ transform: "translateZ(30px)" }} className="flex items-center justify-between mb-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white shadow-sm border border-amber-200 text-[#264653]">
          <Sparkles className="w-3.5 h-3.5 text-[#E9C46A]" />
          {volume}
        </span>
        <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-[#E63946] text-white shadow-sm">
          {ageRange}
        </span>
      </div>

      {/* Book Cover Container with 3D Depth */}
      <div
        style={{ transform: "translateZ(50px)" }}
        className="relative my-2 aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-storybook flex flex-col justify-between border-2 border-white/60 bg-slate-900"
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
              <span className="text-[10px] font-black bg-amber-400 text-slate-900 px-2.5 py-1 rounded-full shadow">
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
                  <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8 2 4 6 4 11C4 16.5 12 22 12 22C12 22 20 16.5 20 11C20 6 16 2 12 2Z" fill="#FFF" fillOpacity="0.4" />
                    <path d="M12 2C10 5 7 5 6 6" stroke="#84CC16" strokeWidth="2.5" />
                    <path d="M12 2C14 5 17 5 18 6" stroke="#84CC16" strokeWidth="2.5" />
                    <circle cx="8" cy="10" r="1.2" fill="#FFF" />
                    <circle cx="12" cy="11" r="1.2" fill="#FFF" />
                    <circle cx="16" cy="10" r="1.2" fill="#FFF" />
                  </svg>
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
                <span className="text-[10px] font-black bg-amber-400 text-slate-900 px-2.5 py-1 rounded-full shadow">
                  {badgeText}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Book Synopsis & Details */}
      <div style={{ transform: "translateZ(25px)" }} className="mt-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1 text-[#E9C46A] mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
            <span className="text-xs font-bold text-slate-600 ml-1.5">
              5.0 (Early Reader Favorite)
            </span>
          </div>

          <h4 className="font-heading font-black text-lg text-[#264653] mb-1">
            {title}
          </h4>

          <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
            {synopsis}
          </p>
        </div>

        <div className="mt-5 pt-4 border-t border-amber-200/60 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-500">
            {pages} Full-Color Pages
          </span>
          <Link
            href="/books"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold text-white bg-[#E63946] hover:bg-[#B82835] shadow-md transition"
          >
            <BookOpen className="w-3.5 h-3.5" />
            View Book & Order
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
