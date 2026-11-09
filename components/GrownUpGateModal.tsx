"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, X, ExternalLink } from "lucide-react";

interface GrownUpGateProps {
  isOpen: boolean;
  onClose: () => void;
  targetUrl: string;
  retailerName: string;
}

export function GrownUpGateModal({
  isOpen,
  onClose,
  targetUrl,
  retailerName,
}: GrownUpGateProps) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [error, setError] = useState(false);

  // Generate a random simple math question whenever opened
  useEffect(() => {
    if (isOpen) {
      setNum1(Math.floor(Math.random() * 8) + 4); // 4-11
      setNum2(Math.floor(Math.random() * 8) + 3); // 3-10
      setUserAnswer("");
      setError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctSum = num1 + num2;
    if (parseInt(userAnswer.trim(), 10) === correctSum) {
      // Store session verification so grown-ups aren't re-prompted every click
      if (typeof window !== "undefined") {
        sessionStorage.setItem("grownup_gate_verified", "true");
      }
      onClose();
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } else {
      setError(true);
      setUserAnswer("");
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-[#FAF7F2] p-7 md:p-8 shadow-2xl border-2 border-[#DDA15E]/40">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-stone-200 hover:text-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-[#0D3829] mb-4 shadow-sm border border-emerald-300">
            <ShieldCheck className="w-8 h-8 text-[#2B6E4F]" />
          </div>

          <span className="inline-block bg-[#0D3829] text-[#DDA15E] text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-2 border border-emerald-500/30">
            COPPA Safe Kids Protection
          </span>

          <h3 id="gate-title" className="font-extrabold text-2xl text-[#0D3829]">
            Grown-Ups Only!
          </h3>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            You are leaving to visit <strong className="text-[#0D3829]">{retailerName}</strong>. To keep our young readers safe, please ask a parent, guardian, or teacher to solve this quick problem:
          </p>

          <form onSubmit={handleSubmit} className="mt-5">
            <div className="bg-amber-50/80 rounded-2xl p-4 border border-amber-200/70 inline-block w-full">
              <span className="block text-xs font-bold text-[#0D3829] uppercase tracking-wide mb-1">
                Math Challenge:
              </span>
              <div className="text-2xl font-black text-[#0D3829]">
                {num1} + {num2} = ?
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <input
                type="number"
                inputMode="numeric"
                value={userAnswer}
                onChange={(e) => {
                  setUserAnswer(e.target.value);
                  setError(false);
                }}
                placeholder="?"
                className="w-32 text-center text-2xl font-black py-2.5 px-4 rounded-xl border-2 border-slate-300 focus:border-[#2B6E4F] focus:outline-none bg-white shadow-inner"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-xs text-amber-800 font-bold mt-2">
                That wasn't quite right. Please ask a grown-up for help!
              </p>
            )}

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-slate-700 bg-stone-200 hover:bg-stone-300 transition"
              >
                Stay on Farm Site
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow-md transition"
              >
                Continue to Store
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
