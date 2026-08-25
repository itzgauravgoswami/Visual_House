import Services from "@/components/Services";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Services — Visual House Creative Agency",
  description: "Explore Visual House's full range of creative services: Next.js Web Dev, Video Production, YouTube Thumbnails, Branding, UI/UX, Motion Graphics, and Marketing.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#050508]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-4">
          <span>CREATIVE CAPABILITIES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Everything Your Brand Needs to <br className="hidden sm:inline" />
          <span className="text-gradient-brand">Scale & Dominate.</span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Explore our complete suite of 8 creative services designed for ambitious startups, creators, and market leaders.
        </p>
      </div>

      <Services />
      <Process />
      <FAQ />
      <CTASection />
    </div>
  );
}
