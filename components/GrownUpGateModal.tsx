"use client";

import React, { useState, useEffect } from "react";
import { ShieldCheck, X, ExternalLink } from "lucide-react";

interface GrownUpGateProps {
  isOpen: boolean;
  onClose: () => void;
  targetUrl: string;
  retailerName: string;
}

export function GrownUpGateModal({ isOpen, onClose, targetUrl, retailerName }: GrownUpGateProps) {
  const [num1, setNum1] = useState(4);
  const [num2, setNum2] = useState(7);
  const [userAnswer, setUserAnswer] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setNum1(Math.floor(Math.random() * 6) + 3);
      setNum2(Math.floor(Math.random() * 5) + 2);
      setUserAnswer("");
      setError(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (parseInt(userAnswer.trim(), 10) === num1 + num2) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("grownup_gate_verified", "true");
      }
      window.open(targetUrl, "_blank", "noopener,noreferrer");
      onClose();
    } else {
      setError(true);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="gate-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-md rounded-3xl bg-[#FDFBF7] p-7 md:p-8 shadow-2xl border-4 border-amber-200">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 rounded-full p-1.5 text-slate-400 hover:bg-amber-100 hover:text-slate-700 transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 mb-4 shadow-sm">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <span className="inline-block bg-amber-200/80 text-amber-900 text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full mb-2">
            COPPA Safe Kids Protection
          </span>

          <h3 id="gate-title" className="font-extrabold text-2xl text-[#264653]">
            Grown-Ups Only!
          </h3>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            You are leaving to visit <strong className="text-[#E63946]">{retailerName}</strong>. To keep our young readers safe, please ask a parent, guardian, or teacher to solve this quick problem:
          </p>

          <form onSubmit={handleSubmit} className="mt-5">
            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200/70 inline-block w-full">
              <span className="block text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">
                Math Challenge:
              </span>
              <div className="text-2xl font-black text-[#264653]">
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
                className="w-32 text-center text-2xl font-black py-2.5 px-4 rounded-xl border-2 border-slate-300 focus:border-[#E63946] focus:outline-none bg-white shadow-inner"
                autoFocus
              />
            </div>

            {error && (
              <p className="text-xs text-[#E63946] font-bold mt-2 animate-bounce">
                That wasn't quite right. Please ask a grown-up for help!
              </p>
            )}

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-slate-600 bg-slate-200 hover:bg-slate-300 transition"
              >
                Stay on Farm Site
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#E63946] hover:bg-[#B82835] shadow-md transition"
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
