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
          {/* Outer ring */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
            animate={{
              x: position.x - 20,
              y: position.y - 20,
              scale: isHovering ? 1.8 : clicking ? 0.8 : 1,
              opacity: 1,
            }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{
              x: { duration: 0.15, ease: "easeOut" },
              y: { duration: 0.15, ease: "easeOut" },
              scale: { duration: 0.3, ease: "easeOut" },
              opacity: { duration: 0.3 },
            }}
          >
            <div
              className={`w-10 h-10 rounded-full border transition-colors duration-300 ${
                isHovering ? "border-white/60" : "border-primary/40"
              }`}
            />
          </motion.div>

          {/* Inner dot */}
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
            animate={{
              x: position.x - 4,
              y: position.y - 4,
              scale: clicking ? 0.5 : 1,
            }}
            transition={{
              x: { duration: 0.05 },
              y: { duration: 0.05 },
              scale: { duration: 0.2 },
            }}
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isHovering
                  ? "bg-white scale-150"
                  : "bg-primary"
              }`}
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
