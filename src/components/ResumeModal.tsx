import React, { useEffect, useState } from "react";
import {
  X,
  Printer,
  Mail,
  Linkedin,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  BookOpen,
  Copy,
  Check,
  FileText,
  Sparkles,
} from "lucide-react";
import avatarAryansh from "../assets/images/avatar_aryansh_1790941010324.jpg";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copiedText, setCopiedText] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPlainText = () => {
    const text = `ARYANSH KUMAR
Business Administration Student & Graphic Designer
Jarauli Phase-1, Kanpur • +91 6386293440 • aryanshsharma833@gmail.com
LinkedIn: https://www.linkedin.com/in/aryansh-kumar-855364428/

PROFILE
Creative and detail-oriented Graphic Designer with professional experience at Modern Teams and over 1 year of freelance experience. Skilled in creating social media creatives, LinkedIn designs, posters, advertisements, branding materials, and visual content. Proficient in Photoshop and Canva, with working knowledge of Illustrator and animation tools. Passionate about visual storytelling, creative design, and exploring AI-powered tools to develop engaging digital content.

EDUCATION
• 2024 – 2027: Bachelor of Business Administration, Axis Institute of Higher Education
• 2024: Secondary [ISC], S.R Education Centre — 67%
• 2022: Senior Secondary [ICSE], S.R Education Centre — 69%

WORK EXPERIENCE
• Jul 2026 – Sep 2026 | Graphic Designer & Content Creative, Modern Teams / Sales Brigade
  - Designed 50+ carousels, 20+ AI visuals, 20+ posters, 3 ads, and 5+ stories for social campaigns.
  - Managed one Instagram account, generating 25,000+ monthly views and 101 engagements.
  - Developed campaign concepts and captions to support social media publishing.

• Apr 2025 – Present | Freelance Graphic Designer (1+ Year)
  - Created social media, branding, posters & promotional designs for clients.
  - Developed visual concepts using Photoshop, Canva & Illustrator.

SKILLS
Graphic Design • Social Media Design • Branding & Visual Identity • Poster & Advertisement Design • LinkedIn Creative Design • Character Design • AI Content Creation • Adobe Photoshop (Proficient) • Adobe Illustrator (Proficient) • Adobe Premiere (Beginner) • Canva (Proficient) • AI-Assisted Design • AI Image Generation

ACADEMIC PROJECTS
• Project 1: Dark Side of Fast Fashion
  - Studied the concept and growth of fast fashion in the global market.
  - Analyzed its negative impact on the environment, including pollution and waste.
  - Examined labor exploitation and poor working conditions in the fashion industry.

• Project 2: Observation of Local Business
  - Observed daily operations and overall functioning of a local kirana store.
  - Studied customer handling, sales process, and billing methods.
  - Learned about inventory management and supplier coordination.

CERTIFICATIONS
• Animate with Adobe Animate
• Animation with Canva
• Among Us Animation Beginner Animation
• Animation with A.I. Tools

LANGUAGES
• English (Intermediate)
• Hindi (Native / Fluent)`;

    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#101210]/90 backdrop-blur-md overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Resume Document Window */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl md:rounded-[2rem] bg-[#191D19] border border-[#30372D] shadow-2xl text-[#EAE9DC] p-6 sm:p-10 z-10 space-y-8 print:bg-white print:text-black print:max-h-none print:shadow-none print:border-none print:p-0">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between pb-6 border-b border-[#30372D] print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C5FF42] animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5FF42] font-semibold">
              Official Resume & Curriculum Vitae
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyPlainText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101210] hover:bg-[#1E222A] border border-[#30372D] text-xs font-mono text-[#EAE9DC] transition-colors cursor-pointer"
              title="Copy formatted resume text"
            >
              {copiedText ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#C5FF42]" />
                  <span className="text-[#C5FF42]">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#949BA8]" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#C5FF42] hover:bg-[#d6ff6c] text-[#101210] font-semibold text-xs font-mono transition-colors cursor-pointer shadow-md shadow-[#C5FF42]/20"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#1E222A] hover:bg-[#C5FF42] text-[#92978B] hover:text-[#101210] transition-colors cursor-pointer ml-1"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* RESUME HEADER: Photo, Name, Profession, Contact */}
        {/* ============================================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-[#30372D]">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-[#EAE9DC]">
              Aryansh Kumar
            </h1>
            <p className="text-base sm:text-lg text-[#C5FF42] font-medium font-mono">
              Business Administration Student & Graphic Designer
            </p>

            {/* Contact Pills */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#949BA8] pt-2">
              <span className="inline-flex items-center gap-1.5 text-[#EAE9DC]/90">
                <MapPin className="w-3.5 h-3.5 text-[#C5FF42] shrink-0" />
                <span>Jarauli Phase-1, Kanpur</span>
              </span>

              <span className="text-[#30372D] hidden sm:inline">•</span>

              <a
                href="tel:6386293440"
                className="inline-flex items-center gap-1.5 text-[#EAE9DC]/90 hover:text-[#C5FF42] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5FF42] shrink-0" />
                <span>6386293440</span>
              </a>

              <span className="text-[#30372D] hidden sm:inline">•</span>

              <a
                href="mailto:aryanshsharma833@gmail.com"
                className="inline-flex items-center gap-1.5 text-[#EAE9DC]/90 hover:text-[#C5FF42] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5FF42] shrink-0" />
                <span>aryanshsharma833@gmail.com</span>
              </a>

              <span className="text-[#30372D] hidden sm:inline">•</span>

              <a
                href="https://www.linkedin.com/in/aryansh-kumar-855364428/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#C5FF42] hover:text-[#d6ff6c] transition-colors font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#C5FF42] shrink-0" />
                <span>linkedin.com/in/aryansh-kumar-855364428</span>
                <span className="text-[10px]">↗</span>
              </a>
            </div>
          </div>

          {/* Photo Avatar */}
          <div className="shrink-0 self-start sm:self-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#C5FF42]/40 p-0.5 bg-gradient-to-br from-[#C5FF42] to-[#191D19] shadow-xl">
              <img
                src={avatarAryansh}
                alt="Aryansh Kumar"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 1. PROFILE */}
        {/* ============================================================== */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5FF42] pb-2 border-b border-[#30372D]">
            <FileText className="w-3.5 h-3.5" />
            <span>Profile</span>
          </div>
          <p className="text-sm sm:text-base text-[#EAE9DC]/90 leading-relaxed font-sans bg-[#101210] p-4 sm:p-5 rounded-xl border border-[#30372D]">
            Creative and detail-oriented Graphic Designer with professional experience at Modern Teams and over 1 year of freelance experience. Skilled in creating social media creatives, LinkedIn designs, posters, advertisements, branding materials, and visual content. Proficient in Photoshop and Canva, with working knowledge of Illustrator and animation tools. Passionate about visual storytelling, creative design, and exploring AI-powered tools to develop engaging digital content.
          </p>
        </div>

        {/* ============================================================== */}
        {/* 2. EDUCATION */}
        {/* ============================================================== */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5FF42] pb-2 border-b border-[#30372D]">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </div>

          <div className="space-y-3">
            {/* Degree 1 */}
            <div className="p-4 rounded-xl bg-[#101210] border border-[#30372D] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-base text-[#EAE9DC]">
                  Bachelor of Business Administration (BBA)
                </h3>
                <p className="text-xs font-mono text-[#949BA8]">
                  Axis Institute of Higher Education
                </p>
              </div>
              <div className="text-xs font-mono text-[#C5FF42] font-semibold bg-[#C5FF42]/10 px-3 py-1 rounded-full border border-[#C5FF42]/20 self-start sm:self-auto">
                2024 – 2027
              </div>
            </div>

            {/* Schooling 1: ISC */}
            <div className="p-4 rounded-xl bg-[#101210] border border-[#30372D] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-sm text-[#EAE9DC]">
                  Secondary [ISC] — S.R Education Centre
                </h3>
                <p className="text-xs font-mono text-[#949BA8]">Score: 67%</p>
              </div>
              <div className="text-xs font-mono text-[#949BA8] bg-[#191D19] px-3 py-1 rounded-full border border-[#30372D] self-start sm:self-auto">
                2024
              </div>
            </div>

            {/* Schooling 2: ICSE */}
            <div className="p-4 rounded-xl bg-[#101210] border border-[#30372D] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-sm text-[#EAE9DC]">
                  Senior Secondary [ICSE] — S.R Education Centre
                </h3>
                <p className="text-xs font-mono text-[#949BA8]">Score: 69%</p>
              </div>
              <div className="text-xs font-mono text-[#949BA8] bg-[#191D19] px-3 py-1 rounded-full border border-[#30372D] self-start sm:self-auto">
                2022
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 3. WORK EXPERIENCE */}
        {/* ============================================================== */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5FF42] pb-2 border-b border-[#30372D]">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </div>

          <div className="space-y-4">
            {/* Experience 1 */}
            <div className="p-5 rounded-xl bg-[#101210] border border-[#30372D] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#EAE9DC] font-sans">
                    Graphic Designer & Content Creative
                  </h3>
                  <p className="text-xs font-mono text-[#C5FF42]">
                    Modern Teams / Sales Brigade
                  </p>
                </div>
                <span className="text-xs font-mono text-[#949BA8] bg-[#191D19] px-2.5 py-1 rounded-md border border-[#30372D] self-start sm:self-auto">
                  Jul 2026 – Sep 2026
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-[#EAE9DC]/85 list-disc list-inside font-sans leading-relaxed">
                <li>
                  <strong className="text-[#EAE9DC]">Designed 50+ carousels</strong>, 20+ AI visuals, 20+ posters, 3 ads, and 5+ stories for social campaigns.
                </li>
                <li>
                  <strong className="text-[#EAE9DC]">Managed one Instagram account</strong>, generating <span className="text-[#C5FF42]">25,000+ monthly views</span> and 101 engagements.
                </li>
                <li>
                  Developed campaign concepts and captions to support social media publishing.
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="p-5 rounded-xl bg-[#101210] border border-[#30372D] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#EAE9DC] font-sans">
                    Freelance Graphic Designer
                  </h3>
                  <p className="text-xs font-mono text-[#C5FF42]">
                    Independent Creative Practice · 1+ Year
                  </p>
                </div>
                <span className="text-xs font-mono text-[#949BA8] bg-[#191D19] px-2.5 py-1 rounded-md border border-[#30372D] self-start sm:self-auto">
                  Apr 2025 – Present
                </span>
              </div>

              <ul className="space-y-2 text-xs sm:text-sm text-[#EAE9DC]/85 list-disc list-inside font-sans leading-relaxed">
                <li>
                  Created social media, branding, posters & promotional designs for clients across various sectors.
                </li>
                <li>
                  Developed visual concepts using Photoshop, Canva & Illustrator.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 4. SKILLS */}
        {/* ============================================================== */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5FF42] pb-2 border-b border-[#30372D]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Skills</span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {[
              { name: "Graphic Design", level: "Core" },
              { name: "Social Media Design", level: "Specialist" },
              { name: "Branding & Visual Identity", level: "Core" },
              { name: "Poster & Advertisement Design", level: "Core" },
              { name: "LinkedIn Creative Design", level: "Specialist" },
              { name: "Character Design", level: "Creative" },
              { name: "AI Content Creation", level: "Emerging" },
              { name: "Adobe Photoshop", level: "Proficient" },
              { name: "Adobe Illustrator", level: "Proficient" },
              { name: "Adobe Premiere", level: "Beginner" },
              { name: "Canva", level: "Proficient" },
              { name: "AI-Assisted Design", level: "Workflow" },
              { name: "AI Image Generation", level: "Workflow" },
            ].map((skill, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101210] border border-[#30372D] text-xs font-mono text-[#EAE9DC]/90 hover:border-[#C5FF42]/50 transition-colors"
              >
                <span>{skill.name}</span>
                <span className="text-[10px] text-[#C5FF42] bg-[#C5FF42]/10 px-1.5 py-0.5 rounded">
                  {skill.level}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* 5. ACADEMIC PROJECTS */}
        {/* ============================================================== */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5FF42] pb-2 border-b border-[#30372D]">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Projects</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="p-5 rounded-xl bg-[#101210] border border-[#30372D] space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-[#EAE9DC] font-sans">
                  Project 1: Dark Side of Fast Fashion
                </h3>
                <span className="text-[10px] font-mono text-[#C5FF42] bg-[#C5FF42]/10 px-2 py-0.5 rounded">
                  Present
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#EAE9DC]/80 list-disc list-inside font-sans leading-relaxed">
                <li>Studied the concept and growth of fast fashion in the global market.</li>
                <li>Analyzed its negative impact on the environment, including pollution and waste.</li>
                <li>Examined labor exploitation and poor working conditions in the fashion industry.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="p-5 rounded-xl bg-[#101210] border border-[#30372D] space-y-2.5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-[#EAE9DC] font-sans">
                  Project 2: Observation of Local Business
                </h3>
                <span className="text-[10px] font-mono text-[#C5FF42] bg-[#C5FF42]/10 px-2 py-0.5 rounded">
                  Present
                </span>
              </div>
              <ul className="space-y-1.5 text-xs text-[#EAE9DC]/80 list-disc list-inside font-sans leading-relaxed">
                <li>Observed daily operations and overall functioning of a local kirana store.</li>
                <li>Studied customer handling, sales process, and billing methods.</li>
                <li>Learned about inventory management and supplier coordination.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* 6. CERTIFICATIONS & LANGUAGES (Side-by-Side) */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {/* Certifications */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5FF42] pb-2 border-b border-[#30372D]">
              <Award className="w-3.5 h-3.5" />
              <span>Certifications</span>
            </div>

            <div className="space-y-2">
              {[
                "Animate with Adobe Animate",
                "Animation with Canva",
                "Among Us Animation Beginner Animation",
                "Animation with A.I. Tools",
              ].map((cert, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#101210] border border-[#30372D] flex items-center justify-between text-xs font-mono"
                >
                  <span className="text-[#EAE9DC]">{cert}</span>
                  <span className="text-[10px] text-[#949BA8] bg-[#191D19] px-2 py-0.5 rounded border border-[#30372D]">
                    Present
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C5FF42] pb-2 border-b border-[#30372D]">
              <Languages className="w-3.5 h-3.5" />
              <span>Languages</span>
            </div>

            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-[#101210] border border-[#30372D] flex items-center justify-between text-xs font-mono">
                <span className="text-[#EAE9DC] font-semibold">English</span>
                <span className="text-[#C5FF42] bg-[#C5FF42]/10 px-2 py-0.5 rounded border border-[#C5FF42]/20">
                  Intermediate
                </span>
              </div>

              <div className="p-3 rounded-lg bg-[#101210] border border-[#30372D] flex items-center justify-between text-xs font-mono">
                <span className="text-[#EAE9DC] font-semibold">Hindi</span>
                <span className="text-[#949BA8] bg-[#191D19] px-2 py-0.5 rounded border border-[#30372D]">
                  Native / Fluent
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* Footer in Modal (Hidden on print) */}
        {/* ============================================================== */}
        <div className="pt-6 border-t border-[#30372D] flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#949BA8]">
            <a
              href="mailto:aryanshsharma833@gmail.com"
              className="inline-flex items-center gap-1.5 text-[#C5FF42] hover:underline"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>aryanshsharma833@gmail.com</span>
            </a>
            <span>•</span>
            <a
              href="tel:6386293440"
              className="inline-flex items-center gap-1.5 text-[#EAE9DC] hover:text-[#C5FF42]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5FF42]" />
              <span>6386293440</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full bg-[#1E222A] hover:bg-[#30372D] text-[#EAE9DC] text-xs font-mono transition-colors cursor-pointer border border-[#30372D]"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-[#C5FF42] hover:bg-[#d6ff6c] text-[#101210] font-semibold text-xs font-mono transition-colors cursor-pointer shadow-md shadow-[#C5FF42]/20"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
