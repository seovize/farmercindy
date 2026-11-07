"use client";

import React, { useState } from "react";
import { ShoppingBag, ShoppingCart, BookOpen, ExternalLink, School, Sparkles, ShieldCheck, Star, ArrowUpRight, CheckCircle2, Sprout } from "lucide-react";
import { GrownUpGateModal } from "@/components/GrownUpGateModal";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/lib/products";

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
  const { addToCart } = useCart();

  const amazonUrl = `https://www.amazon.com/dp/${asin}`;

  const product = PRODUCTS.find((p) => p.asin === asin) || PRODUCTS[0];

  const handleDirectOrder = () => {
    addToCart(product, "paperback", 1);
  };

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
      {/* Dual Purchase Actions: Direct Website Order + Amazon Prime */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/* Option 1: Direct Non-Profit Website Order (With Free Seed Pack Bonus) */}
        <button
          type="button"
          onClick={handleDirectOrder}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2A9D8F] via-[#1D6E64] to-[#264653] text-white p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-left border-b-4 border-[#84CC16]"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#84CC16] text-slate-950 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-base sm:text-lg tracking-tight text-white">
                  Order Direct On Website
                </span>
                <span className="bg-[#84CC16] text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                  Bonus Gift
                </span>
              </div>
              <div className="flex items-center gap-1.5 mt-0.5 text-xs text-emerald-100 font-bold">
                <Sprout className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
                <span>Includes Free Heirloom Seeds</span>
                <span>•</span>
                <span className="text-[#E9C46A]">{price}</span>
              </div>
            </div>
          </div>
        </button>

        {/* Option 2: Amazon Prime 1-Tap Purchase */}
        <button
          type="button"
          onClick={(e) => handleRetailerClick(e, "Amazon Prime", amazonUrl)}
          className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#131921] via-[#1E293B] to-[#0F172A] text-white p-4 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-left border-b-4 border-[#FF9900]"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#FF9900] text-slate-950 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <ShoppingCart className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-base sm:text-lg tracking-tight text-white">
                  Order on Amazon Prime
                </span>
                <span className="bg-[#FF9900] text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                  Prime
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-300">
                <div className="flex items-center text-[#FF9900]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
                <span>Fast 1-2 Day Delivery</span>
                <span>•</span>
                <span className="text-[#FF9900] font-bold">{price}</span>
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
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold text-slate-700 bg-white border border-slate-200/90 shadow-sm transition-all duration-200 hover:shadow hover:-translate-y-0.5 active:translate-y-0 ${ret.hoverClass}`}
              >
                <ret.icon className="w-3.5 h-3.5 opacity-70 shrink-0" />
                <span>{ret.name}</span>
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
