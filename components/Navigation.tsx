"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Heart, Menu, X, Sprout } from "lucide-react";
import { CartButton } from "@/components/CartButton";
import { CartDrawer } from "@/components/CartDrawer";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/mission", label: "Our Mission" },
    { href: "/books", label: "The Books" },
    { href: "/theater", label: "Watch" },
    { href: "/about", label: "About FarmerCindy" },
  ];

  return (
    <>
      {/* Top Book-Blue & Community Mission Bar */}
      <div className="bg-[#0F3D6E] text-white text-xs font-semibold tracking-wide py-2.5 px-4 text-center border-b border-sky-400/25 flex items-center justify-center gap-2 relative z-50">
        <Sprout className="w-4 h-4 text-emerald-400 shrink-0" />
        <span className="hidden sm:inline">
          Heirloom seeds, living soil, and growing vibrant food together as a community.
        </span>
        <span className="sm:hidden">
          Heirloom Farming &amp; Community Mission
        </span>
        <Link
          href="/donate"
          className="inline-flex items-center gap-1 font-black text-[#FACC15] hover:text-white ml-1.5 transition-colors underline"
        >
          <span>Support the Farm</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* Main Sticky Obsidian Black Header */}
      <header className="sticky top-0 z-40 bg-[#06080A]/95 backdrop-blur-md border-b border-white/10 shadow-lg transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 md:h-20 flex items-center justify-between">
          {/* Logo & Brand Wordmark */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-2xl p-1">
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-[#0F3D6E] to-[#1E5AA8] flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform p-2 shrink-0 border border-sky-400/40">
              <Sprout className="w-6 h-6 text-[#FACC15]" />
            </div>
            <div>
              <div className="font-heading font-black text-xl md:text-2xl leading-none text-white tracking-tight group-hover:text-sky-300 transition-colors flex items-center gap-1.5">
                <span>FarmerCindy</span>
                <span className="text-base md:text-lg" aria-hidden="true">🍒🍓</span>
              </div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mt-1 whitespace-nowrap">
                <span>Heirloom Farming &amp; Community</span>
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
                  className={`text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#1E5AA8] text-white shadow-md shadow-sky-500/25 font-black border border-sky-300/40"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black text-white bg-[#E11D48] hover:bg-[#F43F5E] shadow-md shadow-rose-500/25 transition active:scale-95 uppercase tracking-wider border border-rose-400/40"
            >
              <Heart className="w-4 h-4 fill-white text-white" />
              <span>Donate</span>
            </Link>

            <CartButton />
          </div>

          {/* Mobile Right Quick Action & Hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <Link
              href="/donate"
              className="px-3 py-1.5 rounded-xl text-xs font-black text-white bg-[#E11D48] shadow-sm flex items-center gap-1"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Donate</span>
            </Link>
            <CartButton />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B1017] border-b-2 border-sky-400/20 px-6 py-6 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block text-base font-black py-2.5 px-3.5 rounded-xl transition ${
                    isActive
                      ? "bg-[#1E5AA8] text-white border border-sky-400/30"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="/donate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-black text-white bg-[#E11D48] flex items-center justify-center gap-2 uppercase tracking-wider shadow-sm"
              >
                <Heart className="w-4 h-4 fill-white text-white" />
                <span>Support the Farm • Donate</span>
              </Link>
              <Link
                href="/books"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-xl font-black text-black bg-[#FACC15] flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <BookOpen className="w-4 h-4 text-black" />
                <span>The Books &amp; Shop</span>
              </Link>
            </div>
          </div>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
