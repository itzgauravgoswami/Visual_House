"use client";

import { motion } from "framer-motion";
import { Compass, Lightbulb, Code2, Rocket, Workflow } from "lucide-react";



const STEPS = [
  {
    num: "01",
    title: "Discover",
    icon: Compass,
    desc: "We perform a deep dive into your brand, target audience, competitive landscape, key goals, and project challenges.",
    deliverables: ["Discovery Call", "Brand Audit", "Persona"],
  },
  {
    num: "02",
    title: "Strategize",
    icon: Lightbulb,
    desc: "We establish the creative direction, moodboards, technical architecture, timeline milestones, and messaging frameworks.",
    deliverables: ["Creative Brief", "Moodboard", "Specs"],
  },
  {
    num: "03",
    title: "Create",
    icon: Code2,
    desc: "Our specialized designers, developers, video editors, and animators craft your assets in active collaborative sprints.",
    deliverables: ["Figma UI", "4K Video Edit", "Next.js Code"],
  },
  {
    num: "04",
    title: "Launch & Grow",
    icon: Rocket,
    desc: "We perform rigorous QA testing, launch your assets publicly, monitor analytics, and partner with you for continuous growth.",
    deliverables: ["Deployment", "Tracking", "Support"],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
      {/* VIBRANT CONTINUOUS MOVING AMBIENT BACKGROUND */}

      {/* 1. Primary Gold Ambient Glowing Orb */}
      <motion.div
        animate={{
          x: [-90, 90, -90],
          y: [-60, 75, -60],
          scale: [0.9, 1.2, 0.9],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-[#c5a059]/25 via-amber-500/15 to-[#9a7b38]/20 rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* 2. Secondary Warm Light Orb */}
      <motion.div
        animate={{
          x: [100, -100, 100],
          y: [60, -75, 60],
          scale: [1.2, 0.85, 1.2],
        }}
        transition={{
          duration: 18,
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
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: (i - 4) * 140,
              y: 500,
              opacity: 0,
            }}
            animate={{
              y: [-30, -600],
              opacity: [0, 0.8, 0],
              x: [(i - 4) * 140, (i - 4) * 140 + (i % 2 === 0 ? 30 : -30)],
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

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-wider text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
            <Workflow className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>OUR 4-STEP PROCESS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            From Concept to <span className="text-gradient-brand italic">Market Leadership.</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-sans">
            A transparent, battle-tested creative workflow engineered to deliver custom digital experiences strictly on schedule.
          </p>
        </div>

        {/* High-Visibility Process Timeline Connecting Line */}
        <div className="hidden lg:block relative mb-8">
          <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent shadow-[0_0_20px_#c5a059]" />
          <div className="flex justify-between items-center -mt-[9px] px-16">
            {STEPS.map((step) => (
              <div key={step.num} className="relative flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#000000] border-2 border-[#c5a059] shadow-[0_0_15px_#c5a059] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fef08a] animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">

          
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl border border-white/10 relative z-10 flex flex-col justify-between group bg-[#111111] hover:bg-gradient-to-b hover:from-[#1c1810] hover:to-[#110f0a] hover:border-[#c5a059]/60 hover:shadow-[0_12px_40px_rgba(197,160,89,0.25)] transition-all duration-300"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Step Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#c5a059]/15 text-[#c5a059] border border-[#c5a059]/30">
                      STEP {step.num}
                    </span>
                    <div className="w-11 h-11 rounded-2xl bg-[#000000] border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.2)] group-hover:scale-110 group-hover:border-[#c5a059] transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-[#c5a059] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-300 leading-relaxed mb-6 font-sans">
                    {step.desc}
                  </p>
                </div>

                {/* Key Deliverables Pills */}
                <div className="pt-5 border-t border-white/10 space-y-2">
                  <p className="text-[10px] font-mono text-[#c5a059] uppercase tracking-wider font-bold">
                    Key Outputs:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#000000] text-zinc-300 border border-white/10 group-hover:border-[#c5a059]/30 group-hover:text-[#c5a059] transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

