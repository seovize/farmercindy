"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { User, Sprout, Send, CheckCircle2, ShieldCheck, Mail, Calendar, MapPin, Loader2, BookOpen, Heart, HelpCircle, ChevronDown, Award, Sun, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    inquiryType: "Community Farm Partnership",
    region: "",
    message: "",
    honeypot: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setErrorMsg("Please fill in your name and email.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/school-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          visitType: formData.inquiryType,
          preferredDate: formData.region,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setErrorMsg(data.error || "Could not submit message. Please try again.");
      }
    } catch (err: any) {
      setErrorMsg("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: "What is the core mission of FarmerCindy, Inc.?",
      a: "FarmerCindy, Inc. is a registered 501(c)(3) non-profit organization dedicated to heirloom farming, living soil stewardship, and cultivating fresh, nutrient-dense organic produce to share with neighbors and families in need for free.",
    },
    {
      q: "How do the picture books and merchandise fund the farm?",
      a: "Cindy created 'The Adventures of Farmer Cindy' series to educate the next generation about nature and self-reliance. One hundred percent of book royalties and merchandise sales flow directly into purchasing non-GMO heirloom seeds, rich organic compost, drip irrigation, and expanding community farm plots.",
    },
    {
      q: "Why does Farmer Cindy emphasize heirloom varieties and living soil?",
      a: "Heirloom seeds are heritage open-pollinated varieties passed down through generations for outstanding flavor, resilience, and natural nutrition. When grown in living soil full of beneficial microorganisms rather than synthetic chemical fertilizers, the harvest feeds the body with true vitality.",
    },
    {
      q: "How can community members, families, and organizations get involved?",
      a: "You can support our mission in three powerful ways: order Cindy's picture books on Amazon, make a tax-deductible 501(c)(3) gift through our Giving Portal, or reach out to partner on community planting days and seed exchanges.",
    },
  ];

  const galleryPhotos = [
    {
      src: "/images/client_media/1000436572.jpg",
      caption: "Farmer Cindy in the Field",
      tag: "Founder & Author",
    },
    {
      src: "/images/generated/heirloom_harvest_basket.jpg",
      caption: "Fresh Heirloom Produce Harvest",
      tag: "Living Produce",
    },
    {
      src: "/images/generated/community_harvest_solidarity.jpg",
      caption: "Sharing Free Food with Families",
      tag: "Community Solidarity",
    },
    {
      src: "/images/generated/heirloom_seedlings_living_soil.jpg",
      caption: "Heirloom Seedlings & Living Soil",
      tag: "Heritage Stewardship",
    },
  ];

  return (
    <div className="relative overflow-hidden paper-canvas py-12 md:py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#173D57] text-[#DDA15E] border border-sky-300/30 mb-4 shadow-sm">
            <Sprout className="w-4 h-4 text-[#DDA15E]" />
            <span>Heirloom Farmer, Author &amp; 501(c)(3) Founder</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black text-[#173D57] tracking-tight leading-[1.15]">
            Meet <span className="text-[#2B6E4F]">Farmer Cindy</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Heirloom farmer, author, and community advocate on a heartfelt mission to grow living food from healthy soil and share the harvest with families for free.
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
                <h3 className="text-2xl font-black font-heading text-[#173D57]">Farmer Cindy</h3>
                <span className="text-xs font-black uppercase tracking-wider text-[#2B6E4F] block mt-0.5">
                  Heirloom Farmer &amp; Author • FarmerCindy, Inc.
                </span>
                <p className="mt-2 text-xs text-slate-600">
                  Author of <em>FarmerCindy Finds a Farm</em> and <em>What's Happening to Our Farming Community?</em>
                </p>

                <div className="mt-4 pt-3 border-t border-amber-200/80 flex items-center justify-center gap-2 text-xs font-bold text-[#173D57]">
                  <Sprout className="w-3.5 h-3.5 text-[#2B6E4F]" />
                  <span>100% Book Royalties Support Free Community Food</span>
                </div>
              </div>
            </div>
          </div>

          {/* Biography Content */}
          <div className="lg:col-span-7 space-y-4 text-base text-slate-700 leading-relaxed">
            <span className="text-xs font-black uppercase tracking-wider text-[#173D57] bg-sky-100/80 px-3.5 py-1 rounded-full border border-sky-300/60">
              The Living Mission
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-black text-[#173D57] leading-tight">
              Cultivating Real Food &amp; Community Solidarity
            </h2>

            <p>
              Cindy believes that wholesome, nutrient-dense food grown from living soil is a birthright, not a luxury. Having observed how disconnected our modern world has become from the earth, she set out to build an heirloom farming community where neighbors come together to plant heritage crops and share harvest abundance freely.
            </p>

            <blockquote className="my-6 pl-6 border-l-4 border-[#DDA15E] text-[#173D57] font-heading text-lg sm:text-xl italic font-bold leading-relaxed bg-white/60 p-4 rounded-r-2xl">
              "When you build a community around living soil and heirloom seeds, you don't just grow fresh food—you feed people for free and restore human connection to the land."
            </blockquote>

            <p>
              Through her 501(c)(3) non-profit, <strong>FarmerCindy, Inc.</strong>, Cindy channels book proceeds and public support directly into organic seeds, cedar raised garden beds, and community plots that feed families with dignity.
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
                href="/donate"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#173D57] hover:bg-[#1A4563] transition border border-sky-300/30"
              >
                <Heart className="w-4 h-4 text-[#DDA15E]" />
                <span>Support Our 501(c)(3) Farm</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Authentic Farm & Field Gallery */}
        <section className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#173D57] text-[#DDA15E] border border-sky-300/30 mb-2">
              <Sun className="w-4 h-4 text-[#DDA15E]" />
              <span>Real Earth &amp; Real Produce</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#173D57]">
              Life in the Garden &amp; On the Land
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
              Behind every book and every page is genuine devotion to heirloom crops, healthy soil, and community sharing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="group relative rounded-3xl overflow-hidden border-2 border-stone-200/90 shadow-sm aspect-[4/5] bg-slate-900"
              >
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#DDA15E] block">
                    {photo.tag}
                  </span>
                  <span className="text-xs font-bold leading-tight line-clamp-1">
                    {photo.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Author Q&A Accordion */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#173D57] text-[#DDA15E] border border-sky-300/30 mb-2">
              <HelpCircle className="w-4 h-4 text-[#DDA15E]" />
              <span>Common Questions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-[#173D57]">
              Frequently Asked About Farmer Cindy's Mission
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
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-black text-base text-[#173D57] hover:text-[#2B6E4F] transition-colors"
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

        {/* Community Farm & Collaboration Inquiry Section */}
        <section className="rounded-4xl bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F4EFE6] p-6 sm:p-10 lg:p-14 border-2 border-[#DDA15E]/40 shadow-tactile max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#173D57] text-[#DDA15E] mb-3 shadow-sm border border-sky-300/30">
              <Users className="w-4 h-4 text-[#DDA15E]" />
              Community Partnerships &amp; Speaking
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-[#173D57]">
              Connect with Farmer Cindy &amp; Our Farm
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are looking to partner on a community garden, volunteer for harvest days, invite Cindy for an inspirational reading or talk, or collaborate with our 501(c)(3) mission—we would love to hear from you.
            </p>
          </div>

          {/* Form */}
          {success ? (
            <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-300 text-center animate-in zoom-in-95 duration-300 max-w-lg mx-auto">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-[#173D57] mb-4">
                <CheckCircle2 className="w-10 h-10 text-[#2B6E4F]" />
              </div>
              <h3 className="text-2xl font-black text-[#173D57]">
                Community Message Received!
              </h3>
              <p className="mt-2 text-sm text-emerald-800 leading-relaxed">
                Thank you for reaching out to Farmer Cindy! Our team has received your message and will reply to <strong>{formData.email}</strong> within 24 to 48 hours.
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
                    placeholder="e.g. Sarah Johnson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                    Organization / Community Group
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Green Valley Garden Club"
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
                    placeholder="yourname@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                  >
                    <option value="Community Farm Partnership">Community Farm Partnership</option>
                    <option value="Volunteer Harvest & Planting Day">Volunteer Harvest &amp; Planting Day</option>
                    <option value="Heirloom Seed & Soil Workshop">Heirloom Seed &amp; Soil Workshop</option>
                    <option value="Author Event & Community Talk">Author Event &amp; Community Talk</option>
                    <option value="501(c)(3) Grant or Donor Collaboration">501(c)(3) Grant / Donor Collaboration</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                  City, State or Region
                </label>
                <input
                  type="text"
                  placeholder="e.g. Atlanta, GA"
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-stone-200 focus:border-[#2B6E4F] focus:outline-none bg-white font-medium text-slate-800 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-black uppercase text-slate-700 mb-1">
                  Message or How We Can Help (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your community garden, ideas, or event..."
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
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Community Message</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1.5 pt-2">
                <ShieldCheck className="w-4 h-4 text-[#2B6E4F] shrink-0" />
                <span>We respect your privacy. Zero spam, ever.</span>
              </p>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
