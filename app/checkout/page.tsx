"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, ArrowLeft, CheckCircle2, CreditCard, Sprout, Heart, Truck, Gift, Loader2, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { items, subtotal, discount, shipping, promoCode, finalTotal, clearCart } = useCart();
  const router = useRouter();

  const [shippingMethod, setShippingMethod] = useState<"standard" | "priority">("standard");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    apartment: "",
    city: "",
    state: "CA",
    zip: "",
    country: "United States",
    phone: "",
    cardNumber: "4242 •••• •••• 4242",
    cardExpiry: "12/28",
    cardCvc: "888",
    isGift: false,
    giftMessage: "",
    taxReceiptRequested: true,
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const priorityShippingAddon = shippingMethod === "priority" ? 4.0 : 0;
  const currentTotal = finalTotal + priorityShippingAddon;

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address || !formData.city || !formData.zip) {
      setErrorMessage("Please complete all required shipping address fields.");
      return;
    }

    if (items.length === 0) {
      setErrorMessage("Your basket is empty. Please add a book before checking out.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: {
            name: formData.name,
            email: formData.email,
            address: formData.apartment ? `${formData.address}, ${formData.apartment}` : formData.address,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
            country: formData.country,
            phone: formData.phone,
          },
          shippingMethod: shippingMethod === "priority" ? "Priority Express (1-2 Days)" : "Standard Non-Profit Ground (3-5 Days)",
          items,
          subtotal,
          discount,
          shipping: shipping + priorityShippingAddon,
          total: currentTotal,
          taxReceiptRequested: formData.taxReceiptRequested,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Store order details in sessionStorage for the success page
        sessionStorage.setItem("last_order", JSON.stringify(data.order));
        clearCart();
        router.push(`/checkout/success?orderId=${data.order.orderId}`);
      } else {
        setErrorMessage(data.error || "Payment processing failed. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network error while placing order. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Reassurance */}
        <div className="flex flex-col sm:flex-row items-center justify-between pb-8 mb-8 border-b border-amber-200/80 gap-4">
          <Link
            href="/books"
            className="inline-flex items-center gap-2 text-xs font-black text-slate-600 hover:text-[#E63946] transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Book Catalog</span>
          </Link>

          <div className="flex items-center gap-3 text-xs text-slate-600 font-bold">
            <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>256-Bit SSL Encrypted Checkout</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-amber-900 bg-amber-100 px-3 py-1 rounded-full">
              100% 501(c)(3) Non-Profit Proceeds
            </span>
          </div>
        </div>

        {items.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-20">
            <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-900 flex items-center justify-center mx-auto mb-4">
              <Sprout className="w-8 h-8 text-[#2A9D8F]" />
            </div>
            <h2 className="text-2xl font-black font-heading text-[#264653]">Your basket is empty</h2>
            <p className="mt-2 text-sm text-slate-600">
              Add Book 1, Book 2, or the Complete 2-Book Bundle to start your order!
            </p>
            <Link
              href="/books"
              className="mt-6 inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-lg transition"
            >
              <span>Explore The Books</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Checkout Form (Customer Info, Shipping, Payment) */}
            <div className="lg:col-span-7 space-y-8">
              {/* Step 1: Customer & Shipping Address */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-200/90 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#E63946] text-white flex items-center justify-center font-black text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-black font-heading text-[#264653]">
                      Shipping Address
                    </h3>
                    <p className="text-xs text-slate-500">Where should we deliver your books & free seed pack?</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E63946] focus:outline-none text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                        Email Address (for order & tax receipt) *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E63946] focus:outline-none text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                      Street Address *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="123 Blossom Lane"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E63946] focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                        Apt / Suite (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Apt 4B"
                        value={formData.apartment}
                        onChange={(e) => setFormData({ ...formData, apartment: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E63946] focus:outline-none text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="San Francisco"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E63946] focus:outline-none text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                        ZIP / Postal Code *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="94103"
                        value={formData.zip}
                        onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#E63946] focus:outline-none text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2: Shipping Method */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-200/90 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#E63946] text-white flex items-center justify-center font-black text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-black font-heading text-[#264653]">
                      Shipping Method
                    </h3>
                    <p className="text-xs text-slate-500">All orders include free heirloom seeds and eco-packaging</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label
                    onClick={() => setShippingMethod("standard")}
                    className={`cursor-pointer p-4 rounded-2xl border-2 flex items-center justify-between transition ${
                      shippingMethod === "standard"
                        ? "border-[#2A9D8F] bg-emerald-50/50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-[#2A9D8F]">
                        {shippingMethod === "standard" && <div className="w-2.5 h-2.5 rounded-full bg-[#2A9D8F]" />}
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-[#264653]">
                          Standard Non-Profit Ground (3–5 Business Days)
                        </div>
                        <div className="text-xs text-slate-500">Shipped with carbon-neutral compostable mailers</div>
                      </div>
                    </div>
                    <span className="font-heading font-black text-sm text-emerald-800">
                      {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                    </span>
                  </label>

                  <label
                    onClick={() => setShippingMethod("priority")}
                    className={`cursor-pointer p-4 rounded-2xl border-2 flex items-center justify-between transition ${
                      shippingMethod === "priority"
                        ? "border-[#E63946] bg-red-50/50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-[#E63946]">
                        {shippingMethod === "priority" && <div className="w-2.5 h-2.5 rounded-full bg-[#E63946]" />}
                      </div>
                      <div>
                        <div className="font-extrabold text-sm text-[#264653]">
                          Priority Farm-Fresh Express (1–2 Business Days)
                        </div>
                        <div className="text-xs text-slate-500">USPS Priority Mail with tracking updates</div>
                      </div>
                    </div>
                    <span className="font-heading font-black text-sm text-[#E63946]">
                      ${(shipping + 4.0).toFixed(2)}
                    </span>
                  </label>
                </div>
              </div>

              {/* Step 3: Payment Details */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-200/90 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-[#E63946] text-white flex items-center justify-center font-black text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-black font-heading text-[#264653]">
                      Payment & Tax Receipt
                    </h3>
                    <p className="text-xs text-slate-500">Secure simulated test checkout (Zero live charges required)</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 font-mono text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        value={formData.cardExpiry}
                        onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 font-mono text-sm text-center"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                        CVC / CVV
                      </label>
                      <input
                        type="text"
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 font-mono text-sm text-center"
                      />
                    </div>
                  </div>

                  {/* Gift & Tax Options */}
                  <div className="pt-3 border-t border-slate-100 space-y-3">
                    <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer font-bold">
                      <input
                        type="checkbox"
                        checked={formData.taxReceiptRequested}
                        onChange={(e) => setFormData({ ...formData, taxReceiptRequested: e.target.checked })}
                        className="w-4 h-4 rounded text-[#E63946] focus:ring-[#E63946]"
                      />
                      <span>Email me an official 501(c)(3) tax deduction receipt for this purchase</span>
                    </label>

                    <label className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer font-bold">
                      <input
                        type="checkbox"
                        checked={formData.isGift}
                        onChange={(e) => setFormData({ ...formData, isGift: e.target.checked })}
                        className="w-4 h-4 rounded text-[#E63946] focus:ring-[#E63946]"
                      />
                      <span>🎁 This is a gift for a child (Include free personalized card from Farmer Cindy)</span>
                    </label>

                    {formData.isGift && (
                      <textarea
                        rows={2}
                        placeholder="Write your gift message for the child..."
                        value={formData.giftMessage}
                        onChange={(e) => setFormData({ ...formData, giftMessage: e.target.value })}
                        className="w-full p-3 rounded-xl border border-amber-300 text-xs mt-2"
                      />
                    )}
                  </div>
                </div>
              </div>

              {errorMessage && (
                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-xs font-bold text-red-700 text-center">
                  {errorMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 rounded-2xl font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 text-lg hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    <span>Processing Order...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5" />
                    <span>Place Non-Profit Order • ${currentTotal.toFixed(2)}</span>
                  </>
                )}
              </button>

              <p className="text-center text-xs text-slate-500 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>COPPA Safe & 100% Tax-Exempt Non-Profit Guarantee</span>
              </p>
            </div>

            {/* Right Column: Sticky Order Summary */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 p-6 sm:p-8 rounded-3xl bg-white border-2 border-amber-200/90 shadow-tactile space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-amber-200">
                  <h3 className="font-heading font-black text-lg text-[#264653]">Order Summary</h3>
                  <span className="text-xs text-slate-500 font-bold">{items.length} items</span>
                </div>

                {/* Items preview */}
                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-3 items-center">
                      <div className="relative w-12 h-16 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-amber-200">
                        <Image src={item.coverImage} alt={item.title} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-heading font-black text-xs text-[#264653] truncate">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-500 flex items-center gap-2 mt-0.5">
                          <span className="font-bold">{item.formatName}</span>
                          <span>•</span>
                          <span>Qty: {item.quantity}</span>
                        </div>
                      </div>
                      <div className="text-right font-heading font-black text-xs text-[#264653]">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bonus Callout */}
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs flex items-center gap-2.5 text-emerald-900">
                  <Sprout className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <strong className="block font-black">Free Bonus Gift Included:</strong>
                    Heirloom Strawberry Seeds + 12-Page Printable Activity Kit!
                  </div>
                </div>

                {/* Financial Breakdown */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-slate-900">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-bold">
                      <span>Discount ({promoCode})</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="font-bold text-slate-900">
                      {shipping === 0 && shippingMethod === "standard" ? (
                        <span className="text-emerald-700 uppercase font-black">Free</span>
                      ) : (
                        `$${(shipping + priorityShippingAddon).toFixed(2)}`
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between text-emerald-700">
                    <span>501(c)(3) Estimated Tax</span>
                    <span className="font-bold">$0.00 (Tax-Exempt)</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between text-base font-heading font-black text-[#264653]">
                    <span>Total Due Today</span>
                    <span className="text-xl text-[#E63946]">${currentTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Impact Note */}
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-[11px] text-slate-600 leading-relaxed text-center">
                  <Heart className="w-4 h-4 fill-[#E63946] text-[#E63946] inline mr-1" />
                  <strong>100% Non-Profit Proceeds:</strong> Your order directly funds heirloom seed packets for Title I classrooms and community planter beds.
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
