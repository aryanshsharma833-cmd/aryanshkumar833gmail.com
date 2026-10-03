import React, { useState } from "react";
import { ArrowUpRight, ArrowRight, Eye, Sparkles } from "lucide-react";
import { Project, PROJECTS } from "../data/portfolioData";
import { CardSpotlight } from "./CardSpotlight";
import { sounds } from "../utils/audioFeedback";

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
}

type FilterCategory = "all" | "social" | "brand" | "campaign" | "character" | "motion";

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filterTabs: { id: FilterCategory; label: string; count: number }[] = [
    { id: "all", label: "All Creations", count: PROJECTS.length },
    {
      id: "social",
      label: "Social Media Design",
      count: PROJECTS.filter((p) => p.category === "social").length,
    },
    {
      id: "brand",
      label: "Branding",
      count: PROJECTS.filter((p) => p.category === "brand").length,
    },
    {
      id: "campaign",
      label: "Posters & Advertisements",
      count: PROJECTS.filter((p) => p.category === "campaign").length,
    },
    {
      id: "character",
      label: "Character Design",
      count: PROJECTS.filter((p) => p.category === "character").length,
    },
    {
      id: "motion",
      label: "Animation & AI Experiments",
      count: PROJECTS.filter((p) => p.category === "motion").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const handleSelect = (project: Project) => {
    sounds.playTick();
    onSelectProject(project);
  };

  return (
    <section
      id="work"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* 1. Header with Kicker & Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#30372D]">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5FF42]">
              04 — SELECTED WORK
            </span>
            <span className="w-8 h-[1px] bg-[#30372D]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#92978B]">
              SELECTED CREATIONS
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EAE9DC] font-display">
            SELECTED CREATIONS<span className="text-[#C5FF42]">.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#92978B] max-w-xl leading-relaxed">
            High-impact visual systems, thumb-stopping social campaigns, editorial posters, and experimental character art.
          </p>
        </div>

        {/* Filter Categories Pill Bar */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#191D19] border border-[#30372D] overflow-x-auto max-w-full">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playTick();
                  setActiveFilter(tab.id);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#C5FF42] text-[#101210] font-bold shadow-md shadow-[#C5FF42]/20"
                    : "text-[#92978B] hover:text-[#EAE9DC] hover:bg-[#101210]"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive
                      ? "bg-[#101210] text-[#C5FF42]"
                      : "bg-[#101210] text-[#92978B]"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Large Artwork Previews Grid (Visually Dominant) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 pt-12">
        {filteredProjects.map((project, idx) => (
          <CardSpotlight
            key={project.id}
            onClick={() => handleSelect(project)}
            cursorType="view"
            cursorLabel="VIEW"
            className="rounded-3xl bg-[#191D19] border border-[#30372D] hover:border-[#C5FF42]/60 shadow-xl hover:shadow-2xl hover:shadow-[#C5FF42]/10 cursor-pointer overflow-hidden transition-all duration-300 group flex flex-col justify-between"
          >
            {/* Large Artwork Image Preview */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#101210]">
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#191D19] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

              {/* Floating Top Category Badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#101210]/90 backdrop-blur-md border border-[#30372D] text-xs font-mono font-semibold text-[#C5FF42]">
                  {project.categoryLabel}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#101210]/80 backdrop-blur-md border border-[#30372D] text-xs font-mono text-[#92978B]">
                  {project.year}
                </span>
              </div>

              {/* Hover View Button Overlay */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C5FF42] text-[#101210] font-semibold text-xs font-mono shadow-lg shadow-[#C5FF42]/30">
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Project</span>
                </span>
              </div>
            </div>

            {/* Project Content Description Box */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-[#EAE9DC] group-hover:text-[#C5FF42] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#92978B] group-hover:text-[#C5FF42] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0 ml-2" />
                </div>
                <p className="text-xs font-mono text-[#92978B]">
                  {project.subtitle} · Client: {project.client}
                </p>
              </div>

              <p className="text-sm text-[#EAE9DC]/80 font-sans leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Tools tags */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-[#30372D]/60">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 rounded-md bg-[#101210] border border-[#30372D] text-[11px] font-mono text-[#92978B]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
};
