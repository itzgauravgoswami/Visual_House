"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Gradient Card Banner */}
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-16 text-center border border-white/15 shadow-2xl glass-panel group hover:border-[#c5a059]/60 hover:shadow-[0_10px_40px_rgba(197,160,89,0.25)] transition-all duration-300">

          
          {/* Animated Background Glowing Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111111] border border-[#c5a059]/30 text-xs font-semibold uppercase tracking-wider text-[#c5a059] shadow-[0_2px_10px_rgba(197,160,89,0.25)]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>LET'S CREATE TOGETHER</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-tight">
              Have an Idea? <br />
              <span className="text-gradient-brand italic">Let's Build Something Remarkable.</span>
            </h2>

            <p className="text-zinc-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed font-normal">
              Tell us what you're imagining. We'll help turn it into something people remember and competitors envy.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto relative group overflow-hidden rounded-full p-[1px] font-semibold text-sm transition-all duration-300 shadow-[0_2px_10px_rgba(197,160,89,0.25)] hover:shadow-[0_4px_20px_rgba(197,160,89,0.4)] active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] rounded-full animate-pulse-slow"></span>
                <span className="relative flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#000000] group-hover:bg-[#111111] text-white transition-colors duration-200">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                href="mailto:hello@visualhouse.agency"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#111111] hover:bg-[#1c1c1c] border border-white/10 text-white text-sm font-semibold transition-all duration-200 active:scale-95 hover:border-[#c5a059]/40"
              >
                <MessageSquare className="w-4 h-4 text-[#c5a059]" />
                <span>Talk to Us</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

