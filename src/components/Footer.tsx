"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (typeof window !== "undefined" && window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <footer className="w-full bg-[#fafafa] pt-[clamp(2.5rem,6vw,5rem)] pb-12 sm:pb-16 px-[clamp(1.5rem,3.5vw,3rem)] border-t border-[#e7e7e7] overflow-hidden relative z-10">
      {/* Giant Typography Wordmark */}
      <div className="overflow-hidden mb-6 select-none">
        <p
          aria-hidden="true"
          className="font-serif italic font-normal text-[clamp(5.5rem,23.5vw,21rem)] leading-[0.9] tracking-[-0.04em] text-[#0b0b0b] select-none -ml-[0.04em] whitespace-nowrap opacity-95"
        >
          nerage
        </p>
      </div>

      {/* Bottom Info Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs sm:text-sm text-[#8e8e8e] pt-4">
        <div className="flex items-center flex-wrap gap-4 text-[#444]">
          {/* Email */}
          <a
            href="mailto:vedant@neragestudio.com"
            className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-4 h-4 fill-none stroke-current stroke-[1.6]"
            >
              <rect x="3" y="5.5" width="18" height="13" rx="2" />
              <path d="M3.5 7l8.5 6 8.5-6" />
            </svg>
            <span>vedant@neragestudio.com</span>
          </a>

          <span aria-hidden="true" className="text-[#bbb]">
            &middot;
          </span>

          {/* Twitter / X */}
          <a
            href="https://x.com/nerage"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-black transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-3.5 h-3.5 fill-current"
            >
              <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L1 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z" />
            </svg>
            <span>@nerage</span>
          </a>
        </div>

        <div className="flex items-center gap-6 text-[#999]">
          <span className="font-mono text-xs">
            Launch films for tech and SaaS &middot; &copy; 2026 nerage
          </span>

          {/* Back to top button (Clean scroll, no #) */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="inline-flex items-center gap-1 hover:text-black transition-colors font-mono text-xs bg-transparent border-none cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
}
