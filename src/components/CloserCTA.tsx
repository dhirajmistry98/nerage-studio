"use client";

import { useState, useRef } from "react";
import { ArrowUpRight, Calendar, Mail, Check, Copy } from "lucide-react";

export default function CloserCTA() {
  const [copied, setCopied] = useState(false);
  const ctaDockRef = useRef<HTMLDivElement>(null);

  // macOS Dock-style magnification physics
  const handleDockMouseMove = (e: React.MouseEvent) => {
    if (typeof window === "undefined" || window.innerWidth < 640) return;
    const dock = ctaDockRef.current;
    if (!dock) return;

    const items = dock.querySelectorAll<HTMLElement>("[data-dock-cta-item]");
    const mouseX = e.clientX;
    const radius = 110; // Proximity field

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const dist = Math.abs(mouseX - itemCenterX);

      if (dist < radius) {
        const factor = Math.cos((dist / radius) * (Math.PI / 2));
        const scale = 1 + 0.18 * Math.pow(factor, 1.4);
        const translateY = -5 * Math.pow(factor, 1.4);
        item.style.transform = `scale(${scale.toFixed(3)}) translateY(${translateY.toFixed(1)}px)`;
        item.style.zIndex = "20";
      } else {
        item.style.transform = "scale(1) translateY(0px)";
        item.style.zIndex = "1";
      }
    });
  };

  const handleDockMouseLeave = () => {
    const dock = ctaDockRef.current;
    if (!dock) return;
    const items = dock.querySelectorAll<HTMLElement>("[data-dock-cta-item]");
    items.forEach((item) => {
      item.style.transform = "scale(1) translateY(0px)";
      item.style.zIndex = "1";
    });
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const email = "vedant@neragestudio.com";
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <section
      id="closer"
      aria-label="Start a project"
      className="relative w-full bg-[#fafafa] py-[clamp(5rem,10vw,8.5rem)] px-6 text-center overflow-hidden border-t border-[#e7e7e7]"
    >
      {/* Subtle Ambient Radial Highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[320px] bg-gradient-to-tr from-neutral-200/50 via-neutral-100/30 to-transparent blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Availability Status Tag */}
        <div className="inline-flex items-center gap-2 mb-4 bg-white px-3.5 py-1.5 rounded-full border border-black/10 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#777]">
            DIRECT FOUNDER CALENDAR &middot; 30-MIN SPRINT CALL
          </span>
        </div>

        <h2 className="font-normal text-[clamp(2.4rem,5.2vw,4.8rem)] tracking-[-0.04em] leading-[1.02] text-[#0b0b0b]">
          Got a launch{" "}
          <em className="font-serif italic font-normal text-black">coming up?</em>
        </h2>

        <p className="mt-4 text-[#666] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Book a 30-minute kickoff sprint call directly with the director, or reach out anytime.
        </p>

        {/* macOS Dock-Style Magnification Action Cluster */}
        <div className="mt-9 flex justify-center">
          <div
            ref={ctaDockRef}
            onMouseMove={handleDockMouseMove}
            onMouseLeave={handleDockMouseLeave}
            className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-2.5 sm:gap-3 p-2 sm:p-2.5 bg-white/80 backdrop-blur-xl border border-black/10 rounded-3xl sm:rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.06)] select-none"
          >
            {/* 1. Primary "Book a call" Action */}
            <a
              data-dock-cta-item
              href="https://calendly.com/neragestudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0b0b0b] hover:bg-neutral-800 text-white px-6 sm:px-7 py-3 rounded-full text-sm font-medium transition-colors transition-transform duration-150 ease-out will-change-transform origin-center shadow-md hover:shadow-xl active:scale-95"
            >
              <Calendar className="w-4 h-4 text-emerald-400" />
              <span>Book a 30-min call</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>

            {/* 2. Direct Email Pill with Quick-Copy */}
            <button
              data-dock-cta-item
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 bg-[#f4f4f4] hover:bg-[#eaeaea] text-[#111] px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-mono transition-colors transition-transform duration-150 ease-out will-change-transform origin-center border border-black/5 active:scale-95"
              title="Copy email to clipboard"
            >
              <Mail className="w-3.5 h-3.5 text-[#666]" />
              <span className="truncate max-w-[175px] sm:max-w-none">vedant@neragestudio.com</span>
              <span className="ml-1 px-2 py-0.5 rounded-full bg-white text-[10px] font-sans font-semibold border border-black/10 flex items-center gap-1">
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-2.5 h-2.5 text-[#555]" />
                    <span>Copy</span>
                  </>
                )}
              </span>
            </button>

            {/* 3. Studio Twitter / X Pill */}
            <a
              data-dock-cta-item
              href="https://twitter.com/nerage"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#f4f4f4] hover:bg-[#eaeaea] text-[#111] px-4 py-3 rounded-full text-xs sm:text-sm font-medium transition-colors transition-transform duration-150 ease-out will-change-transform origin-center border border-black/5 active:scale-95"
            >
              <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>@nerage</span>
              <ArrowUpRight className="w-3 h-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
