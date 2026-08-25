"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, X, ExternalLink, Play, CheckCircle } from "lucide-react";
import Link from "next/link";

const CATEGORIES = ["All", "Websites", "Branding", "Videos", "Thumbnails", "Social Media"];

const PROJECTS = [
  {
    id: 1,
    title: "Nexa Finance",
    category: "Websites",
    type: "Fintech Web App",
    desc: "Next-gen crypto & wealth management dashboard with real-time analytics and dark-mode glassmorphic UI.",
    metric: "+340% Conversions",
    visualGradient: "from-blue-600 via-indigo-600 to-purple-800",
    tags: ["Next.js", "Tailwind CSS", "Figma", "Fintech"],
    details: "Re-engineered Nexa's core digital presence. Designed an intuitive onboarding flow, responsive dark dashboard, and custom interactive data visualization charts.",
  },
  {
    id: 2,
    title: "Luma Studio",
    category: "Branding",
    type: "Brand Identity & Guidelines",
    desc: "Complete luxury brand identity, bespoke typography, gradient color palette, and 3D product visual assets.",
    metric: "Global Redesign Award",
    visualGradient: "from-purple-600 via-pink-600 to-rose-800",
    tags: ["Brand Identity", "Logo Design", "3D Motion", "Typography"],
    details: "Crafted a distinctive visual identity for Luma Studio. Created primary logo systems, brand manual, social templates, and physical print collateral.",
  },
  {
    id: 3,
    title: "Orbit Creative",
    category: "Videos",
    type: "4K YouTube & Commercial Campaign",
    desc: "Cinematic promotional campaign, high-energy YouTube edits, sound design, and custom motion graphics.",
    metric: "2.4M Views",
    visualGradient: "from-sky-500 via-cyan-600 to-teal-800",
    tags: ["4K Video Editing", "Sound Design", "Kinetic FX", "YouTube"],
    details: "Produced a series of high-converting product commercial reels and YouTube video edits that resulted in over 2.4 million organic video views.",
  },
  {
    id: 4,
    title: "Vanta SaaS",
    category: "Websites",
    type: "SaaS Marketing Website",
    desc: "High-performance marketing website with interactive product previews, bento grid layout, and instant lead capture.",
    metric: "4.8s Avg Dwell Time",
    visualGradient: "from-zinc-800 via-purple-900 to-black",
    tags: ["SaaS Website", "React", "Interactive UI", "Lead Gen"],
    details: "Built Vanta's web application platform with micro-interactions, dark glassmorphism, SEO architecture, and seamless CRM integrations.",
  },
  {
    id: 5,
    title: "Pulse Campaign",
    category: "Social Media",
    type: "Omnichannel Social Creatives",
    desc: "High-CTR Instagram carousels, TikTok ad templates, and LinkedIn infographics designed for explosive engagement.",
    metric: "+180% Engagement Rate",
    visualGradient: "from-pink-600 via-rose-600 to-purple-900",
    tags: ["Social Media", "Carousel Design", "Ad Creatives", "Instagram"],
    details: "Designed over 50+ custom social media assets and high-performing ad creatives that drove record engagement across Instagram and TikTok.",
  },
  {
    id: 6,
    title: "Hyperion Motion",
    category: "Thumbnails",
    type: "High CTR YouTube Thumbnails",
    desc: "Psychology-backed YouTube thumbnails engineered for high click-through rates and instant visual impact.",
    metric: "14.2% CTR Peak",
    visualGradient: "from-amber-500 via-orange-600 to-red-800",
    tags: ["YouTube Thumbnail", "Photoshop 3D", "CTR Optimization"],
    details: "Designed custom 3D composite YouTube thumbnails for Hyperion Motion's channel, boosting average channel CTR from 5.4% to 14.2%.",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
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
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#c5a059]/25 via-amber-500/15 to-[#9a7b38]/20 rounded-full blur-[130px] pointer-events-none z-0"
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
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: (i - 5) * 120,
              y: 700,
              opacity: 0,
            }}
            animate={{
              y: [-30, -750],
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
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-wider text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
              <span>PORTFOLIO & CASE STUDIES</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
              Work That <span className="text-gradient-brand italic">Speaks for Itself.</span>
            </h2>
            <p className="text-zinc-300 text-base">
              Explore how we help tech startups, YouTube creators, and brands stand out with world-class design and video.
            </p>
          </div>

          <Link
            href="/work"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#1c1c1c] border border-white/10 text-xs font-semibold text-white transition-colors hover:border-[#c5a059]/40"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
          </Link>
        </div>


        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] text-black shadow-[0_2px_10px_rgba(197,160,89,0.3)]"
                  : "bg-[#111111] text-zinc-400 hover:text-white border border-white/10 hover:border-[#c5a059]/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>


        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                className="group glass-card rounded-3xl overflow-hidden border border-white/10 relative cursor-pointer flex flex-col justify-between bg-[#111111] hover:bg-gradient-to-b hover:from-[#1c1810] hover:to-[#110f0a] hover:border-[#c5a059]/60 hover:shadow-[0_10px_35px_rgba(197,160,89,0.2)] transition-all duration-300"
              >
                {/* Visual Preview Banner */}
                <div
                  className={`h-56 w-full bg-gradient-to-br ${project.visualGradient} p-6 relative overflow-hidden flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500`}
                >
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] opacity-30" />

                  {/* Top Bar inside image card */}
                  <div className="flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/15">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 backdrop-blur-md">
                      {project.metric}
                    </span>
                  </div>

                  {/* Mockup Center Element */}
                  <div className="z-10 bg-black/40 backdrop-blur-md p-3 rounded-2xl border border-white/20 shadow-2xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                      <span className="text-xs font-mono font-bold text-white tracking-wide">
                        {project.title}
                      </span>
                    </div>
                    <span className="text-[10px] text-zinc-300 font-sans">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Card Content Details */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed font-sans">
                      {project.desc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] bg-zinc-900 text-zinc-300 font-medium border border-[#c5a059]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-2xl rounded-3xl bg-zinc-950 border border-white/15 p-6 sm:p-8 shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Visual Header */}
              <div
                className={`h-48 rounded-2xl bg-gradient-to-br ${selectedProject.visualGradient} p-6 relative overflow-hidden mb-6 flex flex-col justify-between`}
              >
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 text-white w-fit border border-white/20">
                  {selectedProject.category} • {selectedProject.type}
                </span>
                <div>
                  <h3 className="text-2xl font-bold text-white drop-shadow">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-zinc-200">{selectedProject.metric}</p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <h4 className="text-sm font-semibold text-white">Project Overview</h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {selectedProject.details}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[10px] bg-[#000000] text-[#c5a059] rounded border border-[#c5a059]/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2.5 rounded-full bg-[#111111] hover:bg-[#1c1c1c] text-zinc-300 text-xs font-semibold transition-colors border border-white/10"
                >
                  Close Case Study
                </button>
                <Link
                  href="/contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] text-black text-xs font-semibold shadow-[0_2px_10px_rgba(197,160,89,0.3)] hover:shadow-[0_4px_20px_rgba(197,160,89,0.5)] transition-all"
                >
                  Start Similar Project
                </Link>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

