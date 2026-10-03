import React, { useEffect, useRef, useState } from "react";

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [cursorType, setCursorType] = useState<string>("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only activate custom cursor on fine pointer devices (desktop mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // Check cursor target metadata
      const target = (e.target as HTMLElement)?.closest(
        "[data-cursor-type]"
      ) as HTMLElement | null;

      if (target) {
        setCursorType(target.getAttribute("data-cursor-type") || "pointer");
        setCursorLabel(target.getAttribute("data-cursor-label") || "");
      } else {
        const isClickable = (e.target as HTMLElement)?.closest(
          "button, a, input, select, textarea, [role='button']"
        );
        setCursorType(isClickable ? "pointer" : "default");
        setCursorLabel("");
      }
    };

    const animateRing = () => {
      // Lerp for organic trailing feel
      const ease = 0.22;
      ringX += (mouseX - ringX) * ease;
      ringY += (mouseY - ringY) * ease;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationId = requestAnimationFrame(animateRing);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    animationId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isPointer = cursorType === "pointer";
  const isView = cursorType === "view";
  const isDrag = cursorType === "drag";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Precision Core Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -ml-1 -mt-1 rounded-full transition-opacity duration-150 ${
          isView || isDrag ? "opacity-0" : "opacity-100"
        }`}
        style={{
          width: 8,
          height: 8,
          backgroundColor: "#C5FF42",
          boxShadow: "0 0 12px rgba(197, 255, 66, 0.75)",
        }}
      />

      {/* Fluid Trailing Ring with Morphing States */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full flex items-center justify-center transition-all duration-200 ease-out border ${
          isView
            ? "w-20 h-20 -ml-10 -mt-10 bg-[#C5FF42] border-[#C5FF42] text-[#101210] font-bold shadow-xl shadow-[#C5FF42]/30 scale-100"
            : isDrag
            ? "w-14 h-14 -ml-7 -mt-7 bg-[#191D19]/90 border-[#C5FF42] text-[#C5FF42] shadow-lg scale-105"
            : isPointer
            ? "w-11 h-11 -ml-5.5 -mt-5.5 bg-[#C5FF42]/15 border-[#C5FF42]/80 scale-110"
            : "w-8 h-8 -ml-4 -mt-4 bg-transparent border-[#C5FF42]/35"
        }`}
      >
        {isView && (
          <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#101210]">
            {cursorLabel || "VIEW"}
          </span>
        )}
        {isDrag && (
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#C5FF42]">
            ◀ ▶
          </span>
        )}
      </div>
    </div>
  );
};
