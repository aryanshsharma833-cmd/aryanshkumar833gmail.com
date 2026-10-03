import React, { useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Sliders, Sparkles, Film, Check, ArrowRight } from "lucide-react";

export const CommercialSpotlight: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentProgress, setCurrentProgress] = useState(38);
  const [selectedScene, setSelectedScene] = useState(0);
  const [showPipeline, setShowPipeline] = useState(false);

  const scenes = [
    {
      title: "Sequence 01: Biomechanical Awakening",
      timestamp: "00:00 - 00:14",
      prompt: "Ultra-close macro lens on futuristic carbon fiber textile morphing under warm amber stadium backlight, cinematic shallow depth of field, 35mm anamorphic grain.",
      pipeline: "Midjourney v6.1 Keyframes → Runway Gen-3 Motion Brush",
      fps: "60 FPS Master",
    },
    {
      title: "Sequence 02: Liquid Chrome Resonance",
      timestamp: "00:15 - 00:29",
      prompt: "Molten obsidian and liquid copper colliding in zero-gravity chamber, refraction caustic patterns, high-fashion art direction, hyper-detailed surface tension.",
      pipeline: "Cinema 4D Geometry Cache → Kling v1.5 Generative Relighting",
      fps: "4K DCI 60 FPS",
    },
    {
      title: "Sequence 03: The Silhouette Climax",
      timestamp: "00:30 - 00:45",
      prompt: "Sculptural silhouette model striding through architectural light fog, sharp silhouette lines, minimal typography overlay in sync with kick bass drum.",
      pipeline: "DaVinci Resolve Neural Retiming → Custom Analog Modular Foley",
      fps: "Spatial Atmos Master",
    }
  ];

  // Auto-progress when playing
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentProgress((prev) => {
        const next = prev + 1;
        if (next > 100) return 0;
        return next;
      });
    }, 280);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section id="commercials" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="pb-8 border-b border-[#26201A]">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D15]">
            03. Generative AI Video Direction
          </span>
          <span className="w-6 h-[1px] bg-[#26201A]" />
          <span className="text-xs font-mono text-[#8A847C]">
            Spec Commercial Showcase
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#EAE6DC] font-display">
          Commercials built without camera crews.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#EAE6DC]/70 max-w-2xl">
          High-conversion motion reels and brand films directing the world's most advanced neural diffusion tools with uncompromising cinematic polish.
        </p>
      </div>

      {/* Main Video Deck Interface */}
      <div className="mt-10 rounded-2xl overflow-hidden bg-[#12100E] border border-[#26201A] shadow-2xl">
        <div className="grid grid-cols-12">
          {/* Main Visual Screen */}
          <div className="col-span-12 lg:col-span-8 relative bg-[#090807] flex flex-col justify-between overflow-hidden">
            {/* Aspect Display Container */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src="/src/assets/images/hero_brand_visual_1790940958401.jpg"
                alt="Synapse Noir commercial reel still"
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  isPlaying ? "scale-105 saturate-110" : "scale-100"
                }`}
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-[#090807]/40 pointer-events-none" />

              {/* Status Header Overlay */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#080706]/80 backdrop-blur-md border border-[#26201A] text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-[#FF4D15] animate-ping" />
                  <span className="text-[#EAE6DC]">ATELIER VESPER SPEC COMMERCIAL</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2 rounded-full bg-[#080706]/80 backdrop-blur-md border border-[#26201A] text-[#EAE6DC] hover:text-[#FF4D15] transition-colors cursor-pointer"
                    title={isMuted ? "Unmute Sound Design" : "Mute Sound Design"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-[#8A847C]" /> : <Volume2 className="w-4 h-4 text-[#FF4D15]" />}
                  </button>
                </div>
              </div>

              {/* Center Play/Pause Overlay Indicator */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#FF4D15]/90 hover:bg-[#FF4D15] text-white flex items-center justify-center transition-transform hover:scale-110 shadow-xl shadow-[#FF4D15]/30 cursor-pointer z-20"
                aria-label={isPlaying ? "Pause commercial" : "Play commercial"}
              >
                {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
              </button>

              {/* Audio Visualizer Waves (Simulated reactive equalizer) */}
              {!isMuted && isPlaying && (
                <div className="absolute bottom-6 left-6 z-20 flex items-end gap-1 h-6">
                  {[40, 75, 100, 60, 90, 45, 80, 55, 95, 30].map((h, i) => (
                    <span
                      key={i}
                      className="w-1 bg-[#FF4D15] rounded-full animate-pulse"
                      style={{
                        height: `${h}%`,
                        animationDuration: `${0.4 + (i % 4) * 0.2}s`,
                      }}
                    />
                  ))}
                  <span className="ml-2 text-[10px] font-mono text-[#8A847C]">Spatial Mix Active</span>
                </div>
              )}
            </div>

            {/* Scrub Bar & Player Controls */}
            <div className="p-4 sm:p-5 bg-[#0D0B0A] border-t border-[#26201A] flex flex-col gap-3">
              <div className="relative w-full h-1.5 bg-[#26201A] rounded-full overflow-hidden cursor-pointer">
                <div
                  className="h-full bg-[#FF4D15] rounded-full transition-all duration-150"
                  style={{ width: `${currentProgress}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-[#8A847C]">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-[#EAE6DC] hover:text-[#FF4D15] transition-colors cursor-pointer"
                  >
                    {isPlaying ? "Pause" : "Play"}
                  </button>
                  <span>·</span>
                  <span>00:{Math.floor((currentProgress * 0.45)).toString().padStart(2, '0')} / 00:45</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-[#FF4D15]">Master Color: Arri Alexa Log-C</span>
                  <button
                    onClick={() => setShowPipeline(!showPipeline)}
                    className="flex items-center gap-1.5 text-[#EAE6DC] hover:text-[#FF4D15] transition-colors cursor-pointer"
                  >
                    <Sliders className="w-3.5 h-3.5" />
                    <span>{showPipeline ? "Hide Pipeline" : "Inspect Pipeline"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scene Breakdown & Director Notes */}
          <div className="col-span-12 lg:col-span-4 p-6 sm:p-8 bg-[#14110F] border-t lg:border-t-0 lg:border-l border-[#26201A] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D15]">
                  Scene Sequence Navigator
                </span>
                <span className="text-xs font-mono text-[#8A847C]">3 Cuts</span>
              </div>

              {/* Scene Switcher Buttons */}
              <div className="space-y-3">
                {scenes.map((scene, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedScene(idx);
                      setCurrentProgress(idx * 33 + 10);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      selectedScene === idx
                        ? "bg-[#1E1A17] border-[#FF4D15] text-[#EAE6DC]"
                        : "bg-[#0E0C0A] border-[#26201A] text-[#8A847C] hover:border-[#FF4D15]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={selectedScene === idx ? "text-[#FF4D15]" : "text-[#8A847C]"}>
                        Cut 0{idx + 1}
                      </span>
                      <span>{scene.timestamp}</span>
                    </div>
                    <div className="text-sm font-semibold text-[#EAE6DC]">{scene.title}</div>
                  </button>
                ))}
              </div>

              {/* Active Scene Detailed Blueprint */}
              <div className="p-4 rounded-xl bg-[#090807] border border-[#26201A] space-y-2.5">
                <div className="text-xs font-mono text-[#8A847C] uppercase tracking-wider">
                  Art Direction & Diffusion Prompt
                </div>
                <p className="text-xs text-[#EAE6DC]/80 italic leading-relaxed">
                  "{scenes[selectedScene].prompt}"
                </p>
                <div className="pt-2 border-t border-[#26201A] flex items-center justify-between text-[11px] font-mono text-[#8A847C]">
                  <span>{scenes[selectedScene].pipeline}</span>
                  <span className="text-[#FF4D15]">{scenes[selectedScene].fps}</span>
                </div>
              </div>
            </div>

            {/* Bottom Inquire CTA */}
            <div className="pt-4 border-t border-[#26201A]">
              <a
                href="#contact"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1E1A17] hover:bg-[#FF4D15] text-xs font-mono text-[#EAE6DC] hover:text-white transition-all duration-200 border border-[#26201A] hover:border-[#FF4D15] cursor-pointer"
              >
                <span>Commission an AI Commercial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
