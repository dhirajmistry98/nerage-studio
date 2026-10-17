export default function Intro() {
  return (
    <section
      id="about"
      aria-label="About nerage"
      className="py-[clamp(5rem,10vw,8.5rem)] px-6 max-w-5xl mx-auto text-center"
    >
      {/* Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 mb-4 bg-white px-3.5 py-1.5 rounded-full border border-black/10 shadow-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="font-mono text-[11px] uppercase tracking-widest text-[#777]">
          STUDIO MANIFESTO
        </span>
      </div>

      {/* Intro Headline */}
      <h2 className="font-normal text-[clamp(1.75rem,3vw,2.85rem)] leading-[1.18] tracking-[-0.03em] max-w-3xl mx-auto text-[#0b0b0b]">
        <b className="font-semibold text-black">nerage</b> produces and directs high-end launch films and videos for innovative tech and saas companies.
      </h2>

      {/* Subtag */}
      <p className="mt-4 text-[#8e8e8e] font-mono text-xs md:text-sm tracking-[0.25em] uppercase">
        story &middot; film &middot; launch
      </p>

      {/* Two-Column Manifesto (Gallery Plaque Styling) */}
      <div className="mt-[clamp(3.5rem,7vw,5.5rem)] grid grid-cols-1 md:grid-cols-2 gap-[clamp(1.5rem,3.5vw,3rem)] text-left">
        {/* Card 01 - The Problem */}
        <div className="group relative p-8 md:p-10 rounded-2xl bg-white border border-[#e7e7e7] shadow-xs hover:border-black/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
          {/* Subtle Corner Brackets (Camera Crosshair Aesthetics) */}
          <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-black/20 group-hover:border-black/60 transition-colors" />
          <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-black/20 group-hover:border-black/60 transition-colors" />
          <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-black/20 group-hover:border-black/60 transition-colors" />
          <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-black/20 group-hover:border-black/60 transition-colors" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8e8e8e] group-hover:text-black transition-colors">
                01 &mdash; the problem
              </span>
              <span className="font-mono text-xs text-[#bbb] group-hover:text-black transition-colors">
                /01
              </span>
            </div>
            <p className="text-[#2b2b2b] text-[clamp(1.05rem,1.25vw,1.22rem)] leading-[1.48] tracking-[-0.015em]">
              most launch videos look the same. stock saas animation, a calm voiceover, a post nobody remembers by lunch. we don&apos;t make those, and we don&apos;t think you should settle for them
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs text-[#8e8e8e]">
            <span className="font-medium text-[#555]">Break the generic template</span>
            <span className="font-mono text-[11px] text-[#aaa] uppercase">Scene 01</span>
          </div>
        </div>

        {/* Card 02 - What We Do */}
        <div className="group relative p-8 md:p-10 rounded-2xl bg-white border border-[#e7e7e7] shadow-xs hover:border-black/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
          {/* Subtle Corner Brackets (Camera Crosshair Aesthetics) */}
          <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-black/20 group-hover:border-black/60 transition-colors" />
          <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-black/20 group-hover:border-black/60 transition-colors" />
          <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-black/20 group-hover:border-black/60 transition-colors" />
          <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-black/20 group-hover:border-black/60 transition-colors" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#8e8e8e] group-hover:text-black transition-colors">
                02 &mdash; what we do
              </span>
              <span className="font-mono text-xs text-[#bbb] group-hover:text-black transition-colors">
                /02
              </span>
            </div>
            <p className="text-[#2b2b2b] text-[clamp(1.05rem,1.25vw,1.22rem)] leading-[1.48] tracking-[-0.015em]">
              we work with founders to find the one idea their product should be known for, turn it into a film, and launch it in front of the people who matter most
            </p>
          </div>
          <div className="mt-8 pt-4 border-t border-[#f0f0f0] flex items-center justify-between text-xs text-[#8e8e8e]">
            <span className="font-medium text-[#555]">Story &middot; Craft &middot; Velocity</span>
            <span className="font-mono text-[11px] text-[#aaa] uppercase">Scene 02</span>
          </div>
        </div>
      </div>
    </section>
  );
}
