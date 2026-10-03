import React from "react";

interface MarqueeDividerProps {
  text?: string[];
  speed?: "slow" | "normal";
  reverse?: boolean;
}

export const MarqueeDivider: React.FC<MarqueeDividerProps> = ({
  text = [
    "BRAND IDENTITY",
    "AI COMMERCIAL REELS",
    "VISUAL SYSTEMS",
    "EDITORIAL & PRINT",
    "2D/3D GENERATIVE MOTION",
    "CHARACTER DESIGN",
    "TYPOGRAPHIC PRECISION"
  ],
}) => {
  const content = [...text, ...text, ...text];

  return (
    <div className="w-full py-4 sm:py-6 overflow-hidden border-y border-[#26201A] bg-[#0E0C0A] select-none">
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
        {content.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-xs font-mono tracking-[0.25em] text-[#8A847C]/80 hover:text-[#FF4D15] transition-colors">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D15]/60" />
          </div>
        ))}
      </div>
    </div>
  );
};
