"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Video,
  Sparkles,
  Palette,
  Share2,
  Layout,
  Film,
  TrendingUp,
  ArrowUpRight,
  CheckCircle,
  X,
} from "lucide-react";
import Link from "next/link";

const SERVICES_DATA = [
  {
    num: "01",
    id: "website",
    title: "Website Design & Development",
    icon: Globe,
    color: "from-sky-500 to-blue-600",
    borderColor: "hover:border-sky-500/50",
    glowColor: "group-hover:shadow-sky-500/20",
    desc: "Build modern, fast, responsive websites that turn visitors into loyal customers. Powered by Next.js, React, and seamless UI/UX.",
    features: [
      "Custom Next.js & React Web Applications",
      "Headless CMS Integration (Sanity, Strapi)",
      "High-Converting Landing Pages",
      "Mobile-First Responsive Architecture",
      "SEO & Core Web Vitals Optimization",
    ],
  },
  {
    num: "02",
    id: "video",
    title: "Video Production & Editing",
    icon: Video,
    color: "from-purple-500 to-indigo-600",
    borderColor: "hover:border-purple-500/50",
    glowColor: "group-hover:shadow-purple-500/20",
    desc: "Short-form videos, promotional videos, Reels, TikToks, YouTube content, and high-impact creative edits that command attention.",
    features: [
      "4K Cinematic Video Editing",
      "YouTube Long-form & Short-form Reels",
      "Product Commercials & Brand Films",
      "Sound Design & Audio Mastering",
      "Custom Color Grading & FX",
    ],
  },
  {
    num: "03",
    id: "thumbnail",
    title: "YouTube & Social Thumbnails",
    icon: Sparkles,
    color: "from-pink-500 to-rose-600",
    borderColor: "hover:border-pink-500/50",
    glowColor: "group-hover:shadow-pink-500/20",
    desc: "High-converting YouTube and social media thumbnails designed to maximize Click-Through Rates (CTR) and capture immediate audience interest.",
    features: [
      "Psychology-Driven Thumbnail Composition",
      "High CTR Title & Expression Alignment",
      "Custom 3D & Photoshop Asset Creation",
      "A/B Thumbnail Variant Testing",
      "24-Hour Express Turnaround Option",
    ],
  },
  {
    num: "04",
    id: "branding",
    title: "Logo & Brand Identity",
    icon: Palette,
    color: "from-amber-500 to-orange-600",
    borderColor: "hover:border-amber-500/50",
    glowColor: "group-hover:shadow-amber-500/20",
    desc: "Distinctive logos, cohesive typography, color systems, and comprehensive brand guidelines that make your business unforgettable.",
    features: [
      "Primary & Secondary Logo Systems",
      "Brand Style Guides & Typography Rules",
      "Color Palettes & Moodboards",
      "Stationery & Merch Design",
      "Vector Asset Delivery (SVG, EPS, PNG)",
    ],
  },
  {
    num: "05",
    id: "social",
    title: "Social Media Design",
    icon: Share2,
    color: "from-emerald-500 to-teal-600",
    borderColor: "hover:border-emerald-500/50",
    glowColor: "group-hover:shadow-emerald-500/20",
    desc: "Creative social posts, banners, carousels, ad creative sets, and visual campaigns that build an aesthetic brand presence.",
    features: [
      "Instagram Carousels & Story Templates",
      "LinkedIn Infographics & PDF Guides",
      "High-ROI Ad Creatives (Meta, TikTok)",
      "YouTube Channel Art & Headers",
      "Monthly Creative Content Kits",
    ],
  },
  {
    num: "06",
    id: "uiux",
    title: "UI/UX Experience Design",
    icon: Layout,
    color: "from-cyan-500 to-sky-600",
    borderColor: "hover:border-cyan-500/50",
    glowColor: "group-hover:shadow-cyan-500/20",
    desc: "Beautiful, intuitive, and conversion-focused mobile and web application user interfaces crafted around human psychology.",
    features: [
      "Wireframing & Interactive Prototypes",
      "Figma Design Systems & Components",
      "User Research & Journey Mapping",
      "Mobile App UI (iOS & Android)",
      "Usability Testing & Iteration",
    ],
  },
  {
    num: "07",
    id: "motion",
    title: "Motion Graphics & FX",
    icon: Film,
    color: "from-violet-500 to-purple-600",
    borderColor: "hover:border-violet-500/50",
    glowColor: "group-hover:shadow-violet-500/20",
    desc: "Dynamic logo animations, lower thirds, promotional kinetic typography, 2D/3D visual effects, and transition packages.",
    features: [
      "3D Logo Stings & Intros",
      "Kinetic Typography Videos",
      "Explainer Video Animations",
      "Custom Lottie & Web Motion Assets",
      "Stream Overlays & Graphics",
    ],
  },
  {
    num: "08",
    id: "marketing",
    title: "Digital Marketing & Growth",
    icon: TrendingUp,
    color: "from-fuchsia-500 to-pink-600",
    borderColor: "hover:border-fuchsia-500/50",
    glowColor: "group-hover:shadow-fuchsia-500/20",
    desc: "Data-backed digital marketing strategies that connect your brand with the right audience, drive engagement, and deliver tangible ROI.",
    features: [
      "PPC Campaign Setup (Meta & Google)",
      "Content Strategy & Copywriting",
      "Funnel Optimization & A/B Testing",
      "Analytics & Conversion Tracking",
      "Growth Hacking Consultations",
    ],
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
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
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-gradient-to-tr from-[#c5a059]/25 via-amber-500/15 to-[#9a7b38]/20 rounded-full blur-[130px] pointer-events-none z-0"
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
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#fef08a]/20 via-[#c5a059]/15 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
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
              y: [-30, -700],
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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-medium uppercase tracking-wider text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
            <span>OUR EXPERTISE</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Everything Your Brand Needs to <span className="text-gradient-brand italic">Stand Out.</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            From strategy and design to development and video content, we bring everything under one creative roof.
          </p>
        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setSelectedService(service)}
                className="group glass-card p-6 rounded-2xl cursor-pointer flex flex-col justify-between relative overflow-hidden border border-white/10 bg-[#111111] hover:bg-gradient-to-b hover:from-[#1c1810] hover:to-[#110f0a] hover:border-[#c5a059]/60 hover:shadow-[0_10px_35px_rgba(197,160,89,0.2)] transition-all duration-300"
              >

                {/* Accent top gradient line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs font-bold text-zinc-400 group-hover:text-[#c5a059] transition-colors">
                      {service.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#000000] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-[#c5a059] group-hover:border-[#c5a059]/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-lg font-bold text-white mb-2.5 group-hover:text-[#c5a059] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-6 font-sans">
                    {service.desc}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                  <span>Explore Deliverables</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA text */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-300">
            Need a tailored package combining multiple services?{" "}
            <Link
              href="/contact"
              className="text-[#c5a059] hover:text-[#fef08a] font-semibold underline underline-offset-4"
            >
              Request a Custom Quote →
            </Link>
          </p>
        </div>

      </div>


      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-xl rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-sm text-[#c5a059] font-bold">
                  Service {selectedService.num}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-semibold bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30">
                  Full Scope
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-3">
                {selectedService.title}
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-sans">
                {selectedService.desc}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="text-xs uppercase font-semibold text-zinc-400 tracking-wider">
                  What's Included:
                </h4>
                <div className="space-y-2">
                  {selectedService.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-200">
                      <CheckCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-4 py-2.5 rounded-full bg-[#111111] hover:bg-[#1c1c1c] text-zinc-300 text-xs font-semibold transition-colors border border-white/10"
                >
                  Close
                </button>
                <Link
                  href={`/contact?service=${encodeURIComponent(selectedService.title)}`}
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] text-black text-xs font-semibold shadow-[0_2px_10px_rgba(197,160,89,0.3)] hover:shadow-[0_4px_20px_rgba(197,160,89,0.5)] transition-all flex items-center gap-2"
                >
                  <span>Start This Service</span>
                  <ArrowUpRight className="w-4 h-4 text-black" />
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
