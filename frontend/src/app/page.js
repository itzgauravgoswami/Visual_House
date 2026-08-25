import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import WhyVisualHouse from "@/components/WhyVisualHouse";
import Portfolio from "@/components/Portfolio";
import CreativeShowcase from "@/components/CreativeShowcase";
import Process from "@/components/Process";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CreativeStatement from "@/components/CreativeStatement";
import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <SectionDivider />

      <TrustBar />
      <SectionDivider />

      <Marquee />
      <SectionDivider />

      <Services />
      <SectionDivider />

      <WhyVisualHouse />
      <SectionDivider />

      <Portfolio />
      <SectionDivider />

      <CreativeShowcase />
      <SectionDivider />

      <Process />
      <SectionDivider />

      <Stats />
      <SectionDivider />

      <Testimonials />
      <SectionDivider />

      <CreativeStatement />
      <SectionDivider />

      <AboutSection />
      <SectionDivider />

      <FAQ />
      <SectionDivider />

      <CTASection />
      <SectionDivider />

      <ContactSection />
    </div>
  );
}

