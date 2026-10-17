"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkItem {
  prefix: string;
  keyword: string;
  href: string;
  video: string;
  tag: string;
  isExternal?: boolean;
  isScrollTarget?: boolean;
}

const LINKS: LinkItem[] = [
  { prefix: "Curious about", keyword: "us", href: "/about", video: "/film-01.mp4", tag: "STUDIO MANIFESTO" },
  { prefix: "All selected", keyword: "launches", href: "/projects", video: "/film-02.mp4", tag: "SELECTED FILMS" },
  { prefix: "Review our", keyword: "process", href: "/#process", video: "/film-03.mp4", tag: "7-DAY SPRINT", isScrollTarget: true },
  { prefix: "Direct founder", keyword: "calendar", href: "https://calendly.com/neragestudio/30min", video: "/film-04.mp4", tag: "30-MIN CALL", isExternal: true },
  { prefix: "Studio updates on", keyword: "twitter", href: "https://x.com/nerage", video: "/film-01.mp4", tag: "@NERAGE ON X", isExternal: true },
];

export default function InteractiveLinks() {
  const pathname = usePathname();
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleScroll = (e: React.MouseEvent, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      if (typeof window !== "undefined" && window.history.replaceState) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      aria-label="Interactive directory links"
      className="relative py-[clamp(4.5rem,8vw,7rem)] px-6 flex flex-col items-center justify-center bg-[#fafafa] border-t border-[#e7e7e7] overflow-hidden"
    >
      {/* Floating Cinematic Video Preview (Follows mouse on desktop hover) */}
      <div
        className="pointer-events-none hidden md:block absolute z-30 will-change-transform"
        style={{
          left: `${mousePos.x + 28}px`,
          top: `${mousePos.y - 70}px`,
          opacity: hoveredIndex !== null ? 1 : 0,
          transform: hoveredIndex !== null ? "scale(1) translateY(0)" : "scale(0.9) translateY(10px)",
          transition: "opacity 260ms ease, transform 260ms cubic-bezier(0.2, 0.8, 0.2, 1)",
        }}
      >
        <div className="w-60 h-34 rounded-xl overflow-hidden shadow-2xl border border-black/15 bg-black relative">
          {LINKS.map((link, idx) => (
            <video
              key={link.keyword}
              src={link.video}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                hoveredIndex === idx ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-white select-none">
            <span>{hoveredIndex !== null ? LINKS[hoveredIndex]?.tag : ""}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center gap-1 sm:gap-2 relative z-10">
        {LINKS.map((item, idx) => {
          const content = (
            <h2 className="text-[clamp(1.3rem,2.4vw,2.2rem)] font-light leading-snug tracking-[-0.04em] text-[#0b0b0b] lowercase">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-x-2">
                {item.prefix}
              </span>
              <span className="relative inline-block font-serif italic font-normal text-[1.45em] leading-none transition-all duration-300 group-hover:scale-110 ml-2 group-hover:ml-3 text-black">
                {item.keyword}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
              </span>
            </h2>
          );

          if (item.isExternal) {
            return (
              <a
                key={item.keyword}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group py-2 px-4 transition-opacity hover:opacity-100"
              >
                {content}
              </a>
            );
          }

          if (item.isScrollTarget) {
            return (
              <Link
                key={item.keyword}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group py-2 px-4 transition-opacity hover:opacity-100"
              >
                {content}
              </Link>
            );
          }

          return (
            <Link
              key={item.keyword}
              href={item.href}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group py-2 px-4 transition-opacity hover:opacity-100"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
