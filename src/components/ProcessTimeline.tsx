"use client";

import { useState } from "react";
import { ArrowUpRight, Sparkles, Film, Disc, Eye, Zap } from "lucide-react";

interface Step {
  day: string;
  phase: string;
  title: string;
  headline: string;
  description: string;
  deliverable: string;
  icon: typeof Sparkles;
}

const TIMELINE_STEPS: Step[] = [
  {
    day: "Day 01",
    phase: "Brief & Idea",
    title: "The Narrative Angle",
    headline: "Find the one idea worth remembering.",
    description:
      "We interview founders, test the product, and strip away the corporate buzzwords until we uncover the single emotional hook your product should own.",
    deliverable: "1-Page Script & Angle Deck",
    icon: Sparkles,
  },
  {
    day: "Day 02",
    phase: "Pre-Visualization",
    title: "Storyboard & Styleframes",
    headline: "See the entire film before we render.",
    description:
      "Every transition, camera angle, and beat is mapped on paper and styleframes. Zero guesswork—you see the exact visual direction before production starts.",
    deliverable: "Complete Animatic & Style Boards",
    icon: Film,
  },
  {
    day: "Day 04",
    phase: "Worldbuilding",
    title: "CGI & AI Directing",
    headline: "Hyper-crafted visual velocity.",
    description:
      "Motion graphics that demonstrate genuine product capability, paired with cinematic CGI or AI generation. We cut ruthlessly until nothing is skippable.",
    deliverable: "First Cut Rough Master (V1)",
    icon: Zap,
  },
  {
    day: "Day 05",
    phase: "Emotion & Rhythm",
    title: "Sound Design & Sonic Score",
    headline: "Sound is 50% of the emotional punch.",
    description:
      "Custom foley, cinematic risers, crisp interface sounds, and heavy bass engineering that make the audience feel the film in their chest.",
    deliverable: "Full Audio Mix & Mastered Stems",
    icon: Disc,
  },
  {
    day: "Day 07",
    phase: "Distribution",
    title: "Launch Day Ready",
    headline: "Deliverables formatted for maximum reach.",
    description:
      "Final 4K ProRes masters delivered alongside platform-tailored vertical (9:16) reels, Twitter/X loops, and high-CTR thumbnail cuts ready to break the feed.",
    deliverable: "Multi-Format Launch Package",
    icon: Eye,
  },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const current = TIMELINE_STEPS[activeStep];
  const IconComponent = current.icon;

  return (
    <section
      id="process"
      aria-label="Launch process timeline"
      className="py-[clamp(4.5rem,8.5vw,7.5rem)] px-4 sm:px-8 max-w-6xl mx-auto"
    >
      {/* Top Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#e7e7e7] mb-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#8e8e8e] block mb-2">
            The 7-Day Sprint
          </span>
          <h2 className="font-semibold text-[clamp(1.9rem,3.2vw,3rem)] tracking-[-0.035em] text-[#0b0b0b]">
            From idea to launch, <em className="font-serif italic font-normal text-black">scrubbed</em>.
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-[#8e8e8e]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Average turnaround: 7 calendar days</span>
        </div>
      </div>

      {/* Interactive Scrubber Rail */}
      <div className="relative mb-10">
        <div className="grid grid-cols-5 gap-2 sm:gap-3">
          {TIMELINE_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            const isPassed = activeStep >= idx;

            return (
              <button
                key={step.day}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`group text-left p-3 sm:p-4 rounded-xl border transition-all duration-300 relative ${
                  isActive
                    ? "bg-black text-white border-black shadow-lg scale-[1.02]"
                    : "bg-white text-[#333] border-[#e7e7e7] hover:border-black/30"
                }`}
              >
                {/* Step indicator bar */}
                <div
                  className={`h-1 w-full rounded-full mb-2.5 transition-colors ${
                    isActive ? "bg-white" : isPassed ? "bg-black/60" : "bg-[#e5e5e5]"
                  }`}
                />
                <span
                  className={`font-mono text-[11px] block ${
                    isActive ? "text-white/70" : "text-[#8e8e8e]"
                  }`}
                >
                  {step.day}
                </span>
                <span
                  className={`text-xs sm:text-sm font-semibold truncate block mt-0.5 ${
                    isActive ? "text-white" : "text-[#111]"
                  }`}
                >
                  {step.phase}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Stage Details Card */}
      <div className="rounded-2xl bg-white border border-[#e7e7e7] p-6 sm:p-10 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Side: Step Details */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs text-white bg-black px-2.5 py-0.5 rounded-full">
                {current.day}
              </span>
              <span className="text-xs font-mono text-[#8e8e8e] uppercase tracking-wider">
                Phase: {current.phase}
              </span>
            </div>

            <h3 className="font-serif italic font-normal text-2xl sm:text-4xl text-[#111] leading-tight">
              {current.title}
            </h3>

            <p className="font-medium text-base sm:text-lg text-[#222] mt-2 mb-3">
              {current.headline}
            </p>

            <p className="text-[#6a6a6a] text-sm sm:text-base leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="mt-8 pt-5 border-t border-[#f0f0f0] flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono text-[#8e8e8e] uppercase block">
                Deliverable
              </span>
              <span className="text-sm font-semibold text-black">
                {current.deliverable}
              </span>
            </div>

            <a
              href="https://calendly.com/neragestudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-black border-b border-black pb-0.5 hover:gap-2.5 transition-all"
            >
              <span>Schedule kickoff call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Side: Visual Stage Card */}
        <div className="md:col-span-5 aspect-[4/3] rounded-xl bg-[#090909] text-white p-6 sm:p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden group">
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between z-10">
            <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
              Workflow Stage
            </span>
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white">
              <IconComponent className="w-4 h-4" />
            </div>
          </div>

          <div className="z-10">
            <span className="font-mono text-3xl sm:text-4xl font-light text-white/30 block mb-1">
              /0{activeStep + 1}
            </span>
            <span className="font-serif italic text-xl sm:text-2xl text-white block">
              {current.title}
            </span>
            <span className="font-mono text-xs text-white/60 mt-1 block">
              Standard turnaround: {current.day}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
