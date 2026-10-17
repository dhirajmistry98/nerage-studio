"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const REEL_TRACKS = [
  { title: "Crazy Enough", audio: "/film-01.mp4" },
  { title: "Strips to Chips", audio: "/film-02.mp4" },
  { title: "Knot Presents", audio: "/film-03.mp4" },
  { title: "One Shot", audio: "/film-04.mp4" },
];

const HERO_POSTER =
  "data:image/jpeg;base64,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";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
  const [isMuted, setIsMuted] = useState(true);
  const isMutedRef = useRef(true);
  const [currentReelIndex, setCurrentReelIndex] = useState(0);
  const currentReelIndexRef = useRef(0);
  const [timecode, setTimecode] = useState("00:00:00:00");
  const [showHeadline, setShowHeadline] = useState(true);
  const showHeadlineRef = useRef(true);
  const [isHeroHovered, setIsHeroHovered] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<"FULL" | "2.39:1" | "9:16">("FULL");

  useEffect(() => {
    isMutedRef.current = isMuted;
  }, [isMuted]);

  // Clean up audio on unmount
  useEffect(() => {
    return () => {
      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.pause();
        }
      });
    };
  }, []);

  // Robust video playback init & headline disappearance after playback starts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;

    const playVideo = () => {
      video.play().catch((err) => {
        console.warn("Video autoplay attempted:", err);
      });
    };

    let timer: NodeJS.Timeout | null = null;
    const handlePlaying = () => {
      if (showHeadlineRef.current && !timer) {
        timer = setTimeout(() => {
          showHeadlineRef.current = false;
          setShowHeadline(false);
        }, 2400);
      }
    };

    playVideo();
    video.addEventListener("canplay", playVideo);
    video.addEventListener("loadeddata", playVideo);
    video.addEventListener("playing", handlePlaying);

    return () => {
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("playing", handlePlaying);
      if (timer) clearTimeout(timer);
    };
  }, []);

  // Rotate reel title & sync audio every 2 seconds (matching index.html line 380)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const cur = video.currentTime;

      // Disappear the headline once the video has played for ~2.2s
      if (cur >= 2.2 && showHeadlineRef.current) {
        showHeadlineRef.current = false;
        setShowHeadline(false);
      }

      const totalSeconds = Math.floor(cur);
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      const frames = Math.floor((cur % 1) * 24);
      setTimecode(
        `00:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`
      );

      // The reel cuts to the next film every 2 seconds (exact index.html logic: Math.floor(cur / 2) % 4)
      const index = Math.floor(cur / 2) % REEL_TRACKS.length;

      if (index !== currentReelIndexRef.current) {
        const prevIndex = currentReelIndexRef.current;
        currentReelIndexRef.current = index;
        setCurrentReelIndex(index);

        if (!isMutedRef.current) {
          if (audioRefs.current[prevIndex]) {
            audioRefs.current[prevIndex]?.pause();
          }
          const nextAudio = audioRefs.current[index];
          if (nextAudio) {
            nextAudio.currentTime = cur % 2;
            nextAudio.play().catch(() => {});
          }
        }
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  const toggleSound = () => {
    if (isMuted) {
      setIsMuted(false);
      isMutedRef.current = false;
      const currentAudio = audioRefs.current[currentReelIndexRef.current];
      if (currentAudio) {
        if (videoRef.current) {
          currentAudio.currentTime = videoRef.current.currentTime % 2;
        }
        currentAudio.volume = 1;
        currentAudio.play().catch((err) => {
          console.error("Audio playback error:", err);
        });
      }
    } else {
      setIsMuted(true);
      isMutedRef.current = true;
      audioRefs.current.forEach((audio) => {
        if (audio) {
          audio.pause();
        }
      });
    }
  };

  return (
    <section
      id="top"
      aria-label="Showreel"
      onMouseEnter={() => setIsHeroHovered(true)}
      onMouseLeave={() => setIsHeroHovered(false)}
      className="relative h-[100svh] min-h-[34rem] w-full bg-[#050505] overflow-hidden flex items-center justify-center text-white"
    >
      {/* Background Video with Base64 Poster Fallback */}
      <video
        ref={videoRef}
        src="/hero.mp4"
        poster={HERO_POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Clean Single Ambient Film Veil (Matching index.html: rgba(5,5,5,.66)) */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Cinema Anamorphic Bars (Top & Bottom) for 2.39:1 */}
      <div
        className={`absolute top-0 left-0 right-0 bg-black z-20 pointer-events-none transition-all duration-700 ease-in-out ${
          aspectRatio === "2.39:1" ? "h-[11vh]" : "h-0"
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 bg-black z-20 pointer-events-none transition-all duration-700 ease-in-out ${
          aspectRatio === "2.39:1" ? "h-[11vh]" : "h-0"
        }`}
      />

      {/* Cinema Pillarbox Bars (Left & Right) for 9:16 Vertical Reel Mode */}
      <div
        className={`absolute top-0 bottom-0 left-0 bg-black/95 backdrop-blur-md z-20 pointer-events-none transition-all duration-700 ease-in-out ${
          aspectRatio === "9:16" ? "w-[calc(50vw-28.125vh)]" : "w-0"
        }`}
      />
      <div
        className={`absolute top-0 bottom-0 right-0 bg-black/95 backdrop-blur-md z-20 pointer-events-none transition-all duration-700 ease-in-out ${
          aspectRatio === "9:16" ? "w-[calc(50vw-28.125vh)]" : "w-0"
        }`}
      />

      {/* Director's Camera Viewfinder HUD (Four Corner Guides) */}
      <div className="absolute inset-6 md:inset-8 pointer-events-none z-20 select-none opacity-40">
        {/* Top-Left Bracket */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/60" />
        {/* Top-Right Bracket */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/60" />
        {/* Bottom-Left Bracket */}
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-white/60" />
        {/* Bottom-Right Bracket */}
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/60" />
      </div>

      {/* Top Left Camera Production Metadata & Aspect Switcher (Positioned cleanly below top header) */}
      <div className="absolute z-30 left-6 md:left-10 top-20 sm:top-24 hidden sm:flex items-center gap-2.5 select-none">
        <span className="font-mono text-[10px] uppercase tracking-widest text-white/50 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
          NERAGE CAM 01 &middot; 4K 24FPS
        </span>
        <span className="font-mono text-[11px] text-white/70 tracking-wider font-variant-numeric tabular-nums bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10">
          TC {timecode}
        </span>
        {/* Aspect Ratio Switcher */}
        <div className="flex items-center gap-1 bg-black/40 backdrop-blur-md p-0.5 rounded-md border border-white/10">
          {(["FULL", "2.39:1", "9:16"] as const).map((ratio) => (
            <button
              key={ratio}
              type="button"
              onClick={() => setAspectRatio(ratio)}
              className={`font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded transition-all cursor-pointer ${
                aspectRatio === ratio
                  ? "bg-white text-black font-semibold shadow-xs"
                  : "text-white/60 hover:text-white hover:bg-white/10"
              }`}
              title={`Switch camera view to ${ratio}`}
            >
              {ratio}
            </button>
          ))}
        </div>
      </div>

      {/* Sound Toggle Button (Positioned cleanly below top header) */}
      <button
        type="button"
        onClick={toggleSound}
        className="absolute z-30 right-6 md:right-10 top-20 sm:top-24 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white/90 hover:text-white text-xs tracking-wider transition-all duration-200"
        aria-label={isMuted ? "Unmute reel sound" : "Mute reel sound"}
      >
        {isMuted ? (
          <>
            <VolumeX className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px] uppercase tracking-widest">Sound Off</span>
          </>
        ) : (
          <>
            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-300">
              Sound On
            </span>
            <span className="flex items-end gap-0.5 h-3.5 ml-1">
              {[40, 80, 100, 60, 90, 50, 75].map((h, bi) => (
                <span
                  key={bi}
                  className="w-0.5 bg-emerald-400 rounded-full animate-pulse"
                  style={{
                    height: `${h}%`,
                    animationDuration: `${0.35 + (bi % 4) * 0.12}s`,
                    animationDelay: `${bi * 0.05}s`,
                  }}
                />
              ))}
            </span>
          </>
        )}
      </button>

      {/* Center Statement Headline (Cinematic Two-Tier Lockup, Auto-disappears, Reappears on hover) */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-6 max-w-5xl select-none transition-all duration-1000 ease-out ${
          showHeadline || isHeroHovered
            ? "opacity-100 translate-y-0 filter-none"
            : "opacity-0 -translate-y-4 blur-sm pointer-events-none"
        }`}
      >
        {/* Cinematic Overline Tag */}
        <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-[0.22em] text-white/80 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>CINEMATIC LAUNCH DIRECTING &middot; 2026 REEL</span>
        </div>

        {/* Hero Title Lockup */}
        <h1 className="font-light tracking-[-0.035em] leading-[1.05] text-white">
          <span className="block font-sans text-[clamp(2.3rem,5.2vw,5rem)] text-white/95">
            Launch films that
          </span>
          <span className="block mt-1 sm:mt-2 text-[clamp(2.6rem,5.8vw,5.6rem)]">
            <em className="font-serif italic font-normal text-white pr-2.5 drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]">
              break
            </em>
            <span className="font-sans text-white/85">the internet.</span>
          </span>
        </h1>

        {/* Minimalist Subtitle */}
        <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm font-mono tracking-wider text-white/60 uppercase">
          7-Day Sprint &middot; Paper to 4K Master &middot; Zero Generic SaaS Video
        </p>
      </div>

      {/* Hero Meta Bottom Bar */}
      <div
        className="absolute z-20 left-[clamp(1.5rem,3.5vw,3rem)] right-[clamp(1.5rem,3.5vw,3rem)] bottom-8 flex justify-between items-center text-xs tracking-[0.04em] text-white/65 select-none pointer-events-none"
        aria-hidden="true"
      >
        {/* Live Recording Reel Status */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff3333] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff3333] shadow-[0_0_8px_#ff3333]" />
          </span>
          <span className="font-mono text-[11px] text-white/60 tracking-wider uppercase">
            Now playing &middot;{" "}
            <span className="font-sans font-medium text-white transition-opacity duration-300">
              {REEL_TRACKS[currentReelIndex]?.title}
            </span>
          </span>
        </div>

        {/* Animated Scroll Indicator */}
        <div className="hidden sm:flex items-center gap-3 mr-0 md:mr-16">
          <span className="font-mono text-[11px] uppercase tracking-widest text-white/50">
            Scroll
          </span>
          <span className="w-8 h-[1px] bg-white/40 overflow-hidden relative">
            <span className="absolute inset-0 bg-white animate-line" />
          </span>
        </div>
      </div>

      {/* Hidden Synchronized Multi-Track Audio Elements */}
      <div className="hidden" aria-hidden="true">
        {REEL_TRACKS.map((track, idx) => (
          <audio
            key={track.title}
            ref={(el) => {
              audioRefs.current[idx] = el;
            }}
            src={track.audio}
            preload="auto"
            loop
          />
        ))}
      </div>
    </section>
  );
}
