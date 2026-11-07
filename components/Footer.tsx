import React from "react";
import Link from "next/link";
import { Heart, ShieldCheck, Mail, Sparkles, Sprout, BookOpen, School, Film, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#264653] text-white pt-16 pb-12 border-t-8 border-[#E9C46A] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-teal-800/80">
          {/* Brand & Non-Profit Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E63946] flex items-center justify-center text-white shadow p-2">
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
                <span className="font-heading font-black text-2xl text-white block leading-none">
                  Farmer Cindy
                </span>
                <span className="text-[10px] text-amber-300 font-extrabold uppercase tracking-wider">
                  FarmerCindy, Inc.
                </span>
              </div>
            </div>
            <p className="text-xs text-teal-100/90 leading-relaxed">
              FarmerCindy, Inc. is a registered 501(c)(3) educational non-profit organization dedicated to teaching children, families, and communities about heirloom agriculture, nutrition, and growing free food.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-teal-800/80 border border-teal-700 text-[11px] font-bold text-amber-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>501(c)(3) Tax-Deductible Charity</span>
            </div>
          </div>

          {/* Book Catalog Navigation */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-amber-300 mb-4 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>Book Adventures</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-teal-100">
              <li>
                <Link href="/books" className="hover:text-white transition flex items-center gap-1">
                  <span>Volume 1: FarmerCindy Finds a Farm</span>
                </Link>
                <span className="text-[10px] text-teal-300/80 block mt-0.5">ASIN: B0HL5F734J</span>
              </li>
              <li className="pt-1">
                <Link href="/books" className="hover:text-white transition flex items-center gap-1">
                  <span>Volume 2: What's Happening to Our Farming Community?</span>
                </Link>
                <span className="text-[10px] text-teal-300/80 block mt-0.5">ASIN: B0HL53WTS8</span>
              </li>
              <li className="pt-1">
                <Link href="/books" className="hover:text-white transition">
                  Wholesale & Classroom Orders (IngramSpark)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  School & Library Author Readings
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Platform Links */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-amber-300 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Explore & Support</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-teal-100">
              <li>
                <Link href="/mission" className="hover:text-white transition">
                  Our 501(c)(3) Mission & Impact
                </Link>
              </li>
              <li>
                <Link href="/theater" className="hover:text-white transition">
                  Cartoon Video Theater
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Author Cindy
                </Link>
              </li>
              <li>
                <Link href="/#activity-kit" className="hover:text-white transition">
                  Free 12-Page Printable Activity Kit
                </Link>
              </li>
              <li>
                <Link href="/mission#donate" className="hover:text-white transition">
                  Make a Tax-Deductible Donation
                </Link>
              </li>
            </ul>
          </div>

          {/* Child Safety & Legal Disclosures */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-amber-300 mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>COPPA Child Safety</span>
            </h4>
            <p className="text-xs text-teal-100/90 leading-relaxed">
              This site strictly adheres to the Children's Online Privacy Protection Act (COPPA). We do not collect personal information from children under 13. All external retail links are protected by a Grown-Up Gate.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-teal-800/40 border border-teal-700/60 text-[11px] text-teal-200">
              <div className="font-bold text-white">FarmerCindy, Inc.</div>
              <div>Official 501(c)(3) Public Charity</div>
              <div className="mt-1 text-[10px] text-teal-300">All Rights Reserved © {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-teal-300 gap-4">
          <div className="flex items-center gap-2">
            <span>Crafted with love for young readers and heirloom soil</span>
            <Sprout className="w-4 h-4 text-emerald-400 inline shrink-0" />
          </div>
          <div className="flex items-center gap-6">
            <span>Verified Amazon ASINs: B0HL5F734J & B0HL53WTS8</span>
            <span>•</span>
            <Link href="/about" className="hover:underline text-teal-200">
              Educator Inquiries & Press
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
