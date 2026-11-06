"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, School, Sparkles, Send, CheckCircle2, ShieldCheck, Mail, Calendar, MapPin, Loader2 } from "lucide-react";
import { FloatingFarmElements } from "@/components/FloatingFarmElements";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    gradeLevel: "Pre-K to 1st",
    visitType: "Virtual Zoom Reading",
    preferredDate: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.organization) {
      setErrorMsg("Please fill in your name, organization, and email.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/school-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setErrorMsg(data.error || "Could not submit inquiry. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative overflow-hidden paper-pattern py-12 md:py-20">
      <FloatingFarmElements />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-200 text-amber-950 mb-4 shadow-sm">
            <User className="w-4 h-4 text-[#E63946]" />
            Author & Educator Bio
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#264653] tracking-tight">
            Meet <span className="text-[#E63946]">Farmer Cindy</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Storyteller, agricultural educator, and 501(c)(3) non-profit founder championing fresh nutrition and organic gardening for young minds everywhere.
          </p>
        </div>

        {/* Bio Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 max-w-5xl mx-auto">
          {/* Visual Avatar Card */}
          <div className="lg:col-span-5 text-center">
            <div className="relative mx-auto max-w-sm rounded-4xl bg-gradient-to-br from-[#FFF8F0] via-white to-amber-50 p-6 border-4 border-amber-200/80 shadow-tactile">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-md border-2 border-amber-300">
                <Image
                  src="/images/farmer_cindy_hero.jpg"
                  alt="Farmer Cindy Official Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-black text-[#264653]">Cindy</h3>
                <span className="text-xs font-black uppercase tracking-wider text-[#2A9D8F]">
                  Author & Founder • FarmerCindy, Inc.
                </span>
                <p className="mt-2 text-xs text-slate-500">
                  Author of <em>FarmerCindy Finds a Farm</em> & <em>What's Happening to Our Farming Community?</em>
                </p>
              </div>
            </div>
          </div>

          {/* Biography Content */}
          <div className="lg:col-span-7 space-y-4 text-base text-slate-700 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#264653]">
              Planting Seeds of Joy & Nutrition
            </h2>
            <p>
              Farmer Cindy is an author and passionate agricultural advocate who believes that every child has a natural gardener inside them. Seeing how disconnected many modern families have become from the food on their plates, Cindy set out to create a children’s book world that makes farming exciting, accessible, and magical.
            </p>
            <p>
              Through her signature character, FarmerCindy, she demonstrates that you don’t need an expansive rural property to cultivate fresh produce. Windowsills, apartment balconies, and school courtyards can all become vibrant spaces for organic strawberries, sweet cherries, and heirloom vegetables.
            </p>
            <p>
              Beyond authoring books, Cindy leads <strong>FarmerCindy, Inc. (501c3)</strong>, dedicating 100% of book proceeds to supplying free heirloom seeds and gardening kits to elementary school classrooms across the country.
            </p>
          </div>
        </div>

        {/* School Visits & Reading Assemblies Section */}
        <div className="rounded-4xl bg-gradient-to-br from-[#FFF8F0] via-[#FDFBF7] to-amber-50/70 p-8 md:p-14 border-3 border-amber-200 shadow-tactile max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 mb-3 shadow-sm">
              <School className="w-4 h-4 text-[#2A9D8F]" />
              Classroom & Library Assemblies
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#264653]">
              Book an Author Reading with Farmer Cindy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Farmer Cindy offers both <strong>Virtual Zoom Readings</strong> and <strong>In-Person School Assemblies</strong> featuring interactive book read-alouds, heirloom seed show-and-tell, and live Q&A with students!
            </p>
          </div>

          {/* Form */}
          {success ? (
            <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center animate-in zoom-in-95 duration-300 max-w-lg mx-auto">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700 mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-emerald-900">
                School Visit Request Received!
              </h3>
              <p className="mt-2 text-sm text-emerald-800 leading-relaxed">
                Thank you for inviting Farmer Cindy to your school or library! Our team has received your information and will contact you at <strong>{formData.email}</strong> within 24 to 48 hours to coordinate dates and schedule details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
              {/* Honeypot */}
              <input
                type="text"
                name="b_honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mrs. Sarah Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-amber-300 focus:border-[#E63946] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                    School or Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Oakridge Elementary School"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-amber-300 focus:border-[#E63946] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="teacher@school.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-amber-300 focus:border-[#E63946] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                    Target Grade Level
                  </label>
                  <select
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-amber-300 focus:border-[#E63946] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  >
                    <option value="Pre-K to Kinder">Pre-K to Kindergarten</option>
                    <option value="1st to 2nd Grade">1st to 2nd Grade</option>
                    <option value="3rd to 4th Grade">3rd to 4th Grade</option>
                    <option value="All Elementary">Entire Elementary School</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                    Visit Format
                  </label>
                  <select
                    value={formData.visitType}
                    onChange={(e) => setFormData({ ...formData, visitType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-amber-300 focus:border-[#E63946] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  >
                    <option value="Virtual Zoom Reading">Virtual Reading (Zoom / Meet)</option>
                    <option value="In-Person Assembly">In-Person Assembly</option>
                    <option value="Classroom Seed Workshop">Classroom Seed Workshop</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                    Preferred Time of Year / Month
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Spring 2026 / Earth Day"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-amber-300 focus:border-[#E63946] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                  Message or Special Requests (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your classroom, student count, or reading goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-amber-300 focus:border-[#E63946] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-[#E63946] font-bold text-center">{errorMsg}</p>
              )}

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl text-base font-black text-white bg-[#E63946] hover:bg-[#B82835] shadow-lg hover:shadow-xl transition active:scale-95 disabled:opacity-75"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting Request...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Author Reading Request
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Protected by COPPA guidelines. We only contact verified adult educators.</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
