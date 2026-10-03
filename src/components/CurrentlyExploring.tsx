import React, { useState } from "react";
import { Film, Box, Sparkles, Compass, ArrowRight, Play, Eye } from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";
import { sounds } from "../utils/audioFeedback";
import dioramaCliffGoldenHour from "../assets/images/diorama_cliff_golden_hour_1790941328588.jpg";
import floatingCliffDioramaHero from "../assets/images/floating_cliff_diorama_hero_1790942505523.jpg";

export const CurrentlyExploring: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const explorationCards = [
    {
      id: "2d-anim",
      title: "2D Animation",
      status: "Learning & Practice",
      statusColor: "text-amber-300 bg-amber-400/10 border-amber-400/30",
      icon: <Film className="w-6 h-6 text-[#C5FF42]" />,
      summary: "Exploring squash & stretch, keyframing, anticipation, and character timing.",
      lab: "Arena Animation Lab · Started 2025",
      skillsApplied: ["Adobe Animate", "Timing Spacing", "Keyframe Dynamics", "Turnarounds"],
      experiment: "Creating character walking cycles and kinetic typography transitions.",
    },
    {
      id: "3d-anim",
      title: "3D Animation",
      status: "Learning & Practice",
      statusColor: "text-amber-300 bg-amber-400/10 border-amber-400/30",
      icon: <Box className="w-6 h-6 text-[#C5FF42]" />,
      summary: "Learning spatial camera movement, basic modeling, materials, and lighting.",
      lab: "Arena Animation Lab · Started 2025",
      skillsApplied: ["Blender", "Viewport Lighting", "Spatial Staging", "3D Renders"],
      experiment: "Building abstract low-poly dioramas and floating kinetic geometry.",
      previewImage: dioramaCliffGoldenHour,
      previewLabel: "Alpine Diorama (Image 1)",
    },
    {
      id: "ai-content",
      title: "AI-Assisted Content",
      status: "Emerging Workflow",
      statusColor: "text-[#C5FF42] bg-[#C5FF42]/10 border-[#C5FF42]/30",
      icon: <Sparkles className="w-6 h-6 text-[#C5FF42]" />,
      summary: "Rapid concept prototyping, generative texture synthesis, and ideation.",
      lab: "Studio Experimental Workflow",
      skillsApplied: ["Prompt Engineering", "Image Synthesis", "Generative Variation", "Upscaling"],
      experiment: "Combining hand-crafted typography with AI-generated background scenes.",
      previewImage: floatingCliffDioramaHero,
      previewLabel: "Scenic Horizon (Image 2)",
    },
    {
      id: "storytelling",
      title: "Visual Storytelling",
      status: "Active Exploration",
      statusColor: "text-[#C5FF42] bg-[#C5FF42]/10 border-[#C5FF42]/30",
      icon: <Compass className="w-6 h-6 text-[#C5FF42]" />,
      summary: "Structuring emotional narrative pacing, tension, and multi-slide carousel rhythm.",
      lab: "Editorial Narrative Study",
      skillsApplied: ["Narrative Pacing", "Hook Architecture", "Visual Tension", "Editorial Flow"],
      experiment: "Writing and designing story-driven carousel frameworks that keep readers swiping.",
    },
  ];

  return (
    <section
      id="exploring"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* 1. Header */}
      <div className="pb-8 border-b border-[#30372D]">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5FF42]">
            07 — CURRENTLY EXPLORING
          </span>
          <span className="w-8 h-[1px] bg-[#30372D]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#92978B]">
            ALWAYS IN EXPERIMENT MODE
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EAE9DC] font-display">
          ALWAYS IN EXPERIMENT MODE<span className="text-[#C5FF42]">.</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#92978B] max-w-2xl leading-relaxed">
          Distinguishing established professional design craft from my current frontiers of growth in motion, dimension, and computational creativity.
        </p>
      </div>

      {/* 2. Experimental 4-Card Interactive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
        {explorationCards.map((card, idx) => (
          <CardSpotlight
            key={card.id}
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
            cursorType="pointer"
            className="p-7 rounded-3xl bg-[#191D19] border border-[#30372D] hover:border-[#C5FF42]/60 shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300"
          >
            <div className="space-y-5">
              {/* Header Badge & Icon */}
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-2xl bg-[#101210] border border-[#30372D]">
                  {card.icon}
                </div>
                <span
                  className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${card.statusColor}`}
                >
                  {card.status}
                </span>
              </div>

              {/* Title & Lab */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-display text-[#EAE9DC] hover:text-[#C5FF42] transition-colors">
                  {card.title}
                </h3>
                <div className="text-[11px] font-mono text-[#92978B]">
                  {card.lab}
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-[#EAE9DC]/80 font-sans leading-relaxed">
                {card.summary}
              </p>

              {/* Experiment Focus Box */}
              <div className="p-3 rounded-xl bg-[#101210] border border-[#30372D] space-y-1">
                <div className="text-[10px] font-mono text-[#C5FF42] uppercase tracking-wider">
                  Active Experiment
                </div>
                <p className="text-xs text-[#92978B] font-sans">
                  {card.experiment}
                </p>
              </div>

              {/* Visual Asset Thumbnail */}
              {card.previewImage && (
                <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-[#30372D] group/thumb">
                  <img
                    src={card.previewImage}
                    alt={card.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101210]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-[#C5FF42] px-2 py-0.5 rounded-full bg-[#101210]/90 backdrop-blur-sm border border-[#30372D]">
                    {card.previewLabel}
                  </span>
                </div>
              )}

              {/* Applied Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {card.skillsApplied.map((sk) => (
                  <span
                    key={sk}
                    className="px-2 py-0.5 rounded bg-[#101210] border border-[#30372D] text-[10px] font-mono text-[#92978B]"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Micro Indicator */}
            <div className="pt-4 border-t border-[#30372D] text-[11px] font-mono text-[#C5FF42] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF42] animate-ping" />
              <span>In Active Growth</span>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
};
