"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const COUNT = 54;
const LINK_DIST = 132;
const PULL = 0.045;
const DAMPING = 0.94;

export default function ParticlePanel() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let nodes: Node[] = [];
    const pointer = { x: -9999, y: -9999, active: false };
    const trail: { x: number; y: number }[] = [];

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const target = Math.round(Math.min(COUNT, Math.max(24, (width * height) / 5200)));
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
      }));
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Cursor light trail
      if (pointer.active) {
        trail.push({ x: pointer.x, y: pointer.y });
        if (trail.length > 26) trail.shift();
      } else if (trail.length) {
        trail.shift();
      }
      for (let i = 0; i < trail.length; i++) {
        const t = i / trail.length;
        ctx.beginPath();
        ctx.fillStyle = `rgba(216, 30, 54, ${(t * 0.28).toFixed(3)})`;
        ctx.arc(trail[i].x, trail[i].y, 2 + t * 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Node motion + pointer attraction
      for (const n of nodes) {
        if (!reduce) {
          if (pointer.active) {
            const dx = pointer.x - n.x;
            const dy = pointer.y - n.y;
            const dist = Math.hypot(dx, dy) || 1;
            if (dist < 240) {
              n.vx += (dx / dist) * PULL;
              n.vy += (dy / dist) * PULL;
            }
          }
          n.vx *= DAMPING;
          n.vy *= DAMPING;
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.x = Math.min(width, Math.max(0, n.x));
          n.y = Math.min(height, Math.max(0, n.y));
        }
      }

      // Links
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > LINK_DIST) continue;
          const alpha = (1 - dist / LINK_DIST) * 0.22;
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha.toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Nodes
      for (const n of nodes) {
        const near =
          pointer.active && Math.hypot(pointer.x - n.x, pointer.y - n.y) < 130;
        ctx.beginPath();
        ctx.fillStyle = near ? "rgba(244, 70, 90, 0.95)" : "rgba(247, 245, 247, 0.62)";
        ctx.arc(n.x, n.y, near ? 2.4 : 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Cursor point
      if (pointer.active) {
        const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 46);
        glow.addColorStop(0, "rgba(216, 30, 54, 0.45)");
        glow.addColorStop(1, "rgba(216, 30, 54, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 46, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#F7F5F7";
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduce) raf = requestAnimationFrame(draw);
    };

    let raf = requestAnimationFrame(draw);

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div className="relative">
      <div className="relative h-[22rem] overflow-hidden sm:h-[26rem]">
        {/* Deep plum field */}
        <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_18%_0%,#2A1440_0%,#170E22_45%,#0C0F18_100%)]" />
        {/* Wide blurred crimson bokeh */}
        <div className="pointer-events-none absolute -bottom-10 left-1/2 h-56 w-[34rem] max-w-[120%] -translate-x-1/2 rounded-full bg-crimson-600/25 blur-[90px]" />
        <div className="pointer-events-none absolute right-8 top-6 h-40 w-64 rounded-full bg-crimson-500/15 blur-[80px]" />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-label="Interactive particle network: move the pointer to pull the nodes and leave a crimson trail."
          role="img"
        />

        <p className="pointer-events-none absolute bottom-4 left-5 text-[11px] uppercase tracking-[0.2em] text-muted">
          Move the pointer across the canvas
        </p>
      </div>
    </div>
  );
}
