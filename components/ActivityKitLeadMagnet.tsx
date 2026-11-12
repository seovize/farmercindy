"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, CheckCircle2, ShieldCheck, Mail, Loader2, User, GraduationCap, Sprout } from "lucide-react";
import confetti from "canvas-confetti";

export function ActivityKitLeadMagnet() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"Parent" | "Teacher">("Parent");
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
        try {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#0D3829", "#2B6E4F", "#DDA15E"],
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
    <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#0B1524] via-[#0F243E] to-[#08101A] p-8 md:p-12 border-2 border-sky-400/30 shadow-2xl my-14 text-white">
      {/* Decorative Farm Elements */}
      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-emerald-500/15 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-sky-500/15 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Mockup of the Activity Booklet */}
          <div className="lg:col-span-5 text-center">
            <div className="relative mx-auto max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-sky-400/30 group bg-black">
              <Image
                src="/images/activity_kit_preview.jpg"
                alt="FarmerCindy's Strawberry Sprout & Seed Journal Activity Kit"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                <span className="text-[11px] font-black bg-[#FACC15] text-black px-3 py-1 rounded-full shadow">
                  Free 12-Page Printable PDF
                </span>
                <span className="text-xs font-bold drop-shadow">Ages 3–9</span>
              </div>
            </div>

            <p className="mt-3 text-xs font-bold text-slate-300">
              Includes coloring sheets, heirloom seed identification &amp; growth calendar
            </p>
          </div>

          {/* Right Column: Copy & Email Form */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#1E5AA8] text-[#FACC15] mb-3 shadow-sm border border-sky-400/30">
              <Sprout className="w-4 h-4 text-emerald-400" />
              Free Family &amp; Community Activity Kit
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-black text-white tracking-tight leading-tight">
              Download FarmerCindy's <br />
              <span className="text-emerald-400">Strawberry Sprout &amp; Seed Journal!</span>
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-300 leading-relaxed">
              Packed with colorful activity sheets, heirloom vegetable identification puzzles, windowsill seed-planting guides, and recipe cards for families!
            </p>

            {success ? (
              <div className="mt-6 p-6 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center lg:text-left animate-in zoom-in-95 duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-[#0D3829]">
                    <CheckCircle2 className="w-6 h-6 text-[#2B6E4F]" />
                  </div>
                  <h3 className="text-xl font-black text-[#0D3829]">Your Activity Kit is Ready!</h3>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  We sent a confirmation copy to <strong>{email}</strong> via Brevo. You can also download your printable 12-page activity booklet immediately below:
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/downloads/farmer-cindy-activity-kit.pdf"
                    download="Farmer-Cindy-Strawberry-Journal-Kit.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow-lg hover:shadow-xl transition transform active:scale-95"
                  >
                    <Download className="w-4 h-4" />
                    Download Printable Activity PDF Now (Instant)
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6">
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
                <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-4">
                  <label
                    className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition border-2 ${
                      role === "Parent"
                        ? "bg-[#0D3829] text-[#DDA15E] border-[#0D3829] shadow-md"
                        : "bg-white text-slate-700 border-stone-200 hover:bg-stone-50"
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
                    <User className="w-3.5 h-3.5" />
                    <span>Parent / Grandparent</span>
                  </label>

                  <label
                    className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition border-2 ${
                      role === "Teacher"
                        ? "bg-[#0D3829] text-[#DDA15E] border-[#0D3829] shadow-md"
                        : "bg-white text-slate-700 border-stone-200 hover:bg-stone-50"
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
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>Educator / Librarian</span>
                  </label>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 items-center">
                  <div className="relative w-full">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter parent or teacher email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow-lg transition active:scale-95 disabled:opacity-75 text-sm"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        Get Free Kit
                      </>
                    )}
                  </button>
                </div>

                {errorMsg && (
                  <p className="mt-2 text-xs font-bold text-amber-900 bg-amber-100 p-2 rounded-lg text-center lg:text-left">{errorMsg}</p>
                )}

                <p className="mt-3 text-xs text-slate-400 flex items-center justify-center lg:justify-start gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Kid-Safe &amp; COPPA Compliant. Zero spam. Unsubscribe anytime.</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
