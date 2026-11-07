"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Sparkles, CheckCircle2, Sprout, Heart, ArrowRight, ShieldCheck, Gift } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/lib/products";

export function BundleOrderBanner() {
  const { addToCart } = useCart();
  const [selectedFormat, setSelectedFormat] = useState<"paperback" | "hardcover">("paperback");

  const bundle = PRODUCTS.find((p) => p.id === "adventure-bundle-both-books") || PRODUCTS[2];
  const format = bundle.formats.find((f) => f.id === selectedFormat) || bundle.formats[0];

  const handleOrderBundle = () => {
    addToCart(bundle, selectedFormat, 1);
  };

  return (
    <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#FFF8F0] via-[#FDFBF7] to-amber-50/90 border-3 border-amber-300 shadow-tactile p-6 sm:p-10 my-16">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-red-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Visual Dual Book Display */}
        <div className="lg:col-span-5 text-center">
          <div className="relative mx-auto max-w-xs flex justify-center items-center">
            {/* Book 1 (Tilted Left) */}
            <div className="relative w-36 h-48 sm:w-40 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white -rotate-6 transform hover:rotate-0 transition-transform duration-300 z-10 bg-slate-900">
              <Image src="/images/book1_cover.jpg" alt="Volume 1" fill className="object-cover" />
            </div>
            {/* Book 2 (Tilted Right) */}
            <div className="relative w-36 h-48 sm:w-40 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white rotate-6 transform hover:rotate-0 transition-transform duration-300 -ml-8 z-20 bg-slate-900">
              <Image src="/images/book2_cover.jpg" alt="Volume 2" fill className="object-cover" />
            </div>
          </div>

          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#E63946] text-white shadow-sm">
            <Gift className="w-3.5 h-3.5" />
            <span>Best Value • Save 15%</span>
          </div>
        </div>

        {/* Content & Ordering Controls */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="bg-amber-100 text-amber-900 text-xs font-black uppercase tracking-wider px-3 py-0.5 rounded-full">
              Complete Series Set
            </span>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              🌱 Free Heirloom Seeds Included
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#264653] leading-tight">
            The Complete 2-Book Adventure Bundle
          </h3>

          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Get both Volume 1 (<em>FarmerCindy Finds a Farm</em>) and Volume 2 (<em>What's Happening to Our Farming Community?</em>), plus our official organic strawberry seed packet and printable 12-page journal!
          </p>

          {/* Format Selection Tabs */}
          <div className="mt-4 flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setSelectedFormat("paperback")}
              className={`px-4 py-2 rounded-xl text-xs font-black transition border-2 ${
                selectedFormat === "paperback"
                  ? "bg-[#264653] text-white border-[#264653] shadow-sm"
                  : "bg-white text-slate-700 border-amber-200 hover:border-amber-300"
              }`}
            >
              Paperback Set • $26.99 (Save $3)
            </button>
            <button
              type="button"
              onClick={() => setSelectedFormat("hardcover")}
              className={`px-4 py-2 rounded-xl text-xs font-black transition border-2 ${
                selectedFormat === "hardcover"
                  ? "bg-[#264653] text-white border-[#264653] shadow-sm"
                  : "bg-white text-slate-700 border-amber-200 hover:border-amber-300"
              }`}
            >
              Hardcover Box Set • $44.99 (Save $5)
            </button>
          </div>

          {/* Order Action Row */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="button"
              onClick={handleOrderBundle}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition active:translate-y-0 text-sm"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
              <span>Add 2-Book Bundle to Basket • ${format.price}</span>
            </button>

            <span className="text-xs text-slate-500 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Ships in 24 Hours • Free US Shipping</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
