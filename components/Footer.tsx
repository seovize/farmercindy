import React from "react";
import Link from "next/link";
import { Heart, ShieldCheck, Mail, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#264653] text-white pt-16 pb-12 border-t-8 border-[#E9C46A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-teal-800/80">
          {/* Brand & Non-Profit Mission */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#E63946] flex items-center justify-center text-white text-xl shadow">
                🍓
              </div>
              <span className="font-heading font-black text-2xl text-white">
                Farmer Cindy
              </span>
            </div>
            <p className="text-xs text-teal-100 leading-relaxed">
              FarmerCindy, Inc. is a registered 501(c)(3) educational non-profit organization dedicated to teaching children, families, and communities about heirloom agriculture, nutrition, and growing free food.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-800/60 border border-teal-700 text-[11px] font-bold text-amber-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>501(c)(3) Tax-Deductible Charity</span>
            </div>
          </div>

          {/* Book Catalog Navigation */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-amber-300 mb-4">
              Book Adventures
            </h4>
            <ul className="space-y-2.5 text-xs text-teal-100">
              <li>
                <Link href="/books" className="hover:text-white transition">
                  • Book 1: FarmerCindy Finds a Farm (ASIN: B0HL5F734J)
                </Link>
              </li>
              <li>
                <Link href="/books" className="hover:text-white transition">
                  • Book 2: What's Happening to Our Farming Community?
                </Link>
              </li>
              <li>
                <Link href="/books" className="hover:text-white transition">
                  • Wholesale & Classroom Orders (IngramSpark)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  • School & Library Author Readings
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Platform Links */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-amber-300 mb-4">
              Explore & Support
            </h4>
            <ul className="space-y-2.5 text-xs text-teal-100">
              <li>
                <Link href="/mission" className="hover:text-white transition">
                  • Our 501(c)(3) Mission & Impact
                </Link>
              </li>
              <li>
                <Link href="/theater" className="hover:text-white transition">
                  • Cartoon Video Theater
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  • About Author Cindy
                </Link>
              </li>
              <li>
                <Link href="/mission#donate" className="hover:text-white transition">
                  • Make a Tax-Deductible Donation
                </Link>
              </li>
            </ul>
          </div>

          {/* Child Safety & Legal Disclosures */}
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wider text-amber-300 mb-4">
              COPPA Child Safety
            </h4>
            <p className="text-xs text-teal-100 leading-relaxed">
              This site strictly adheres to the Children's Online Privacy Protection Act (COPPA). We do not collect personal information from children under 13. All external store links are protected by a Grown-Up Gate.
            </p>
            <div className="mt-4 text-[11px] text-teal-200">
              <strong>FarmerCindy, Inc.</strong>
              <br />
              All Rights Reserved © {new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-teal-300 gap-4">
          <div>
            Crafted with love for young readers and heirloom soil 🌱
          </div>
          <div className="flex items-center gap-6">
            <span>Amazon ASIN: B0HL5F734J & B0HL53WTS8</span>
            <span>•</span>
            <Link href="/about" className="hover:underline">
              Contact & Press
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
