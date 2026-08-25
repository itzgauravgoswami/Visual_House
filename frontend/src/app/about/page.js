import AboutSection from "@/components/AboutSection";
import WhyVisualHouse from "@/components/WhyVisualHouse";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About Us — Visual House Creative Agency",
  description: "Learn about Visual House, our creative philosophy, mission, values, and why ambitious brands partner with us.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#030305]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-4">
          <span>THE STUDIO</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          We Build Digital Experiences That <br className="hidden sm:inline" />
          <span className="text-gradient-brand">Command Attention.</span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mx-auto mt-4">
          Visual House is an independent creative agency combining high-end design, modern engineering, and video storytelling under one roof.
        </p>
      </div>

      <AboutSection />
      <WhyVisualHouse />
      <Stats />
      <CTASection />
    </div>
  );
}
