"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Visual House completely transformed the way our brand looks online. The website feels premium, modern, and actually represents who we are. Our conversion rates increased by 340% within weeks.",
    author: "Arjun Mehta",
    role: "Founder & CEO",
    company: "Nova Labs",
    rating: 5,
    tag: "Website & Branding",
  },
  {
    quote:
      "Our YouTube channel CTR jumped from 5.2% to over 14.1% after working with Visual House on thumbnail design and video edits. They understand audience retention better than anyone.",
    author: "Sarah Jenkins",
    role: "Lead Creator",
    company: "TechPulse Media",
    rating: 5,
    tag: "Thumbnails & Video",
  },
  {
    quote:
      "The brand identity and Next.js web application they built helped us present our product to investors with absolute confidence. We secured our \$3.5M Seed round effortlessly.",
    author: "Marcus Vance",
    role: "Co-Founder",
    company: "Orbit Fintech",
    rating: 5,
    tag: "UI/UX & Web Dev",
  },
  {
    quote:
      "Working with Visual House is seamless. No delays, no generic templates. They brought our complex SaaS product to life with incredible motion graphics and intuitive design.",
    author: "Elena Rostova",
    role: "Head of Product",
    company: "Vanta Cloud",
    rating: 5,
    tag: "Motion Graphics & UI",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
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
        className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-[#c5a059]/25 via-amber-500/15 to-[#9a7b38]/20 rounded-full blur-[130px] pointer-events-none z-0"
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

      {/* 3. Floating Golden Light Dust Particles */}
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

        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-wider text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
            <span>CLIENT REVIEWS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Good Work. <span className="text-gradient-brand italic">Happy Clients.</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Hear directly from founders, creators, and leaders who trusted Visual House.
          </p>
        </div>

        {/* Featured Testimonial Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl bg-[#111111] hover:bg-gradient-to-b hover:from-[#1c1810] hover:to-[#110f0a] hover:border-[#c5a059]/60 hover:shadow-[0_10px_40px_rgba(197,160,89,0.2)] transition-all duration-300 group"
          >

            {/* Top hover accent beam */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <Quote className="w-16 h-16 text-[#c5a059]/15 absolute top-6 right-8 pointer-events-none group-hover:text-[#c5a059]/30 transition-colors duration-300" />

            <div className="space-y-6 relative z-10">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#c5a059] fill-[#c5a059]" />
                ))}
                <span className="ml-3 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#c5a059]/20 text-[#c5a059] border border-[#c5a059]/30">
                  {TESTIMONIALS[currentIndex].tag}
                </span>
              </div>

              {/* Quote Text */}
              <p className="font-serif text-xl sm:text-2xl text-white font-normal leading-relaxed italic group-hover:text-amber-100/90 transition-colors duration-300">
                “{TESTIMONIALS[currentIndex].quote}”
              </p>

              {/* Author Info */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between flex-wrap gap-4 font-sans">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#fef08a] via-[#c5a059] to-[#854d0e] flex items-center justify-center font-bold text-lg text-black shadow-lg group-hover:scale-105 transition-transform duration-300">
                    {TESTIMONIALS[currentIndex].author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-white group-hover:text-[#c5a059] transition-colors">
                      {TESTIMONIALS[currentIndex].author}
                    </h4>
                    <p className="text-xs text-zinc-400">
                      {TESTIMONIALS[currentIndex].role} •{" "}
                      <span className="text-[#c5a059] font-semibold">
                        {TESTIMONIALS[currentIndex].company}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 rounded-full bg-[#000000] hover:bg-gradient-to-r hover:from-[#fef08a] hover:via-[#c5a059] hover:to-[#9a7b38] border border-white/15 hover:border-[#c5a059] text-zinc-300 hover:text-black shadow-md hover:shadow-[0_4px_15px_rgba(197,160,89,0.4)] transition-all duration-300 active:scale-95"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <span className="text-xs font-mono text-[#c5a059] font-bold px-1">
                    0{currentIndex + 1} / 0{TESTIMONIALS.length}
                  </span>

                  <button
                    onClick={nextTestimonial}
                    className="p-3 rounded-full bg-[#000000] hover:bg-gradient-to-r hover:from-[#fef08a] hover:via-[#c5a059] hover:to-[#9a7b38] border border-white/15 hover:border-[#c5a059] text-zinc-300 hover:text-black shadow-md hover:shadow-[0_4px_15px_rgba(197,160,89,0.4)] transition-all duration-300 active:scale-95"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

