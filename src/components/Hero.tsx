import React, { useState } from "react";
import { ArrowDownRight, ArrowRight, Sparkles, Play, Pause } from "lucide-react";
import { MascotEyes } from "./MascotEyes";

export const Hero: React.FC = () => {
  const [isPlayingPreview, setIsPlayingPreview] = useState(false);

  return (
    <section id="top" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#FF4D15]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#FF4D15]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Bold Typographic Statement & Proof */}
        <div className="col-span-12 lg:col-span-7 space-y-8 z-10">
          {/* Natural Editorial Index */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D15]">
              01. Visual Direction & Generative Motion
            </span>
            <span className="w-8 h-[1px] bg-[#26201A]" />
            <span className="text-xs font-mono text-[#8A847C]">Aryansh Kumar</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#EAE6DC] font-display leading-[1.04]">
            Visual systems & generative motion for brands that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D15] via-[#FF7A45] to-[#EAE6DC] italic">
              refuse to blend in.
            </span>
          </h1>

          {/* Body description */}
          <p className="text-base sm:text-lg text-[#EAE6DC]/75 max-w-2xl leading-relaxed font-sans">
            I craft high-tension brand identities, cinematic AI commercials, and modular visual design systems. Bridging brutalist editorial restraint with modern generative motion workflows.
          </p>

          {/* Adjacent Quantitative Proof (Clean unboxed text, no pills) */}
          <div className="pt-2 border-t border-[#26201A] max-w-xl">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-[#8A847C]">
              <div>
                <span className="text-sm font-semibold text-[#EAE6DC] tabular-nums">50+</span>
                <span className="ml-1.5">Projects Delivered</span>
              </div>
              <span className="text-[#26201A]">/</span>
              <div>
                <span className="text-sm font-semibold text-[#EAE6DC] tabular-nums">18M+</span>
                <span className="ml-1.5">Organic Impressions</span>
              </div>
              <span className="text-[#26201A]">/</span>
              <div>
                <span className="text-sm font-semibold text-[#EAE6DC] tabular-nums">4.9★</span>
                <span className="ml-1.5">Studio Rating</span>
              </div>
            </div>
          </div>

          {/* Interactive Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#works"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF4D15] hover:bg-[#FF6433] text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-[#FF4D15]/20 group cursor-pointer"
            >
              <span>Explore Selected Works</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#161310] hover:bg-[#1E1A17] text-[#EAE6DC] border border-[#26201A] hover:border-[#FF4D15]/60 text-sm font-mono transition-all duration-200 cursor-pointer"
            >
              <span>Commission a Project</span>
              <ArrowRight className="w-4 h-4 text-[#8A847C]" />
            </a>
          </div>
        </div>

        {/* Right Column: Hero Visual Showcase & Companion Rig */}
        <div className="col-span-12 lg:col-span-5 relative">
          <div className="relative rounded-2xl overflow-hidden border border-[#26201A] bg-[#12100E] shadow-2xl group">
            {/* Aspect container */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#161310]">
              <img
                src="/src/assets/images/hero_brand_visual_1790940958401.jpg"
                alt="Aryansh Kumar Creative Direction and Brand Showcase"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                  isPlayingPreview ? "brightness-110 saturate-125" : ""
                }`}
              />

              {/* Scrim overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080706] via-[#080706]/30 to-transparent" />

              {/* Interactive Reel Preview Trigger */}
              <button
                onClick={() => setIsPlayingPreview(!isPlayingPreview)}
                className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080706]/80 backdrop-blur-md border border-[#26201A] text-xs font-mono text-[#EAE6DC] hover:border-[#FF4D15] transition-colors cursor-pointer"
                title="Toggle Reel Loop Preview"
              >
                {isPlayingPreview ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#FF4D15]" />
                    <span>Looping</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#FF4D15]" />
                    <span>Preview Reel</span>
                  </>
                )}
              </button>

              {/* Bottom tag inside visual */}
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-widest text-[#FF4D15]">
                    Featured Direction
                  </div>
                  <div className="text-sm font-semibold text-[#EAE6DC]">
                    Synapse Noir / Atelier Vesper
                  </div>
                </div>
                <div className="text-[11px] font-mono text-[#8A847C] tabular-nums">
                  4K AI Spec
                </div>
              </div>
            </div>

            {/* Interactive Mascot Companion Widget at bottom of visual card */}
            <div className="p-4 sm:p-5 bg-[#14110F] border-t border-[#26201A] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MascotEyes size={26} />
                <div>
                  <div className="text-xs font-semibold text-[#EAE6DC]">
                    Studio Sentinel Online
                  </div>
                  <div className="text-[11px] text-[#8A847C]">
                    Tracking precision & frame rate
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Q3/Q4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
