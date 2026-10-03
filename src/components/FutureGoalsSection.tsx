import React from "react";
import {
  TrendingUp,
  Users2,
  Building,
  Cpu,
  ArrowRight,
  Compass,
  Sparkles,
} from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";

export const FutureGoalsSection: React.FC = () => {
  const goalPillars = [
    {
      id: "growth",
      num: "01",
      title: "Professional Growth",
      icon: <TrendingUp className="w-5 h-5 text-[#C5FF42]" />,
      description:
        "Continuously leveling up technical design mastery, conceptual depth, and creative direction capabilities across high-stakes projects.",
    },
    {
      id: "collaboration",
      num: "02",
      title: "Creative Collaboration",
      icon: <Users2 className="w-5 h-5 text-[#C5FF42]" />,
      description:
        "Teaming up with talented designers, writers, animators, and directors to execute holistic campaign visions that no individual could build alone.",
    },
    {
      id: "companies",
      num: "03",
      title: "Working with Innovative Companies",
      icon: <Building className="w-5 h-5 text-[#C5FF42]" />,
      description:
        "Contributing to progressive brands, technology ventures, and design-led agencies that prioritize distinct aesthetic identity and cultural relevance.",
    },
    {
      id: "technologies",
      num: "04",
      title: "Learning Emerging Technologies",
      icon: <Cpu className="w-5 h-5 text-[#C5FF42]" />,
      description:
        "Deepening craft in 2D animation, 3D motion design, and generative AI visual tools to build engaging spatial and temporal storytelling.",
    },
  ];

  return (
    <section
      id="goals"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* 1. Header */}
      <div className="pb-8 border-b border-[#30372D]">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5FF42]">
            08 — FUTURE GOALS
          </span>
          <span className="w-8 h-[1px] bg-[#30372D]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#92978B]">
            BUILDING WHAT'S NEXT
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EAE9DC] font-display">
          BUILDING WHAT'S NEXT<span className="text-[#C5FF42]">.</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#92978B] max-w-2xl leading-relaxed">
          My ambitions, trajectory, and dedication to collaborating with forward-thinking creative companies on meaningful work.
        </p>
      </div>

      {/* 2. Distinctive Vision Manifesto Card */}
      <div className="pt-12">
        <CardSpotlight
          cursorType="pointer"
          className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-[#191D19] via-[#101210] to-[#191D19] border border-[#30372D] hover:border-[#C5FF42]/50 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5FF42]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl space-y-6 relative z-10">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-xl bg-[#C5FF42]/10 border border-[#C5FF42]/30 text-[#C5FF42]">
                <Compass className="w-4 h-4" />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#C5FF42] font-semibold">
                Guiding Statement & Vision
              </span>
            </div>

            {/* Official User Content Quote */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-[#EAE9DC] leading-relaxed">
              "My goal is to grow as a creative professional, work with innovative companies, and contribute to meaningful projects. I want to expand my expertise in graphic design, visual storytelling, animation and emerging AI technologies while continuously learning, experimenting and creating impactful work."
            </blockquote>

            <div className="pt-6 border-t border-[#30372D] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-mono text-[#92978B]">
                Aryansh Kumar · <span className="text-[#C5FF42]">Open for Full-Time Roles & High-Impact Freelance</span>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#C5FF42] hover:underline"
              >
                <span>Let's Build Something Together</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </CardSpotlight>
      </div>

      {/* 3. Four Goal Pillars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
        {goalPillars.map((pillar) => (
          <CardSpotlight
            key={pillar.id}
            cursorType="pointer"
            className="p-7 rounded-3xl bg-[#191D19] border border-[#30372D] hover:border-[#C5FF42]/50 shadow-xl flex flex-col justify-between space-y-6 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#30372D]">
                <span className="font-mono text-xs font-bold text-[#C5FF42]">
                  PILLAR {pillar.num}
                </span>
                <div className="p-2 rounded-xl bg-[#101210] border border-[#30372D]">
                  {pillar.icon}
                </div>
              </div>

              <h3 className="font-display font-bold text-lg text-[#EAE9DC]">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#92978B] font-sans leading-relaxed">
                {pillar.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#30372D] text-[11px] font-mono text-[#C5FF42] flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>Forward Horizon</span>
            </div>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
};
