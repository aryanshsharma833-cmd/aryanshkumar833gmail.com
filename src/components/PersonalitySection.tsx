import React, { useState } from "react";
import { MascotEyes } from "./MascotEyes";
import { Sparkles, Eye, Wand2 } from "lucide-react";

export const PersonalitySection: React.FC = () => {
  const [activeWord, setActiveWord] = useState<string | null>(null);

  const words = [
    "DESIGN",
    "STORY",
    "CHARACTERS",
    "MOTION",
    "EXPERIMENT",
    "AI",
    "VISUALS",
    "ANIMATION",
  ];

  const repeated = [...words, ...words, ...words];

  return (
    <section className="py-20 sm:py-28 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="pb-8 border-b border-[#30372D]">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5FF42]">
              Creative DNA & Visual Spirit
            </span>
            <span className="w-8 h-[1px] bg-[#30372D]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#92978B]">
              Design Philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EAE9DC] font-display">
            BEYOND THE PIXELS<span className="text-[#C5FF42]">.</span>
          </h2>
          <p className="mt-3 text-lg sm:text-2xl text-[#EAE9DC]/90 font-medium font-serif italic text-balance">
            "I like turning ordinary ideas into visuals that feel unexpected."
          </p>
        </div>
      </div>

      {/* Ribbon 1: Moving Left */}
      <div className="py-4 border-y border-[#30372D] bg-[#101210] overflow-hidden">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {repeated.map((word, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveWord(word)}
              onMouseLeave={() => setActiveWord(null)}
              className="flex items-center gap-8 group cursor-pointer"
            >
              <span
                className={`text-3xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight transition-colors duration-200 ${
                  activeWord === word
                    ? "text-[#C5FF42] scale-105"
                    : "text-[#30372D] hover:text-[#EAE9DC]"
                }`}
              >
                {word}
              </span>

              {/* Decorative separator */}
              <span className="text-[#30372D] text-2xl select-none">✕</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
