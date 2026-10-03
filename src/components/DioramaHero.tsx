import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Sparkles, Image as ImageIcon } from "lucide-react";
import floatingCliffDioramaHero from "../assets/images/floating_cliff_diorama_hero_1790942505523.jpg";
import dioramaCliffGoldenHour from "../assets/images/diorama_cliff_golden_hour_1790941328588.jpg";
import { sounds } from "../utils/audioFeedback";

interface DioramaHeroProps {
  onOpenResume?: () => void;
  onOpenDriveModal?: () => void;
}

export const DioramaHero: React.FC<DioramaHeroProps> = () => {
  // Scrubber progress from 0 (Dawn) to 50 (Golden Hour) to 100 (Twilight Night)
  const [timeOfDay, setTimeOfDay] = useState<number>(48);

  // Active website scenic visual: Image 2 (Floating Cliff Diorama) by default
  const [activeBackdrop, setActiveBackdrop] = useState<"image2" | "image1">("image2");

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Gentle ambient lighting cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay((prev) => {
        const next = prev + 0.06;
        return next > 100 ? 0 : next;
      });
    }, 140);

    return () => clearInterval(interval);
  }, []);

  // Canvas living clouds, stars, and atmospheric lighting simulation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Procedural multi-layer clouds
    const cloudLayers = [
      {
        count: 5,
        speed: 0.16,
        yRatio: 0.28,
        sizeMin: 140,
        sizeMax: 260,
        opacity: 0.45,
        clouds: [] as { x: number; y: number; r: number; puffOffsets: { dx: number; dy: number; r: number }[] }[],
      },
      {
        count: 6,
        speed: 0.28,
        yRatio: 0.38,
        sizeMin: 180,
        sizeMax: 320,
        opacity: 0.65,
        clouds: [] as { x: number; y: number; r: number; puffOffsets: { dx: number; dy: number; r: number }[] }[],
      },
      {
        count: 4,
        speed: 0.42,
        yRatio: 0.48,
        sizeMin: 220,
        sizeMax: 380,
        opacity: 0.85,
        clouds: [] as { x: number; y: number; r: number; puffOffsets: { dx: number; dy: number; r: number }[] }[],
      },
    ];

    // Seed clouds
    cloudLayers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        const baseR = layer.sizeMin + Math.random() * (layer.sizeMax - layer.sizeMin);
        const puffs: { dx: number; dy: number; r: number }[] = [];
        const puffCount = 5 + Math.floor(Math.random() * 4);
        for (let p = 0; p < puffCount; p++) {
          puffs.push({
            dx: (Math.random() - 0.5) * baseR * 1.4,
            dy: (Math.random() - 0.5) * baseR * 0.45,
            r: baseR * (0.45 + Math.random() * 0.45),
          });
        }
        layer.clouds.push({
          x: (i / layer.count) * (width + 600) - 200 + Math.random() * 100,
          y: height * layer.yRatio + (Math.random() - 0.5) * 80,
          r: baseR,
          puffOffsets: puffs,
        });
      }
    });

    // Twinkling stars for night phase
    const stars: { x: number; y: number; s: number; alpha: number; speed: number }[] = [];
    for (let s = 0; s < 70; s++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.55),
        s: Math.random() * 1.8 + 0.6,
        alpha: Math.random(),
        speed: 0.02 + Math.random() * 0.04,
      });
    }

    let tick = 0;
    let animId = 0;

    const render = () => {
      tick += 1;
      ctx.clearRect(0, 0, width, height);

      const t = timeOfDay / 100;
      let topColor = "#101412";
      let midColor = "#2E2419";
      let horizonColor = "#52431E";

      if (t < 0.35) {
        const subT = t / 0.35;
        topColor = `rgb(${Math.round(16 + subT * 20)}, ${Math.round(20 + subT * 15)}, ${Math.round(18 + subT * 10)})`;
        midColor = `rgb(${Math.round(45 + subT * 40)}, ${Math.round(40 + subT * 25)}, ${Math.round(30 + subT * 15)})`;
        horizonColor = `rgb(${Math.round(110 + subT * 50)}, ${Math.round(100 + subT * 40)}, ${Math.round(50 + subT * 20)})`;
      } else if (t < 0.7) {
        const subT = (t - 0.35) / 0.35;
        topColor = `rgb(${Math.round(36 - subT * 20)}, ${Math.round(35 - subT * 15)}, ${Math.round(28 - subT * 10)})`;
        midColor = `rgb(${Math.round(85 - subT * 35)}, ${Math.round(65 - subT * 25)}, ${Math.round(45 - subT * 15)})`;
        horizonColor = `rgb(${Math.round(160 - subT * 60)}, ${Math.round(140 - subT * 50)}, ${Math.round(70 - subT * 30)})`;
      } else {
        const subT = (t - 0.7) / 0.3;
        topColor = `rgb(${Math.round(16 - subT * 6)}, ${Math.round(18 - subT * 6)}, ${Math.round(16 + subT * 8)})`;
        midColor = `rgb(${Math.round(50 - subT * 30)}, ${Math.round(40 - subT * 20)}, ${Math.round(30 + subT * 10)})`;
        horizonColor = `rgb(${Math.round(100 - subT * 60)}, ${Math.round(90 - subT * 50)}, ${Math.round(40 + subT * 15)})`;
      }

      // Draw Sky Gradient
      const skyGrad = ctx.createLinearGradient(0, 0, 0, height * 0.85);
      skyGrad.addColorStop(0, topColor);
      skyGrad.addColorStop(0.5, midColor);
      skyGrad.addColorStop(1, horizonColor);
      ctx.fillStyle = skyGrad;
      ctx.fillRect(0, 0, width, height);

      // Render stars during night phase
      if (t > 0.65) {
        const starFade = Math.min((t - 0.65) / 0.25, 1);
        stars.forEach((star) => {
          star.alpha += star.speed;
          if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.s, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(234, 233, 220, ${Math.max(0, star.alpha) * starFade * 0.8})`;
          ctx.fill();
        });
      }

      // Render Moving Clouds
      cloudLayers.forEach((layer) => {
        layer.clouds.forEach((cloud) => {
          cloud.x += layer.speed;
          if (cloud.x - cloud.r * 2 > width) {
            cloud.x = -cloud.r * 2;
          }

          const cloudGrad = ctx.createRadialGradient(
            cloud.x,
            cloud.y,
            cloud.r * 0.1,
            cloud.x,
            cloud.y,
            cloud.r
          );

          let cloudTint = "rgba(48, 55, 45, 0.4)";
          if (t >= 0.25 && t <= 0.75) {
            cloudTint = "rgba(85, 75, 50, 0.5)";
          }

          cloudGrad.addColorStop(0, cloudTint);
          cloudGrad.addColorStop(0.85, "rgba(25, 29, 25, 0.25)");
          cloudGrad.addColorStop(1, "rgba(25, 29, 25, 0)");

          ctx.fillStyle = cloudGrad;
          cloud.puffOffsets.forEach((puff) => {
            ctx.beginPath();
            ctx.arc(cloud.x + puff.dx, cloud.y + puff.dy, puff.r, 0, Math.PI * 2);
            ctx.fill();
          });
        });
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [timeOfDay]);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[640px] max-h-[1100px] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* 1. Canvas Sky & Atmospheric Lighting Simulation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* 2. Mountain Diorama Landscape Visual */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        <img
          src={activeBackdrop === "image2" ? floatingCliffDioramaHero : dioramaCliffGoldenHour}
          alt={activeBackdrop === "image2" ? "Floating Ridge Diorama Landscape" : "Alpine Cliff Golden Hour Diorama"}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-85 transition-all duration-700"
        />

        {/* Deep Vignette Gradients for Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101210] via-[#101210]/75 via-45% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#101210]/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101210]/60 via-transparent to-[#101210]/50 pointer-events-none" />
      </div>

      {/* 3. Top Spacer & Availability Badge (Top Left) + Scenic Switcher (Top Right) */}
      <div className="relative z-20 pt-24 sm:pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full flex items-center justify-between">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101210]/85 backdrop-blur-md border border-[#30372D] text-xs font-mono text-[#C5FF42]">
          <span className="w-2 h-2 rounded-full bg-[#C5FF42] animate-pulse" />
          <span className="tracking-wide">AVAILABLE FOR WORK</span>
          <span className="text-[#92978B] hidden sm:inline">· 2026</span>
        </div>

        {/* Scenic Diorama Switcher Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              sounds.playTick();
              setActiveBackdrop((prev) => (prev === "image2" ? "image1" : "image2"));
            }}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101210]/90 backdrop-blur-md border border-[#30372D] hover:border-[#C5FF42]/60 text-xs font-mono text-[#92978B] hover:text-[#C5FF42] transition-all cursor-pointer shadow-lg group"
            title="Toggle between Image 2 (Website Horizon) and Image 1 (Golden Cliff)"
          >
            <ImageIcon className="w-3.5 h-3.5 text-[#C5FF42] group-hover:scale-110 transition-transform" />
            <span>
              {activeBackdrop === "image2" ? "Website Backdrop: Image 2" : "Website Backdrop: Image 1"}
            </span>
            <span className="text-[10px] text-[#C5FF42] border border-[#C5FF42]/30 px-1.5 py-0.2 rounded-full hidden sm:inline">
              Switch
            </span>
          </button>
        </div>
      </div>

      {/* 4. Bottom Row: Massive Typography (Left) & Intro + CTAs (Right) */}
      <div className="relative z-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Role Label & Giant Space Grotesk Display Headline */}
          <div className="col-span-12 lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#C5FF42]">
              <span className="w-2 h-2 rounded-full bg-[#C5FF42] animate-ping" />
              <span>Graphic Designer & Visual Storyteller</span>
            </div>

            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[8.5rem] xl:text-[9.5rem] font-bold tracking-tight text-[#EAE9DC] font-display leading-[0.88] select-none">
              Aryansh<span className="text-[#C5FF42]">*</span>
            </h1>
          </div>

          {/* Right Column: Short Description & Clean CTAs */}
          <div className="col-span-12 lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-[#EAE9DC]/85 font-sans leading-relaxed">
              I create social creatives, brand visuals, posters, advertisements and AI-assisted content that turn ideas into engaging visual experiences. Currently exploring 2D and 3D animation.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#C5FF42] hover:bg-[#d6ff6c] text-[#101210] font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#C5FF42]/20 group cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#191D19] hover:bg-[#232923] text-[#EAE9DC] border border-[#30372D] hover:border-[#C5FF42]/50 text-sm font-mono transition-all duration-200 cursor-pointer"
              >
                <span>Get in Touch</span>
              </a>
            </div>

            {/* Micro Tagline */}
            <div className="pt-2 text-xs font-mono tracking-[0.2em] text-[#92978B] uppercase">
              DESIGN × CONTENT × MOTION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
