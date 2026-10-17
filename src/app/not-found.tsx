"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col justify-between p-6 sm:p-12 bg-[#fafafa] text-[#0b0b0b]">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (typeof window !== "undefined") {
              window.location.href = "/";
            }
          }}
          className="font-serif italic font-normal text-2xl tracking-tight text-black cursor-pointer"
        >
          nerage
        </a>
        <span className="font-mono text-xs uppercase tracking-widest text-[#8e8e8e]">
          Error 404
        </span>
      </div>

      {/* Main 404 Content */}
      <div className="max-w-2xl mx-auto my-auto text-center py-16">
        <span className="font-mono text-sm uppercase tracking-widest text-[#8e8e8e] block mb-3">
          404 &mdash; Not Found
        </span>
        <h1 className="font-serif italic font-normal text-[clamp(2.5rem,5.5vw,5rem)] leading-none tracking-tight text-black mb-6">
          Lost in the <span className="font-sans not-italic font-medium">feed.</span>
        </h1>
        <p className="text-[#6a6a6a] text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-8">
          The launch film or page you are looking for does not exist, has been removed, or is private.
        </p>

        <div className="flex items-center justify-center">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (typeof window !== "undefined") {
                window.location.href = "/";
              }
            }}
            className="inline-flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all active:scale-95 shadow-md cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Studio</span>
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#8e8e8e] pt-6 border-t border-[#e7e7e7]">
        <span className="font-mono">Launch films for tech and SaaS</span>
        <span className="font-mono mt-2 sm:mt-0">&copy; 2026 nerage studio</span>
      </div>
    </div>
  );
}
