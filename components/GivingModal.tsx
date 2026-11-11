"use client";

import React, { useState } from "react";
import { X, Heart, ShieldCheck, CheckCircle2, Lock, CreditCard, Download, Printer, ArrowRight, Sprout, Loader2 } from "lucide-react";

interface GivingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialAmount: number;
  initialMonthly: boolean;
  impactTitle: string;
}

export function GivingModal({
  isOpen,
  onClose,
  initialAmount = 50,
  initialMonthly = false,
  impactTitle,
}: GivingModalProps) {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [isMonthly, setIsMonthly] = useState<boolean>(initialMonthly);
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [customInput, setCustomInput] = useState<string>("");

  const [paymentMethod, setPaymentMethod] = useState<"card" | "applepay" | "paypal">("card");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [receiptId, setReceiptId] = useState("");

  if (!isOpen) return null;

  const currentAmount = isCustom ? parseInt(customInput, 10) || 0 : amount;

  const handleSelectTier = (tier: number) => {
    setIsCustom(false);
    setAmount(tier);
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustom(true);
    setCustomInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentAmount < 5) return;
    if (!donorEmail) return;

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setReceiptId(`FC-GIFT-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 1200);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border-2 border-[#173D57]/20 overflow-hidden my-8">
        {/* Header */}
        <div className="bg-[#173D57] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close donation modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#DDA15E] mb-1">
            <Heart className="w-4 h-4 fill-[#DDA15E]" />
            <span>Community Heirloom Farm Fund</span>
          </div>

          <h3 className="text-2xl font-heading font-black text-white">
            Support FarmerCindy's Mission
          </h3>
          <p className="mt-1 text-xs text-sky-100/90 font-medium">
            Helping grow organic food and share harvest abundance with the community for free.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Frequency Toggle */}
              <div className="grid grid-cols-2 p-1 rounded-2xl bg-[#EAF4FA] border border-[#173D57]/10">
                <button
                  type="button"
                  onClick={() => setIsMonthly(false)}
                  className={`py-2 text-xs font-bold rounded-xl transition ${
                    !isMonthly
                      ? "bg-white text-[#173D57] shadow-xs font-black"
                      : "text-[#173D57]/70 hover:text-[#173D57]"
                  }`}
                >
                  One-Time Gift
                </button>
                <button
                  type="button"
                  onClick={() => setIsMonthly(true)}
                  className={`py-2 text-xs font-bold rounded-xl transition ${
                    isMonthly
                      ? "bg-[#173D57] text-[#DDA15E] shadow-xs font-black"
                      : "text-[#173D57]/70 hover:text-[#173D57]"
                  }`}
                >
                  Monthly Seed Partner
                </button>
              </div>

              {/* Tiers Grid */}
              <div className="grid grid-cols-4 gap-2">
                {[25, 50, 100, 250].map((val) => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleSelectTier(val)}
                    className={`py-2.5 px-2 rounded-xl text-center border-2 transition ${
                      !isCustom && amount === val
                        ? "border-[#173D57] bg-[#173D57] text-white font-black shadow-xs"
                        : "border-slate-200 bg-slate-50 text-[#173D57] hover:border-slate-300 font-bold"
                    }`}
                  >
                    <span className="text-sm block">${val}</span>
                  </button>
                ))}
              </div>

              {/* Custom Input */}
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                  $
                </span>
                <input
                  type="number"
                  min="5"
                  placeholder="Or enter custom amount"
                  value={customInput}
                  onChange={handleCustomChange}
                  className={`w-full pl-8 pr-4 py-2.5 rounded-xl border-2 text-sm font-bold focus:outline-none ${
                    isCustom
                      ? "border-[#173D57] bg-white text-[#173D57]"
                      : "border-slate-200 bg-slate-50 text-slate-700"
                  }`}
                />
              </div>

              {/* Donor Contact Details */}
              <div className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#173D57] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First & Last Name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#173D57]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#173D57] mb-1">
                    Email Address (for instant tax receipt)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#173D57]"
                  />
                </div>
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs font-bold text-[#173D57] mb-1.5">
                  Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("card")}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                      paymentMethod === "card"
                        ? "border-[#173D57] bg-[#EAF4FA] text-[#173D57] font-black"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Card</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("applepay")}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                      paymentMethod === "applepay"
                        ? "border-[#173D57] bg-[#EAF4FA] text-[#173D57] font-black"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>Apple / Google</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("paypal")}
                    className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition ${
                      paymentMethod === "paypal"
                        ? "border-[#173D57] bg-[#EAF4FA] text-[#173D57] font-black"
                        : "border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span>PayPal</span>
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isProcessing || currentAmount < 5}
                  className="w-full py-4 rounded-2xl font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c58b43] transition active:scale-95 shadow-md flex items-center justify-center gap-2 uppercase tracking-wider text-sm disabled:opacity-50"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                      <span>Processing Contribution...</span>
                    </>
                  ) : (
                    <>
                      <Heart className="w-4 h-4 fill-slate-950 text-slate-950" />
                      <span>
                        Complete ${currentAmount} {isMonthly ? "/ Month" : "Donation"}
                      </span>
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium mt-2.5">
                  <Lock className="w-3.5 h-3.5 text-[#2B6E4F]" />
                  <span>256-Bit SSL Encrypted • Instant Tax-Deductible Receipt</span>
                </div>
              </div>
            </form>
          ) : (
            /* =========================================================================
                SUCCESS & PRINTABLE TAX RECEIPT VIEW
               ========================================================================= */
            <div className="space-y-5 text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-[#2B6E4F] flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h4 className="text-2xl font-heading font-black text-[#173D57]">
                  Thank You for Your Generosity!
                </h4>
                <p className="mt-1 text-xs text-slate-600 max-w-sm mx-auto">
                  Your gift helps FarmerCindy plant heirloom seeds, nourish living soil, and share fresh food with the community.
                </p>
              </div>

              {/* Printable Official Receipt Slip */}
              <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-amber-200/80 text-left space-y-2 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-amber-200/60 font-bold text-[#173D57]">
                  <span>Receipt #: {receiptId}</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="grid grid-cols-2 gap-1 text-slate-600">
                  <span>Donor:</span>
                  <span className="font-bold text-[#173D57] text-right">{donorName || "Supporter"}</span>
                  <span>Amount:</span>
                  <span className="font-bold text-[#2B6E4F] text-right">${currentAmount}.00 {isMonthly ? "(Monthly)" : ""}</span>
                  <span>Organization:</span>
                  <span className="font-bold text-[#173D57] text-right">FarmerCindy, Inc.</span>
                  <span>Tax Status:</span>
                  <span className="font-bold text-[#173D57] text-right">501(c)(3) Tax-Exempt</span>
                </div>
                <p className="text-[10px] text-slate-500 pt-1 border-t border-amber-200/60 italic">
                  No goods or services were provided in exchange for this contribution. Please retain for your tax records.
                </p>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex-1 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-bold text-[#173D57] flex items-center justify-center gap-1.5 transition"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Receipt</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3 rounded-xl bg-[#173D57] hover:bg-[#112d40] text-white text-xs font-bold transition"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
