"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  Sparkles,
  CheckCircle2,
  Star
} from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#000000] text-[#ffffff]">
      {/* VIBRANT CONTINUOUS MOVING AMBIENT BACKGROUND */}

      {/* 1. Primary Gold Ambient Glowing Orb */}
      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [-80, 90, -80],
          scale: [0.9, 1.25, 0.9],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] bg-gradient-to-tr from-[#c5a059]/30 via-amber-500/20 to-[#9a7b38]/25 rounded-full blur-[110px] sm:blur-[160px] pointer-events-none z-0"
      />

      {/* 2. Secondary Warm Light Orb */}
      <motion.div
        animate={{
          x: [130, -130, 130],
          y: [70, -90, 70],
          scale: [1.2, 0.85, 1.2],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] bg-gradient-to-br from-[#fef08a]/25 via-[#c5a059]/20 to-transparent rounded-full blur-[100px] sm:blur-[140px] pointer-events-none z-0"
      />

      {/* 3. Moving Grid Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "56px 56px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05918_1px,transparent_1px),linear-gradient(to_bottom,#c5a05918_1px,transparent_1px)] bg-[size:3rem_3rem] sm:bg-[size:3.75rem_3.75rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_0%,#000_80%,transparent_100%)] pointer-events-none z-0"
      />

      {/* 4. Floating Golden Light Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: (i - 6) * 100,
              y: 500,
              opacity: 0,
            }}
            animate={{
              y: [-40, -600],
              opacity: [0, 0.85, 0],
              x: [(i - 6) * 100, (i - 6) * 100 + (i % 2 === 0 ? 40 : -40)],
            }}
            transition={{
              duration: 6 + i * 0.9,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.5,
            }}
            className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-[#fef08a] shadow-[0_0_10px_#c5a059]"
          />
        ))}
      </div>

      {/* 5. Top Sweeping Light Beam */}
      <motion.div
        animate={{
          opacity: [0.4, 1, 0.4],
          scaleX: [0.75, 1.2, 0.75],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent pointer-events-none z-10"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SINGLE COLUMN CENTERED HERO CONTAINER */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7">
          
          {/* Top Status & Agency Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-medium tracking-wider text-[#c5a059] uppercase shadow-[0_2px_10px_rgba(197,160,89,0.25)] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c5a059] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c5a059]" />
              </span>
              <span>Visual House Studio</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Available for Q3/Q4 Projects</span>
            </div>
          </motion.div>

          {/* Main Centered Executive Headline — 24 Skin Bank Newsreader Font */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.15]"
          >
            We Craft <span className="text-gradient-brand italic drop-shadow-[0_10px_30px_rgba(197,160,89,0.3)]">Digital Experiences</span> That Drive Brand Growth.
          </motion.h1>

          {/* Centered Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-zinc-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal"
          >
            Visual House is an elite digital creative studio. We build high-converting web apps, edit 4K cinematic videos, create viral YouTube graphics, and scale brand identities.
          </motion.p>

          {/* Centered Action Buttons & Trust Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5 pt-1"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto relative group overflow-hidden rounded-full p-[1px] font-semibold text-sm transition-all duration-300 shadow-[0_2px_10px_rgba(197,160,89,0.25)] hover:shadow-[0_4px_20px_rgba(197,160,89,0.4)] active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] rounded-full animate-pulse-slow" />
                <span className="relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#000000] group-hover:bg-[#111111] text-[#ffffff] transition-colors duration-200">
                  <Sparkles className="w-4 h-4 text-[#c5a059] group-hover:rotate-12 transition-transform" />
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="#work"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#111111]/90 hover:bg-[#1c1c1c] border border-white/10 text-white text-sm font-semibold transition-all duration-200 active:scale-95 backdrop-blur-sm hover:border-[#c5a059]/40"
              >
                <Play className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
                <span>Explore Showcase</span>
              </Link>
            </div>

            {/* Verified Client Rating & Badges Bar */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs text-zinc-400 pt-1">
              <div className="flex -space-x-2 overflow-hidden shrink-0">
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-[#000000] bg-gradient-to-tr from-[#c5a059] to-amber-200 text-[9px] font-bold text-black flex items-center justify-center shadow-md">VH</div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-[#000000] bg-gradient-to-tr from-amber-600 to-[#c5a059] text-[9px] font-bold text-white flex items-center justify-center shadow-md">YT</div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-[#000000] bg-gradient-to-tr from-emerald-600 to-teal-400 text-[9px] font-bold text-white flex items-center justify-center shadow-md">UX</div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#c5a059] fill-[#c5a059]" />
                  ))}
                </div>
                <span className="font-bold text-white text-xs sm:text-sm">4.9/5 Rating</span>
                <span className="text-zinc-500 font-medium text-xs sm:text-sm">• Trusted by 50+ Global Brands</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}







