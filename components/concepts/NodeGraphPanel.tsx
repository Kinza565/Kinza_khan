"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Node {
  id: string;
  label: string;
  sub: string;
  x: number;
  y: number;
  w: number;
  h: number;
  accent?: boolean;
}

const NODES: Node[] = [
  { id: "client", label: "Client UI", sub: "Next.js", x: 60, y: 170, w: 180, h: 74 },
  { id: "fastapi", label: "FastAPI", sub: "backend", x: 320, y: 80, w: 180, h: 74, accent: true },
  { id: "agent", label: "AI Agent", sub: "FastMCP", x: 320, y: 262, w: 180, h: 74 },
  { id: "db", label: "Neon DB", sub: "Postgres", x: 590, y: 170, w: 170, h: 74 },
];

const EDGES: { from: string; to: string }[] = [
  { from: "client", to: "fastapi" },
  { from: "fastapi", to: "agent" },
  { from: "fastapi", to: "db" },
  { from: "agent", to: "db" },
];

const center = (n: Node) => ({ x: n.x + n.w / 2, y: n.y + n.h / 2 });
const byId = (id: string) => NODES.find((n) => n.id === id)!;

export default function NodeGraphPanel() {
  const [pulseKey, setPulseKey] = useState(0);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative p-5 sm:p-8">
      <p className="mb-4 text-[11px] uppercase tracking-[0.2em] text-muted">
        Hover the FastAPI node to trace a request
      </p>

      <svg
        viewBox="0 0 820 400"
        className="h-auto w-full touch-none"
        role="img"
        aria-label="Architecture diagram: Client UI on Next.js connects to a FastAPI backend, which connects to an AI Agent running on FastMCP and to a Neon Postgres database; the AI Agent also connects to the database."
      >
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D81E36" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#D81E36" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Connections */}
        {EDGES.map((e) => {
          const a = center(byId(e.from));
          const b = center(byId(e.to));
          const lit = pulseKey > 0 && (e.from === "fastapi" || e.to === "fastapi");
          return (
            <g key={`${e.from}-${e.to}`}>
              <line
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="rgba(255,255,255,0.14)"
                strokeWidth={1.25}
              />
              {pulseKey > 0 && (
                <motion.circle
                  key={`pulse-${pulseKey}-${e.from}-${e.to}`}
                  r={4}
                  fill="#F4465A"
                  initial={{ cx: e.from === "fastapi" ? a.x : b.x, cy: e.from === "fastapi" ? a.y : b.y, opacity: 0 }}
                  animate={{
                    cx: e.from === "fastapi" ? b.x : a.x,
                    cy: e.from === "fastapi" ? b.y : a.y,
                    opacity: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 1.1,
                    delay: e.from === "fastapi" ? 0 : 0.55,
                    ease: "easeInOut",
                  }}
                />
              )}
              {lit && hovered && (
                <line
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  stroke="rgba(244,70,90,0.4)"
                  strokeWidth={1.25}
                />
              )}
            </g>
          );
        })}

        {/* Nodes */}
        {NODES.map((n) => {
          const isAccent = Boolean(n.accent);
          const isHot = isAccent && hovered;
          return (
            <g
              key={n.id}
              onMouseEnter={() => {
                if (!isAccent) return;
                setHovered(true);
                setPulseKey((k) => k + 1);
              }}
              onMouseLeave={() => isAccent && setHovered(false)}
              className={isAccent ? "cursor-pointer" : undefined}
            >
              {isHot && <circle cx={center(n).x} cy={center(n).y} r={130} fill="url(#nodeGlow)" />}
              <rect
                x={n.x}
                y={n.y}
                width={n.w}
                height={n.h}
                rx={14}
                fill={isAccent ? "rgba(48,28,62,0.72)" : "rgba(20,22,29,0.72)"}
                stroke={isAccent ? "rgba(244,70,90,0.45)" : "rgba(244,70,90,0.18)"}
                strokeWidth={1}
                style={{ backdropFilter: "blur(6px)", transition: "stroke 0.3s, fill 0.3s" }}
              />
              <text
                x={n.x + 18}
                y={n.y + 32}
                fill="#F7F5F7"
                fontSize={15}
                fontWeight={600}
                fontFamily="var(--font-sans)"
              >
                {n.label}
              </text>
              <text
                x={n.x + 18}
                y={n.y + 53}
                fill={isAccent ? "#FF8A93" : "#8A8290"}
                fontSize={12}
                fontFamily="var(--font-sans)"
              >
                {n.sub}
              </text>
              <circle
                cx={n.x + n.w - 16}
                cy={n.y + 16}
                r={3.5}
                fill={isAccent ? "#F4465A" : "rgba(255,255,255,0.22)"}
              />
            </g>
          );
        })}
      </svg>

      <p className="mt-4 text-xs text-muted">
        {hovered ? "Request in flight — FastAPI → neighbours" : "Idle — no request in flight"}
      </p>
    </div>
  );
}
