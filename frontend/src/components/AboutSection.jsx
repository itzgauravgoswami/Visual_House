"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Zap, Award, Sparkles, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
      {/* VIBRANT CONTINUOUS MOVING AMBIENT BACKGROUND */}

      {/* 1. Primary Gold Ambient Glowing Orb */}
      <motion.div
        animate={{
          x: [-110, 110, -110],
          y: [-70, 85, -70],
          scale: [0.95, 1.2, 0.95],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#c5a059]/25 via-amber-500/15 to-[#9a7b38]/20 rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* 2. Secondary Warm Light Orb */}
      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [70, -80, 70],
          scale: [1.25, 0.85, 1.25],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#fef08a]/20 via-[#c5a059]/15 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
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
              y: 600,
              opacity: 0,
            }}
            animate={{
              y: [-30, -650],
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
