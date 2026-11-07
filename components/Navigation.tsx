"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Heart, Film, User, Menu, X, Sparkles, Sprout, Download, School } from "lucide-react";

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
      <div className="bg-gradient-to-r from-[#E63946] via-[#B82835] to-[#E63946] text-white text-xs font-black tracking-wide py-2.5 px-4 text-center border-b border-red-700/30 flex items-center justify-center gap-2 relative z-50">
        <Sprout className="w-4 h-4 text-amber-300 animate-pulse-subtle shrink-0" />
        <span className="hidden sm:inline">
          Every book purchased plants seeds of healthy nutrition: 100% of proceeds support FarmerCindy, Inc. 501(c)(3) youth farming programs!
        </span>
        <span className="sm:hidden">
          100% of book proceeds fund youth farming literacy!
        </span>
        <Link
          href="/mission"
          className="inline-flex items-center gap-1 underline font-bold text-amber-200 hover:text-white ml-1.5 transition-colors"
        >
          <span>Learn More</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-amber-200/70 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 md:h-20 flex items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E63946] rounded-2xl p-1">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[#E63946] to-[#B82835] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform p-2 shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 4 6 4 11C4 16.5 12 22 12 22C12 22 20 16.5 20 11C20 6 16 2 12 2Z" fill="#FFF" fillOpacity="0.2" />
                <path d="M12 2C10 5 7 5 6 6" stroke="#84CC16" strokeWidth="2.5" />
                <path d="M12 2C14 5 17 5 18 6" stroke="#84CC16" strokeWidth="2.5" />
                <circle cx="8" cy="10" r="1" fill="#FFF" />
                <circle cx="12" cy="11" r="1" fill="#FFF" />
                <circle cx="16" cy="10" r="1" fill="#FFF" />
                <circle cx="10" cy="15" r="1" fill="#FFF" />
                <circle cx="14" cy="15" r="1" fill="#FFF" />
              </svg>
            </div>
            <div>
              <div className="font-heading font-black text-xl md:text-2xl leading-none text-[#264653] tracking-tight group-hover:text-[#E63946] transition-colors">
                Farmer Cindy
              </div>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#2A9D8F] flex items-center gap-1.5 mt-0.5">
                <span>FarmerCindy, Inc.</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#E9C46A]" />
                <span className="text-amber-800 font-extrabold">501(c)(3) Non-Profit</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-black px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-amber-100 text-[#E63946] shadow-sm font-black"
                      : "text-[#264653] hover:text-[#E63946] hover:bg-amber-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-2.5">
            <Link
              href="/#activity-kit"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black text-[#2A9D8F] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Free Activity Kit</span>
            </Link>

            <Link
              href="/mission#donate"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-black text-amber-950 bg-[#E9C46A] hover:bg-[#dfb758] shadow-sm transition active:scale-95"
            >
              <Heart className="w-3.5 h-3.5 fill-[#E63946] text-[#E63946]" />
              <span>Donate</span>
            </Link>

            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-md transition active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Get The Books</span>
            </Link>
          </div>

          {/* Mobile Right Quick Action & Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/books"
              className="px-3 py-1.5 rounded-xl text-xs font-black text-white bg-[#E63946] shadow-sm"
            >
              Books
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-amber-100 transition focus:outline-none focus:ring-2 focus:ring-[#E63946]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FDFBF7] border-b-2 border-amber-200 px-6 py-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-black py-2 px-3 rounded-xl transition ${
                    isActive
                      ? "bg-amber-100 text-[#E63946]"
                      : "text-[#264653] hover:text-[#E63946] hover:bg-amber-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-amber-200/80 flex flex-col gap-2.5">
              <Link
                href="/#activity-kit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-black text-emerald-900 bg-emerald-100 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#2A9D8F]" />
                <span>Download Free 12-Page Activity Kit</span>
              </Link>
              <Link
                href="/mission#donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-black text-amber-950 bg-[#E9C46A] flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-[#E63946] text-[#E63946]" />
                <span>Support Our 501(c)(3) Mission</span>
              </Link>
              <Link
                href="/books"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-black text-white bg-[#E63946] flex items-center justify-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Order Books on Amazon Prime</span>
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
