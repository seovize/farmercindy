"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Heart, Video, User, Menu, X, Sparkles } from "lucide-react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/books", label: "The Books" },
    { href: "/mission", label: "501(c)(3) Mission" },
    { href: "/theater", label: "Video Theater" },
    { href: "/about", label: "About & Visits" },
  ];

  return (
    <>
      {/* Top Non-Profit Mission Announcement Bar */}
      <div className="bg-[#E63946] text-white text-xs font-black tracking-wide py-2 px-4 text-center border-b border-red-700/30 flex items-center justify-center gap-2">
        <span>🌱</span>
        <span>
          Every book purchase plants seeds of healthy nutrition: 100% of proceeds support FarmerCindy, Inc. 501(c)(3) youth farming programs!
        </span>
        <Link href="/mission" className="underline font-bold hover:text-amber-200 ml-1.5 hidden sm:inline">
          Learn More →
        </Link>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-amber-200/60 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E63946] to-[#B82835] flex items-center justify-center text-white text-2xl shadow-md group-hover:scale-105 transition-transform">
              🍓
            </div>
            <div>
              <div className="font-heading font-black text-2xl leading-none text-[#264653] tracking-tight group-hover:text-[#E63946] transition-colors">
                Farmer Cindy
              </div>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#2A9D8F] flex items-center gap-1 mt-0.5">
                <span>FarmerCindy, Inc.</span>
                <span className="w-1 h-1 rounded-full bg-[#2A9D8F]" />
                <span className="text-amber-700">501(c)(3) Non-Profit</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-black transition-colors ${
                    isActive
                      ? "text-[#E63946] border-b-2 border-[#E63946] pb-1"
                      : "text-[#264653] hover:text-[#E63946]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/mission#donate"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black text-amber-950 bg-[#E9C46A] hover:bg-[#dfb758] shadow-sm transition active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
              Donate
            </Link>
            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-md transition active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5" />
              Get The Books
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/books"
              className="px-3 py-1.5 rounded-lg text-xs font-black text-white bg-[#E63946]"
            >
              Books
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-amber-100 transition"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7] border-b border-amber-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-base font-black text-[#264653] hover:text-[#E63946] py-1"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-amber-200/70 flex flex-col gap-2.5">
              <Link
                href="/mission#donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-black text-amber-950 bg-[#E9C46A]"
              >
                ❤️ Support Our 501(c)(3) Mission
              </Link>
              <Link
                href="/books"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-black text-white bg-[#E63946]"
              >
                📚 Order Book 1 & Book 2
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
