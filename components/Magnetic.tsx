"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  intensity?: number; // Allows customizing magnetic strength per button
}

export default function Magnetic({ children, className = "", intensity = 0.35 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for smooth cursor tracking
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Refined spring physics for snappy yet fluid magnetic elasticity
  const x = useSpring(mx, { stiffness: 200, damping: 15, mass: 0.1 });
  const y = useSpring(my, { stiffness: 200, damping: 15, mass: 0.1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Disable magnetic drag on touch devices to ensure smooth scrolling
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = (e.clientX - centerX) * intensity;
    const distanceY = (e.clientY - centerY) * intensity;

    mx.set(distanceX);
    my.set(distanceY);
  };

  const handleMouseLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}