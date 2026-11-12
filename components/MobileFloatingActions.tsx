"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BookOpen, Heart } from "lucide-react";

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
      <div className="p-2 rounded-2xl bg-[#0B1017]/95 backdrop-blur-md border border-sky-400/30 shadow-2xl flex items-center justify-between gap-2 max-w-sm mx-auto">
        <Link
          href="/books"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#1E5AA8] hover:bg-[#2563EB] text-white font-extrabold text-xs uppercase tracking-wider border border-sky-400/30 shadow-xs"
        >
          <BookOpen className="w-3.5 h-3.5 text-[#FACC15]" />
          <span>The Books</span>
        </Link>

        <Link
          href="/donate"
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#E11D48] hover:bg-[#F43F5E] text-white font-black text-xs uppercase tracking-wider shadow-sm border border-rose-400/40"
        >
          <Heart className="w-3.5 h-3.5 fill-white text-white" />
          <span>Support Farm</span>
        </Link>
      </div>
    </div>
  );
}
