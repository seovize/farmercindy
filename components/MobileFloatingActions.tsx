"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Heart, ArrowRight } from "lucide-react";

export function MobileFloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 inset-x-3 z-40 md:hidden animate-in slide-in-from-bottom-5 duration-300">
      <div className="p-2 rounded-2xl bg-[#FAF7F2]/95 backdrop-blur-md border-2 border-[#173D57]/20 shadow-2xl flex items-center justify-between gap-2 max-w-sm mx-auto">
        <Link
          href="/books"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white hover:bg-slate-50 text-[#173D57] font-extrabold text-xs uppercase tracking-wider border border-stone-200 shadow-xs"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#2B6E4F]" />
          <span>The Books</span>
        </Link>

        <Link
          href="/donate"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#DDA15E] hover:bg-[#c58b43] text-slate-950 font-black text-xs uppercase tracking-wider shadow-sm border border-amber-400"
        >
          <Heart className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
          <span>Support Farm</span>
        </Link>
      </div>
    </div>
  );
}
