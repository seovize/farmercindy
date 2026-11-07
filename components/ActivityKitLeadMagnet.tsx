"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Download, Sparkles, CheckCircle2, ShieldCheck, Mail, Loader2, BookOpen, GraduationCap, User, FileText } from "lucide-react";
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
    <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-[#FFF8F0] via-[#FDFBF7] to-amber-50/80 p-8 md:p-12 border-3 border-amber-200/80 shadow-tactile my-14">
      {/* Decorative Farm Elements */}
      <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-red-100/50 blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-44 h-44 rounded-full bg-emerald-100/50 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Visual Mockup of the Activity Booklet */}
          <div className="lg:col-span-5 text-center">
            <div className="relative mx-auto max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
              <Image
                src="/images/activity_kit_preview.jpg"
                alt="Farmer Cindy's Strawberry Sprout & Seed Journal Activity Kit"
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                <span className="text-[11px] font-black bg-amber-400 text-slate-900 px-3 py-1 rounded-full shadow">
                  Free 12-Page Printable PDF
                </span>
                <span className="text-xs font-bold drop-shadow">Ages 3–9</span>
              </div>
            </div>

            <p className="mt-3 text-xs font-bold text-slate-500">
              Includes coloring sheets, heirloom seed identification & growth calendar
            </p>
          </div>

          {/* Right Column: Copy & Email Form */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-200 text-amber-950 mb-3 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#E63946]" />
              Free Classroom & Home Activity Kit
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-black text-[#264653] tracking-tight leading-tight">
              Download Farmer Cindy's <br />
              <span className="text-[#E63946]">Strawberry Sprout & Seed Journal!</span>
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
              Packed with fun coloring sheets, heirloom vegetable identification puzzles, windowsill seed-planting guides, and recipe cards for families & classrooms!
            </p>

            {success ? (
              <div className="mt-6 p-6 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center lg:text-left animate-in zoom-in-95 duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black text-emerald-900">Your Activity Kit is Ready!</h3>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed">
                  We sent a confirmation copy to <strong>{email}</strong> via Brevo. You can also download your printable 12-page activity booklet immediately below:
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/downloads/farmer-cindy-activity-kit.pdf"
                    download="Farmer-Cindy-Strawberry-Journal-Kit.pdf"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl text-xs font-black text-white bg-[#2A9D8F] hover:bg-[#1D6E64] shadow-lg hover:shadow-xl transition transform active:scale-95"
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
                    className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition ${
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
                    <User className="w-3.5 h-3.5" />
                    <span>Parent / Grandparent</span>
                  </label>

                  <label
                    className={`cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition ${
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
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl border-2 border-amber-300 focus:border-[#E63946] focus:outline-none bg-white font-medium text-slate-800 shadow-sm text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-lg transition active:scale-95 disabled:opacity-75 text-sm"
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
                  <p className="mt-2 text-xs font-bold text-[#E63946] text-center lg:text-left">{errorMsg}</p>
                )}

                <p className="mt-3 text-xs text-slate-500 flex items-center justify-center lg:justify-start gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% Kid-Safe & COPPA Compliant. Zero spam. Unsubscribe anytime.</span>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
