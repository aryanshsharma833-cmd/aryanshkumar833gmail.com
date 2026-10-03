import React, { useState, useEffect } from "react";
import { MascotEyes } from "./MascotEyes";
import { Linkedin, Shield, Menu, X, ArrowUpRight } from "lucide-react";
import { sounds } from "../utils/audioFeedback";

interface NavigationProps {
  onOpenResume?: () => void;
  onOpenDriveModal?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenResume,
  onOpenDriveModal,
}) => {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "process", label: "Process" },
    { id: "goals", label: "Goals" },
    { id: "contact", label: "Contact" },
  ];

  // Scroll spy & scroll background detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sectionElements = navLinks.map((link) => {
        // Support 'work' pointing to 'work' or 'works'
        if (link.id === "work") {
          return document.getElementById("work") || document.getElementById("works");
        }
        return document.getElementById(link.id);
      });

      const scrollPosition = window.scrollY + 220;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    sounds.playTick();
    setIsMobileMenuOpen(false);
    const target = id === "work" ? document.getElementById("work") || document.getElementById("works") : document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <div
          className={`pointer-events-auto flex items-center justify-between gap-4 p-2 sm:p-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#101210]/95 backdrop-blur-xl border border-[#30372D] shadow-2xl shadow-black/60"
              : "bg-[#191D19]/80 backdrop-blur-md border border-[#30372D]/80 shadow-lg"
          }`}
        >
          {/* Brand + Interactive Eye Mascot */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("hero");
            }}
            className="flex items-center gap-2.5 pl-3 group cursor-pointer"
          >
            <span className="font-display font-bold text-base sm:text-lg text-[#EAE9DC] tracking-tight group-hover:text-[#C5FF42] transition-colors">
              Aryansh Kumar<span className="text-[#C5FF42]">*</span>
            </span>
            <span className="p-1 rounded-full bg-[#101210] border border-[#30372D] group-hover:border-[#C5FF42]/50 transition-colors">
              <MascotEyes size={16} glowColor="#C5FF42" />
            </span>
          </a>

          {/* Central Nav Links (Sticky Bar) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#C5FF42] text-[#101210] font-bold shadow-md shadow-[#C5FF42]/20"
                      : "text-[#92978B] hover:text-[#EAE9DC] hover:bg-[#191D19]"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Availability Badge & Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 pr-1 sm:pr-2">
            {/* Availability Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#101210] border border-[#30372D] text-[11px] font-mono text-[#C5FF42]">
              <span className="w-2 h-2 rounded-full bg-[#C5FF42] animate-pulse" />
              <span>Available for Opportunities</span>
            </div>

            {onOpenDriveModal && (
              <button
                onClick={() => {
                  sounds.playTick();
                  onOpenDriveModal();
                }}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-[#C5FF42] hover:text-[#101210] px-2.5 py-1 rounded-full bg-[#C5FF42]/10 hover:bg-[#C5FF42] border border-[#C5FF42]/30 transition-all cursor-pointer font-medium"
                title="View Protected Drive Asset (Permission Required)"
              >
                <Shield className="w-3 h-3" />
                <span>Drive Reel</span>
              </button>
            )}

            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="hidden sm:inline-flex text-xs font-mono text-[#92978B] hover:text-[#EAE9DC] px-2.5 py-1 transition-colors cursor-pointer"
              >
                Resume
              </button>
            )}

            <a
              href="https://www.linkedin.com/in/aryansh-kumar-855364428/"
              target="_blank"
              rel="noreferrer"
              className="hidden md:inline-flex items-center gap-1 text-xs font-mono text-[#EAE9DC] hover:text-[#C5FF42] px-2 py-1 transition-colors"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#C5FF42]" />
              <span>LinkedIn</span>
              <span className="text-[10px] text-[#92978B]">↗</span>
            </a>

            <button
              onClick={() => handleLinkClick("contact")}
              className="px-4 py-1.5 text-xs font-semibold rounded-full bg-[#C5FF42] hover:bg-[#d6ff6c] text-[#101210] transition-all shadow-md shadow-[#C5FF42]/20 whitespace-nowrap cursor-pointer"
            >
              Get in Touch
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-full bg-[#191D19] border border-[#30372D] text-[#EAE9DC] hover:text-[#C5FF42] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pointer-events-auto mt-2 p-4 rounded-2xl bg-[#101210]/95 backdrop-blur-xl border border-[#30372D] shadow-2xl space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleLinkClick(link.id)}
                    className={`px-3 py-2 rounded-xl text-left text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#C5FF42] text-[#101210] font-bold"
                        : "text-[#92978B] hover:text-[#EAE9DC] hover:bg-[#191D19]"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#30372D] flex items-center justify-between text-xs font-mono">
              {onOpenResume && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="text-[#C5FF42] hover:underline"
                >
                  View Resume →
                </button>
              )}

              <a
                href="https://www.linkedin.com/in/aryansh-kumar-855364428/"
                target="_blank"
                rel="noreferrer"
                className="text-[#92978B] hover:text-[#C5FF42] inline-flex items-center gap-1"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
