"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, School, Send, CheckCircle2, ShieldCheck, Mail, Calendar, MapPin, Loader2, BookOpen, Heart, HelpCircle, ChevronDown, Award, Sun, Sprout } from "lucide-react";

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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  const faqs = [
    {
      q: "What inspired the character of Farmer Cindy?",
      a: "Cindy realized that many modern children living in apartments or suburbs have rarely seen a living food plant grow. She created Farmer Cindy to prove that you do not need a 100-acre rural farm to grow fresh food—you can start on a sunny windowsill, an apartment balcony, or a classroom ledge!",
    },
    {
      q: "What age group are the books and school assemblies designed for?",
      a: "The Adventures of Farmer Cindy picture book series is tailored for children ages 3 to 9 (Pre-K through 3rd grade). The stories incorporate simple STEM botanical concepts, plant life cycles, pollinator biodiversity, and themes of community kindness.",
    },
    {
      q: "How do Virtual Zoom Readings work for elementary schools?",
      a: "Virtual visits run 40 to 45 minutes and include an animated screen-share read-aloud with Cindy, a live demonstration of heirloom seed anatomy, and a moderated Q&A session where students ask their own farm questions. All registered classrooms receive free printable activity booklets in advance.",
    },
    {
      q: "Can school districts purchase books with tax-exempt purchase orders?",
      a: "Yes! Both volumes are registered with IngramSpark Wholesale and major distributors, making them fully eligible for district purchase orders, Title I funding, and library acquisitions with standard tax exemption.",
    },
  ];

  return (
    <div className="relative overflow-hidden paper-canvas py-12 md:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] border border-emerald-500/30 mb-4 shadow-sm">
            <User className="w-4 h-4 text-[#DDA15E]" />
            <span>Author, Educator &amp; 501(c)(3) Founder</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#0D3829] tracking-tight leading-[1.15]">
            Meet <span className="text-[#2B6E4F]">Farmer Cindy</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Storyteller, agricultural educator, and non-profit advocate on a nationwide mission to help young minds discover the joy of heirloom farming and healthy nutrition.
          </p>
        </div>

        {/* Bio Spotlight Spread */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20 max-w-5xl mx-auto">
          {/* Visual Avatar Card */}
          <div className="lg:col-span-5 text-center">
            <div className="relative mx-auto max-w-sm rounded-4xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F4EFE6] p-6 border-2 border-[#DDA15E]/40 shadow-tactile">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border-2 border-[#DDA15E]/40">
                <Image
                  src="/images/farmer_cindy_glam_square.jpg"
                  alt="Farmer Cindy Official Portrait - Author & Founder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-black font-heading text-[#0D3829]">Farmer Cindy</h3>
                <span className="text-xs font-black uppercase tracking-wider text-[#2B6E4F] block mt-0.5">
                  Author &amp; Founder • FarmerCindy, Inc.
                </span>
                <p className="mt-2 text-xs text-slate-600">
                  Creator of <em>FarmerCindy Finds a Farm</em> and <em>What's Happening to Our Farming Community?</em>
                </p>

                <div className="mt-4 pt-3 border-t border-amber-200/80 flex items-center justify-center gap-2 text-xs font-bold text-[#0D3829]">
                  <Sprout className="w-3.5 h-3.5 text-[#2B6E4F]" />
                  <span>100% of Royalties Fund Free Youth Seeds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Content */}
          <div className="lg:col-span-7 space-y-4 text-base text-slate-700 leading-relaxed">
            <span className="text-xs font-black uppercase tracking-wider text-[#0D3829] bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-300/60">
              Author Journey
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#0D3829] leading-tight">
              Inspiring the Next Generation to Grow Living Food
            </h2>

            <p>
              Cindy believes that inside every child lives an innate scientist and curious gardener. Observing how many children today grow up without understanding where real food comes from, she began authoring <em>The Adventures of Farmer Cindy</em> to bridge storytime entertainment with practical agricultural literacy.
            </p>

            <blockquote className="my-6 pl-6 border-l-2 border-[#DDA15E] text-slate-800 font-heading text-lg sm:text-xl italic font-bold leading-relaxed">
              "When a child plants a single seed, tends to it, and tastes the sweet harvest, their relationship with fresh food changes permanently."
            </blockquote>

            <p>
              Through her foundation, <strong>FarmerCindy, Inc. (501c3)</strong>, Cindy personally oversees the distribution of heirloom seed packets, raised school garden beds, and classroom reading sets to Title I schools across the country.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/books"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow transition"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Cindy's Books</span>
              </Link>

              <Link
                href="/mission"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#0D3829] hover:bg-[#165B3F] transition border border-emerald-500/30"
              >
                <Sprout className="w-4 h-4 text-[#DDA15E]" />
                <span>Learn About Our 501(c)(3)</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Author Q&A Accordion */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] border border-emerald-500/30 mb-2">
              <HelpCircle className="w-4 h-4 text-[#DDA15E]" />
              <span>Common Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#0D3829]">
              Frequently Asked by Parents &amp; Teachers
            </h3>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border-2 border-amber-200/80 bg-white/95 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-black text-base text-[#0D3829] hover:text-[#2B6E4F] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#DDA15E] shrink-0 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-amber-100 pt-3 animate-in fade-in-50 duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* School Visits & Reading Assemblies Section */}
        <section className="rounded-4xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F4EFE6] p-6 sm:p-10 lg:p-14 border-2 border-[#DDA15E]/40 shadow-tactile max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#0D3829] text-[#DDA15E] mb-3 shadow-sm border border-emerald-500/30">
              <School className="w-4 h-4 text-[#DDA15E]" />
              Classroom &amp; Library Assemblies
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#0D3829]">
              Book an Author Reading with Farmer Cindy
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Invite Farmer Cindy to your elementary school, public library, or homeschool co-op for an unforgettable agricultural storytime, heirloom seed show-and-tell, and interactive Q&amp;A!
            </p>
          </div>

          {/* Form */}
          {success ? (
            <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center animate-in zoom-in-95 duration-300 max-w-lg mx-auto">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-[#0D3829] mb-4">
                <CheckCircle2 className="w-10 h-10 text-[#2B6E4F]" />
              </div>
              <h3 className="text-2xl font-black text-[#0D3829]">
                School Reading Request Received!
              </h3>
              <p className="mt-2 text-sm text-emerald-800 leading-relaxed">
                Thank you for inviting Farmer Cindy to your school or library! Our coordinator has received your information and will reply to <strong>{formData.email}</strong> within 24 to 48 hours to confirm availability and schedule your assembly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                    Target Grade Level
                  </label>
                  <select
                    value={formData.gradeLevel}
                    onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  >
                    <option value="Virtual Zoom Reading">Virtual Reading (Zoom / Meet • 45 Mins)</option>
                    <option value="In-Person Assembly">In-Person Assembly (All-School)</option>
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
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
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
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-amber-800 font-bold text-center bg-amber-100 p-2 rounded-lg">{errorMsg}</p>
              )}

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-10 py-4 rounded-2xl text-base font-black text-slate-950 bg-[#DDA15E] hover:bg-[#c99252] shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition active:translate-y-0 disabled:opacity-75"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Submit Author Reading Request</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
                <ShieldCheck className="w-4 h-4 text-[#2B6E4F] shrink-0" />
                <span>Protected by COPPA guidelines. We only contact verified adult educators.</span>
              </p>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
