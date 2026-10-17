import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ProjectShowcase from "@/components/ProjectShowcase";
import InteractiveLinks from "@/components/InteractiveLinks";
import CloserCTA from "@/components/CloserCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Projects — nerage studio",
  description: "Selected launch films for high-growth tech and SaaS companies.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* 35mm Subtle Film Grain Texture Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Floating Navigation Dock */}
      <Navigation />

      <main className="flex-1 w-full flex flex-col relative z-10 pt-28 sm:pt-36">
        {/* Projects Page Hero Banner */}
        <section className="px-6 max-w-5xl mx-auto text-center pb-8 border-b border-[#e7e7e7]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8e8e8e] block mb-3">
            Selected Works
          </span>
          <h1 className="font-serif italic font-normal text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.04] tracking-[-0.035em] text-[#0b0b0b]">
            Films that <span className="font-sans not-italic font-medium">break</span> the feed.
          </h1>
          <p className="mt-4 text-[#666] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Hover to preview any film. Click to watch in cinema theater mode with sound.
          </p>
        </section>

        {/* Selected Project Launches Showcase with Video Cards and Cinema Modal */}
        <ProjectShowcase />

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
