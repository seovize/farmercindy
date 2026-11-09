import React from "react";
import Link from "next/link";
import { Heart, ShieldCheck, Mail, Sprout, BookOpen, School, Film, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#08241A] text-emerald-100 pt-16 pb-12 border-t-8 border-[#DDA15E] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-emerald-900/60">
          {/* Brand & Non-Profit Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0D3829] flex items-center justify-center text-white shadow p-2 border border-emerald-500/30">
                <Sprout className="w-6 h-6 text-[#DDA15E]" />
              </div>
              <div>
                <span className="font-heading font-black text-2xl text-white block leading-none">
                  Farmer Cindy
                </span>
                <span className="text-[10px] text-[#DDA15E] font-extrabold uppercase tracking-wider">
                  FarmerCindy, Inc.
                </span>
              </div>
            </div>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              FarmerCindy, Inc. is a registered 501(c)(3) educational non-profit organization dedicated to teaching children, families, and communities about heirloom agriculture, nutrition, and growing free food.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-950/80 border border-emerald-800 text-[11px] font-bold text-[#DDA15E]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>501(c)(3) Tax-Deductible Public Charity</span>
            </div>
          </div>

          {/* Book Catalog Navigation */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#DDA15E] mb-4 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#DDA15E]" />
              <span>Book Adventures</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/90">
              <li>
                <Link href="/books" className="hover:text-white transition flex items-center gap-1">
                  <span>Volume 1: FarmerCindy Finds a Farm</span>
                </Link>
                <span className="text-[10px] text-emerald-400/80 block mt-0.5">ASIN: B0HL5F734J</span>
              </li>
              <li className="pt-1">
                <Link href="/books" className="hover:text-white transition flex items-center gap-1">
                  <span>Volume 2: What's Happening to Our Farming Community?</span>
                </Link>
                <span className="text-[10px] text-emerald-400/80 block mt-0.5">ASIN: B0HL53WTS8</span>
              </li>
              <li className="pt-1">
                <Link href="/books" className="hover:text-white transition">
                  Wholesale &amp; Classroom Orders (IngramSpark)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  School &amp; Library Author Readings
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Platform Links */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#DDA15E] mb-4 flex items-center gap-1.5">
              <Sprout className="w-4 h-4 text-[#DDA15E]" />
              <span>Explore &amp; Support</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-200/90">
              <li>
                <Link href="/mission" className="hover:text-white transition">
                  Our 501(c)(3) Mission &amp; Impact
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
                <Link href="/donate" className="hover:text-white transition font-black text-[#DDA15E]">
                  Make a 501(c)(3) Donation
                </Link>
              </li>
            </ul>
          </div>

          {/* Child Safety & Legal Disclosures */}
          <div>
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-[#DDA15E] mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>COPPA Child Safety</span>
            </h4>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              This site strictly adheres to the Children's Online Privacy Protection Act (COPPA). We do not collect personal information from children under 13. All external retail links are protected by a Grown-Up Gate.
            </p>
            <div className="mt-4 p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-[11px] text-emerald-300">
              <div className="font-bold text-white">FarmerCindy, Inc.</div>
              <div>Official 501(c)(3) Public Charity</div>
              <div className="mt-1 text-[10px] text-emerald-400/80">All Rights Reserved © {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-emerald-400/80 gap-4">
          <div className="flex items-center gap-2">
            <span>Crafted with love for young readers and living soil</span>
            <Sprout className="w-4 h-4 text-emerald-400 inline shrink-0" />
          </div>
          <div className="flex items-center gap-6">
            <span>Verified Amazon ASINs: B0HL5F734J &amp; B0HL53WTS8</span>
            <span>•</span>
            <Link href="/about" className="hover:underline text-emerald-200">
              Educator Inquiries &amp; Press
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
