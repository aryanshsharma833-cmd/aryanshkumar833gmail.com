import React from "react";
import { CAPABILITIES } from "../data/portfolioData";
import { CardSpotlight } from "./CardSpotlight";

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Kicker */}
      <div className="pb-8 border-b border-[#262B35]">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#FF5A1F]">
            03 — SKILLS & EXPERTISE
          </span>
          <span className="w-6 h-[1px] bg-[#262B35]" />
          <span className="text-xs font-mono text-[#949BA8]">
            Creative Capabilities & Disciplines
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F4F3ED] font-display">
          WHAT I CAN CREATE
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#949BA8] max-w-2xl leading-relaxed">
          From thumb-stopping social campaigns to brand systems and emerging animation experiments.
        </p>
      </div>

      {/* 6 Capabilities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-12">
        {CAPABILITIES.map((cap) => (
          <CardSpotlight
            key={cap.num}
            cursorType="pointer"
            className="p-8 rounded-2xl bg-[#141619] border border-[#262B35] hover:border-[#FF5A1F]/50 shadow-lg hover:shadow-2xl hover:shadow-[#FF5A1F]/5"
          >
            <div className="flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-[#262B35]">
                  <span className="text-2xl font-bold font-mono text-[#FF5A1F]">
                    {cap.num}
                  </span>
                  <span className="text-xs font-mono text-[#949BA8] uppercase tracking-wider">
                    Capability
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F4F3ED] font-display hover:text-[#FF5A1F] transition-colors">
                  {cap.title}
                </h3>

                <p className="text-sm text-[#F4F3ED]/80 leading-relaxed font-sans">
                  {cap.description}
                </p>
              </div>

              {/* Includes list */}
              {cap.includes && cap.includes.length > 0 && (
                <div className="pt-4 border-t border-[#262B35] space-y-2">
                  <div className="text-[11px] font-mono text-[#949BA8] uppercase tracking-wider">
                    Includes
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cap.includes.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-[#0C0D0E] border border-[#262B35] text-xs font-mono text-[#F4F3ED]/85"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
};
