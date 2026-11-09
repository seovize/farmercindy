"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export function CartButton() {
  const { totalItems, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open shopping cart with ${totalItems} items`}
      className="relative p-2.5 rounded-2xl bg-white border-2 border-stone-200 text-[#0D3829] hover:border-[#2B6E4F] hover:text-[#2B6E4F] shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#2B6E4F]"
    >
      <ShoppingBag className="w-5 h-5 stroke-[2.2]" />

      {totalItems > 0 && (
        <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#0D3829] text-[#DDA15E] text-[11px] font-black flex items-center justify-center shadow-md animate-in zoom-in-50 duration-200 border border-emerald-500/30">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </button>
  );
}
