"use client";

import { useEffect, useRef } from "react";


interface BannerSVGProps {
  mouseX?: number;
  mouseY?: number;
}

export default function BannerSVG({ mouseX = 0.5, mouseY = 0.5 }: BannerSVGProps) {
  const meshRef = useRef<SVGGElement>(null);
  const orbsRef = useRef<SVGGElement>(null);


  useEffect(() => {
    if (!meshRef.current || !orbsRef.current) return;
    const px = (mouseX - 0.5) * 16;
    const py = (mouseY - 0.5) * 10;
    meshRef.current.style.transform = `translate3d(${px}px, ${py}px, 0)`;
    orbsRef.current.style.transform = `translate3d(${-px * 1.5}px, ${-py * 1.5}px, 0)`;
  }, [mouseX, mouseY]);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      <svg
        viewBox="0 0 600 180"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
        aria-hidden="true"
      >
        <defs>
          {/* Main Discord-style Cyber Aurora Gradient */}
          <linearGradient id="cyberBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0d0e15" />
            <stop offset="40%" stopColor="#151728" />
            <stop offset="70%" stopColor="#1a1c36" />
            <stop offset="100%" stopColor="#0f101a" />
          </linearGradient>

          {/* Electric Blurple Gradient */}
          <radialGradient id="blurpleGlow" cx="25%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#5865F2" stopOpacity="0.45" />
            <stop offset="50%" stopColor="#5865F2" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#5865F2" stopOpacity="0" />
          </radialGradient>

          {/* Cyan Flare */}
          <radialGradient id="cyanFlare" cx="80%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
          </radialGradient>

          {/* Magenta / Violet Aurora */}
          <radialGradient id="violetAurora" cx="50%" cy="80%" r="60%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#c084fc" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#9333ea" stopOpacity="0" />
          </radialGradient>

          {/* Subtle Cyber Grid Pattern */}
          <pattern id="cyberGrid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path
              d="M 24 0 L 0 0 0 24"
              fill="none"
              stroke="rgba(255, 255, 255, 0.04)"
              strokeWidth="0.75"
            />
          </pattern>
        </defs>

        {/* Base dark canvas */}
        <rect width="600" height="180" fill="url(#cyberBg)" />
        <rect width="600" height="180" fill="url(#cyberGrid)" />

        {/* Parallax Layer 1: Ambient Glowing Aurora Waves */}
        <g
          ref={meshRef}
          style={{
            transition: "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)",
            willChange: "transform",
          }}
        >
          <rect width="600" height="180" fill="url(#blurpleGlow)" />
          <rect width="600" height="180" fill="url(#cyanFlare)" />
          <rect width="600" height="180" fill="url(#violetAurora)" />

          {/* Stylized Cyber Curves */}
          <path
            d="M -50 140 Q 150 60 300 120 T 650 90"
            fill="none"
            stroke="url(#blurpleGlow)"
            strokeWidth="3"
            opacity="0.6"
          />
          <path
            d="M -20 160 Q 200 80 400 150 T 620 110"
            fill="none"
            stroke="rgba(0, 229, 255, 0.2)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
        </g>

        {/* Parallax Layer 2: Floating Constellation Nodes */}
        <g
          ref={orbsRef}
          style={{
            transition: "transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)",
            willChange: "transform",
          }}
        >
          {/* Subtle tech constellation points */}
          <circle cx="120" cy="50" r="2.5" fill="#5865F2" opacity="0.8" />
          <circle cx="210" cy="35" r="1.5" fill="#00e5ff" opacity="0.6" />
          <circle cx="340" cy="70" r="2" fill="#c084fc" opacity="0.7" />
          <circle cx="480" cy="45" r="3" fill="#5865F2" opacity="0.75" />
          <circle cx="530" cy="85" r="1.5" fill="#38bdf8" opacity="0.5" />

          {/* Connection lines */}
          <line x1="120" y1="50" x2="210" y2="35" stroke="rgba(88, 101, 242, 0.2)" strokeWidth="0.75" />
          <line x1="340" y1="70" x2="480" y2="45" stroke="rgba(192, 132, 252, 0.2)" strokeWidth="0.75" />
          <line x1="480" y1="45" x2="530" y2="85" stroke="rgba(0, 229, 255, 0.15)" strokeWidth="0.75" />
        </g>
      </svg>

      {/* Top Banner Badges (Discord Nitro Style) */}
      <div
        style={{
          position: "absolute",
          top: 14,
          left: 16,
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 2,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            padding: "4px 10px",
            borderRadius: 9999,
            background: "rgba(17, 18, 23, 0.75)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(88, 101, 242, 0.35)",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.4)",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#23a55a",
              boxShadow: "0 0 8px #23a55a",
            }}
          />
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.06em",
              color: "#e2e8f0",
              textTransform: "uppercase",
            }}
          >
            ACTIVE PROFILE
          </span>
        </div>
      </div>
    </div>
  );
}
