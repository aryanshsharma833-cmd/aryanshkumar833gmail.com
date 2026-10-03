import React from "react";
import { MascotEyes } from "./MascotEyes";
import {
  MapPin,
  Briefcase,
  Sparkles,
  GraduationCap,
  Film,
  Linkedin,
  FileText,
  Heart,
  Target,
} from "lucide-react";
import { CardSpotlight } from "./CardSpotlight";
import avatarAryansh from "../assets/images/avatar_aryansh_1790941010324.jpg";

interface AboutSectionProps {
  onOpenResume?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* 1. Section Header */}
      <div className="pb-8 border-b border-[#30372D]">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5FF42]">
            02 — ABOUT ME
          </span>
          <span className="w-8 h-[1px] bg-[#30372D]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#92978B]">
            BEHIND THE CREATIVE
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EAE9DC] font-display">
          More Than Just Design<span className="text-[#C5FF42]">.</span>
        </h2>
      </div>

      {/* 2. Main Split Layout */}
      <div className="grid grid-cols-12 gap-8 lg:gap-16 pt-12 items-start">
        
        {/* Left Column: Narrative Copy, Background, Interests, Focus */}
        <div className="col-span-12 lg:col-span-7 space-y-8">
          
          {/* Primary Statement */}
          <div className="space-y-4">
            <p className="text-xl sm:text-2xl font-medium text-[#EAE9DC] leading-relaxed font-sans">
              I'm <strong className="text-white font-semibold">Aryansh Kumar</strong>, a graphic designer focused on creating visual content that communicates ideas clearly and looks memorable. My work spans social media creatives, LinkedIn graphics, branding systems, character design and AI-assisted visual production.
            </p>

            <p className="text-base sm:text-lg text-[#EAE9DC]/80 leading-relaxed font-sans">
              I enjoy experimenting with new creative techniques and exploring how design, storytelling and motion can work together.
            </p>
          </div>

          {/* Core Story & Approach */}
          <div className="p-6 rounded-2xl bg-[#191D19] border border-[#30372D] space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5FF42]">
              <Target className="w-4 h-4" />
              <span>My Background & Creative Philosophy</span>
            </div>
            <p className="text-sm sm:text-base text-[#EAE9DC]/85 leading-relaxed font-sans">
              Starting from independent freelance design to agency roles at Modern Teams and Sales Brigade, I've developed a rapid, detail-obsessed workflow. I believe design is not just ornamentation—it's structured communication that builds trust, captures attention in overcrowded feeds, and translates complex business ideas into memorable visuals.
            </p>
          </div>

          {/* Dual Pillars: Creative Interests & Current Focus */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Creative Interests */}
            <div className="p-5 rounded-xl bg-[#191D19] border border-[#30372D] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C5FF42]">
                <Heart className="w-3.5 h-3.5" />
                <span>Creative Interests</span>
              </div>
              <p className="text-xs sm:text-sm text-[#92978B] leading-relaxed font-sans">
                Character design, high-engagement LinkedIn carousels, editorial poster composition, cinematic lighting, and AI generative art exploration.
              </p>
            </div>

            {/* Current Professional Focus */}
            <div className="p-5 rounded-xl bg-[#191D19] border border-[#30372D] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#C5FF42]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Current Focus</span>
              </div>
              <p className="text-xs sm:text-sm text-[#92978B] leading-relaxed font-sans">
                High-impact brand visual systems, conversion-driven campaign graphics, and learning 2D/3D animation at Arena Animation.
              </p>
            </div>
          </div>

          {/* Action Row & Sentinel */}
          <div className="pt-6 border-t border-[#30372D] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <MascotEyes size={26} glowColor="#C5FF42" />
              <div className="text-xs font-mono text-[#92978B]">
                Precision in every pixel · Always experimenting
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/aryansh-kumar-855364428/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-[#EAE9DC] hover:text-[#C5FF42] inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#C5FF42]" />
                <span>LinkedIn Profile</span>
                <span className="text-[10px] text-[#92978B]">↗</span>
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#101210] bg-[#C5FF42] hover:bg-[#d6ff6c] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer shadow-sm shadow-[#C5FF42]/20"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Full CV</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Creative Portrait & Structured Information Card */}
        <div className="col-span-12 lg:col-span-5 space-y-6">
          
          {/* Creative Portrait Visual Card */}
          <CardSpotlight
            cursorType="pointer"
            className="p-6 sm:p-8 rounded-2xl bg-[#191D19] border border-[#30372D] hover:border-[#C5FF42]/50 shadow-xl"
          >
            <div className="space-y-6">
              
              {/* Photo & Header Profile Row */}
              <div className="flex items-center gap-5 pb-6 border-b border-[#30372D]">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#C5FF42]/40 p-0.5 bg-gradient-to-br from-[#C5FF42] to-[#101210] shadow-xl shrink-0">
                  <img
                    src={avatarAryansh}
                    alt="Aryansh Kumar"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#EAE9DC]">
                    Aryansh Kumar
                  </h3>
                  <p className="text-xs font-mono text-[#C5FF42] mt-0.5">
                    Graphic Designer & Content Creative
                  </p>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-[#92978B] mt-2">
                    <MapPin className="w-3.5 h-3.5 text-[#C5FF42]" />
                    <span>Jarauli Phase-1, Kanpur, India</span>
                  </div>
                </div>
              </div>

              {/* Education & Academic Credentials */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5FF42]">
                  <GraduationCap className="w-4 h-4" />
                  <span>Education</span>
                </div>

                <div className="space-y-3">
                  {/* BBA */}
                  <div className="p-3 rounded-xl bg-[#101210] border border-[#30372D] flex items-center justify-between text-xs font-mono">
                    <div>
                      <div className="font-semibold text-[#EAE9DC]">
                        BBA — Axis Institute of Higher Education
                      </div>
                      <div className="text-[11px] text-[#92978B]">Bachelor of Business Administration</div>
                    </div>
                    <span className="text-[#C5FF42] bg-[#C5FF42]/10 px-2 py-0.5 rounded border border-[#C5FF42]/20">
                      2024–2027
                    </span>
                  </div>

                  {/* Secondary ISC */}
                  <div className="p-3 rounded-xl bg-[#101210] border border-[#30372D] flex items-center justify-between text-xs font-mono">
                    <div>
                      <div className="font-semibold text-[#EAE9DC]">Secondary [ISC] — S.R Education Centre</div>
                      <div className="text-[11px] text-[#92978B]">Score: 67%</div>
                    </div>
                    <span className="text-[#92978B] bg-[#191D19] px-2 py-0.5 rounded border border-[#30372D]">
                      2024
                    </span>
                  </div>

                  {/* Senior Secondary ICSE */}
                  <div className="p-3 rounded-xl bg-[#101210] border border-[#30372D] flex items-center justify-between text-xs font-mono">
                    <div>
                      <div className="font-semibold text-[#EAE9DC]">Senior Secondary [ICSE] — S.R Education Centre</div>
                      <div className="text-[11px] text-[#92978B]">Score: 69%</div>
                    </div>
                    <span className="text-[#92978B] bg-[#191D19] px-2 py-0.5 rounded border border-[#30372D]">
                      2022
                    </span>
                  </div>

                  {/* Arena Animation */}
                  <div className="p-3 rounded-xl bg-[#101210] border border-[#30372D] flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Film className="w-3.5 h-3.5 text-[#C5FF42]" />
                      <div>
                        <div className="font-semibold text-[#EAE9DC]">Arena Animation</div>
                        <div className="text-[11px] text-[#92978B]">2D & 3D Animation Studies</div>
                      </div>
                    </div>
                    <span className="text-[#C5FF42] bg-[#C5FF42]/10 px-2 py-0.5 rounded border border-[#C5FF42]/20">
                      Started 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </section>
  );
};
