"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// --- TYPEWRITER TERMINAL COMPONENT ---
function TypewriterTerminal() {
  const terminalContent = [
    { text: "const devInfo = {", delay: 100 },
    { text: '  name: "Kinza",', delay: 150 },
    { text: '  role: "3D & Web Specialist",', delay: 200 },
    { text: '  focus: "UI/UX & Web Dev"', delay: 150 },
    { text: "};", delay: 100 },
    { text: "> npm run build", delay: 250 },
    { text: "✓ Compiling code...", isOutput: true, delay: 500 },
    { text: "✓ Verified TS types successfully!", isOutput: true, delay: 350 },
    { text: "✓ Bundle size: 42.8 kB (gzipped)", isOutput: true, delay: 250 },
    { text: "✓ Compiled successfully in 0.8s!", isOutput: true, delay: 600 },
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 450);
    return () => clearInterval(blinkInterval);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeItem = terminalContent[currentLine];

    if (!activeItem) {
      // Completed typing everything, hold for 6 seconds, then restart the cycle
      const resetTimer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentText("");
      }, 6000);
      return () => clearTimeout(resetTimer);
    }

    if (activeItem.isOutput) {
      // System outputs display instantly after their delay
      timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, activeItem.text]);
        setCurrentLine((c) => c + 1);
      }, activeItem.delay);
    } else {
      // Inputs are typed character-by-character
      if (currentText.length < activeItem.text.length) {
        timer = setTimeout(() => {
          setCurrentText((prev) => prev + activeItem.text[currentText.length]);
        }, 30); // Typing speed
      } else {
        // Line typed fully. Hold briefly, then commit to history and move on
        timer = setTimeout(() => {
          setDisplayedLines((prev) => [...prev, activeItem.text]);
          setCurrentText("");
          setCurrentLine((c) => c + 1);
        }, 350);
      }
    }

    return () => clearTimeout(timer);
  }, [currentLine, currentText]);

  return (
    <div className="font-mono text-[9px] sm:text-[10px] leading-normal text-cyan-400 select-none h-full flex flex-col justify-between p-3.5 bg-slate-950/90 rounded-lg">
      <div className="space-y-1 overflow-y-auto max-h-[135px] pr-1 scrollbar-thin">
        {displayedLines.map((line, idx) => (
          <div
            key={idx}
            className={`${
              line.startsWith("✓")
                ? "text-emerald-400 font-medium"
                : line.startsWith(">")
                ? "text-amber-400 font-semibold"
                : "text-cyan-400"
            }`}
          >
            {line}
          </div>
        ))}
        {currentLine < terminalContent.length && !terminalContent[currentLine].isOutput && (
          <div
            className={`${
              terminalContent[currentLine].text.startsWith(">")
                ? "text-amber-400 font-semibold"
                : "text-cyan-400"
            }`}
          >
            {currentText}
            {cursorVisible && (
              <span className="inline-block w-1.5 h-3.5 bg-cyan-400 ml-0.5 animate-pulse align-middle" />
            )}
          </div>
        )}
      </div>

      {/* Terminal status bar */}
      <div className="flex items-center justify-between border-t border-white/5 pt-1.5 mt-2 text-[8px] text-slate-500 font-sans">
        <span className="flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/70 animate-pulse" />
          bash
        </span>
        <span>TypeScript</span>
        <span>Ln {displayedLines.length + 1}, Col {currentText.length + 1}</span>
      </div>
    </div>
  );
}

// --- FLOATING BADGE COMPONENT ---
interface FloatingBadgeProps {
  name: string;
  icon: React.ReactNode;
  positionClass: string;
  glowColor: "cyan" | "magenta";
  duration: number;
  delay?: number;
  parallaxX: any;
  parallaxY: any;
}

