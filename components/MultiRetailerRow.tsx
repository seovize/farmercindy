"use client";

import React, { useState } from "react";
import { ShoppingCart, BookOpen, ExternalLink, School, Sparkles, ShieldCheck, Check } from "lucide-react";
import { GrownUpGateModal } from "@/components/GrownUpGateModal";

interface MultiRetailerRowProps {
  asin: string;
  bookTitle: string;
  bnbUrl?: string;
  luluUrl?: string;
  ingramSparkUrl?: string;
}

export function MultiRetailerRow({
  asin,
  bookTitle,
  bnbUrl = "https://www.barnesandnoble.com/s/Farmer+Cindy",
  luluUrl = "https://www.lulu.com/spotlight/FarmerCindy",
  ingramSparkUrl = "https://www.ingramcontent.com/retailers",
}: MultiRetailerRowProps) {
  const [gateOpen, setGateOpen] = useState(false);
  const [selectedRetailer, setSelectedRetailer] = useState({ name: "", url: "" });

  const retailers = [
    {
      name: "Amazon Prime",
      badge: "⭐ Most Popular • Fast Delivery",
      tagline: "Paperback, Hardcover & Kindle",
      icon: ShoppingCart,
      url: `https://www.amazon.com/dp/${asin}`,
      isPrimary: true,
      buttonStyle: "bg-gradient-to-br from-[#232F3E] via-[#1E293B] to-[#0F172A] text-white border-b-4 border-[#FF9900] ring-2 ring-[#FF9900]/50 sm:col-span-2 lg:col-span-1 shadow-lg",
      badgeStyle: "bg-[#FF9900] text-black font-black",
    },
    {
      name: "Barnes & Noble",
      badge: "In-Store & Online",
      tagline: "B&N Member Points",
      icon: BookOpen,
      url: bnbUrl,
      isPrimary: false,
      buttonStyle: "bg-[#002244] hover:bg-[#00172e] text-white border-b-4 border-emerald-400",
      badgeStyle: "bg-emerald-500 text-white font-bold",
    },
    {
      name: "Lulu Bookstore",
      badge: "Author Direct",
      tagline: "Signed Printings",
      icon: ExternalLink,
      url: luluUrl,
      isPrimary: false,
      buttonStyle: "bg-[#E63946] hover:bg-[#B82835] text-white border-b-4 border-amber-300",
      badgeStyle: "bg-white text-[#E63946] font-extrabold",
    },
    {
      name: "IngramSpark",
      badge: "Wholesale",
      tagline: "Schools & Libraries",
      icon: School,
      url: ingramSparkUrl,
      isPrimary: false,
      buttonStyle: "bg-[#2A9D8F] hover:bg-[#1D6E64] text-white border-b-4 border-teal-200",
      badgeStyle: "bg-[#E9C46A] text-[#264653] font-black",
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
    <>
      <div className="w-full my-6">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#E9C46A]" />
          <span className="text-xs font-black uppercase tracking-wider text-[#264653]">
            Choose Your Preferred Bookstore:
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {retailers.map((ret) => (
            <button
              key={ret.name}
              type="button"
              onClick={(e) => handleRetailerClick(e, ret.name, ret.url)}
              className={`flex flex-col justify-between p-4 rounded-2xl shadow-md text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-xl active:translate-y-0 ${ret.buttonStyle}`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className={`text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full ${ret.badgeStyle}`}>
                  {ret.badge}
                </span>
                <ret.icon className="w-4 h-4 opacity-80 shrink-0" />
              </div>

              <div className="mt-4">
                <div className="text-[11px] opacity-80 uppercase tracking-wide">Order Today On</div>
                <div className="font-extrabold text-base leading-tight mt-0.5">{ret.name}</div>
                <div className="text-xs opacity-75 mt-1">{ret.tagline}</div>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-3 text-xs text-slate-500 text-center flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline shrink-0" />
          <span>Protected by COPPA Grown-Up Gate</span>
          <span>•</span>
          <span>100% of proceeds fund youth farming literacy</span>
        </p>
      </div>

      <GrownUpGateModal
        isOpen={gateOpen}
        onClose={() => setGateOpen(false)}
        targetUrl={selectedRetailer.url}
        retailerName={selectedRetailer.name}
      />
    </>
  );
}
