import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";

export const metadata = {
  title: "Start a Project — Visual House Creative Agency",
  description: "Get in touch with Visual House. Tell us about your project, request a custom quote, and let's build something remarkable.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-[#030305]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-white/10 text-xs font-semibold uppercase tracking-wider text-purple-400 mb-4">
          <span>GET IN TOUCH</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
          Start Your Project With <span className="text-gradient-brand">Visual House.</span>
        </h1>
        <p className="text-zinc-400 text-base sm:text-lg max-w-xl mx-auto mt-4">
          Tell us about your brand vision. We'll respond with a detailed strategy and proposal within 24 hours.
        </p>
      </div>

      <ContactSection />
      <FAQ />
    </div>
  );
}