function FloatingBadge({
  name,
  icon,
  positionClass,
  glowColor,
  duration,
  delay = 0,
  parallaxX,
  parallaxY,
}: FloatingBadgeProps) {
  const isCyan = glowColor === "cyan";
  const glowStyles = isCyan
    ? "from-cyan-500/20 to-teal-500/10 border-cyan-500/30 text-cyan-200"
    : "from-pink-500/20 to-fuchsia-500/10 border-pink-500/30 text-pink-200";

  const glowShadow = isCyan
    ? "shadow-[0_0_15px_rgba(34,211,238,0.25)]"
    : "shadow-[0_0_15px_rgba(236,72,153,0.25)]";

  return (
    <motion.div
      style={{ x: parallaxX, y: parallaxY }}
      className={`absolute z-20 ${positionClass} pointer-events-auto`}
    >
      <motion.div
        animate={{
          y: [0, -14, 0],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay,
        }}
        whileHover={{
          scale: 1.06,
          transition: { duration: 0.2 },
        }}
        className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border ${glowStyles} ${glowShadow} transition-all duration-300 group cursor-pointer`}
      >
        <div className="flex-shrink-0">{icon}</div>
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase font-sans">
          {name}
        </span>

        {/* Outer glowing aura on hover */}
        <div
          className={`absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r ${
            isCyan ? "from-cyan-500/15 to-transparent" : "from-pink-500/15 to-transparent"
          } blur-md -z-10 transition-opacity duration-300`}
        />
      </motion.div>
    </motion.div>
  );
}

// --- MAIN CENTER COMPONENT ---
export default function DevScene3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Motion values for tracking mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out mouse tracking movements using useSpring
  const springX = useSpring(mouseX, { stiffness: 90, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 20 });

  // Map normalized mouse inputs to tilting transformations
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);

  // Multi-layered parallax depth maps
  const bgX = useTransform(springX, [-0.5, 0.5], [-24, 24]);
  const bgY = useTransform(springY, [-0.5, 0.5], [-24, 24]);

  const avatarX = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const avatarY = useTransform(springY, [-0.5, 0.5], [-10, 10]);

  const laptopX = useTransform(springX, [-0.5, 0.5], [14, -14]);
  const laptopY = useTransform(springY, [-0.5, 0.5], [14, -14]);

  // Tech Badge parallax (independent speeds for high depth impact)
  const badgeNextX = useTransform(springX, [-0.5, 0.5], [-35, 35]);
  const badgeNextY = useTransform(springY, [-0.5, 0.5], [-35, 35]);

  const badgeReactX = useTransform(springX, [-0.5, 0.5], [30, -30]);
  const badgeReactY = useTransform(springY, [-0.5, 0.5], [-30, 30]);

  const badgeThreeX = useTransform(springX, [-0.5, 0.5], [-25, 25]);
  const badgeThreeY = useTransform(springY, [-0.5, 0.5], [25, -25]);

  const badgeTSX = useTransform(springX, [-0.5, 0.5], [35, -35]);
  const badgeTSY = useTransform(springY, [-0.5, 0.5], [35, -35]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Normalize mouse coords from center (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    // Reset spring to center position
    mouseX.set(0);
    mouseY.set(0);
  };

  // Custom Inline Tech SVG Icons
  const NextIcon = (
    <svg className="w-4 h-4 text-white" viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="black" />
      <path
        d="M149.508 157.52L69.142 54.2H54V125.8H65.021V68.04L134.421 157.065C139.721 152.614 144.75 147.585 149.508 142.285V157.52Z"
        fill="url(#next-grad)"
      />
      <rect x="115" y="54" width="11" height="71.8" fill="url(#next-grad)" />
      <defs>
        <linearGradient
          id="next-grad"
          x1="109"
          y1="116.5"
          x2="144.5"
          y2="160.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );

  const ThreeIcon = (
    <svg
      className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform duration-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );

  const ReactIcon = (
    <svg
      className="w-4 h-4 text-cyan-400 animate-[spin_15s_linear_infinite]"
      viewBox="0 0 100 100"
      fill="none"
    >
      <circle cx="50" cy="50" r="8" fill="#22d3ee" />
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="15"
        stroke="#22d3ee"
        strokeWidth="2.5"
        fill="none"
        transform="rotate(0, 50, 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="15"
        stroke="#22d3ee"
        strokeWidth="2.5"
        fill="none"
        transform="rotate(60, 50, 50)"
      />
      <ellipse
        cx="50"
        cy="50"
        rx="40"
        ry="15"
        stroke="#22d3ee"
        strokeWidth="2.5"
        fill="none"
        transform="rotate(120, 50, 50)"
      />
    </svg>
  );

  const TSIcon = (
    <svg className="w-4 h-4 rounded-sm" viewBox="0 0 100 100" fill="currentColor">
      <rect width="100" height="100" rx="12" fill="#3178c6" />
      <text
        x="50"
        y="75"
        fontSize="58"
        fontFamily="sans-serif"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
      >
        TS
      </text>
    </svg>
  );

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex flex-col items-center justify-center pointer-events-auto select-none"
      style={{ perspective: "1000px" }}
    >
      {/* 3D PARALLAX CONTAINER LAYER */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex flex-col items-center justify-center transition-all duration-300"
      >
        {/* --- 1. NEON BACKGROUND GLOWS (blur-[100px]) --- */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute inset-0 pointer-events-none -z-10"
        >
          {/* Soft Cyan Ambient Glow */}
          <div className="absolute top-[18%] left-[12%] w-[220px] h-[220px] rounded-full bg-cyan-500/15 blur-[100px]" />
          {/* Soft Magenta Ambient Glow */}
          <div className="absolute bottom-[20%] right-[12%] w-[220px] h-[220px] rounded-full bg-pink-500/15 blur-[100px]" />
        </motion.div>

        {/* --- 2. FLOATING TECH PILLS --- */}
        <FloatingBadge
          name="Next.js"
          icon={NextIcon}
          positionClass="top-[12%] left-[4%] sm:left-[8%]"
          glowColor="cyan"
          duration={5}
          delay={0.2}
          parallaxX={badgeNextX}
          parallaxY={badgeNextY}
        />
        <FloatingBadge
          name="React"
          icon={ReactIcon}
          positionClass="top-[8%] right-[4%] sm:right-[8%]"
          glowColor="magenta"
          duration={4.2}
          delay={0.8}
          parallaxX={badgeReactX}
          parallaxY={badgeReactY}
        />
        <FloatingBadge
          name="Three.js"
          icon={ThreeIcon}
          positionClass="bottom-[50%] left-[-4%] sm:left-[2%]"
          glowColor="cyan"
          duration={4.8}
          delay={1.5}
          parallaxX={badgeThreeX}
          parallaxY={badgeThreeY}
        />
        <FloatingBadge
          name="TypeScript"
          icon={TSIcon}
          positionClass="bottom-[45%] right-[-4%] sm:right-[2%]"
          glowColor="magenta"
          duration={5.5}
          delay={0.5}
          parallaxX={badgeTSX}
          parallaxY={badgeTSY}
        />

        {/* --- 3. CENTER AVATAR SETUP --- */}
        <motion.div
          style={{ x: avatarX, y: avatarY, transformStyle: "preserve-3d" }}
          className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] flex items-center justify-center z-10"
        >
          {/* Circular Cyber Backdrop Ring */}
          <div className="absolute w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full border border-cyan-500/10 bg-slate-950/20 backdrop-blur-sm -z-10 flex items-center justify-center shadow-[inset_0_0_30px_rgba(34,211,238,0.04)]">
            <div className="w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] rounded-full border border-dashed border-pink-500/10 animate-[spin_50s_linear_infinite]" />
          </div>

          {/* High-Fidelity 2.5D Developer Character Vector */}
          <svg
            className="w-full h-full drop-shadow-[0_12px_24px_rgba(2,6,23,0.7)]"
            viewBox="0 0 320 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* CHIC HIGH PONYTAIL */}
            {/* Hair Tie */}
            <ellipse cx="178" cy="62" rx="14" ry="7" fill="#ec4899" className="animate-pulse" />
            {/* Flowing Ponytail Tail */}
            <path
              d="M178,58 C130,25 85,75 75,135 C68,175 74,205 84,218 C88,223 94,220 92,210 C86,170 98,115 130,85 C152,65 168,65 178,58 Z"
              fill="#06070a"
            />
            {/* Ponytail Neon Cyan & Pink Highlights */}
            <path
              d="M168,62 C135,45 105,88 94,140 C88,175 92,195 94,204"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M162,64 C140,55 120,92 110,135"
              stroke="#ec4899"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />

            {/* Hair Bun / Top Crown */}
            <path
              d="M136,105 C136,75 156,65 178,65 C200,65 220,75 220,105 C220,128 200,142 178,142 C156,142 136,128 136,105 Z"
              fill="#080a0f"
            />
            {/* Crown highlights */}
            <path
              d="M142,95 C152,80 166,75 178,75"
              stroke="#22d3ee"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M178,75 C190,75 204,82 210,95"
              stroke="#ec4899"
              strokeWidth="1.2"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
            />

            {/* HEAD, NECK & STYLIZED SKIN */}
            {/* Neck */}
            <path d="M166,160 L166,185 L190,185 L190,160 Z" fill="#151926" />
            <path d="M166,160 L166,182 L178,185 L190,182 L190,160 Z" fill="#0e111a" />

            {/* Face/Head Base */}
            <path
              d="M148,105 C148,105 142,125 145,140 C147,152 153,162 160,168 C168,175 178,177 186,174 C193,170 198,160 200,150 C203,130 198,105 198,105 Z"
              fill="#1b2030"
            />
            {/* Face Neon Backlight (Cyan left-front screen emission) */}
            <path
              d="M146,128 C146,140 148,151 156,160 C162,165 170,169 178,170"
              stroke="#22d3ee"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            {/* Face Neon Backlight (Magenta right-side ambient) */}
            <path
              d="M198,125 C200,136 196,148 190,157 C186,162 181,165 178,166"
              stroke="#ec4899"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.65"
            />

            {/* FUTURISTIC DARK GLASSES / VISOR */}
            {/* Semitransparent Dark Glass Base */}
            <path
              d="M140,120 L206,120 C212,120 214,136 204,140 L142,140 C132,136 134,120 140,120 Z"
              fill="rgba(8, 12, 24, 0.9)"
              stroke="#22d3ee"
              strokeWidth="1.8"
            />
            {/* Visor internal pink glowing horizon */}
            <path
              d="M143,123 L203,123"
              stroke="#ec4899"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.65"
            />
            {/* Cybernetic Readout Grid Lines on the Glasses */}
            <line x1="148" y1="126" x2="154" y2="126" stroke="#22d3ee" strokeWidth="1" opacity="0.8" />
            <line x1="158" y1="126" x2="160" y2="126" stroke="#22d3ee" strokeWidth="1" opacity="0.8" />
            <line x1="148" y1="131" x2="151" y2="131" stroke="#22d3ee" strokeWidth="1" opacity="0.8" />
            <line x1="154" y1="131" x2="162" y2="131" stroke="#22d3ee" strokeWidth="1" opacity="0.8" />
            {/* Code / Signal pulses inside Visor */}
            <line x1="174" y1="128" x2="183" y2="128" stroke="#22d3ee" strokeWidth="1" opacity="0.7" />
            <line x1="174" y1="133" x2="188" y2="133" stroke="#ec4899" strokeWidth="1" opacity="0.7" />
            <line x1="192" y1="127" x2="199" y2="127" stroke="#22d3ee" strokeWidth="1" opacity="0.7" />

            {/* OVER-EAR HEADPHONES (Resting around neck) */}
            {/* Cushion/Band Wrapping */}
            <path
              d="M150,158 C150,180 196,180 196,158"
              stroke="#0b0d14"
              strokeWidth="14"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M150,158 C150,180 196,180 196,158"
              stroke="#22d3ee"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.6"
            />
            {/* Left Matte Earcup */}
            <rect x="135" y="146" width="16" height="26" rx="8" fill="#08090d" stroke="#1e293b" strokeWidth="1.5" />
            {/* Left Glowing LED Ring */}
            <rect x="138" y="149" width="10" height="20" rx="5" fill="none" stroke="#22d3ee" strokeWidth="1.5" className="animate-pulse" />
            {/* Right Matte Earcup */}
            <rect x="195" y="146" width="16" height="26" rx="8" fill="#08090d" stroke="#1e293b" strokeWidth="1.5" />
            {/* Right Glowing LED Ring */}
            <rect x="198" y="149" width="10" height="20" rx="5" fill="none" stroke="#22d3ee" strokeWidth="1.5" className="animate-pulse" />

            {/* STREETWEAR HOODIE */}
            {/* Main Hoodie Body */}
            <path
              d="M116,198 C116,198 100,208 90,234 C80,260 74,302 74,320 L270,320 C270,302 264,260 254,234 C244,208 228,198 228,198 L172,216 L116,198 Z"
              fill="#06070a"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="1.5"
            />
            {/* Hood opening collar layer */}
            <path
              d="M132,192 C132,170 146,164 172,164 C198,164 212,170 212,192 C212,207 198,216 172,216 C146,216 132,207 132,192 Z"
              fill="#08090d"
            />
            {/* Neon Cyan seam highlights */}
            <path
              d="M135,194 C135,178 147,171 172,171 C197,171 209,178 209,194"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.8"
              opacity="0.8"
            />
            {/* Left and Right Shoulder Neon Outlines */}
            <path d="M116,198 C106,208 98,222 91,238" fill="none" stroke="#22d3ee" strokeWidth="1.5" opacity="0.75" />
            <path d="M228,198 C238,208 246,222 253,238" fill="none" stroke="#ec4899" strokeWidth="1.2" opacity="0.6" />

            {/* Hoodie center zipper line */}
            <line x1="172" y1="216" x2="172" y2="275" stroke="#111520" strokeWidth="3" />
            {/* Neon Cyan Zipper Pull */}
            <rect x="170" y="224" width="4" height="12" rx="1.5" fill="#22d3ee" />

            {/* Hoodie drawstrings with active glowing tips */}
            {/* Left String */}
            <path d="M156,206 C151,222 148,242 154,258" fill="none" stroke="#11131a" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M156,206 C151,222 148,242 154,258" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
            {/* Right String */}
            <path d="M188,206 C193,222 196,242 190,258" fill="none" stroke="#11131a" strokeWidth="3.5" strokeLinecap="round" />
            <path d="M188,206 C193,222 196,242 190,258" fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" />
            {/* Drawstring Neon Glowing Bulbs */}
            <circle cx="154" cy="258" r="3" fill="#22d3ee" className="animate-pulse shadow-cyan" />
            <circle cx="190" cy="258" r="3" fill="#22d3ee" className="animate-pulse shadow-cyan" />

            {/* Holographic Chest Logo */}
            <path
              d="M162,246 L172,238 L182,246 L172,254 Z"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.5"
              opacity="0.6"
            />
          </svg>
        </motion.div>

        {/* --- 4. SLEEK DARK GLASSMORPHIC PERSPECTIVE DESK --- */}
        <div className="absolute bottom-4 sm:bottom-6 w-[86%] h-8 bg-slate-950/80 border border-t border-white/10 backdrop-blur-md rounded-b-2xl shadow-2xl skew-x-3 shadow-cyan-500/5 z-20">
          {/* Glass Top Glowing Desk Edge */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
        </div>

        {/* --- 5. INTERACTIVE TYPING LAPTOP CONTAINER --- */}
        <motion.div
          style={{ x: laptopX, y: laptopY }}
          className="absolute bottom-6 sm:bottom-9 z-30 w-[270px] sm:w-[325px] h-[175px] sm:h-[195px] flex flex-col group/laptop pointer-events-auto"
        >
          {/* Neon backlighting glow shadow underneath laptop */}
          <div className="absolute inset-0 bg-cyan-500/10 rounded-xl blur-xl opacity-80 group-hover/laptop:bg-cyan-500/15 transition-colors duration-300 pointer-events-none -z-10" />

          {/* SCREEN CONE GLOW OVERLAY ONTO THE AVATAR (Increases realism of lighting) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220%] h-[280%] bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.11)_0%,transparent_65%)] pointer-events-none z-10" />

          {/* --- LAPTOP BODY & CHASSIS --- */}
          <div className="relative w-full h-full bg-slate-900/95 border border-slate-700/60 rounded-xl shadow-2xl p-2 flex flex-col justify-between overflow-visible backdrop-blur-xl group-hover/laptop:border-cyan-500/40 transition-all duration-500">
            {/* GLOWING RED REC ● LIVE BADGE AT TOP-RIGHT */}
            <div className="absolute -top-3.5 -right-1.5 z-40 px-2.5 py-0.5 bg-slate-950/90 border border-red-500/40 rounded-full flex items-center gap-1.5 shadow-[0_0_12px_rgba(239,68,68,0.25)] select-none">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-80" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
              </span>
              <span className="text-[8px] font-extrabold tracking-widest text-red-500 uppercase font-sans">
                REC ● LIVE
              </span>
            </div>

            {/* SCREEN BEZEL & FRAME */}
            <div className="w-full h-[90%] bg-slate-950/90 rounded-lg border border-white/5 relative overflow-hidden flex flex-col">
              {/* Laptop screen notch/camera */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-3 bg-slate-950 rounded-b-md border-b border-white/5 flex items-center justify-center gap-1.5 z-25">
                <div className="w-1 h-1 rounded-full bg-slate-800" />
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 animate-pulse" />
              </div>

              {/* ACTIVE IDE TERMINAL WITH AUTO-TYPING CODE */}
              <div className="w-full h-full pt-1.5">
                <TypewriterTerminal />
              </div>
            </div>

            {/* LOWER LAPTOP KEYBOARD LIP & TRACKPAD */}
            <div className="w-full h-[6%] bg-gradient-to-b from-slate-800 to-slate-950 rounded-b-md border-t border-white/10 flex items-center justify-center relative">
              {/* Center Trackpad lines */}
              <div className="w-12 h-0.5 bg-slate-900 border-b border-white/5 rounded-full" />
              <div className="absolute left-2 w-4 h-0.5 bg-slate-900 border-b border-white/5 rounded-full" />
              <div className="absolute right-2 w-4 h-0.5 bg-slate-900 border-b border-white/5 rounded-full" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
