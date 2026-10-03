import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Search, Users, Lightbulb, PenTool, Sparkles, Send } from "lucide-react";
import { sounds } from "../utils/audioFeedback";
import { CardSpotlight } from "./CardSpotlight";

export const CreativeProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: "01",
      title: "Research",
      icon: <Search className="w-5 h-5 text-[#C5FF42]" />,
      summary: "Gathering visual references, industry benchmarks, and typography directions.",
      details: "Studying the competitive landscape, examining relevant visual precedents, dissecting successful formats, and collecting tonal moodboards.",
    },
    {
      step: "02",
      title: "Understand the audience",
      icon: <Users className="w-5 h-5 text-[#C5FF42]" />,
      summary: "Identifying who this graphic is for and what will make them stop scrolling.",
      details: "Pinpointing emotional triggers, attention habits, and context—whether a B2B LinkedIn executive or an Instagram culture enthusiast.",
    },
    {
      step: "03",
      title: "Develop the concept",
      icon: <Lightbulb className="w-5 h-5 text-[#C5FF42]" />,
      summary: "Formulating core messaging, typographic hierarchy, and visual metaphor.",
      details: "Roughing out compositional thumbnails, defining the central narrative hook, and locking down the color palette and layout grid.",
    },
    {
      step: "04",
      title: "Create the visual",
      icon: <PenTool className="w-5 h-5 text-[#C5FF42]" />,
      summary: "High-craft execution across Photoshop, Illustrator, Canva or AI tools.",
      details: "Compositing, vector pathcraft, balancing negative space, and dialling in precise typography, lighting, and textural contrast.",
    },
    {
      step: "05",
      title: "Refine and improve",
      icon: <Sparkles className="w-5 h-5 text-[#C5FF42]" />,
      summary: "Testing readability at micro-scales and fine-tuning visual weight.",
      details: "Evaluating mobile feed legibility, checking optical alignments, stress-testing contrast ratios, and perfecting the final polish.",
    },
    {
      step: "06",
      title: "Final delivery",
      icon: <Send className="w-5 h-5 text-[#C5FF42]" />,
      summary: "Exporting production assets across required social and print formats.",
      details: "Delivering crisp, resolution-optimized files, carousel slide packs, and editable templates ready for seamless multi-channel publishing.",
    },
  ];

  return (
    <section
      id="process"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* 1. Header */}
      <div className="pb-8 border-b border-[#30372D]">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#C5FF42]">
            06 — MY CREATIVE PROCESS
          </span>
          <span className="w-8 h-[1px] bg-[#30372D]" />
          <span className="text-xs font-mono uppercase tracking-wider text-[#92978B]">
            FROM IDEA TO IMPACT
          </span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#EAE9DC] font-display">
          FROM IDEA TO IMPACT<span className="text-[#C5FF42]">.</span>
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[#92978B] max-w-2xl leading-relaxed">
          Demonstrating how I structure creative problems and turn abstract ideas into engaging, high-conversion visual realities.
        </p>

        {/* Step Selector Tabs */}
        <div className="mt-8 p-1.5 rounded-2xl bg-[#191D19] border border-[#30372D] flex items-center justify-between gap-1.5 overflow-x-auto">
          {steps.map((st, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={st.step}
                onClick={() => {
                  sounds.playTick();
                  setActiveStep(idx);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? "bg-[#C5FF42] text-[#101210] font-bold shadow-md shadow-[#C5FF42]/20"
                    : "text-[#92978B] hover:text-[#EAE9DC] hover:bg-[#101210]"
                }`}
              >
                <span>{st.step}</span>
                <span className="hidden md:inline">{st.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Desktop: Horizontal Animated Timeline */}
      <div className="hidden lg:block pt-14">
        {/* Horizontal Connector Line */}
        <div className="relative mb-8">
          <div className="h-[2px] w-full bg-[#30372D]" />
          <div
            className="absolute top-0 left-0 h-[2px] bg-[#C5FF42] transition-all duration-500"
            style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          />

          <div className="absolute -top-3 left-0 right-0 flex justify-between">
            {steps.map((st, idx) => {
              const isPastOrCurrent = idx <= activeStep;
              return (
                <div
                  key={st.step}
                  onClick={() => {
                    sounds.playTick();
                    setActiveStep(idx);
                  }}
                  className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center ${
                    isPastOrCurrent
                      ? "bg-[#101210] border-[#C5FF42] text-[#C5FF42]"
                      : "bg-[#191D19] border-[#30372D] text-[#92978B]"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      idx === activeStep ? "bg-[#C5FF42] animate-ping" : isPastOrCurrent ? "bg-[#C5FF42]" : "bg-transparent"
                    }`}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-3 gap-6 pt-4">
          {steps.map((st, idx) => {
            const isSelected = activeStep === idx;
            return (
              <CardSpotlight
                key={st.step}
                onClick={() => {
                  sounds.playTick();
                  setActiveStep(idx);
                }}
                cursorType="pointer"
                className={`p-7 rounded-3xl transition-all duration-300 border flex flex-col justify-between space-y-5 cursor-pointer ${
                  isSelected
                    ? "bg-[#191D19] border-[#C5FF42] shadow-xl shadow-[#C5FF42]/10 scale-[1.02]"
                    : "bg-[#191D19]/60 border-[#30372D] hover:border-[#C5FF42]/40"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-[#C5FF42]">
                      {st.step}
                    </span>
                    <div className="p-2 rounded-xl bg-[#101210] border border-[#30372D]">
                      {st.icon}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-xl text-[#EAE9DC]">
                    {st.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#EAE9DC]/80 font-sans leading-relaxed">
                    {st.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#30372D] text-[11px] font-mono text-[#92978B] flex items-center justify-between">
                  <span>Step {idx + 1} of 6</span>
                  {isSelected && <span className="text-[#C5FF42] font-semibold">Active Focus</span>}
                </div>
              </CardSpotlight>
            );
          })}
        </div>
      </div>

      {/* 3. Mobile / Tablet: Clean Vertical Timeline */}
      <div className="lg:hidden pt-12 space-y-6">
        {steps.map((st, idx) => {
          const isSelected = activeStep === idx;
          return (
            <div
              key={st.step}
              onClick={() => {
                sounds.playTick();
                setActiveStep(idx);
              }}
              className={`p-6 rounded-2xl border transition-all ${
                isSelected
                  ? "bg-[#191D19] border-[#C5FF42] shadow-lg"
                  : "bg-[#191D19]/60 border-[#30372D]"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 p-2.5 rounded-xl bg-[#101210] border border-[#30372D]">
                  {st.icon}
                </div>
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#C5FF42] font-bold">
                      STEP {st.step}
                    </span>
                    <span className="text-[11px] font-mono text-[#92978B]">
                      Phase {idx + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#EAE9DC]">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#EAE9DC]/80 font-sans leading-relaxed pt-1">
                    {st.details}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
