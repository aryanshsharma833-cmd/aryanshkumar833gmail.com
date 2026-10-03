import React from "react";
import { Compass, Sparkles, Sliders, CheckCircle2 } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Anatomy & World-Building",
      timeline: "Days 1–5",
      description: "Deconstructing your core value proposition and competitive territory. We create exhaustive visual references, tactile mood directions, and bespoke typography treatments before writing a single line of prompt code.",
      deliverables: ["Visual Direction Moodboard", "Typography & Color Matrix", "3 Distinct Creative Routes"],
      icon: <Compass className="w-5 h-5 text-[#FF4D15]" />
    },
    {
      num: "02",
      title: "Generative Motion & Neural Synthesis",
      timeline: "Days 6–14",
      description: "Directing state-of-the-art diffusion models (Runway Gen-3, Midjourney v6.1, Kling) coupled with 3D camera projections. We enforce frame-by-frame temporal consistency, preventing generative artifacts and uncanny morphs.",
      deliverables: ["Style Frames & Motion Tests", "Optical Flow Stabilization", "Spatial Soundscape Mix"],
      icon: <Sparkles className="w-5 h-5 text-[#FF4D15]" />
    },
    {
      num: "03",
      title: "Master Finish & Production Systems",
      timeline: "Days 15–20",
      description: "Final studio mastering in DaVinci Resolve and Illustrator. Delivering complete multi-aspect export packages ready for broadcast, social ads, digital billboards, and modular team handover.",
      deliverables: ["4K Broadcast Masters", "Multi-Ratio Cutdowns (16:9, 9:16, 1:1)", "Comprehensive Brand Bible"],
      icon: <Sliders className="w-5 h-5 text-[#FF4D15]" />
    }
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Header */}
      <div className="pb-8 border-b border-[#26201A]">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF4D15]">
            04. Creative Direction Framework
          </span>
          <span className="w-6 h-[1px] bg-[#26201A]" />
          <span className="text-xs font-mono text-[#8A847C]">
            How Aryansh Operates
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#EAE6DC] font-display">
          Precision execution at venture speed.
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[#EAE6DC]/70 max-w-2xl">
          A disciplined three-phase pipeline engineered to deliver museum-grade visual craft without multi-month agency bloat.
        </p>
      </div>

      {/* 3-Column Editorial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        {steps.map((step) => (
          <div
            key={step.num}
            className="p-8 rounded-2xl bg-[#12100E] border border-[#26201A] hover:border-[#FF4D15]/40 transition-colors flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-[#26201A]">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold font-display text-[#FF4D15] tabular-nums">
                    {step.num}
                  </span>
                  <span className="w-4 h-[1px] bg-[#26201A]" />
                </div>
                <span className="text-xs font-mono text-[#8A847C]">{step.timeline}</span>
              </div>

              <div className="flex items-center gap-2.5">
                {step.icon}
                <h3 className="text-lg font-bold text-[#EAE6DC] font-display">
                  {step.title}
                </h3>
              </div>

              <p className="text-sm text-[#EAE6DC]/70 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>

            {/* Deliverables List */}
            <div className="pt-4 border-t border-[#26201A] space-y-2">
              <div className="text-[11px] font-mono text-[#8A847C] uppercase tracking-wider">
                Phase Deliverables
              </div>
              <ul className="space-y-1.5">
                {step.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-[#EAE6DC]/85">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D15]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
