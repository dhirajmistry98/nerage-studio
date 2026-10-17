"use client";

import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  number: string;
  scene: string;
  spec: string;
  title: string;
  description: string;
  tag: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "creative-direction",
    number: "01",
    scene: "THE ANGLE",
    spec: "35MM · NARRATIVE",
    title: "Creative Direction",
    description: "Every frame answers to one idea. We decide what that idea is first.",
    tag: "Vision & Hook",
  },
  {
    id: "motion-graphics",
    number: "02",
    scene: "KINETIC UI",
    spec: "60 FPS · VECTOR",
    title: "Motion Graphics",
    description: "Motion that explains the product, never motion that decorates it.",
    tag: "Visual Velocity",
  },
  {
    id: "video-editing",
    number: "03",
    scene: "THE CUT",
    spec: "2.39:1 DCI MASTER",
    title: "Video Editing",
    description: "We cut until nothing is left that you would skip.",
    tag: "Pacing & Rhythm",
  },
  {
    id: "storyboard",
    number: "04",
    scene: "PRE-VIS",
    spec: "PAPER TO RENDER",
    title: "Storyboard",
    description: "We see the whole film on paper before a single frame gets made.",
    tag: "Visual Blueprint",
  },
  {
    id: "branding",
    number: "05",
    scene: "IDENTITY",
    spec: "VECTOR & TYPE",
    title: "Branding",
    description: "Launch day ends. The look it leaves behind keeps working.",
    tag: "Brand Longevity",
  },
  {
    id: "sound-engineering",
    number: "06",
    scene: "ACOUSTICS",
    spec: "32-BIT FLOAT MIX",
    title: "Sound Engineering",
    description: "People feel a film before they understand it. Sound does that work.",
    tag: "Sonic Impact",
  },
  {
    id: "script-writing",
    number: "07",
    scene: "THE HOOK",
    spec: "TYPOGRAPHY",
    title: "Script Writing",
    description: "Short enough to remember, sharp enough to repeat.",
    tag: "High-Retention Copy",
  },
];

export default function ServicesOrbit() {
  return (
    <section
      id="services"
      aria-label="Studio capabilities and philosophy"
      className="py-[clamp(5rem,9vw,8rem)] px-4 sm:px-8 bg-[#fafafa] border-t border-[#e7e7e7] relative overflow-hidden"
    >
      {/* Editorial Header */}
      <div className="max-w-4xl mx-auto text-center select-none mb-12 sm:mb-16">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 mb-4 bg-white px-3.5 py-1.5 rounded-full border border-black/10 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#777]">
            STUDIO CAPABILITIES &middot; FULL-STACK DIRECTING
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-normal text-[clamp(2.2rem,4.5vw,4.4rem)] tracking-[-0.035em] leading-[1.06] text-[#0b0b0b]">
          The film is the{" "}
          <em className="font-serif italic font-normal text-black underline decoration-black/20 decoration-1 underline-offset-8">
            start
          </em>
          .
          <br className="hidden sm:inline" />{" "}
          The launch is the{" "}
          <em className="font-serif italic font-normal text-black underline decoration-black/20 decoration-1 underline-offset-8">
            point
          </em>
          .
        </h2>

        {/* Subtitle & Booking CTA */}
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://calendly.com/neragestudio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-black text-white text-xs font-medium hover:bg-neutral-800 transition-all duration-200 active:scale-95 shadow-md"
          >
            <span>Book a call</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Clean Luxury Studio Capabilities Grid (No awkward sideways rotated text) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((svc) => (
          <div
            key={svc.id}
            className="group relative p-7 sm:p-8 rounded-2xl bg-white border border-[#e7e7e7] shadow-xs hover:border-black/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle Director Crosshair Accents */}
            <div className="absolute top-2.5 left-2.5 w-2 h-2 border-t border-l border-black/15 group-hover:border-black/50 transition-colors" />
            <div className="absolute top-2.5 right-2.5 w-2 h-2 border-t border-r border-black/15 group-hover:border-black/50 transition-colors" />
            <div className="absolute bottom-2.5 left-2.5 w-2 h-2 border-b border-l border-black/15 group-hover:border-black/50 transition-colors" />
            <div className="absolute bottom-2.5 right-2.5 w-2 h-2 border-b border-r border-black/15 group-hover:border-black/50 transition-colors" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-[#8e8e8e] group-hover:text-black transition-colors font-medium">
                  /{svc.number}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#777] bg-[#f5f5f5] px-2.5 py-1 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
                  {svc.tag}
                </span>
              </div>

              <h3 className="font-semibold text-lg sm:text-xl text-[#0b0b0b] group-hover:text-black transition-colors mb-2.5 leading-snug">
                {svc.title}
              </h3>

              <p className="text-[#444] text-sm leading-relaxed">
                {svc.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs font-mono text-[#8e8e8e]">
              <span className="text-[11px] uppercase tracking-wider">{svc.spec}</span>
              <span className="text-[#aaa] group-hover:text-black transition-colors">{svc.scene}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
