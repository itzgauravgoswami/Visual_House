"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function CreativeStatement() {
  return (
    <section className="py-28 sm:py-36 bg-[#000000] text-[#ffffff] relative overflow-hidden text-center">
      {/* VIBRANT CONTINUOUS MOVING AMBIENT BACKGROUND */}

      {/* 1. Primary Gold Ambient Glowing Orb */}
      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [-70, 85, -70],
          scale: [0.95, 1.25, 0.95],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-tr from-[#c5a059]/30 via-amber-500/20 to-[#9a7b38]/25 rounded-full blur-[140px] sm:blur-[180px] pointer-events-none z-0"
      />

      {/* 2. Moving Grid Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "48px 48px"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05915_1px,transparent_1px),linear-gradient(to_bottom,#c5a05915_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0"
      />

      {/* 3. Floating Golden Light Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: (i - 5) * 120,
              y: 500,
              opacity: 0,
            }}
            animate={{
              y: [-30, -600],
              opacity: [0, 0.85, 0],
              x: [(i - 5) * 120, (i - 5) * 120 + (i % 2 === 0 ? 30 : -30)],
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-widest text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.25)] backdrop-blur-md"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          <span>OUR CREATIVE CREED</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-normal text-white tracking-tight leading-[1.12]"
        >
          YOUR BRAND SHOULD <br />
          <span className="text-gradient-brand italic drop-shadow-[0_10px_30px_rgba(197,160,89,0.3)]">NOT LOOK LIKE</span> <br />
          EVERYONE ELSE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-300 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed font-sans"
        >
          Templates dilute distinction. We craft custom digital platforms, high-retention video edits, and bold brand systems engineered specifically for market leadership.
        </motion.p>
      </div>
    </section>
  );
}

