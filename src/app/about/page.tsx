import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Intro from "@/components/Intro";
import ProcessTimeline from "@/components/ProcessTimeline";
import ServicesOrbit from "@/components/ServicesOrbit";
import InteractiveLinks from "@/components/InteractiveLinks";
import CloserCTA from "@/components/CloserCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — nerage studio",
  description: "nerage produces and directs high-end launch films and videos for innovative tech and saas companies.",
};

export default function AboutPage() {
  return (
    <>
      {/* 35mm Subtle Film Grain Texture Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Floating Navigation Dock */}
      <Navigation />

      <main className="flex-1 w-full flex flex-col relative z-10 pt-28 sm:pt-36">
        {/* About Page Hero Banner */}
        <section className="px-6 max-w-5xl mx-auto text-center pb-12 sm:pb-16 border-b border-[#e7e7e7]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8e8e8e] block mb-3">
            About the Studio
          </span>
          <h1 className="font-serif italic font-normal text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.035em] text-[#0b0b0b]">
            Story. Craft. <span className="font-sans not-italic font-medium">Velocity.</span>
          </h1>
          <p className="mt-4 text-[#666] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            We partner with innovative tech founders to turn their product into a cinematic launch film that stops the feed.
          </p>
        </section>

        {/* Studio Manifesto & Philosophy */}
        <Intro />

        {/* 7-Day Film Sprint Scrubber */}
        <ProcessTimeline />

        {/* Orbiting Philosophy & Services Showcase */}
        <ServicesOrbit />

        {/* Interactive Directory Links */}
        <InteractiveLinks />

        {/* Closer Call to Action */}
        <CloserCTA />
      </main>

      {/* Giant Typography Footer with Social Links */}
      <Footer />
    </>
  );
}
