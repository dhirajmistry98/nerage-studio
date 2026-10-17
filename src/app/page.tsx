"use client";

import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ProjectShowcase from "@/components/ProjectShowcase";
import ProcessTimeline from "@/components/ProcessTimeline";
import CloserCTA from "@/components/CloserCTA";
import Footer from "@/components/Footer";
import NotFound from "@/app/not-found";

const VALID_SECTIONS = new Set([
  "",
  "top",
  "about",
  "work",
  "process",
  "closer",
]);

export default function Home() {
  const [isInvalidPath, setIsInvalidPath] = useState(false);

  useEffect(() => {
    // Check initial hash on load or hashchange
    const validateHash = () => {
      const rawHash = window.location.hash.replace(/^#/, "");

      // If someone types an invalid sub-route via hash (e.g., #work/a, #foo/bar, #invalid)
      if (rawHash) {
        if (rawHash.includes("/") || !VALID_SECTIONS.has(rawHash.toLowerCase())) {
          setIsInvalidPath(true);
          return;
        }

        setIsInvalidPath(false);
        // If it's a valid section, scroll to it and immediately strip '#' from the address bar!
        const el = document.getElementById(rawHash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
        if (window.history.replaceState) {
          window.history.replaceState(null, "", window.location.pathname);
        }
      } else {
        setIsInvalidPath(false);
      }
    };

    validateHash();
    window.addEventListener("hashchange", validateHash);
    return () => window.removeEventListener("hashchange", validateHash);
  }, []);

  const handleNavClick = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    // Clean URL bar completely (No #)
    if (typeof window !== "undefined" && window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  // If user navigated to an invalid sub-route (e.g., #work/a), show 404 page
  if (isInvalidPath) {
    return <NotFound />;
  }

  return (
    <>
      {/* 35mm Subtle Film Grain Texture Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Floating Bottom Navigation Pill & Top Wordmark (No # in URLs) */}
      <Navigation />

      <main className="flex-1 w-full flex flex-col relative z-10">
        {/* Fullscreen Video Hero with Status Reel and Word Blur Reveal */}
        <Hero />

        {/* Studio Introduction and Two-Column Manifesto */}
        <Intro />

        {/* Selected Project Launches Showcase with Video Cards and Cinema Modal */}
        <ProjectShowcase />

        {/* 7-Day Film Launch Sprint Scrubber (Process Timeline) */}
        <ProcessTimeline />

        {/* Closer Call to Action with macOS Dock Magnification */}
        <CloserCTA />
      </main>

      {/* Giant Typography Footer with Social Links */}
      <Footer />
    </>
  );
}
