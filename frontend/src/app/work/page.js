import Portfolio from "@/components/Portfolio";
import CreativeShowcase from "@/components/CreativeShowcase";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Featured Work — Visual House Creative Agency",
  description: "Browse our case studies and portfolio of websites, brand identities, 4K video edits, YouTube thumbnails, and social campaigns.",
};

export default function WorkPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#030305]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-wider text-pink-400 mb-4">
          <span>SELECTED PROJECTS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Work That Drives <span className="text-gradient-brand">Real Results.</span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          A showcase of market-defining digital products, high-CTR thumbnails, brand identities, and commercial videos.
        </p>
      </div>

      <Portfolio />
      <CreativeShowcase />
      <Testimonials />
      <CTASection />
    </div>
  );
}
