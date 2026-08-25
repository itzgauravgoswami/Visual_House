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
