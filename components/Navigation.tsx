"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Heart, Film, User, Menu, X, Sparkles, Sprout, Download, School, ShieldCheck } from "lucide-react";
import { CartButton } from "@/components/CartButton";
import { CartDrawer } from "@/components/CartDrawer";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/books", label: "The Books" },
    { href: "/donate", label: "Donate 501(c)(3)" },
    { href: "/mission", label: "Mission & Impact" },
    { href: "/theater", label: "Video Theater" },
    { href: "/about", label: "About Cindy" },
  ];

  return (
    <>
      {/* Top Non-Profit Mission Announcement Bar (Kiss The Ground / Farmland.org Style) */}
      <div className="bg-[#08241A] text-emerald-100 text-xs font-black tracking-wide py-2.5 px-4 text-center border-b border-emerald-900/60 flex items-center justify-center gap-2 relative z-50">
        <Sprout className="w-4 h-4 text-[#DDA15E] animate-pulse-subtle shrink-0" />
        <span className="hidden sm:inline">
          FarmerCindy, Inc. is an official 501(c)(3) public charity. 100% of book proceeds and gifts directly fund heirloom gardens for Title I schools!
        </span>
        <span className="sm:hidden">
          501(c)(3) Public Charity • Heirloom Soil &amp; Literacy
        </span>
        <Link
          href="/donate"
          className="inline-flex items-center gap-1 underline font-black text-[#DDA15E] hover:text-white ml-1.5 transition-colors"
        >
          <span>Donate Now</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#3B2314]/15 shadow-sm transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 md:h-20 flex items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2B6E4F] rounded-2xl p-1">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-[#0D3829] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform p-2 shrink-0 border border-emerald-500/30">
              <Sprout className="w-6 h-6 text-[#DDA15E]" />
            </div>
            <div>
              <div className="font-heading font-black text-xl md:text-2xl leading-none text-[#0D3829] tracking-tight group-hover:text-[#2B6E4F] transition-colors">
                Farmer Cindy
              </div>
              <div className="text-[10px] font-black uppercase tracking-wider text-[#2B6E4F] flex items-center gap-1.5 mt-0.5">
                <span>FarmerCindy, Inc.</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#DDA15E]" />
                <span className="text-[#3B2314] font-extrabold">501(c)(3) Non-Profit</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isDonate = link.href === "/donate";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-black px-3 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#0D3829] text-[#DDA15E] shadow-sm font-black"
                      : isDonate
                      ? "text-[#0D3829] bg-[#DDA15E]/30 hover:bg-[#DDA15E] hover:text-slate-950 border border-[#DDA15E]/60 font-black"
                      : "text-[#3B2314]/80 hover:text-[#0D3829] hover:bg-emerald-50"
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
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-black text-[#2B6E4F] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Free Activity Kit</span>
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c58b43] shadow-sm transition active:scale-95 uppercase tracking-wider border border-amber-400"
            >
              <Heart className="w-3.5 h-3.5 fill-slate-950 text-slate-950" />
              <span>Donate</span>
            </Link>

            <Link
              href="/books"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black text-white bg-[#0D3829] hover:bg-[#164E3D] shadow-md transition active:scale-95 uppercase tracking-wider border border-emerald-500/30"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#DDA15E]" />
              <span>The Books</span>
            </Link>

            <CartButton />
          </div>

          {/* Mobile Right Quick Action & Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/donate"
              className="px-2.5 py-1.5 rounded-xl text-xs font-black text-slate-950 bg-[#DDA15E] shadow-sm flex items-center gap-1"
            >
              <Heart className="w-3 h-3 fill-slate-950" />
              <span>Donate</span>
            </Link>
            <CartButton />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#0D3829] hover:bg-emerald-100 transition focus:outline-none focus:ring-2 focus:ring-[#2B6E4F]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF7F2] border-b-2 border-[#3B2314]/20 px-6 py-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const isDonate = link.href === "/donate";
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-black py-2 px-3 rounded-xl transition ${
                    isActive
                      ? "bg-[#0D3829] text-[#DDA15E]"
                      : isDonate
                      ? "bg-[#DDA15E] text-slate-950 font-black"
                      : "text-[#3B2314] hover:text-[#0D3829] hover:bg-emerald-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-[#3B2314]/15 flex flex-col gap-2.5">
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-black text-slate-950 bg-[#DDA15E] flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm"
              >
                <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Make a 501(c)(3) Tax-Deductible Donation</span>
              </Link>
              <Link
                href="/#activity-kit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-black text-[#0D3829] bg-emerald-100 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#2B6E4F]" />
                <span>Download Free 12-Page Activity Kit</span>
              </Link>
              <Link
                href="/books"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-black text-white bg-[#0D3829] flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <BookOpen className="w-4 h-4 text-[#DDA15E]" />
                <span>Order Books on Amazon Prime</span>
              </Link>
            </div>
          </div>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
