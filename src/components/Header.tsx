import React, { useState, useEffect } from "react";
import { MascotEyes } from "./MascotEyes";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenResume?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Works", href: "#works" },
    { label: "Commercials", href: "#commercials" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080706]/85 backdrop-blur-md border-b border-[#26201A] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Brand title, one line single text element */}
          <div className="flex items-center gap-2.5">
            <a
              href="#top"
              className="text-lg font-bold tracking-tight text-[#EAE6DC] font-display hover:text-[#FF4D15] transition-colors whitespace-nowrap"
            >
              Aryansh Kumar
            </a>
            <span className="hidden sm:inline-block">
              <MascotEyes size={18} />
            </span>
          </div>

          {/* Zone 2: 4–6 nav links, 1–2 word labels, single-line text with hover underlines */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest font-mono text-[#8A847C] hover:text-[#EAE6DC] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#FF4D15] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            {onOpenResume && (
              <button
                onClick={onOpenResume}
                className="text-xs font-mono text-[#8A847C] hover:text-[#EAE6DC] transition-colors px-2 py-1.5 whitespace-nowrap cursor-pointer"
              >
                Resume
              </button>
            )}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-full bg-[#FF4D15] text-white hover:bg-[#FF6433] transition-all duration-200 whitespace-nowrap shadow-sm shadow-[#FF4D15]/20 cursor-pointer"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#EAE6DC] hover:text-[#FF4D15] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#12100E] border border-[#26201A] shadow-xl space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-mono text-[#8A847C] hover:text-[#FF4D15] py-1.5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#26201A] flex items-center justify-between gap-3">
              {onOpenResume && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="text-xs font-mono text-[#8A847C] hover:text-[#EAE6DC]"
                >
                  Resume PDF
                </button>
              )}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-full bg-[#FF4D15] text-white text-center"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
