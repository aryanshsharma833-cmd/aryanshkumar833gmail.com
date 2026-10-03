import React, { useEffect } from "react";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectType: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#101210]/90 backdrop-blur-md overflow-y-auto">
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl md:rounded-[2.5rem] bg-[#191D19] border border-[#30372D] shadow-2xl text-[#EAE9DC] p-6 sm:p-10 z-10 space-y-8">
        
        {/* Sticky Header with Close Button */}
        <div className="flex items-center justify-between pb-6 border-b border-[#30372D]">
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#92978B]">
            <span className="text-[#C5FF42] font-semibold">{project.categoryLabel}</span>
            <span>·</span>
            <span>{project.client}</span>
            <span>·</span>
            <span className="tabular-nums">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#101210] hover:bg-[#C5FF42] text-[#92978B] hover:text-[#101210] transition-colors cursor-pointer border border-[#30372D]"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hero Visual inside Modal */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#101210] border border-[#30372D]">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          {project.metrics && (
            <div className="absolute bottom-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#101210]/90 backdrop-blur-md border border-[#30372D] text-xs font-mono text-[#EAE9DC]">
              {project.metrics}
            </div>
          )}
        </div>

        {/* Title & Overview */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-[#EAE9DC]">
            {project.title}
          </h2>
          <p className="text-lg text-[#C5FF42] font-medium font-sans">
            {project.subtitle}
          </p>
          <p className="text-sm sm:text-base text-[#EAE9DC]/80 leading-relaxed font-sans">
            {project.narrative}
          </p>
        </div>

        {/* Deliverables & Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#30372D]">
          {/* Deliverables */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#92978B]">
              Deliverables Shipped
            </div>
            <ul className="space-y-2">
              {project.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#EAE9DC]">
                  <CheckCircle2 className="w-4 h-4 text-[#C5FF42] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Role */}
          <div className="space-y-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#92978B] mb-2">
                Aryansh's Role
              </div>
              <div className="text-sm font-semibold text-[#EAE9DC]">{project.role}</div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[#92978B] mb-2">
                Production Tools
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#101210] border border-[#30372D] text-xs font-mono text-[#EAE9DC]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-8 border-t border-[#30372D] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-[#92978B]">
            Ready to execute a project of similar caliber?
          </div>
          <button
            onClick={() => {
              onClose();
              onInquire(project.categoryLabel);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#C5FF42] hover:bg-[#d6ff6c] text-[#101210] text-xs font-mono font-semibold transition-colors cursor-pointer shadow-md shadow-[#C5FF42]/20"
          >
            <span>Commission Similar Direction</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
