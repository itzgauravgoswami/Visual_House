"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Check, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#000000] relative overflow-hidden text-zinc-300 text-sm">
      {/* Double Horizontal Accent Line Above Footer */}
      <div className="w-full relative z-20 space-y-2 py-2">
        <div className="w-full h-[2.5px] bg-gradient-to-r from-transparent via-[#c5a059] to-transparent shadow-[0_0_12px_rgba(197,160,89,0.7)]" />
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a059]/60 to-transparent" />
      </div>

      {/* VIBRANT CONTINUOUS MOVING AMBIENT BACKGROUND */}

      {/* 1. Primary Gold Ambient Glowing Orb */}
      <motion.div
        animate={{
          x: [-90, 90, -90],
          y: [-50, 60, -50],
          scale: [0.95, 1.2, 0.95],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#c5a059]/20 via-amber-500/15 to-[#9a7b38]/20 rounded-full blur-[130px] pointer-events-none z-0"
      />

      {/* 2. Secondary Warm Light Orb */}
      <motion.div
        animate={{
          x: [90, -90, 90],
          y: [50, -60, 50],
          scale: [1.2, 0.85, 1.2],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-[#fef08a]/15 via-[#c5a059]/15 to-transparent rounded-full blur-[120px] pointer-events-none z-0"
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
        className="absolute inset-0 bg-[linear-gradient(to_right,#c5a05912_1px,transparent_1px),linear-gradient(to_bottom,#c5a05912_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 inline-flex">
              <div className="w-10 h-10 overflow-hidden rounded-full bg-[#111111] border border-[#c5a059]/30 flex items-center justify-center p-1 shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
                <Image
                  src="/logo/logo.png"
                  alt="Visual House Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-xl font-normal text-white tracking-tight">
                Visual House
              </span>
            </Link>
            <p className="text-zinc-300 max-w-sm leading-relaxed text-sm">
              Creative ideas. Digital experiences. Real growth. Visual House is a full-service creative digital agency turning bold visions into market-defining brands.
            </p>

            <div className="pt-2 flex items-center gap-3">
              {/* Instagram SVG */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#c5a059]/50 hover:bg-zinc-800 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* YouTube SVG */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-pink-500/50 hover:bg-zinc-800 transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-sky-500/50 hover:bg-zinc-800 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@visualhouse.agency"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#c5a059]/50 hover:bg-zinc-800 transition-all"

                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-white transition-colors">
                  Featured Work
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition-colors">
                  Client FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services#website" className="hover:text-white transition-colors">
                  Websites & Apps
                </Link>
              </li>
              <li>
                <Link href="/services#video" className="hover:text-white transition-colors">
                  Video Production
                </Link>
              </li>
              <li>
                <Link href="/services#thumbnail" className="hover:text-white transition-colors">
                  Thumbnail Design
                </Link>
              </li>
              <li>
                <Link href="/services#branding" className="hover:text-white transition-colors">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/services#uiux" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="/services#marketing" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Stay Inspired
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Get monthly insights on design trends, video strategies, and digital growth.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#000000] border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-[#c5a059] transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] text-black text-xs font-bold transition-all shadow-[0_2px_10px_rgba(197,160,89,0.3)] flex items-center gap-1"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <span>Subscribe</span>}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400">
                  ✓ Thanks for subscribing!
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Visual House. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </Link>
            <a
              href="mailto:hello@visualhouse.agency"
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <span>hello@visualhouse.agency</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
