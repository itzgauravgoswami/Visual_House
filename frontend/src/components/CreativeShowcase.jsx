"use client";

import { motion } from "framer-motion";
import { Layout, Image as ImageIcon, Video, Sparkles, Layers, Palette } from "lucide-react";

const SHOWCASE_ITEMS = [
  {
    title: "Next.js Web Application",
    type: "Website Mockup",
    icon: Layout,
    accent: "from-sky-500/30 via-indigo-600/30 to-purple-600/40",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
    border: "border-sky-500/30",
    details: "Interactive Glass Dashboard with High Performance",
  },
  {
    title: "High-CTR YouTube Thumbnail",
    type: "Thumbnail Design",
    icon: Sparkles,
    accent: "from-pink-500/30 via-rose-600/30 to-red-600/40",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    border: "border-pink-500/30",
    details: "3D Visual Expression & Dynamic Typography",
  },
  {
    title: "Minimalist Brand Emblem",
    type: "Brand Logo",
    icon: Palette,
    accent: "from-amber-500/30 via-orange-600/30 to-yellow-600/40",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop",
    border: "border-amber-500/30",
    details: "Scalable Vector Emblem & Color Palette",
  },
  {
    title: "Social Ad Campaign Grid",
    type: "Social Media",
    icon: Layers,
    accent: "from-[#c5a059]/30 via-amber-600/30 to-[#9a7b38]/40",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1000&auto=format&fit=crop",
    border: "border-[#c5a059]/30",
    details: "High-Converting Instagram Carousel Templates",
  },
  {
    title: "4K Motion Graphics Intro",
    type: "Video Production",
    icon: Video,
    accent: "from-[#c5a059]/30 via-amber-600/30 to-[#9a7b38]/40",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1000&auto=format&fit=crop",
    border: "border-[#c5a059]/30",
    details: "Kinetic Typography & Sound Design",
  },
  {
    title: "Mobile App Interface",
    type: "UI/UX Screen",
    icon: ImageIcon,
    accent: "from-cyan-500/30 via-blue-600/30 to-sky-600/40",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
    border: "border-cyan-500/30",
    details: "iOS Mobile Design System & Haptic Flow",
  },
];

export default function CreativeShowcase() {
  return (
    <section className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
      {/* VIBRANT CONTINUOUS MOVING AMBIENT BACKGROUND */}

      {/* 1. Primary Gold Ambient Glowing Orb */}
      <motion.div
        animate={{
          x: [-90, 90, -90],
          y: [-60, 70, -60],
          scale: [0.95, 1.25, 0.95],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-1/3 w-[550px] h-[550px] bg-gradient-to-tr from-[#c5a059]/25 via-amber-500/15 to-[#9a7b38]/20 rounded-full blur-[130px] pointer-events-none z-0"
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
        className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05915_1px,transparent_1px),linear-gradient(to_bottom,#c5a05915_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-wider text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
            <span>CREATIVE DIVERSITY</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            One House. <span className="text-gradient-brand italic">Endless Possibilities.</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            A sneak peek into the multi-disciplinary creative work crafted inside Visual House.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SHOWCASE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`group glass-card rounded-3xl p-6 relative overflow-hidden border border-white/10 ${item.border} flex flex-col justify-between bg-[#111111] hover:bg-gradient-to-b hover:from-[#1c1810] hover:to-[#110f0a] hover:border-[#c5a059]/60 hover:shadow-[0_10px_35px_rgba(197,160,89,0.2)] transition-all duration-300`}
              >

                {/* Background visual canvas */}
                <div className="w-full h-56 rounded-2xl p-4 border border-white/10 flex flex-col justify-between relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-500 mb-6">
                  {/* Clear & Vivid Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10" />

                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-black/70 text-[#c5a059] backdrop-blur-md border border-[#c5a059]/30">
                      {item.type}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/70 border border-white/10 flex items-center justify-center text-[#c5a059] backdrop-blur-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="z-10 bg-black/75 backdrop-blur-md p-3 rounded-xl border border-white/15">
                    <p className="text-xs font-serif font-semibold text-white">{item.details}</p>
                  </div>
                </div>

                {/* Info Footer */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <h3 className="font-serif font-bold text-base text-white group-hover:text-[#c5a059] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-sans">Visual House Studio Asset</p>
                  </div>
                  <span className="text-xs text-[#c5a059] font-mono font-bold">0{idx + 1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

