"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Check, Copy, ArrowUpRight, Mail } from "lucide-react";

export default function Navigation() {
  const pathname = usePathname();
  const [copied, setCopied] = useState(false);
  const [isContactExpanded, setIsContactExpanded] = useState(false);
  const [isLogoExpanded, setIsLogoExpanded] = useState(false);
  const [activeHoveredTab, setActiveHoveredTab] = useState<string | null>(null);
  const dockRef = useRef<HTMLElement>(null);

  // macOS Dock magnification physics on cursor movement
  const handleDockMouseMove = (e: React.MouseEvent) => {
    if (typeof window === "undefined" || window.innerWidth < 640) return;
    const nav = dockRef.current;
    if (!nav) return;

    const items = nav.querySelectorAll<HTMLElement>("[data-dock-item]");
    const mouseX = e.clientX;
    const radius = 95; // Radius of proximity influence in px

    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2;
      const dist = Math.abs(mouseX - itemCenterX);

      if (dist < radius) {
        // Continuous smooth cosine bell curve
        const factor = Math.cos((dist / radius) * (Math.PI / 2));
        const scale = 1 + 0.24 * Math.pow(factor, 1.4);
        const translateY = -3.5 * Math.pow(factor, 1.4);
        item.style.transform = `scale(${scale.toFixed(3)}) translateY(${translateY.toFixed(1)}px)`;
        item.style.zIndex = "30";
      } else {
        item.style.transform = "scale(1) translateY(0px)";
        item.style.zIndex = "1";
      }
    });
  };

  const handleDockMouseLeave = () => {
    const nav = dockRef.current;
    if (!nav) return;
    const items = nav.querySelectorAll<HTMLElement>("[data-dock-item]");
    items.forEach((item) => {
      item.style.transform = "scale(1) translateY(0px)";
      item.style.zIndex = "1";
    });
  };

  const handleCopy = (e: React.MouseEvent) => {
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

  const handleSectionScroll = (e: React.MouseEvent, sectionId: string) => {
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      if (typeof window !== "undefined" && window.history.replaceState) {
        window.history.replaceState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <header className="fixed top-3.5 sm:top-6 left-1/2 -translate-x-1/2 z-[999] w-[calc(100vw-1.5rem)] max-w-sm sm:w-auto sm:max-w-none pointer-events-auto">
      {/* Unified Luxury Frosted Glass Floating Capsule with macOS Dock Magnification */}
      <nav
        ref={dockRef}
        onMouseMove={handleDockMouseMove}
        onMouseLeave={handleDockMouseLeave}
        aria-label="Studio primary navigation"
        className="w-full flex items-center justify-between sm:justify-start gap-1 sm:gap-1.5 bg-[#0b0b0b]/92 hover:bg-[#0b0b0b]/98 text-white backdrop-blur-2xl rounded-full px-2.5 py-1.5 sm:p-1.5 border border-white/15 shadow-[0_12px_45px_rgba(0,0,0,0.4)] transition-all duration-300 select-none"
      >
        {/* Brand Pill with Micro-expansion on Desktop */}
        <Link
          data-dock-item
          href="/"
          onMouseEnter={() => setIsLogoExpanded(true)}
          onMouseLeave={() => setIsLogoExpanded(false)}
          className="flex items-center px-2 sm:px-3.5 py-1 sm:py-1.5 rounded-full hover:bg-white/10 transition-colors transition-transform duration-150 ease-out will-change-transform origin-center shrink-0"
          aria-label="nerage studio home"
        >
          <span className="font-serif italic font-normal text-sm sm:text-base flex items-center whitespace-nowrap text-white">
            <span>nerage</span>
            <span
              className={`inline-block overflow-hidden transition-all duration-300 ease-out font-sans not-italic text-xs text-white/60 ${
                isLogoExpanded ? "max-w-[4.5rem] opacity-100 ml-1.5" : "max-w-0 opacity-0"
              }`}
            >
              studio
            </span>
          </span>
        </Link>

        {/* Subtle Vertical Divider (Desktop Only) */}
        <span className="w-px h-4 bg-white/15 mx-0.5 hidden sm:block" aria-hidden="true" />

        {/* Nav Links with Dock Proximity Magnification */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {/* About Link (Desktop) */}
          <Link
            data-dock-item
            href="/about"
            onMouseEnter={() => setActiveHoveredTab("about")}
            onMouseLeave={() => setActiveHoveredTab(null)}
            className={`hidden sm:inline-block relative text-xs sm:text-[13px] font-medium whitespace-nowrap px-2.5 sm:px-3 py-1.5 rounded-full transition-colors transition-transform duration-150 ease-out will-change-transform origin-center ${
              pathname === "/about" ? "text-white bg-white/15 font-semibold" : "text-white/70 hover:text-white"
            }`}
          >
            {activeHoveredTab === "about" && pathname !== "/about" && (
              <span className="absolute inset-0 bg-white/10 rounded-full -z-10 transition-all duration-200" />
            )}
            About
          </Link>

          {/* Projects Link (Visible on mobile & desktop) */}
          <Link
            data-dock-item
            href="/projects"
            onMouseEnter={() => setActiveHoveredTab("projects")}
            onMouseLeave={() => setActiveHoveredTab(null)}
            className={`relative text-xs sm:text-[13px] font-medium whitespace-nowrap px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full transition-colors transition-transform duration-150 ease-out will-change-transform origin-center ${
              pathname === "/projects" ? "text-white bg-white/15 font-semibold" : "text-white/80 hover:text-white"
            }`}
          >
            {activeHoveredTab === "projects" && pathname !== "/projects" && (
              <span className="absolute inset-0 bg-white/10 rounded-full -z-10 transition-all duration-200" />
            )}
            Projects
          </Link>

          {/* Process Section Link (Desktop) */}
          <Link
            data-dock-item
            href="/#process"
            onClick={(e) => handleSectionScroll(e, "process")}
            onMouseEnter={() => setActiveHoveredTab("process")}
            onMouseLeave={() => setActiveHoveredTab(null)}
            className="hidden md:inline-block relative text-xs sm:text-[13px] font-medium whitespace-nowrap px-2.5 sm:px-3 py-1.5 rounded-full text-white/70 hover:text-white transition-colors transition-transform duration-150 ease-out will-change-transform origin-center"
          >
            {activeHoveredTab === "process" && (
              <span className="absolute inset-0 bg-white/10 rounded-full -z-10 transition-all duration-200" />
            )}
            Process
          </Link>
        </div>

        {/* Subtle Vertical Divider (Desktop) */}
        <span className="w-px h-4 bg-white/15 mx-0.5 hidden sm:block" aria-hidden="true" />

        {/* Right-Side Actions Container (Book a Call & Contact Pill with Dock Magnification) */}
        <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
          {/* Book a Call High-Contrast CTA Button */}
          <a
            data-dock-item
            href="https://calendly.com/neragestudio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-neutral-200 text-black px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-semibold flex items-center gap-1 transition-colors transition-transform duration-150 ease-out will-change-transform origin-center shadow-sm active:scale-95 shrink-0 whitespace-nowrap"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 opacity-70" />
          </a>

          {/* Desktop Expandable Contact Pill with Dock Magnification */}
          <div
            data-dock-item
            onMouseEnter={() => setIsContactExpanded(true)}
            onMouseLeave={() => setIsContactExpanded(false)}
            className="hidden sm:block relative shrink-0 will-change-transform origin-center"
            style={{
              width: isContactExpanded ? "296px" : "36px",
              transition: "width 320ms cubic-bezier(0.16, 1, 0.3, 1), transform 150ms ease-out",
            }}
          >
            <div
              className={`h-[34px] flex items-center overflow-hidden rounded-full border transition-colors duration-300 ${
                isContactExpanded
                  ? "bg-[#161616]/95 border-white/25 px-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                  : "bg-white/10 hover:bg-white/20 border-white/10 px-2 cursor-pointer"
              }`}
            >
              {!isContactExpanded ? (
                <button
                  type="button"
                  onClick={() => setIsContactExpanded(true)}
                  className="w-full h-full flex items-center justify-center text-white/80 hover:text-white transition-colors"
                  aria-label="Reveal studio contact email"
                >
                  <Mail className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="flex items-center justify-between w-full gap-2 pl-0.5">
                  <a
                    href="mailto:vedant@neragestudio.com"
                    className="text-[12px] font-mono text-white/95 hover:text-white transition-colors whitespace-nowrap tracking-tight flex items-center gap-1.5"
                    aria-label="Email vedant@neragestudio.com"
                  >
                    <Mail className="w-3 h-3 text-white/50 shrink-0" />
                    <span>vedant@neragestudio.com</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className={`text-[11px] font-semibold rounded-full px-2.5 py-1 shrink-0 transition-all duration-200 flex items-center gap-1 active:scale-95 cursor-pointer ${
                      copied
                        ? "bg-emerald-500 text-white shadow-xs"
                        : "bg-white text-black hover:bg-neutral-200 shadow-xs"
                    }`}
                    aria-label="Copy email address to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 stroke-[2.5]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-2.5 h-2.5 text-black/70" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Direct Mail Action Button (Compact, No Overflow) */}
          <button
            type="button"
            onClick={handleCopy}
            className="sm:hidden w-7 h-7 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white/90 active:scale-95 transition-all shrink-0 border border-white/10 cursor-pointer"
            aria-label="Copy studio contact email: vedant@neragestudio.com"
          >
            {copied ? (
              <Check className="w-3 h-3 text-emerald-400" />
            ) : (
              <Mail className="w-3 h-3" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
