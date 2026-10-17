"use client";

import { useRef, useState } from "react";
import VideoModal, { ProjectData } from "./VideoModal";
import { Play, Eye, Heart, Repeat2 } from "lucide-react";

export interface EnhancedProjectData extends ProjectData {
  client: string;
  handle: string;
  views: string;
  likes: string;
  reposts: string;
  avatarBg: string;
}

const PROJECTS: EnhancedProjectData[] = [
  {
    id: "crazy-enough",
    number: "No. 01",
    category: "Brand film",
    title: "Crazy Enough",
    description: "A brand film about the people who build what comes next.",
    videoUrl: "/film-01.mp4",
    duration: "0:58",
    client: "Euphoria",
    handle: "@Euphoria_fi",
    views: "348.5K",
    likes: "1,240",
    reposts: "318",
    avatarBg: "#050505",
  },
  {
    id: "strips-to-chips",
    number: "No. 02",
    category: "Launch film",
    title: "Strips to Chips",
    description: "From punch cards to AI agents in sixty seconds, for a YC company.",
    videoUrl: "/film-02.mp4",
    duration: "1:00",
    client: "Strips to Chips",
    handle: "@strips_chips",
    views: "512.2K",
    likes: "2,410",
    reposts: "680",
    avatarBg: "#111111",
  },
  {
    id: "knot-presents",
    number: "No. 03",
    category: "Launch film",
    title: "Knot Presents",
    description: "A full CGI hero film for a fashion app launch.",
    videoUrl: "/film-03.mp4",
    duration: "0:44",
    client: "Knot",
    handle: "@knot_app",
    views: "289.4K",
    likes: "940",
    reposts: "245",
    avatarBg: "#1a1a1a",
  },
  {
    id: "one-shot",
    number: "No. 04",
    category: "AI film",
    title: "One Shot",
    description: "One stadium, one hero. An anime football film made entirely with AI.",
    videoUrl: "/film-04.mp4",
    duration: "1:30",
    client: "Strikers",
    handle: "@oneshot_ai",
    views: "640.8K",
    likes: "3,150",
    reposts: "890",
    avatarBg: "#080808",
  },
];

const CATEGORIES = ["All", "Launch film", "Brand film", "AI film"] as const;

export default function ProjectShowcase() {
  const [activeModalProject, setActiveModalProject] = useState<ProjectData | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="work"
      aria-label="Selected launches"
      className="py-[clamp(4rem,8vw,7rem)] px-4 sm:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center mb-[clamp(2.5rem,5vw,4rem)]">
        <div className="inline-flex items-center gap-2 mb-3 bg-white px-3.5 py-1.5 rounded-full border border-black/10 shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-[#777]">
            FEATURED WORKS &middot; 4K DCI
          </span>
        </div>
        <h2 className="font-semibold text-[clamp(2.1rem,3.8vw,3.4rem)] tracking-[-0.035em] text-[#0b0b0b]">
          Selected <em className="font-serif italic font-normal text-black">launches</em>
        </h2>
        <p className="mt-2 text-[#777] text-sm md:text-base font-normal max-w-lg mx-auto">
          Hover to preview each film. Click any card to enter fullscreen cinema mode with sound.
        </p>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === cat).length;
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-[#0b0b0b] text-white border-black shadow-sm"
                    : "bg-white text-[#666] border-[#e7e7e7] hover:border-black/30 hover:text-black"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-white/20 text-white" : "bg-[#f0f0f0] text-[#888]"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={() => setActiveModalProject(project)}
          />
        ))}
      </div>

      {/* Cinema Theater Modal Player */}
      <VideoModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

function ProjectCard({
  project,
  onOpenModal,
}: {
  project: EnhancedProjectData;
  onOpenModal: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <article
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpenModal}
      className="group cursor-pointer rounded-2xl bg-white border border-[#e7e7e7] overflow-hidden flex flex-col justify-between transition-all duration-400 ease-[cubic-bezier(0.2,0.7,0.2,1)] hover:-translate-y-1.5 hover:shadow-2xl hover:border-black/30"
    >
      <div>
        {/* Top Meta Header: Client handle + Verified icon */}
        <div className="p-3.5 flex items-center justify-between border-b border-[#f2f2f2] bg-[#fdfdfd]">
          <div className="flex items-center gap-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center font-mono text-[9px] text-white font-medium shrink-0"
              style={{ backgroundColor: project.avatarBg }}
            >
              {project.client[0]}
            </div>
            <div>
              <div className="flex items-center gap-1 leading-none">
                <span className="font-semibold text-xs text-[#0f1419]">{project.client}</span>
                <svg className="w-3.5 h-3.5 fill-[#1d9bf0]" viewBox="0 0 24 24">
                  <path d="M9 16.2l-3.5-3.5 1.4-1.4L9 13.4l7.1-7.1 1.4 1.4L9 16.2z" />
                </svg>
              </div>
              <span className="font-mono text-[10px] text-[#71767b]">{project.handle}</span>
            </div>
          </div>

          <span className="font-mono text-[10px] text-[#777] bg-[#f3f3f3] px-2 py-0.5 rounded-full flex items-center gap-1">
            <span>{project.category}</span>
          </span>
        </div>

        {/* Media Player Frame */}
        <div className="relative aspect-[16/10] bg-[#0c0c0c] overflow-hidden">
          <video
            ref={videoRef}
            src={project.videoUrl}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

          {/* Cinema Viewfinder Brackets */}
          <div className="absolute inset-2.5 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300">
            <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white" />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white" />
            <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white" />
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white" />
          </div>

          {/* Duration Badge */}
          <span className="absolute right-2.5 bottom-2.5 font-mono text-[11px] text-white/90 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1.5">
            <span className="w-1 h-1 rounded-full bg-emerald-400" />
            <span>{project.duration}</span>
          </span>

          {/* Centered Play Button Overlay */}
          <div
            className={`absolute inset-0 grid place-items-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-12 h-12 rounded-full bg-black/80 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 shadow-2xl">
              <Play className="w-5 h-5 ml-0.5 fill-white" />
            </div>
          </div>
        </div>

        {/* Card Body Info */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="font-mono text-xs text-[#8e8e8e]">{project.number}</span>
          </div>

          <h3 className="font-semibold text-base text-[#0b0b0b] group-hover:text-black transition-colors leading-tight mb-1.5">
            {project.title}
          </h3>

          <p className="text-xs text-[#6a6a6a] leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>
      </div>

      {/* Card Footer: Social Proof Metrics (Views, Likes, Reposts) */}
      <div className="px-4 py-3 bg-[#fbfbfb] border-t border-[#f0f0f0] flex items-center justify-between text-[11px] font-mono text-[#777]">
        <div className="flex items-center gap-1" title="Organic impressions">
          <Eye className="w-3.5 h-3.5 text-[#999]" />
          <span>{project.views}</span>
        </div>
        <div className="flex items-center gap-1" title="Likes">
          <Heart className="w-3 h-3 text-[#999]" />
          <span>{project.likes}</span>
        </div>
        <div className="flex items-center gap-1" title="Reposts on X">
          <Repeat2 className="w-3.5 h-3.5 text-[#999]" />
          <span>{project.reposts}</span>
        </div>
      </div>
    </article>
  );
}
