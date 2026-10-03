/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { DioramaHero } from "./components/DioramaHero";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectGallery } from "./components/ProjectGallery";
import { ExperienceSections } from "./components/ExperienceSections";
import { CreativeProcess } from "./components/CreativeProcess";
import { CurrentlyExploring } from "./components/CurrentlyExploring";
import { FutureGoalsSection } from "./components/FutureGoalsSection";
import { PersonalitySection } from "./components/PersonalitySection";
import { ContactFooter } from "./components/ContactFooter";
import { ProjectModal } from "./components/ProjectModal";
import { ResumeModal } from "./components/ResumeModal";
import { SecureDriveViewerModal } from "./components/SecureDriveViewerModal";
import { CustomCursor } from "./components/CustomCursor";
import { BackgroundMusicPlayer } from "./components/BackgroundMusicPlayer";
import { Project } from "./data/portfolioData";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isDriveModalOpen, setIsDriveModalOpen] = useState(false);

  const handleInquireFromModal = (projectType: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const select = document.getElementById("form-project-type") as HTMLSelectElement | null;
        if (select) {
          const matchOption = Array.from(select.options).find((opt) =>
            opt.text.toLowerCase().includes(projectType.toLowerCase()) ||
            opt.value.toLowerCase().includes(projectType.toLowerCase())
          );
          if (matchOption) {
            select.value = matchOption.value;
            select.dispatchEvent(new Event("change", { bubbles: true }));
          }
        }
      }, 500);
    }
  };

  return (
    <div
      id="top"
      className="min-h-screen bg-[#101210] text-[#EAE9DC] selection:bg-[#C5FF42] selection:text-[#101210] relative"
    >
      {/* Background Noise Texture */}
      <div className="noise-overlay pointer-events-none fixed inset-0 opacity-[0.18] z-30" />

      {/* Interactive Custom Cursor Follower */}
      <CustomCursor />

      {/* Sticky Global Navigation with Scroll Spy */}
      <Navigation
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenDriveModal={() => setIsDriveModalOpen(true)}
      />

      {/* Compact Floating Background Music Player ("In The Dark" at 50% Vol) */}
      <BackgroundMusicPlayer />

      {/* Main Content Sections - Strictly Independent Document Flow */}
      <main className="relative z-10 w-full">
        {/* 01 — HERO / NAME */}
        <DioramaHero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenDriveModal={() => setIsDriveModalOpen(true)}
        />

        {/* 02 — ABOUT ME */}
        <AboutSection onOpenResume={() => setIsResumeOpen(true)} />

        {/* 03 — SKILLS & EXPERTISE */}
        <SkillsSection />

        {/* 04 — SELECTED WORK */}
        <ProjectGallery onSelectProject={(p) => setSelectedProject(p)} />

        {/* 05 — EXPERIENCE */}
        <ExperienceSections />

        {/* 06 — MY CREATIVE PROCESS */}
        <CreativeProcess />

        {/* 07 — CURRENTLY EXPLORING */}
        <CurrentlyExploring />

        {/* 08 — FUTURE GOALS */}
        <FutureGoalsSection />

        {/* Personality & Creative DNA */}
        <PersonalitySection />

        {/* 09 — CONTACT */}
        <ContactFooter onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={handleInquireFromModal}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <SecureDriveViewerModal
        isOpen={isDriveModalOpen}
        onClose={() => setIsDriveModalOpen(false)}
      />
    </div>
  );
}
