import React, { useState } from "react";
import {
  Palette,
  Layers,
  Video,
  Sparkles,
  CheckCircle2,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { sounds } from "../utils/audioFeedback";
import { CardSpotlight } from "./CardSpotlight";

export const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    category: string;
    tag?: string;
    details: string;
  } | null>({
    name: "Adobe Photoshop",
    category: "DESIGN",
    tag: "Proficient",
    details: "High-end photo manipulation, creative composite layouts, campaign posters, and color grading.",
  });

  const skillCategories = [
    {
      id: "DESIGN",
      title: "DESIGN",
      icon: <Palette className="w-5 h-5 text-[#C5FF42]" />,
      description: "Foundational software and visual branding capabilities.",
      skills: [
        {
          name: "Adobe Photoshop",
          tag: "Proficient",
          details: "Photo compositing, digital poster layout, visual asset manipulation, and feed aesthetic grading.",
        },
        {
          name: "Adobe Illustrator",
          tag: "Proficient",
          details: "Vector branding systems, monograms, iconography suites, and scalable brand marks.",
        },
        {
          name: "Canva",
          tag: "Proficient",
          details: "High-velocity multi-slide carousels, rapid template generation, and business graphic variations.",
        },
        {
          name: "Social Media Design",
          tag: "Core",
          details: "Feed visual hierarchy, engagement-optimized carousels, thumbnail design, and story systems.",
        },
        {
          name: "Branding & Visual Identity",
          tag: "Core",
          details: "Color systems, typography pairing, logo guidelines, and cohesive brand collateral.",
        },
      ],
    },
    {
      id: "CREATIVE",
      title: "CREATIVE",
      icon: <Layers className="w-5 h-5 text-[#C5FF42]" />,
      description: "Ideation, narrative craft, and visual development.",
      skills: [
        {
          name: "Character Design",
          tag: "Creative",
          details: "Original character illustration, expressive facial dynamics, silhouettes, and mascot concepting.",
        },
        {
          name: "Visual Storytelling",
          tag: "Core",
          details: "Creating emotional narrative arcs, pacing visual sequences, and crafting compelling hooks.",
        },
        {
          name: "Creative Concepts",
          tag: "Core",
          details: "Big-picture creative ideation, moodboarding, thematic campaign direction, and visual brainstorming.",
        },
        {
          name: "Content Creation",
          tag: "Core",
          details: "Writing engaging copy, hooks, captions, and visual-first editorial communication.",
        },
      ],
    },
    {
      id: "MOTION & TECHNOLOGY",
      title: "MOTION & TECHNOLOGY",
      icon: <Video className="w-5 h-5 text-[#C5FF42]" />,
      description: "Emerging animation tools, video craft, and modern generative AI.",
      skills: [
        {
          name: "2D Animation",
          tag: "Learning",
          details: "Keyframing, anticipation, timing charts, and character locomotion in Adobe Animate.",
        },
        {
          name: "3D Animation",
          tag: "Learning",
          details: "Spatial camera movements, 3D modeling fundamentals, and lighting composition in Blender.",
        },
        {
          name: "Video Editing",
          tag: "Beginner",
          details: "Timeline rhythm cutting, beat sync, dynamic lower-thirds, and social cutdowns in Premiere Pro.",
        },
        {
          name: "AI-Assisted Visual Production",
          tag: "Workflow",
          details: "Prompt engineering, generative concept generation, image synthesis, and AI ideation workflows.",
        },
      ],
    },
  ];

  const handleSelectSkill = (
    skill: { name: string; tag?: string; details: string },
    category: string
  ) => {
    sounds.playTick();
    setSelectedSkill({
      ...skill,
      category,
    });
  };

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* 1. Header */}
      <div className="pb-8 border-b border-[#30372D]">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5FF42]">
            03 — SKILLS & EXPERTISE
          </span>
          <span className="w-8 h-[1px] bg-[#30372D]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#92978B]">
            WHAT I BRING TO THE TABLE
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EAE9DC] font-display">
          WHAT I BRING TO THE TABLE<span className="text-[#C5FF42]">.</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#92978B] max-w-2xl leading-relaxed">
          A balance of battle-tested design software, creative visual storytelling, and emerging motion technologies.
        </p>
      </div>

      {/* 2. Interactive Skills Inspector Bar */}
      {selectedSkill && (
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-[#191D19] border border-[#C5FF42]/40 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all">
          <div className="space-y-1">
            <div className="flex items-center gap-2.5">
              <span className="font-display font-bold text-lg text-[#EAE9DC]">
                {selectedSkill.name}
              </span>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#101210] border border-[#30372D] text-[#92978B]">
                {selectedSkill.category}
              </span>
              {selectedSkill.tag && (
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#C5FF42]/10 border border-[#C5FF42]/30 text-[#C5FF42]">
                  {selectedSkill.tag}
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-[#92978B] font-sans">
              {selectedSkill.details}
            </p>
          </div>

          <div className="shrink-0 text-xs font-mono text-[#C5FF42] flex items-center gap-1.5 self-end sm:self-center">
            <CheckCircle2 className="w-4 h-4" />
            <span>Interactive Tooltip</span>
          </div>
        </div>
      )}

      {/* 3. Three Clean Category Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        {skillCategories.map((cat) => (
          <CardSpotlight
            key={cat.id}
            cursorType="pointer"
            className="p-6 sm:p-8 rounded-2xl bg-[#191D19] border border-[#30372D] hover:border-[#C5FF42]/40 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Category Header */}
              <div className="space-y-2 pb-5 border-b border-[#30372D]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#101210] border border-[#30372D]">
                      {cat.icon}
                    </div>
                    <h3 className="font-display font-bold text-xl text-[#EAE9DC]">
                      {cat.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs font-mono text-[#92978B]">
                  {cat.description}
                </p>
              </div>

              {/* Skills List with Interactive Typography */}
              <div className="space-y-3">
                {cat.skills.map((skill) => {
                  const isSelected = selectedSkill?.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      onClick={() => handleSelectSkill(skill, cat.title)}
                      className={`w-full text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                        isSelected
                          ? "bg-[#101210] border-[#C5FF42] shadow-md shadow-[#C5FF42]/10"
                          : "bg-[#101210]/60 border-[#30372D] hover:border-[#C5FF42]/50 hover:bg-[#101210]"
                      }`}
                    >
                      <span
                        className={`text-sm font-medium font-sans transition-colors ${
                          isSelected
                            ? "text-[#C5FF42]"
                            : "text-[#EAE9DC] group-hover:text-[#C5FF42]"
                        }`}
                      >
                        {skill.name}
                      </span>

                      {skill.tag && (
                        <span
                          className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                            skill.tag === "Learning"
                              ? "bg-amber-400/15 text-amber-300 border border-amber-400/30 animate-pulse"
                              : skill.tag === "Beginner"
                              ? "bg-sky-400/15 text-sky-300 border border-sky-400/30"
                              : "bg-[#191D19] text-[#C5FF42] border border-[#30372D]"
                          }`}
                        >
                          {skill.tag}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer indicator */}
            <div className="pt-6 mt-6 border-t border-[#30372D] flex items-center justify-between text-[11px] font-mono text-[#92978B]">
              <span>{cat.skills.length} Capabilities</span>
              <span className="text-[#C5FF42] flex items-center gap-1">
                <span>Click to inspect</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
};
