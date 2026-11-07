"use client";

import React, { useState } from "react";
import { ShoppingCart, BookOpen, ExternalLink, School, Sparkles, ShieldCheck, Star, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GrownUpGateModal } from "@/components/GrownUpGateModal";

interface MultiRetailerRowProps {
  asin: string;
  bookTitle: string;
  bnbUrl?: string;
  luluUrl?: string;
  ingramSparkUrl?: string;
  price?: string;
}

export function MultiRetailerRow({
  asin,
  bookTitle,
  bnbUrl = "https://www.barnesandnoble.com/s/Farmer+Cindy",
  luluUrl = "https://www.lulu.com/spotlight/FarmerCindy",
  ingramSparkUrl = "https://www.ingramcontent.com/retailers",
  price = "$14.99",
}: MultiRetailerRowProps) {
  const [gateOpen, setGateOpen] = useState(false);
  const [selectedRetailer, setSelectedRetailer] = useState({ name: "", url: "" });

  const amazonUrl = `https://www.amazon.com/dp/${asin}`;

  const secondaryRetailers = [
    {
      name: "Barnes & Noble",
      label: "B&N Member Perks",
      icon: BookOpen,
      url: bnbUrl,
      hoverClass: "hover:border-[#002244] hover:text-[#002244]",
    },
    {
      name: "Lulu Bookstore",
      label: "Author Signed Edition",
      icon: ExternalLink,
      url: luluUrl,
      hoverClass: "hover:border-[#E63946] hover:text-[#E63946]",
    },
    {
      name: "IngramSpark",
      label: "Schools & Libraries Wholesale",
      icon: School,
      url: ingramSparkUrl,
      hoverClass: "hover:border-[#2A9D8F] hover:text-[#2A9D8F]",
    },
  ];

  const handleRetailerClick = (e: React.MouseEvent, name: string, url: string) => {
    e.preventDefault();
    if (typeof window !== "undefined" && sessionStorage.getItem("grownup_gate_verified") === "true") {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    setSelectedRetailer({ name, url });
    setGateOpen(true);
  };

  return (
    <div className="w-full my-4">
      {/* Primary Hero CTA: Amazon Prime 1-Tap Purchase */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent p-1 rounded-3xl border border-amber-200">
        <button
          type="button"
          onClick={(e) => handleRetailerClick(e, "Amazon Prime", amazonUrl)}
          className="w-full group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#131921] via-[#1E293B] to-[#0F172A] text-white p-4 sm:p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 border-b-4 border-[#FF9900]"
        >
          {/* Subtle Ambient Glow on Hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF9900]/10 via-transparent to-[#FF9900]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            {/* Left: Amazon Prime Branding & Proof */}
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-xl bg-[#FF9900] text-slate-950 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-200">
                <ShoppingCart className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-black text-lg sm:text-xl tracking-tight text-white">
                    Order on Amazon Prime
                  </span>
                  <span className="bg-[#FF9900] text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                    Prime
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-300">
                  <div className="flex items-center text-[#FF9900]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-400">•</span>
                  <span>Paperback & Hardcover</span>
                  <span className="hidden sm:inline text-slate-400">•</span>
                  <span className="hidden sm:inline text-emerald-400 font-bold">In Stock</span>
                </div>
              </div>
            </div>

            {/* Right: Price & Direct Arrow */}
            <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-700/60">
              <div className="text-left sm:text-right">
                <div className="text-[10px] uppercase tracking-wider text-slate-400">Starting at</div>
                <div className="text-xl font-heading font-black text-[#FF9900]">{price}</div>
              </div>
              <div className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#FF9900] text-slate-950 font-black text-xs uppercase tracking-wider shadow group-hover:bg-[#ffaa22] transition-colors">
                <span>Buy Now</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Secondary Retailers Bar: Clean, uncluttered, horizontal pills */}
      <div className="mt-4 pt-3 border-t border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
            Also Available At:
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {secondaryRetailers.map((ret) => (
              <button
                key={ret.name}
                type="button"
                onClick={(e) => handleRetailerClick(e, ret.name, ret.url)}
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-slate-700 bg-white border border-slate-200/90 shadow-sm transition-all duration-200 hover:shadow hover:-translate-y-0.5 active:translate-y-0 ${ret.hoverClass}`}
              >
                <ret.icon className="w-3.5 h-3.5 opacity-70 shrink-0" />
                <span>{ret.name}</span>
                <span className="text-[10px] text-slate-400 font-normal hidden md:inline">
                  ({ret.label})
                </span>
                <ArrowUpRight className="w-3 h-3 opacity-50 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* COPPA Child Safety & 501(c)(3) Reassurance */}
      <div className="mt-3 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] text-slate-500 text-center">
        <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          Protected by COPPA Grown-Up Gate
        </span>
        <span className="text-slate-300">•</span>
        <span>100% of profits fund free youth farming kits</span>
        <span className="text-slate-300">•</span>
        <span className="text-slate-600 font-bold">ASIN: {asin}</span>
      </div>

      {/* Grown-Up Gate Modal Component */}
      <GrownUpGateModal
        isOpen={gateOpen}
        onClose={() => setGateOpen(false)}
        targetUrl={selectedRetailer.url}
        retailerName={selectedRetailer.name}
      />
    </div>
  );
}
