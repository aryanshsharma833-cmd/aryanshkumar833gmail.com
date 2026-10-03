import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Mail,
  Linkedin,
  Globe,
  Copy,
  Check,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { MascotEyes } from "./MascotEyes";
import { sounds } from "../utils/audioFeedback";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ContactFooterProps {
  onOpenResume?: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenResume }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "Social Media Creatives",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      sounds.playTick();
      return;
    }

    sounds.playTick();
    setIsSubmitting(true);

    // Simulate sending inquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      sounds.playChime();
    }, 700);
  };

  const handleCopyEmail = () => {
    sounds.playTick();
    navigator.clipboard.writeText("aryanshsharma833@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="contact"
      className="relative w-full p-2 sm:p-4 md:p-6 lg:p-8 bg-[#101210] scroll-mt-10"
    >
      <div className="relative w-full overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-[#191D19] text-[#EAE9DC] p-6 sm:p-10 md:p-14 lg:p-20 border border-[#30372D] shadow-2xl">
        
        {/* Grain Noise Overlay */}
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.25]" />

        {/* 1. Header Bar */}
        <div className="flex items-center justify-between pb-8 border-b border-[#30372D] relative z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5FF42]">
              09 — CONTACT
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#C5FF42] animate-pulse" />
          </div>
          <span className="font-mono text-xs text-[#92978B]">
            Direct Availability · Response within 24h
          </span>
        </div>

        {/* 2. Main Headline & Description */}
        <div className="pt-12 pb-14 relative z-10 max-w-4xl space-y-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#EAE9DC] font-display">
            HAVE AN IDEA? LET'S CREATE IT<span className="text-[#C5FF42]">.</span>
          </h2>
          <p className="pt-2 text-base sm:text-xl text-[#92978B] max-w-2xl leading-relaxed font-sans">
            Open to creative opportunities, freelance projects, collaborations and working with innovative teams.
          </p>
        </div>

        {/* 3. Direct Contact Info & Inquiry Form Split Grid */}
        <div className="grid grid-cols-12 gap-8 lg:gap-16 pt-8 border-t border-[#30372D] relative z-10">
          
          {/* Left Column: Direct Credentials & Location */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              {/* Email */}
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#92978B] block">
                  Email Directly
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:aryanshsharma833@gmail.com"
                    className="text-base sm:text-lg font-medium text-[#EAE9DC] hover:text-[#C5FF42] transition-colors flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4 text-[#C5FF42] shrink-0" />
                    <span>aryanshsharma833@gmail.com</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md bg-[#101210] border border-[#30372D] text-[#92978B] hover:text-[#EAE9DC] transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-[#C5FF42]" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="inline-block text-[11px] font-mono text-[#C5FF42]">
                    Copied to clipboard!
                  </span>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#92978B] block">
                  Direct Call / WhatsApp
                </span>
                <a
                  href="tel:6386293440"
                  className="text-base sm:text-lg font-medium text-[#EAE9DC] hover:text-[#C5FF42] transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5FF42] shrink-0" />
                  <span>+91 6386293440</span>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#92978B] block">
                  LinkedIn Profile
                </span>
                <a
                  href="https://www.linkedin.com/in/aryansh-kumar-855364428/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base sm:text-lg font-medium text-[#EAE9DC] hover:text-[#C5FF42] transition-colors flex items-center gap-2 group"
                >
                  <Linkedin className="w-4 h-4 text-[#C5FF42] shrink-0" />
                  <span>Aryansh Kumar</span>
                  <span className="text-xs font-mono text-[#92978B] group-hover:text-[#C5FF42] transition-colors">
                    ↗
                  </span>
                </a>
                <span className="text-xs font-mono text-[#92978B] block">
                  linkedin.com/in/aryansh-kumar-855364428
                </span>
              </div>

              {/* Location */}
              <div className="space-y-1.5">
                <span className="font-mono text-xs uppercase tracking-widest text-[#92978B] block">
                  Location
                </span>
                <div className="text-base font-medium text-[#EAE9DC] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C5FF42] shrink-0" />
                  <span>Jarauli Phase-1, Kanpur, India</span>
                </div>
              </div>
            </div>

            {/* Mascot in the Footer */}
            <div className="p-5 rounded-2xl bg-[#101210] border border-[#30372D] flex items-center gap-4">
              <MascotEyes size={32} glowColor="#C5FF42" />
              <div>
                <div className="text-xs font-semibold text-[#EAE9DC]">
                  Watching over the details
                </div>
                <div className="text-[11px] text-[#92978B]">
                  Ready when you are. Let's create something meaningful.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="col-span-12 lg:col-span-7 bg-[#101210] p-6 sm:p-8 md:p-10 rounded-3xl border border-[#30372D] shadow-xl">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-[#C5FF42]/10 border border-[#C5FF42]/40 text-[#C5FF42] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-[#EAE9DC]">
                    Message Received
                  </h3>
                  <p className="text-sm font-sans text-[#92978B] max-w-sm mx-auto">
                    Thanks for reaching out! I'll review your project details and respond via email within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        projectType: "Social Media Creatives",
                        message: "",
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#191D19] border border-[#30372D] text-xs font-mono text-[#EAE9DC] hover:text-[#C5FF42] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-xs font-mono uppercase tracking-widest text-[#C5FF42] pb-3 border-b border-[#30372D]">
                    Project Inquiry / Message
                  </div>

                  {/* Name Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#92978B] block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Jane Doe or Brand Representative"
                      className={`w-full px-4 py-3 rounded-xl bg-[#191D19] border text-sm text-[#EAE9DC] placeholder-[#92978B]/50 focus:outline-none transition-colors ${
                        errors.name
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#30372D] focus:border-[#C5FF42]"
                      }`}
                    />
                    {errors.name && (
                      <span className="text-xs font-mono text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#92978B] block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="jane@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#191D19] border text-sm text-[#EAE9DC] placeholder-[#92978B]/50 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#30372D] focus:border-[#C5FF42]"
                      }`}
                    />
                    {errors.email && (
                      <span className="text-xs font-mono text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Project Type Selector */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#92978B] block">
                      Scope of Work
                    </label>
                    <select
                      id="form-project-type"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#191D19] border border-[#30372D] text-sm text-[#EAE9DC] focus:outline-none focus:border-[#C5FF42] transition-colors cursor-pointer"
                    >
                      <option value="Social Media Creatives">
                        Social Media Creatives & Carousels
                      </option>
                      <option value="Branding & Visual Identity">
                        Branding & Visual Identity
                      </option>
                      <option value="Posters & Advertisements">
                        Posters & Advertisements
                      </option>
                      <option value="Character Design">Character Design</option>
                      <option value="Animation & Motion Exploration">
                        Animation & Motion Exploration
                      </option>
                      <option value="Full-Time / Agency Role">
                        Full-Time Opportunity / Agency Role
                      </option>
                      <option value="Other Collaboration">Other Collaboration</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-[#92978B] block">
                      Brief Message or Project Details *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Tell me about your brand, timeline, or what you'd like to build together..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#191D19] border text-sm text-[#EAE9DC] placeholder-[#92978B]/50 focus:outline-none transition-colors resize-none ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#30372D] focus:border-[#C5FF42]"
                      }`}
                    />
                    {errors.message && (
                      <span className="text-xs font-mono text-red-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#C5FF42] hover:bg-[#d6ff6c] text-[#101210] font-bold text-sm font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-lg shadow-[#C5FF42]/20 flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>START A CONVERSATION</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* 4. Minimal Footer */}
        <div className="pt-12 mt-12 border-t border-[#30372D] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#92978B] relative z-10">
          <div>
            <span className="font-display font-bold text-sm text-[#EAE9DC]">
              ARYANSH KUMAR<span className="text-[#C5FF42]">*</span>
            </span>
            <span className="mx-2 hidden sm:inline">·</span>
            <span className="block sm:inline mt-1 sm:mt-0">
              Graphic Designer · Visual Storyteller · 2026
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/aryansh-kumar-855364428/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-[#92978B] hover:text-[#C5FF42] transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-[#C5FF42]" />
              <span>LinkedIn</span>
              <span>↗</span>
            </a>

            <button
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-mono text-[#EAE9DC]/80 hover:text-[#C5FF42] transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <span className="p-1 rounded-full bg-[#101210] border border-[#30372D] group-hover:bg-[#C5FF42] group-hover:text-[#101210] transition-colors">
                <ArrowUp className="w-3 h-3" />
              </span>
            </button>
          </div>
        </div>

        {/* Audio Credits */}
        <div className="pt-6 mt-6 border-t border-[#30372D]/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-[#92978B] relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF42] animate-pulse" />
            <span>
              Background Music:{" "}
              <strong className="text-[#EAE9DC]">"In The Dark"</strong> — Singer:{" "}
              <strong className="text-[#EAE9DC]">Swae Lee</strong> feat.{" "}
              <strong className="text-[#EAE9DC]">Jhené Aiko</strong> (50% Volume)
            </span>
          </div>

          <a
            href="https://youtu.be/SmqeO5mj0ec?list=RDSmqeO5mj0ec"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#C5FF42] transition-colors underline underline-offset-2 flex items-center gap-1"
          >
            <span>Listen on YouTube</span>
            <span>↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
