"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "50+", label: "Projects Delivered", detail: "Websites, Videos & Brand Identities" },
  { value: "30+", label: "Happy Clients", detail: "Global Startups & Creators" },
  { value: "10+", label: "Creative Services", detail: "Under One Unified Roof" },
  { value: "100%", label: "Creative Commitment", detail: "Zero Template Compromises" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-[#000000] text-[#ffffff] border-y border-white/5 relative overflow-hidden">
      {/* VIBRANT CONTINUOUS MOVING AMBIENT BACKGROUND */}

      {/* 1. Primary Gold Ambient Glowing Orb */}
      <motion.div
        animate={{
          x: [-80, 80, -80],
          y: [-40, 50, -40],
          scale: [0.95, 1.2, 0.95],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#c5a059]/20 via-amber-500/15 to-[#9a7b38]/20 rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* 2. Moving Grid Pattern */}
      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "48px 48px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05912_1px,transparent_1px),linear-gradient(to_bottom,#c5a05912_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0"
      />

      {/* 3. Floating Golden Light Dust Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: (i - 3) * 150,
              y: 300,
              opacity: 0,
            }}
            animate={{
              y: [-10, -350],
              opacity: [0, 0.8, 0],
              x: [(i - 3) * 150, (i - 3) * 150 + (i % 2 === 0 ? 25 : -25)],
            }}
            transition={{
              duration: 6 + i * 1,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.5,
            }}
            className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full bg-[#fef08a] shadow-[0_0_10px_#c5a059]"
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="text-center p-6 rounded-2xl glass-card border border-white/10 space-y-2 group bg-[#111111] hover:bg-gradient-to-b hover:from-[#1c1810] hover:to-[#110f0a] hover:border-[#c5a059]/60 hover:shadow-[0_10px_35px_rgba(197,160,89,0.2)] transition-all duration-300"

            >
              <h3 className="font-serif text-4xl sm:text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] tracking-tight">
                {stat.value}
              </h3>
              <p className="text-sm font-bold text-white tracking-wide">
                {stat.label}
              </p>
              <p className="text-[11px] text-zinc-400 font-sans">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

  );
}
