"use client";

import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Download, Printer, ArrowRight, Sprout, Heart, ShieldCheck, Package, Truck, Calendar, MapPin, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function CheckoutSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FAF7F2] flex items-center justify-center p-8">
          <div className="text-center">
            <Loader2 className="w-10 h-10 animate-spin text-[#0D3829] mx-auto mb-3" />
            <p className="font-heading font-black text-slate-700">Loading your order confirmation...</p>
          </div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") || "FC-2026-8492";

  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    // Fire celebratory confetti
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#0D3829", "#2B6E4F", "#DDA15E"],
      });
    } catch (e) {
      // ignore
    }

    // Read stored order from sessionStorage
    try {
      const stored = sessionStorage.getItem("last_order");
      if (stored) {
        setOrder(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not read last_order from session", e);
    }
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Banner */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-[#0D3829] flex items-center justify-center mx-auto mb-4 shadow-lg animate-in zoom-in-75 duration-300 border border-emerald-300">
            <CheckCircle2 className="w-12 h-12 stroke-[2.5] text-[#2B6E4F]" />
          </div>

          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] border border-emerald-500/30 mb-3">
            <Sprout className="w-3.5 h-3.5 text-[#DDA15E]" />
            <span>Order Confirmed &amp; Payment Verified</span>
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-[#0D3829] tracking-tight">
            Thank You for Supporting <br />
            <span className="text-[#2B6E4F]">FarmerCindy, Inc.!</span>
          </h1>

          <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Your order <strong>{orderId}</strong> has been received and is being prepared with heirloom seeds and care. A confirmation receipt has been emailed to you.
          </p>
        </div>

        {/* Immediate Instant Gratification Box: PDF Activity Kit */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-500/10 via-amber-400/10 to-emerald-500/10 border-2 border-[#DDA15E]/40 shadow-md mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#0D3829] text-[#DDA15E] flex items-center justify-center shrink-0 shadow border border-emerald-500/30">
              <Download className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-[#2B6E4F]">
                Instant Bonus Download Ready
              </div>
              <h3 className="text-lg font-black font-heading text-[#0D3829]">
                The Strawberry Sprout &amp; Seed Journal (12-Page PDF)
              </h3>
              <p className="text-xs text-slate-600 mt-0.5">
                Download your printable coloring sheets &amp; windowsill planting guide right now!
              </p>
            </div>
          </div>

          <a
            href="/downloads/farmer-cindy-activity-kit.pdf"
            download="Farmer-Cindy-Activity-Booklet.pdf"
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow-lg hover:shadow-xl transition active:scale-95 text-xs uppercase tracking-wider"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Now</span>
          </a>
        </div>

        {/* Order Details & Delivery Tracker Card */}
        <div className="rounded-4xl bg-white border-2 border-stone-200/90 shadow-tactile p-6 sm:p-10 mb-8 space-y-8">
          {/* Top Order Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-200 gap-4">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Order Reference</span>
              <div className="text-2xl font-heading font-black text-[#0D3829] mt-0.5">{orderId}</div>
              <div className="text-xs text-slate-500 mt-0.5">
                Placed on {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 text-xs font-black text-slate-700 bg-white transition shadow-sm"
              >
                <Printer className="w-4 h-4" />
                <span>Print Invoice</span>
              </button>
            </div>
          </div>

          {/* Delivery Timeline */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">
              Estimated Delivery: 3–5 Business Days (USPS Priority)
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                <CheckCircle2 className="w-6 h-6 text-[#2B6E4F] mx-auto mb-1.5" />
                <div className="text-xs font-black">Order Placed</div>
                <div className="text-[10px] text-emerald-700 mt-0.5">Payment Verified</div>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900">
                <Package className="w-6 h-6 text-[#0D3829] mx-auto mb-1.5 animate-pulse" />
                <div className="text-xs font-black">Preparing Order</div>
                <div className="text-[10px] text-amber-800 mt-0.5">Packing Heirloom Seeds</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-500">
                <Truck className="w-6 h-6 mx-auto mb-1.5 opacity-40" />
                <div className="text-xs font-bold">Shipped with USPS</div>
                <div className="text-[10px] opacity-75 mt-0.5">Tracking update sent</div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-500">
                <MapPin className="w-6 h-6 mx-auto mb-1.5 opacity-40" />
                <div className="text-xs font-bold">Delivered</div>
                <div className="text-[10px] opacity-75 mt-0.5">Bedtime reading ready</div>
              </div>
            </div>
          </div>

          {/* Items Breakdown */}
          {order?.items && (
            <div className="pt-6 border-t border-slate-100">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4">
                Items in this Shipment
              </h4>
              <div className="space-y-3">
                {order.items.map((item: any) => (
                  <div key={item.id} className="flex items-center justify-between gap-4 p-3 rounded-2xl bg-[#FAF7F2] border border-stone-200">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-14 rounded-md overflow-hidden bg-slate-900 shrink-0">
                        <Image src={item.coverImage} alt={item.title} fill className="object-cover" />
                      </div>
                      <div>
                        <div className="font-heading font-black text-sm text-[#0D3829]">{item.title}</div>
                        <div className="text-xs text-slate-500">{item.formatName} • Qty: {item.quantity}</div>
                      </div>
                    </div>
                    <div className="font-heading font-black text-sm text-[#0D3829]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between text-base font-heading font-black text-[#0D3829]">
                <span>Total Paid (USD)</span>
                <span className="text-lg text-[#0D3829]">${order.total?.toFixed(2)}</span>
              </div>
            </div>
          )}

          {/* Founder Cindy Note */}
          <div className="p-5 rounded-3xl bg-amber-50/80 border border-amber-200/90 flex flex-col sm:flex-row items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden border-2 border-[#DDA15E]/40 shrink-0">
              <Image src="/images/farmer_cindy_author_portrait.jpg" alt="Farmer Cindy" fill className="object-cover object-top" />
            </div>
            <div className="text-center sm:text-left text-xs text-slate-700 leading-relaxed">
              <strong className="text-[#0D3829] font-black block text-sm mb-0.5">
                A Personal Message from Farmer Cindy:
              </strong>
              "Thank you from the bottom of my heart for bringing our adventures into your home or classroom! Because of your order, another group of young children will receive organic seeds and learn how to grow living food."
            </div>
          </div>
        </div>

        {/* Continue Action */}
        <div className="text-center space-y-3">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow-lg hover:shadow-xl transition active:scale-95"
          >
            <span>Explore More Stories &amp; School Assemblies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <div className="text-xs text-slate-500">
            Questions about your order? Email us anytime at <span className="font-bold text-[#0D3829]">orders@farmercindy.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
