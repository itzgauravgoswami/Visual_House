"use client";

import { motion } from "framer-motion";
import { Lightbulb, Layers, Cpu, Target, Zap, Rocket } from "lucide-react";

const PILLARS = [
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    desc: "We don't rely on cookie-cutter templates. Every project begins with a blank canvas tailored strictly around your brand's unique positioning.",
    colSpan: "lg:col-span-4",
    color: "from-[#c5a059]/20 to-amber-500/5",
    iconColor: "text-[#c5a059]",
  },
  {
    icon: Layers,
    title: "One Creative House",
    desc: "Websites, videos, branding, graphics, and digital marketing under one roof. No juggling multiple freelancers or disconnected agencies.",
    colSpan: "lg:col-span-2",
    color: "from-amber-500/20 to-[#c5a059]/5",
    iconColor: "text-amber-400",
  },
  {
    icon: Target,
    title: "Results Focused",
    desc: "Beautiful design is table stakes. We engineer experiences focused on conversions, CTR, engagement, and measurable revenue growth.",
    colSpan: "lg:col-span-2",
    color: "from-[#c5a059]/20 to-yellow-600/5",
    iconColor: "text-amber-300",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    desc: "Built with Next.js, React, Tailwind, 4K rendering pipelines, and modern AI workflows to ensure lightning-fast performance.",
    colSpan: "lg:col-span-4",
    color: "from-amber-500/20 to-orange-500/5",
    iconColor: "text-amber-400",
  },
  {
    icon: Zap,
    title: "Fast & Collaborative",
    desc: "Transparent communication, rapid sprints, and real-time client feedback loops. You are involved in every major milestone.",
    colSpan: "lg:col-span-3",
    color: "from-[#c5a059]/20 to-amber-500/5",
    iconColor: "text-[#c5a059]",
  },
  {
    icon: Rocket,
    title: "Built to Scale",
    desc: "Architected for long-term endurance. Our design systems, codebases, and media assets easily scale as your user base expands.",
    colSpan: "lg:col-span-3",
    color: "from-amber-500/20 to-[#9a7b38]/5",
    iconColor: "text-amber-400",
  },
];


export default function WhyVisualHouse() {
  return (
    <section className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
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
        className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#fef08a]/20 via-[#c5a059]/15 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
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
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: (i - 4) * 130,
              y: 600,
              opacity: 0,
            }}
            animate={{
              y: [-30, -700],
              opacity: [0, 0.8, 0],
              x: [(i - 4) * 130, (i - 4) * 130 + (i % 2 === 0 ? 30 : -30)],
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

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-wider text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
            <span>THE VISUAL HOUSE ADVANTAGE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
            More Than a Creative Agency. <br className="hidden sm:inline" />
            <span className="text-gradient-brand italic">We're Your Digital Growth Partner.</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
            We bridge the gap between high-end aesthetics, tech-forward development, and strategic marketing results.
          </p>
        </div>

        {/* Perfectly Balanced 6-Column Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`glass-card p-8 rounded-3xl border border-white/10 relative overflow-hidden group flex flex-col justify-between bg-[#111111] hover:bg-gradient-to-b hover:from-[#1c1810] hover:to-[#110f0a] hover:border-[#c5a059]/60 hover:shadow-[0_10px_35px_rgba(197,160,89,0.2)] transition-all duration-300 ${pillar.colSpan}`}
              >
                {/* Background glow gradient */}
                <div
                  className={`absolute -bottom-10 -right-10 w-48 h-48 bg-gradient-to-br ${pillar.color} rounded-full blur-2xl group-hover:scale-150 group-hover:opacity-100 transition-all duration-500 pointer-events-none`}
                />

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#000000] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#c5a059]/50 group-hover:bg-[#111111] transition-all duration-300">
                    <Icon className={`w-6 h-6 ${pillar.iconColor}`} />
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                  <span>Standard at Visual House</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

