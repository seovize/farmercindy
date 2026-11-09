"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sprout } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { PRODUCTS } from "@/lib/products";

export function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    addToCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    subtotal,
    shipping,
    discount,
    promoCode,
    applyPromoCode,
    finalTotal,
    amountNeededForFreeShipping,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [promoMessage, setPromoMessage] = useState<{ text: string; isError: boolean } | null>(null);
  const router = useRouter();

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const success = applyPromoCode(inputCode);
    if (success) {
      setPromoMessage({ text: `Code '${inputCode.toUpperCase()}' applied: 10% off!`, isError: false });
      setInputCode("");
    } else {
      setPromoMessage({ text: "Invalid promo code. Try 'SEED10'", isError: true });
    }
  };

  const handleCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  const progressPercent = Math.min(
    100,
    Math.round(((35 - amountNeededForFreeShipping) / 35) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl border-l-2 border-[#DDA15E]/30 flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-[#3B2314]/15 bg-white/90 backdrop-blur flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0D3829] text-[#DDA15E] flex items-center justify-center border border-emerald-500/30">
                <ShoppingBag className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="font-heading font-black text-lg text-[#0D3829] leading-none">
                  Your Book Basket
                </h3>
                <span className="text-xs text-slate-500 font-bold">
                  {totalItems} {totalItems === 1 ? "item" : "items"}
                </span>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-stone-200 transition"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="p-3.5 bg-amber-50/80 border-b border-amber-200/80 text-xs">
            <div className="flex items-center justify-between font-extrabold text-[#0D3829] mb-1.5">
              <span className="flex items-center gap-1.5">
                <Sprout className="w-4 h-4 text-[#2B6E4F]" />
                {amountNeededForFreeShipping > 0 ? (
                  <>Add <span className="text-[#0D3829] font-black">${amountNeededForFreeShipping.toFixed(2)}</span> for Free Shipping!</>
                ) : (
                  <span className="text-emerald-800 font-black">🎉 You unlocked FREE Shipping &amp; Seed Pack!</span>
                )}
              </span>
              <span className="text-slate-500">{progressPercent}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-amber-200/60 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#2B6E4F] to-[#DDA15E] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0D3829] flex items-center justify-center mx-auto mb-4">
                  <Sprout className="w-8 h-8 text-[#2B6E4F]" />
                </div>
                <h4 className="font-heading font-black text-xl text-[#0D3829]">Your basket is empty</h4>
                <p className="mt-1 text-xs text-slate-500 max-w-xs mx-auto">
                  Pick a wholesome picture book to plant seeds of learning and healthy nutrition!
                </p>

                {/* Quick Add Suggestions */}
                <div className="mt-6 text-left space-y-3">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-400">
                    Recommended Starting Books:
                  </div>
                  {PRODUCTS.slice(0, 2).map((prod) => (
                    <div
                      key={prod.id}
                      className="p-3 rounded-2xl bg-white border border-stone-200 flex items-center justify-between gap-3 shadow-sm hover:border-[#2B6E4F] transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="relative w-10 h-14 rounded-md overflow-hidden bg-slate-900 shrink-0">
                          <Image src={prod.coverImage} alt={prod.title} fill className="object-cover" />
                        </div>
                        <div>
                          <div className="font-extrabold text-xs text-[#0D3829] leading-snug line-clamp-1">
                            {prod.title}
                          </div>
                          <div className="text-[11px] text-[#2B6E4F] font-black">
                            ${prod.formats[0].price}
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => addToCart(prod, "paperback", 1)}
                        className="px-3 py-1.5 rounded-xl bg-[#0D3829] text-[#DDA15E] hover:bg-[#165B3F] text-xs font-black transition border border-emerald-500/30"
                      >
                        + Add
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white border border-stone-200/90 shadow-sm flex gap-3.5 group"
                >
                  {/* Thumbnail */}
                  <div className="relative w-14 h-18 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-stone-200">
                    <Image
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-heading font-black text-sm text-[#0D3829] leading-snug line-clamp-1">
                          {item.title}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-stone-800 transition p-1"
                          aria-label={`Remove ${item.title}`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.2 bg-amber-100 text-amber-900 rounded-md">
                          {item.formatName}
                        </span>
                        {item.giftText && (
                          <span className="text-[10px] text-emerald-800 font-bold hidden sm:inline">
                            🌱 Free seeds
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity and Price */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden bg-slate-50">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-slate-600 hover:bg-slate-200 transition"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 py-1 text-xs font-black text-slate-800">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-slate-600 hover:bg-slate-200 transition"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="font-heading font-black text-sm text-[#0D3829]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {items.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-white/95 backdrop-blur space-y-3.5">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Promo (try 'SEED10')"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-300 text-xs font-bold uppercase focus:border-[#2B6E4F] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl text-xs font-black bg-[#0D3829] hover:bg-[#165B3F] text-[#DDA15E] transition"
                >
                  Apply
                </button>
              </form>

              {promoMessage && (
                <p className={`text-[11px] font-bold ${promoMessage.isError ? "text-amber-800" : "text-emerald-700"}`}>
                  {promoMessage.text}
                </p>
              )}

              {/* Order Calculations */}
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-bold">
                    <span>Discount ({promoCode})</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-bold text-slate-900">
                    {shipping === 0 ? (
                      <span className="text-emerald-800 uppercase font-black">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200 flex justify-between text-sm font-heading font-black text-[#0D3829]">
                  <span>Total (USD)</span>
                  <span className="text-lg text-[#0D3829]">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Direct Checkout Button */}
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full py-4 rounded-2xl font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Reassurance */}
              <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#2B6E4F]" />
                <span>256-Bit SSL Encrypted • 100% Non-Profit Proceeds</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
