import React, { useEffect, useState, useRef } from "react";

interface MascotEyesProps {
  size?: number;
  className?: string;
  glowColor?: string;
}

export const MascotEyes: React.FC<MascotEyesProps> = ({
  size = 32,
  className = "",
  glowColor = "#C5FF42",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isExcited, setIsExcited] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeCenterX;
      const deltaY = e.clientY - eyeCenterY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(Math.hypot(deltaX, deltaY), 300);

      // Max pupil displacement proportional to eye size
      const maxDistance = size * 0.22;
      const normalizedDist = (distance / 300) * maxDistance;

      setPupilOffset({
        x: Math.cos(angle) * normalizedDist,
        y: Math.sin(angle) * normalizedDist,
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  // Periodic natural blink
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        setIsBlinking(true);
        setTimeout(() => setIsBlinking(false), 160);
      }
    }, 3800);

    return () => clearInterval(blinkInterval);
  }, []);

  const handleClick = () => {
    setIsExcited(true);
    setTimeout(() => setIsExcited(false), 900);
  };

  const eyeWidth = size;
  const eyeHeight = size * 1.08;
  const pupilSize = size * 0.45;

  return (
    <div
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center gap-1.5 cursor-pointer select-none transition-transform active:scale-95 ${className}`}
      title="Aryansh's mascot sentinel — click me!"
      style={{
        filter: isHovered ? `drop-shadow(0 0 10px ${glowColor}60)` : "none",
      }}
    >
      {/* Left Eye */}
      <div
        className="relative overflow-hidden rounded-full bg-[#F4F3ED] transition-all duration-150 border border-[#262B35]"
        style={{
          width: eyeWidth,
          height: isBlinking ? 2 : eyeHeight,
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.35)",
        }}
      >
        {!isBlinking && (
          <div
            className="absolute rounded-full transition-transform duration-75"
            style={{
              width: pupilSize,
              height: pupilSize,
              backgroundColor: isExcited ? "#FF5A1F" : "#0C0D0E",
              left: "50%",
              top: "50%",
              marginLeft: -pupilSize / 2,
              marginTop: -pupilSize / 2,
              transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px) ${
                isExcited ? "scale(1.2)" : "scale(1)"
              }`,
            }}
          >
            {/* Catchlight sparkle */}
            <div
              className="absolute bg-white rounded-full"
              style={{
                width: pupilSize * 0.35,
                height: pupilSize * 0.35,
                top: pupilSize * 0.15,
                left: pupilSize * 0.15,
                opacity: 0.9,
              }}
            />
          </div>
        )}
      </div>

      {/* Right Eye */}
      <div
        className="relative overflow-hidden rounded-full bg-[#F4F3ED] transition-all duration-150 border border-[#262B35]"
        style={{
          width: eyeWidth,
          height: isBlinking ? 2 : eyeHeight,
          boxShadow: "inset 0 2px 4px rgba(0,0,0,0.35)",
        }}
      >
        {!isBlinking && (
          <div
            className="absolute rounded-full transition-transform duration-75"
            style={{
              width: pupilSize,
              height: pupilSize,
              backgroundColor: isExcited ? "#FF5A1F" : "#0C0D0E",
              left: "50%",
              top: "50%",
              marginLeft: -pupilSize / 2,
              marginTop: -pupilSize / 2,
              transform: `translate(${pupilOffset.x}px, ${pupilOffset.y}px) ${
                isExcited ? "scale(1.2)" : "scale(1)"
              }`,
            }}
          >
            {/* Catchlight sparkle */}
            <div
              className="absolute bg-white rounded-full"
              style={{
                width: pupilSize * 0.35,
                height: pupilSize * 0.35,
                top: pupilSize * 0.15,
                left: pupilSize * 0.15,
                opacity: 0.9,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
