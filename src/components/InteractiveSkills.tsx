import React, { useState } from "react";
import { Sparkles, Palette, Layers, Video, X, CheckCircle, ArrowRight } from "lucide-react";
import { SKILLS_CATEGORIES } from "../data/portfolioData";
import { sounds } from "../utils/audioFeedback";

interface SelectedSkillDetail {
  name: string;
  category: string;
  level: string;
  pct: number;
  highlight: string;
  appliedIn: string;
}

export const InteractiveSkills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [inspectedSkill, setInspectedSkill] = useState<SelectedSkillDetail | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    DESIGN: <Palette className="w-4 h-4 text-[#FF5A1F]" />,
    CREATIVE: <Layers className="w-4 h-4 text-[#FF5A1F]" />,
    MOTION: <Video className="w-4 h-4 text-[#FF5A1F]" />
  };

  const skillInsights: Record<string, { highlight: string; appliedIn: string }> = {
    Photoshop: {
      highlight: "Advanced photo manipulation, layer compositing, poster layout, and lighting adjustments.",
      appliedIn: "Modern Teams posters, Sales Brigade campaign banners, and Zurich Swiss posters."
    },
    Canva: {
      highlight: "High-velocity multi-slide carousels, client template systems, and rapid social media variations.",
      appliedIn: "Daily LinkedIn carousels, hiring announcements, and fast-turnaround business graphics."
    },
    Illustrator: {
      highlight: "Vector brand marks, geometric icon construction, and bespoke typography lockups.",
      appliedIn: "Kura packaging monogram suite and vector character concept sheets."
    },
    "Character Design": {
      highlight: "Developing expressive characters with distinct silhouettes, model sheets, and emotional range.",
      appliedIn: "Sentinel character exploration and studio mascot brand assets."
    },
    Branding: {
      highlight: "Formulating cohesive color bibles, typographic hierarchies, and cross-channel visual guidelines.",
      appliedIn: "Modern Teams employer branding and Kura visual identity system."
    },
    "Social Media Design": {
      highlight: "Thumb-stopping feed hierarchy, conversion-driven carousels, and consistent visual pacing.",
      appliedIn: "Over 50+ published business communication creatives and growth graphics."
    },
    "2D Animation": {
      highlight: "Learning squash & stretch, keyframing, anticipation, and character timing fundamentals.",
      appliedIn: "Ongoing coursework at Arena Animation lab (2025–Present)."
    },
    "3D Animation": {
      highlight: "Exploring spatial camera movement, basic 3D lighting, and visual asset modeling.",
      appliedIn: "Arena Animation foundational modules and 3D diorama experiments."
    },
    "Video Editing": {
      highlight: "Timeline pacing, rhythm cutting to music beats, lower-thirds, and social cutdowns.",
      appliedIn: "Short promotional reels, motion vignettes, and video teaser drafts."
    }
  };

  const filteredCategories =
    activeCategory === "ALL"
      ? SKILLS_CATEGORIES
      : SKILLS_CATEGORIES.filter((c) => c.category === activeCategory);

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case "Intermediate":
        return "bg-[#FF5A1F]/15 text-[#FF5A1F] border-[#FF5A1F]/30";
      case "Beginner":
        return "bg-sky-500/15 text-sky-300 border-sky-500/30";
      case "Learning":
        return "bg-amber-500/15 text-amber-300 border-amber-500/30 animate-pulse";
      default:
        return "bg-[#181B22] text-[#F4F3ED] border-[#262B35]";
    }
  };

  const handleInspectSkill = (skill: { name: string; level: string; pct: number }, cat: string) => {
    sounds.playTick();
    const insight = skillInsights[skill.name] || {
      highlight: "Core tool utilized for visual communication and creative execution.",
      appliedIn: "Portfolio projects and studio practice."
    };
    setInspectedSkill({
      ...skill,
      category: cat,
      highlight: insight.highlight,
      appliedIn: insight.appliedIn
    });
  };

  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#262B35]">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F]">
              03 — SKILLS & EXPERTISE
            </span>
            <span className="w-6 h-[1px] bg-[#262B35]" />
            <span className="text-xs font-mono text-[#949BA8]">
              Software & Tools Arsenal
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F3ED] font-display">
            TOOLS + SKILLS
          </h2>
          <p className="mt-3 text-sm text-[#949BA8] font-mono">
            Click any skill to inspect practical application and workflows.
          </p>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-[#141619] border border-[#262B35]">
          {["ALL", "DESIGN", "CREATIVE", "MOTION"].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                sounds.playTick();
                setActiveCategory(cat);
              }}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#FF5A1F] text-white font-semibold shadow-md shadow-[#FF5A1F]/20"
                  : "text-[#949BA8] hover:text-[#F4F3ED] hover:bg-[#1E222A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Category Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
        {filteredCategories.map((catGroup) => (
          <div
            key={catGroup.category}
            className="p-8 rounded-2xl bg-[#141619] border border-[#262B35] hover:border-[#FF5A1F]/40 transition-colors shadow-lg space-y-6"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#262B35]">
              <div className="flex items-center gap-2.5">
                {categoryIcons[catGroup.category]}
                <h3 className="text-lg font-bold font-mono tracking-wider text-[#F4F3ED]">
                  {catGroup.category}
                </h3>
              </div>
              <span className="text-xs font-mono text-[#949BA8]">
                {catGroup.skills.length} Skills
              </span>
            </div>

            <div className="space-y-4">
              {catGroup.skills.map((skill) => {
                const isSelected = inspectedSkill?.name === skill.name;
                return (
                  <div
                    key={skill.name}
                    onClick={() => handleInspectSkill(skill, catGroup.category)}
                    onMouseEnter={() => sounds.playHover()}
                    className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer space-y-2.5 ${
                      isSelected
                        ? "bg-[#1E1A17] border-[#FF5A1F] shadow-lg shadow-[#FF5A1F]/10 scale-[1.02]"
                        : "bg-[#0C0D0E] border-[#262B35] hover:border-[#FF5A1F]/50 hover:bg-[#141619]"
                    }`}
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-[#F4F3ED] group-hover:text-[#FF5A1F] transition-colors flex items-center gap-2">
                        <span>{skill.name}</span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] animate-ping" />}
                      </span>
                      <span
                        className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${getLevelBadgeClass(
                          skill.level
                        )}`}
                      >
                        {skill.level}
                      </span>
                    </div>

                    {/* Visual animated level indicator */}
                    <div className="h-2 w-full bg-[#0C0D0E] rounded-full overflow-hidden border border-[#262B35]">
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-[#FF5A1F] to-[#FF884D]"
                        style={{ width: `${skill.pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Detail Inspector Drawer */}
      {inspectedSkill && (
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#141619] border border-[#FF5A1F]/40 shadow-2xl relative animate-in fade-in slide-in-from-bottom-3 duration-300">
          <button
            onClick={() => setInspectedSkill(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#1E222A] hover:bg-[#FF5A1F] text-[#949BA8] hover:text-white transition-colors cursor-pointer"
            aria-label="Close inspector"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F]">
                {inspectedSkill.category} Capability Spotlight
              </div>
              <h4 className="text-2xl font-bold font-display text-[#F4F3ED]">
                {inspectedSkill.name}
              </h4>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-mono px-2.5 py-1 rounded-full border ${getLevelBadgeClass(
                    inspectedSkill.level
                  )}`}
                >
                  Status: {inspectedSkill.level}
                </span>
                <span className="text-xs font-mono text-[#949BA8] tabular-nums">
                  Proficiency: {inspectedSkill.pct}%
                </span>
              </div>
            </div>

            <div className="md:col-span-8 space-y-3 border-t md:border-t-0 md:border-l border-[#262B35] pt-4 md:pt-0 md:pl-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#949BA8] block mb-1">
                  How Aryansh Uses It
                </span>
                <p className="text-sm text-[#F4F3ED]/90 leading-relaxed font-sans">
                  {inspectedSkill.highlight}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#949BA8] block mb-1">
                  Featured In
                </span>
                <p className="text-xs font-mono text-[#FF5A1F]">
                  {inspectedSkill.appliedIn}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
