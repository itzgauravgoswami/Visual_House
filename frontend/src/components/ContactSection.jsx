"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Sparkles, Mail, Phone, MapPin, Clock } from "lucide-react";
import confetti from "canvas-confetti";

const SERVICES_OPTIONS = [
  "Website Design & Development",
  "Video Production & Editing",
  "YouTube & Social Thumbnails",
  "Logo & Brand Identity",
  "Social Media Design",
  "UI/UX Experience Design",
  "Motion Graphics & FX",
  "Full Agency Retainer",
];

const BUDGET_OPTIONS = [
  "\$2,500 – \$5,000",
  "\$5,000 – \$10,000",
  "\$10,000 – \$25,000",
  "\$25,000+",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: SERVICES_OPTIONS[0],
    budget: BUDGET_OPTIONS[1],
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Trigger confetti celebrate effect
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#38BDF8", "#A855F7", "#EC4899"],
        });
      } catch (err) {
        // Fallback
      }
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
      {/* VIBRANT CONTINUOUS MOVING AMBIENT BACKGROUND */}

      {/* 1. Primary Gold Ambient Glowing Orb */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [-70, 80, -70],
          scale: [0.9, 1.25, 0.9],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#c5a059]/25 via-amber-500/15 to-[#9a7b38]/20 rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* 2. Secondary Warm Light Orb */}
      <motion.div
        animate={{
          x: [110, -110, 110],
          y: [60, -80, 60],
          scale: [1.2, 0.85, 1.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#fef08a]/20 via-[#c5a059]/15 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
      />

      {/* 3. Moving Grid Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "48px 48px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05915_1px,transparent_1px),linear-gradient(to_bottom,#c5a05915_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0"
      />

      {/* 4. Floating Golden Light Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: (i - 5) * 120,
              y: 700,
              opacity: 0,
            }}
            animate={{
              y: [-30, -750],
              opacity: [0, 0.8, 0],
              x: [(i - 5) * 120, (i - 5) * 120 + (i % 2 === 0 ? 30 : -30)],
            }}
            transition={{
              duration: 7 + i * 1,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.6,
            }}
            className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-[#fef08a] shadow-[0_0_10px_#c5a059]"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column — Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-wider text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>PROJECT INQUIRY</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
                Let's Build Something <br />
                <span className="text-[#c5a059] italic">Remarkable.</span>
              </h2>

              <p className="text-zinc-300 text-base leading-relaxed">
                Ready to take your brand to the next level? Fill out our inquiry form or contact our studio team directly. We respond within 24 hours.
              </p>
            </div>

            {/* Studio Info Items */}
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Email Studio</p>
                  <a href="mailto:hello@visualhouse.agency" className="text-sm font-semibold text-white hover:text-[#c5a059] transition-colors">
                    hello@visualhouse.agency
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Response Time</p>
                  <p className="text-sm font-semibold text-white">Under 24 Hours Guaranteed</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-[#c5a059]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400">Location</p>
                  <p className="text-sm font-semibold text-white">Global Studio — Distributed Team</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Project Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative bg-[#111111]/80">
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#c5a059]/20 border border-[#c5a059]/40 text-[#c5a059] flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-[#c5a059] font-semibold">{formData.name}</span>. Our team is reviewing your project details for <span className="text-[#c5a059] font-semibold">{formData.service}</span> and will reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#111111] hover:bg-[#1c1c1c] border border-white/10 text-xs font-semibold text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Company / Channel Name</label>
                      <input
                        type="text"
                        placeholder="Nexa Studio / Tech Explorer"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#c5a059] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Service Needed *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-white/10 text-white text-xs focus:outline-none focus:border-[#c5a059] transition-colors"
                      >
                        {SERVICES_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#111111] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Estimated Budget</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {BUDGET_OPTIONS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all duration-300 ${
                            formData.budget === b
                              ? "bg-[#c5a059]/20 text-[#c5a059] border-[#c5a059]/60 shadow-[0_2px_10px_rgba(197,160,89,0.25)]"
                              : "bg-[#000000] text-zinc-400 border-white/10 hover:border-[#c5a059]/40 hover:bg-[#1c1810] hover:text-white"
                          }`}
                        >
                          {b}
                        </button>
                      ))}

                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your goals, key deliverables, and desired launch timeframe..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#000000] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#c5a059] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] text-black font-bold text-sm shadow-[0_2px_10px_rgba(197,160,89,0.3)] hover:shadow-[0_4px_20px_rgba(197,160,89,0.5)] transition-all flex items-center justify-center gap-2 active:scale-[0.99] disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <span>Submit Project Inquiry</span>
                        <Send className="w-4 h-4 text-black" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
