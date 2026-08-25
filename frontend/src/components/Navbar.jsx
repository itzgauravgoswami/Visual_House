"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Process", href: "/#process" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    setMobileMenuOpen(false);
    if (href.startsWith("/#")) {
      const targetId = href.replace("/#", "");
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#000000]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/60"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 overflow-hidden rounded-full bg-[#111111] border border-[#c5a059]/30 group-hover:border-[#c5a059] transition-all duration-300 flex items-center justify-center p-1 shadow-[0_2px_10px_rgba(197,160,89,0.2)]">
                <Image
                  src="/logo/logo.png"
                  alt="Visual House Logo"
                  width={36}
                  height={36}
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-normal text-lg tracking-tight text-white group-hover:text-[#c5a059] transition-all">
                  Visual House
                </span>
                <span className="text-[10px] tracking-widest uppercase text-[#c5a059] font-medium -mt-1">
                  Creative Studio
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#111111]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 border ${
                      isActive
                        ? "bg-[#1c1810] text-[#c5a059] shadow-sm border-[#c5a059]/40 font-semibold"
                        : "text-zinc-400 hover:text-[#c5a059] hover:bg-[#1c1810] border-transparent hover:border-[#c5a059]/30"
                    }`}

                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/contact"
                className="relative group overflow-hidden rounded-full p-[1px] font-semibold text-xs transition-all duration-300 shadow-[0_2px_10px_rgba(197,160,89,0.25)] hover:shadow-[0_4px_20px_rgba(197,160,89,0.4)] active:scale-95"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] rounded-full animate-pulse-slow"></span>
                <span className="relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#000000] group-hover:bg-[#111111] text-white transition-colors duration-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#c5a059] group-hover:rotate-12 transition-transform" />
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-full bg-[#111111] border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#c5a059]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 lg:hidden p-4 bg-[#000000]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-2 py-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 hover:text-[#c5a059] hover:bg-[#111111] border border-transparent hover:border-[#c5a059]/20 transition-all flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#c5a059]" />
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10 mt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-[#fef08a] via-[#c5a059] to-[#9a7b38] text-black font-semibold text-sm shadow-[0_2px_10px_rgba(197,160,89,0.25)]"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  <span>Let's Work Together</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
