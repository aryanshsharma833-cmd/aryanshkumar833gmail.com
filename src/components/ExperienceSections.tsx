import React from "react";
import { Briefcase, Calendar, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";

export const ExperienceSections: React.FC = () => {
  const experiences = [
    {
      company: "MODERN TEAMS",
      role: "Graphic Designer & Content Creative",
      duration: "2-Month Internship + 15-Day Job",
      period: "Jul 2026 – Sep 2026",
      type: "Agency / In-House",
      responsibilities: [
        "Social media creatives and high-engagement carousel visual communication.",
        "LinkedIn designs for executive hiring, employer branding, and corporate growth.",
        "Posters and digital campaign visuals with high typographic hierarchy.",
        "Content writing, creative captions, and narrative hooks for lead generation.",
        "AI-assisted visual production to accelerate early conceptual iterations.",
      ],
      metrics: [
        { label: "Carousels Designed", value: "50+" },
        { label: "Monthly Account Views", value: "25,000+" },
        { label: "AI Visual Concepts", value: "20+" },
        { label: "Posters Produced", value: "20+" },
      ],
    },
    {
      company: "SALES BRIGADE",
      role: "Graphic Design & Content Creative",
      duration: "Internship",
      period: "2026",
      type: "Commercial Practice",
      responsibilities: [
        "Promotional creatives targeting B2B sales pipelines and training cohorts.",
        "Business-focused visual content turning complex sales tactics into digestible graphics.",
        "Social media design templates for continuous weekly distribution.",
        "Campaign assets and high-conversion multi-slide carousels.",
      ],
      metrics: [
        { label: "Sales Campaigns", value: "Full System" },
        { label: "Turnaround Speed", value: "High Velocity" },
      ],
    },
    {
      company: "FREELANCE PRACTICE",
      role: "Independent Graphic Designer",
      duration: "1+ Year",
      period: "Apr 2025 – Present",
      type: "Independent Client Practice",
      responsibilities: [
        "High-impact posters and editorial prints for independent cultural clients.",
        "Advertising graphics and digital promo banners across multiple sectors.",
        "Social media creatives tailored for organic audience growth.",
        "Promotional graphics, custom vector marks, and visual brand identity.",
      ],
      metrics: [
        { label: "Client Satisfaction", value: "100%" },
        { label: "Creative Scope", value: "Worldwide Remote" },
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* 1. Header */}
      <div className="pb-8 border-b border-[#30372D]">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5FF42]">
            05 — EXPERIENCE
          </span>
          <span className="w-8 h-[1px] bg-[#30372D]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#92978B]">
            EXPERIENCE & JOURNEY
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EAE9DC] font-display">
          EXPERIENCE & JOURNEY<span className="text-[#C5FF42]">.</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#92978B] max-w-2xl leading-relaxed">
          High-velocity visual communication across internal agency teams, corporate lead generation, and independent brand commissions.
        </p>
      </div>

      {/* 2. Visually Distinctive Vertical Timeline */}
      <div className="relative pt-16">
        
        {/* Central Luminous Spine (Desktop centered, mobile left aligned) */}
        <div className="absolute top-16 bottom-8 left-4 md:left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[#C5FF42] via-[#C5FF42]/40 to-transparent pointer-events-none" />

        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 md:gap-16`}
              >
                {/* Node Milestone on the Spine */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#101210] border-2 border-[#C5FF42] flex items-center justify-center z-10 shadow-lg shadow-[#C5FF42]/20">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#C5FF42] animate-pulse" />
                </div>

                {/* Timeline Card */}
                <div className="ml-10 md:ml-0 md:w-1/2 w-full">
                  <CardSpotlight
                    cursorType="pointer"
                    className="p-6 sm:p-8 rounded-3xl bg-[#191D19] border border-[#30372D] hover:border-[#C5FF42]/60 shadow-xl space-y-6 transition-all duration-300"
                  >
                    {/* Header */}
                    <div className="space-y-2 pb-5 border-b border-[#30372D]">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-mono text-[#C5FF42] uppercase tracking-wider font-semibold">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#92978B] bg-[#101210] px-2.5 py-1 rounded-full border border-[#30372D]">
                          <Calendar className="w-3 h-3 text-[#C5FF42]" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#EAE9DC]">
                        {exp.company}
                      </h3>

                      <div className="text-sm sm:text-base font-medium text-[#C5FF42] font-mono">
                        {exp.role}
                      </div>

                      <div className="text-xs font-mono text-[#92978B]">
                        Duration: {exp.duration}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="space-y-3">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#92978B]">
                        Key Responsibilities
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#EAE9DC]/85 font-sans leading-relaxed">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF42] mt-1.5 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Verified Metrics Grid */}
                    {exp.metrics && exp.metrics.length > 0 && (
                      <div className="pt-4 border-t border-[#30372D] grid grid-cols-2 gap-3">
                        {exp.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="p-3 rounded-xl bg-[#101210] border border-[#30372D] space-y-0.5"
                          >
                            <div className="text-base sm:text-lg font-bold font-display text-[#C5FF42]">
                              {m.value}
                            </div>
                            <div className="text-[11px] font-mono text-[#92978B] leading-tight">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardSpotlight>
                </div>

                {/* Empty Half on Desktop for Alternating Layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
