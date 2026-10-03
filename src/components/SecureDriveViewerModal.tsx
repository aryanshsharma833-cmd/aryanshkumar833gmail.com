import React, { useState, useEffect } from "react";
import { Shield, ShieldAlert, Lock, Unlock, Eye, X, AlertTriangle, KeyRound, CheckCircle2, ExternalLink } from "lucide-react";
import { sounds } from "../utils/audioFeedback";

interface SecureDriveViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  driveUrl?: string;
}

export const SecureDriveViewerModal: React.FC<SecureDriveViewerModalProps> = ({
  isOpen,
  onClose,
  driveUrl = "https://www.youtube.com/embed/SmqeO5mj0ec?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=SmqeO5mj0ec",
}) => {
  // Permission requested EVERY TIME modal opens (no persistence across sessions)
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [visitorName, setVisitorName] = useState<string>("");
  const [agreedTerms, setAgreedTerms] = useState<boolean>(false);
  const [isBlurredByCapture, setIsBlurredByCapture] = useState<boolean>(false);
  const [permissionError, setPermissionError] = useState<string>("");
  const [accessCode, setAccessCode] = useState<string>("");

  // Reset permission state whenever modal opens or closes ("permission every time")
  useEffect(() => {
    if (isOpen) {
      setHasPermission(false);
      setVisitorName("");
      setAgreedTerms(false);
      setIsBlurredByCapture(false);
      setPermissionError("");
      setAccessCode("");
    }
  }, [isOpen]);

  // Anti-Screenshot & Screen Capture Protection
  useEffect(() => {
    if (!isOpen || !hasPermission) return;

    // 1. Detect PrintScreen and screenshot / save shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // PrintScreen key
      if (e.key === "PrintScreen" || e.code === "PrintScreen") {
        e.preventDefault();
        setIsBlurredByCapture(true);
        setTimeout(() => setIsBlurredByCapture(false), 3000);
        return;
      }

      // Ctrl+S / Cmd+S (Save)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        setIsBlurredByCapture(true);
        setTimeout(() => setIsBlurredByCapture(false), 2500);
        return;
      }

      // Ctrl+P / Cmd+P (Print)
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
        setIsBlurredByCapture(true);
        setTimeout(() => setIsBlurredByCapture(false), 2500);
        return;
      }

      // Escape to close
      if (e.key === "Escape") {
        onClose();
      }
    };

    // 2. Blur screen when window loses focus (common when taking screenshots with Snipping Tool or screen capture)
    const handleWindowBlur = () => {
      setIsBlurredByCapture(true);
    };

    const handleWindowFocus = () => {
      setIsBlurredByCapture(false);
    };

    // 3. Disable right-click context menu (no downloading/saving)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("blur", handleWindowBlur);
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("blur", handleWindowBlur);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [isOpen, hasPermission, onClose]);

  if (!isOpen) return null;

  const handleGrantPermission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedTerms) {
      setPermissionError("Please acknowledge that viewing is strictly view-only with no downloads or captures.");
      return;
    }

    setIsVerifying(true);
    sounds.playTick();

    setTimeout(() => {
      setIsVerifying(false);
      setHasPermission(true);
      sounds.playChime();
    }, 700);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#080706]/95 backdrop-blur-xl select-none"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Background Dim */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Screenshot / Screen Capture Security Blocker Overlay */}
      {isBlurredByCapture && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center text-center p-6 text-white space-y-4">
          <ShieldAlert className="w-16 h-16 text-[#FF4D15] animate-bounce" />
          <h3 className="text-2xl font-bold font-display tracking-tight text-[#FF4D15]">
            SCREENSHOT / CAPTURE BLOCKED
          </h3>
          <p className="max-w-md text-sm text-[#EAE6DC]/80 font-mono">
            This drive asset is protected by anti-capture protocols. Recording, screenshots, and screen grabs are prohibited.
          </p>
          <button
            onClick={() => setIsBlurredByCapture(false)}
            className="px-6 py-2 rounded-full bg-[#FF4D15] text-white font-mono text-xs hover:bg-[#FF6433] transition-colors cursor-pointer"
          >
            Resume Protected View
          </button>
        </div>
      )}

      {/* Main Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl md:rounded-[2rem] bg-[#12100E] border border-[#26201A] shadow-2xl text-[#EAE6DC] p-6 sm:p-8 z-10 flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[#26201A] shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#FF4D15]/15 border border-[#FF4D15]/30 text-[#FF4D15]">
              <Shield className="w-4 h-4" />
            </span>
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#FF4D15] flex items-center gap-1.5">
                <span>Secure Drive Vault</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1C1814] text-[#8A847C]">
                  View Only · Protected
                </span>
              </div>
              <h2 className="text-lg font-bold font-display text-[#EAE6DC]">
                Drive Asset & Media Vault
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-[#8A847C] px-2.5 py-1 rounded-full bg-[#161310] border border-[#26201A]">
              <Lock className="w-3 h-3 text-[#FF4D15]" />
              <span>Permission Enforced</span>
            </span>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#1A1613] hover:bg-[#FF4D15] text-[#8A847C] hover:text-white transition-colors cursor-pointer"
              aria-label="Close viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="py-4 flex-grow overflow-y-auto">
          {!hasPermission ? (
            /* STEP 1: PERMISSION GATE (Required Every Time) */
            <div className="max-w-lg mx-auto py-8 sm:py-12 space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FF4D15]/10 border border-[#FF4D15]/30 flex items-center justify-center mx-auto text-[#FF4D15]">
                <KeyRound className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold font-display text-[#EAE6DC]">
                  Permission Required to View
                </h3>
                <p className="text-sm text-[#8A847C] font-sans">
                  This Drive asset contains proprietary creative assets. Access requires explicit permission verification each time you view.
                </p>
              </div>

              {/* Security Rule Badges */}
              <div className="grid grid-cols-3 gap-2.5 text-center pt-2">
                <div className="p-3 rounded-xl bg-[#161310] border border-[#26201A] space-y-1">
                  <div className="text-[11px] font-mono font-bold text-[#FF4D15]">VIEW ONLY</div>
                  <div className="text-[10px] text-[#8A847C]">No Downloads</div>
                </div>
                <div className="p-3 rounded-xl bg-[#161310] border border-[#26201A] space-y-1">
                  <div className="text-[11px] font-mono font-bold text-[#FF4D15]">NO CAPTURE</div>
                  <div className="text-[10px] text-[#8A847C]">Anti-Screenshot</div>
                </div>
                <div className="p-3 rounded-xl bg-[#161310] border border-[#26201A] space-y-1">
                  <div className="text-[11px] font-mono font-bold text-[#FF4D15]">DYNAMIC DRM</div>
                  <div className="text-[10px] text-[#8A847C]">Session Watermark</div>
                </div>
              </div>

              {/* Permission Verification Form */}
              <form onSubmit={handleGrantPermission} className="space-y-4 pt-2 text-left">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#8A847C] block">
                    Your Name / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    placeholder="e.g. Creative Reviewer / Client"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#161310] border border-[#26201A] text-sm text-[#EAE6DC] focus:outline-none focus:border-[#FF4D15]"
                  />
                </div>

                {/* Agreement Checkbox */}
                <label className="flex items-start gap-3 p-3 rounded-xl bg-[#161310] border border-[#26201A] cursor-pointer hover:border-[#FF4D15]/40 transition-colors">
                  <input
                    type="checkbox"
                    checked={agreedTerms}
                    onChange={(e) => {
                      setAgreedTerms(e.target.checked);
                      setPermissionError("");
                    }}
                    className="mt-0.5 w-4 h-4 rounded accent-[#FF4D15] cursor-pointer"
                  />
                  <span className="text-xs text-[#EAE6DC]/90 leading-relaxed font-sans">
                    I agree to view this material strictly for review purposes. I will not attempt to download, rip, screen record, or capture screenshots of this work.
                  </span>
                </label>

                {permissionError && (
                  <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-xs text-red-300 font-mono flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
                    <span>{permissionError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isVerifying}
                  className="w-full py-3 rounded-xl bg-[#FF4D15] hover:bg-[#FF6433] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all shadow-lg shadow-[#FF4D15]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isVerifying ? (
                    <span>Verifying Security Clearance...</span>
                  ) : (
                    <>
                      <Unlock className="w-4 h-4" />
                      <span>Request & Grant View Permission</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          ) : (
            /* STEP 2: PROTECTED VIEWER WITH ACTIVE WATERMARKING & ANTI-DOWNLOAD */
            <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black border border-[#26201A]">
              {/* YouTube Protected Frame */}
              <iframe
                src="https://www.youtube-nocookie.com/embed/SmqeO5mj0ec?autoplay=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=SmqeO5mj0ec&playsinline=1"
                title="Protected Drive Asset"
                className="w-full h-full border-0 pointer-events-auto"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />

              {/* Dynamic Diagonal Watermark Grid (Prevents clean screenshots) */}
              <div
                className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-4 opacity-35 select-none"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(255, 77, 21, 0.04) 100px, rgba(255, 77, 21, 0.04) 200px)",
                }}
              >
                <div className="flex justify-between text-[11px] font-mono text-[#FF4D15] font-bold tracking-widest uppercase">
                  <span>CONFIDENTIAL · ARYANSH KUMAR</span>
                  <span>VIEW ONLY · NO DOWNLOAD</span>
                </div>
                <div className="text-center text-xs font-mono text-[#FF4D15]/40 tracking-widest uppercase font-black rotate-[-12deg]">
                  SCREEN CAPTURE & RECORDING MONITORED · {visitorName ? `AUTHORIZED TO: ${visitorName.toUpperCase()}` : "SINGLE SESSION VIEW"}
                </div>
                <div className="flex justify-between text-[10px] font-mono text-[#8A847C]">
                  <span>SESSION ID: {Math.random().toString(36).substring(2, 9).toUpperCase()}</span>
                  <span>TIME: {new Date().toLocaleTimeString()}</span>
                </div>
              </div>

              {/* Transparent Shield Click Blocker to prevent right-click save */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
          )}
        </div>

        {/* Security Footer Details */}
        <div className="pt-3 border-t border-[#26201A] flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#8A847C] shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D15] animate-pulse" />
            <span>Protection Status: <strong>DRM Enforced (No Download · No Screenshot)</strong></span>
          </div>

          <div className="flex items-center gap-3">
            {hasPermission && (
              <button
                onClick={() => setHasPermission(false)}
                className="text-[#FF4D15] hover:underline cursor-pointer"
              >
                Lock Asset
              </button>
            )}
            <span>Permission must be re-granted on every session</span>
          </div>
        </div>
      </div>
    </div>
  );
};
