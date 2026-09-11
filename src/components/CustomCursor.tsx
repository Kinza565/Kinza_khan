"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const cursorRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const updatePosition = useCallback((e: MouseEvent) => {
    cursorRef.current = { x: e.clientX, y: e.clientY };
    if (!isVisible) setIsVisible(true);
  }, [isVisible]);

  useEffect(() => {
    const animate = () => {
      setPosition({
        x: cursorRef.current.x,
        y: cursorRef.current.y,
      });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", updatePosition);
    rafRef.current = requestAnimationFrame(animate);

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    const handleHoverElements = () => {
      const hoverTargets = document.querySelectorAll(
        'a, button, [data-cursor="pointer"], input, textarea'
      );
      hoverTargets.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovering(true));
        el.addEventListener("mouseleave", () => setIsHovering(false));
      });
    };

    handleHoverElements();
    const observer = new MutationObserver(handleHoverElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(rafRef.current);
      observer.disconnect();
    };
  }, [updatePosition]);

  // Only show on desktop
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Cyan/Magenta glow aura */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9997] hidden md:block"
            animate={{
              x: position.x - 24,
              y: position.y - 24,
              scale: isHovering ? 2.2 : clicking ? 0.9 : 1,
              opacity: isHovering ? 0.35 : clicking ? 0.15 : 0.18,
            }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              x: { duration: 0.15, ease: "easeOut" },
              y: { duration: 0.15, ease: "easeOut" },
              scale: { duration: 0.35, ease: "easeOut" },
              opacity: { duration: 0.35 },
            }}
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/40 to-fuchsia-500/40 blur-xl" />
          </motion.div>

          {/* Outer ring */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
            animate={{
              x: position.x - 16,
              y: position.y - 16,
              scale: isHovering ? 1.6 : clicking ? 0.8 : 1,
              opacity: 1,
            }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              x: { duration: 0.12, ease: "easeOut" },
              y: { duration: 0.12, ease: "easeOut" },
              scale: { duration: 0.25, ease: "easeOut" },
              opacity: { duration: 0.25 },
            }}
          >
            <div
              className={`w-8 h-8 rounded-full border transition-colors duration-300 ${
                isHovering ? "border-white/70" : "border-cyan-400/50"
              }`}
            />
          </motion.div>

          {/* Inner dot */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
            animate={{
              x: position.x - 3,
              y: position.y - 3,
              scale: clicking ? 0.5 : 1,
            }}
            transition={{
              x: { duration: 0.04 },
              y: { duration: 0.04 },
              scale: { duration: 0.15 },
            }}
          >
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                isHovering
                  ? "bg-white scale-150"
                  : "bg-cyan-400"
              }`}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
