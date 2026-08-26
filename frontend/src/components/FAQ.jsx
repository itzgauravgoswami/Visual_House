"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ_ITEMS = [
  {
    q: "What services does Visual House offer?",
    a: "Visual House is a full-service creative digital marketing agency. We specialize in Website Design & Next.js Development, 4K Video Production & Editing, High CTR YouTube Thumbnails, Logo & Brand Identity, Social Media Creatives, UI/UX Design, Motion Graphics, and Growth Digital Marketing.",
  },
  {
    q: "How does the project process work?",
    a: "Our process follows 4 clear steps: 1) Discover (understanding your goals and audience), 2) Strategize (establishing creative direction and technical specs), 3) Create (active design, coding, and video editing sprints with feedback loops), and 4) Launch & Grow (QA testing, public launch, and post-launch support).",
  },
  {
    q: "How long does a website project take?",
    a: "A typical website or landing page project takes 2 to 4 weeks depending on scope, custom features, and content readiness. Complex custom web applications or full rebrands may take 4 to 6 weeks. We provide clear milestone timelines before any work begins.",
  },
  {
    q: "Can you handle both design and development?",
    a: "Yes! We handle the complete end-to-end stack under one roof. Our team includes experienced UI/UX designers and senior Next.js/React frontend developers. You won't need to hire separate design and coding teams.",
  },
  {
    q: "Do you create content for social media?",
    a: "Absolutely. We produce Instagram carousels, TikTok reels, YouTube Shorts, ad creative sets for Meta/Google, and monthly graphic packages designed to maintain a premium visual brand identity.",
  },
  {
    q: "Can you redesign an existing website?",
    a: "Yes! We specialize in transforming outdated websites into fast, modern, dark-mode-first Next.js web applications that look world-class and significantly increase visitor conversion rates.",
  },
  {
    q: "Do you work with startups and small businesses?",
    a: "We partner with ambitious businesses of all sizes—from venture-backed startups and growing eCommerce brands to established creators, YouTubers, and corporate clients looking to stand out.",
  },
  {
    q: "How can I start a project?",
    a: "Starting is simple! Click any 'Start a Project' button on our website or fill out our interactive Project Inquiry form below. We will review your inquiry and schedule a discovery call within 24 hours.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#c5a059]/25 via-amber-500/15 to-[#9a7b38]/20 rounded-full blur-[140px] pointer-events-none z-0"
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
              y: [-30, -650],
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-wider text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
            <HelpCircle className="w-3.5 h-3.5 text-[#c5a059]" />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Questions? <span className="text-gradient-brand italic">We've Got Answers.</span>
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg">
            Everything you need to know about partnering with Visual House.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden bg-[#111111] hover:bg-gradient-to-b hover:from-[#1c1810] hover:to-[#110f0a] hover:border-[#c5a059]/60 hover:shadow-[0_10px_35px_rgba(197,160,89,0.2)] transition-all duration-300"

              >
                <button
                  onClick={() => toggleItem(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg text-white group-hover:text-[#c5a059] transition-colors">
                    {item.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#c5a059] border-[#c5a059]/40" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>


                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 pt-2 text-sm text-zinc-300 leading-relaxed border-t border-white/5">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
