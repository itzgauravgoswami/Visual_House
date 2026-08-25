"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Zap, Award, Sparkles, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#c5a059]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column — Visual Art & Brand Logo Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto rounded-3xl glass-panel p-8 border border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden group bg-[#111111]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#fef08a]/20 via-[#c5a059]/20 to-[#9a7b38]/20 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />

              {/* Logo display */}
              <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#000000] border border-[#c5a059]/30 flex items-center justify-center p-2 shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
                  <Image
                    src="/logo/logo.png"
                    alt="Visual House Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="text-right">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30">
                    EST. 2024
                  </span>
                  <p className="text-xs text-zinc-400 mt-1">Creative Technology Studio</p>
                </div>
              </div>

              {/* Center quote inside graphic */}
              <div className="relative z-10 my-6 p-4 rounded-2xl bg-[#000000]/90 border border-white/10 space-y-2">
                <p className="font-serif text-xs font-semibold text-white">
                  "Ideas are everywhere. Great execution isn't."
                </p>
                <p className="text-[11px] text-zinc-300 font-sans">
                  We exist to eliminate boring agency templates and build work that makes people stop, notice, and take action.
                </p>
              </div>

              {/* Bottom features bar */}
              <div className="relative z-10 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl bg-[#000000]/90 border border-white/5 flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span className="text-xs font-semibold text-white">100% Custom</span>
                </div>
                <div className="p-3 rounded-xl bg-[#000000]/90 border border-white/5 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-300 shrink-0" />
                  <span className="text-xs font-semibold text-white">Rapid Execution</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-wider text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
              <span>ABOUT VISUAL HOUSE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
              We Believe Great Ideas Deserve <span className="text-gradient-brand italic">Great Execution.</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-normal">
              Visual House is a creative digital agency built for brands that want to think differently. We combine design, technology, storytelling, and marketing to create digital experiences people remember.
            </p>

            {/* Mission, Vision, Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-2 bg-[#111111] hover:bg-gradient-to-b hover:from-[#1c1810] hover:to-[#110f0a] hover:border-[#c5a059]/60 hover:shadow-[0_10px_35px_rgba(197,160,89,0.2)] transition-all duration-300">
                <div className="flex items-center gap-2 text-[#c5a059] font-bold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  To elevate ambitious brands by crafting market-defining websites, video content, and visual identities that drive measurable growth.
                </p>
              </div>

              <div className="p-5 rounded-2xl glass-card border border-white/10 space-y-2 bg-[#111111] hover:bg-gradient-to-b hover:from-[#1c1810] hover:to-[#110f0a] hover:border-[#c5a059]/60 hover:shadow-[0_10px_35px_rgba(197,160,89,0.2)] transition-all duration-300">
                <div className="flex items-center gap-2 text-[#c5a059] font-bold text-sm">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Our Philosophy</span>
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                  Your brand should not look like everyone else. We prioritize strong typography, intentional whitespace, and original creative execution.
                </p>
              </div>

            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] text-black font-semibold text-xs shadow-[0_2px_10px_rgba(197,160,89,0.3)] hover:shadow-[0_4px_20px_rgba(197,160,89,0.5)] transition-all"
              >
                Learn More About Us
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-[#111111] hover:bg-[#1c1c1c] border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-colors hover:border-[#c5a059]/40"
              >
                Meet the Team
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>

  );
}
