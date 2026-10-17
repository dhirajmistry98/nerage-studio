"use client";

import { useEffect, useRef, useState } from "react";

export default function CinematicCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [cursorMode, setCursorMode] = useState<"default" | "play" | "focus" | "link">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (typeof window === "undefined" || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Check hovered element for custom cursor triggers
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const card = target.closest("article, [data-cursor='play']");
      const service = target.closest("#services [class*='cursor-pointer'], [data-cursor='focus']");
      const link = target.closest("a, button, [role='button'], [data-cursor='link']");

      if (card) {
        setCursorMode("play");
      } else if (service) {
        setCursorMode("focus");
      } else if (link) {
        setCursorMode("link");
      } else {
        setCursorMode("default");
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const render = () => {
      // Smooth spring interpolation (lerp)
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  return (
    <>
      {/* Precision Core Dot (Desktop Only) */}
      <div
        ref={cursorDotRef}
        aria-hidden="true"
        className={`hidden md:block fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${cursorMode !== "default" ? "!opacity-0" : ""}`}
      />

      {/* Fluid Lens Follower Ring (Desktop Only) */}
      <div
        ref={cursorRingRef}
        aria-hidden="true"
        className={`hidden md:flex fixed top-0 left-0 pointer-events-none z-[9998] rounded-full items-center justify-center transition-all duration-300 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        } ${
          cursorMode === "default"
            ? "w-8 h-8 -ml-4 -mt-4 border border-white/50 mix-blend-difference"
            : cursorMode === "play"
            ? "w-20 h-20 -ml-10 -mt-10 bg-black/85 backdrop-blur-md border border-white/40 shadow-2xl scale-100"
            : cursorMode === "focus"
            ? "w-16 h-16 -ml-8 -mt-8 bg-black/80 backdrop-blur-md border border-emerald-400/50 shadow-xl"
            : "w-12 h-12 -ml-6 -mt-6 border border-white/80 bg-white/10 mix-blend-difference"
        }`}
      >
        {/* Play Reel Mode HUD */}
        {cursorMode === "play" && (
          <div className="flex flex-col items-center justify-center text-white leading-none select-none">
            <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-400 font-semibold mb-0.5">
              PLAY
            </span>
            <span className="font-mono text-[8px] text-white/70 uppercase tracking-wider">
              REEL
            </span>
          </div>
        )}

        {/* Focus Mode HUD */}
        {cursorMode === "focus" && (
          <div className="flex items-center justify-center text-emerald-400 select-none">
            <span className="font-mono text-[8px] uppercase tracking-widest font-medium">
              FOCUS
            </span>
          </div>
        )}
      </div>
    </>
  );
}
