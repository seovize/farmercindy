"use client";

import React, { useState } from "react";
import { Download, Sparkles, CheckCircle2, ShieldCheck, Mail, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";

export function ActivityKitLeadMagnet() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Parent");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, role, honeypot }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccess(true);
        // Trigger celebratory confetti
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#E63946", "#2A9D8F", "#E9C46A"],
          });
        } catch (e) {
          // ignore if canvas not supported
        }
      } else {
        setErrorMsg(data.error || "Unable to complete registration. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg("Connection error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#FFF8F0] via-[#FDFBF7] to-amber-50/80 p-8 md:p-12 border-3 border-amber-200/80 shadow-tactile my-12">
      {/* Decorative Farm Elements */}
      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-red-100/50 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-emerald-100/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-200 text-amber-950 mb-4 shadow-sm">
          <Sparkles className="w-4 h-4 text-[#E63946]" />
          Free 12-Page Printable Activity Kit
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#264653] tracking-tight leading-tight">
          Download Farmer Cindy's <br className="hidden sm:inline" />
          <span className="text-[#E63946]">Strawberry Sprout & Seed Journal!</span>
        </h2>

        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Packed with fun coloring sheets, heirloom vegetable identification puzzles, windowsill seed-planting guides, and recipe cards for families & classrooms!
        </p>

        {success ? (
          <div className="mt-8 p-6 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center animate-in zoom-in-95 duration-300">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-black text-emerald-900">Your Activity Kit is Ready!</h3>
            <p className="mt-2 text-sm text-emerald-800">
              We just sent your 12-page activity packet to <strong>{email}</strong> via Brevo. You can also download it right now:
            </p>
            <div className="mt-5">
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Sample 12-Page Farm Activity Kit downloaded! (Simulated PDF download)");
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-black text-white bg-[#2A9D8F] hover:bg-[#1D6E64] shadow-lg transition"
              >
                <Download className="w-5 h-5" />
                Download PDF Immediately (Free)
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-xl mx-auto">
            {/* Honeypot for spam protection */}
            <input
              type="text"
              name="b_honeypot"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Role Radio Pills */}
            <div className="flex justify-center gap-3 mb-4">
              <label
                className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-black transition ${
                  role === "Parent"
                    ? "bg-[#E63946] text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value="Parent"
                  checked={role === "Parent"}
                  onChange={() => setRole("Parent")}
                  className="hidden"
                />
                🍓 I am a Parent / Grandparent
              </label>

              <label
                className={`cursor-pointer px-4 py-2 rounded-xl text-xs font-black transition ${
                  role === "Teacher"
                    ? "bg-[#2A9D8F] text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-300 hover:bg-slate-100"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value="Teacher"
                  checked={role === "Teacher"}
                  onChange={() => setRole("Teacher")}
                  className="hidden"
                />
                🌱 I am an Educator / Librarian
              </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <div className="relative w-full">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  placeholder="Enter parent or teacher email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-2 border-amber-300 focus:border-[#E63946] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-lg hover:shadow-xl transition active:scale-95 disabled:opacity-75"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Get Free Kit
                  </>
                )}
              </button>
            </div>

            {errorMsg && (
              <p className="mt-3 text-xs font-bold text-[#E63946] text-center">{errorMsg}</p>
            )}

            <p className="mt-3 text-xs text-slate-500 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Kid-Safe & COPPA Compliant. Zero spam. Unsubscribe anytime.</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
