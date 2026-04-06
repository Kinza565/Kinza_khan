"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  duration?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.7,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
      scale: direction === "scale" ? 0.92 : 1,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Text reveal: wraps each word in a span that animates in */
export function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotateX: -30, opacity: 0 }}
            animate={
              isInView
                ? { y: "0%", rotateX: 0, opacity: 1 }
                : { y: "110%", rotateX: -30, opacity: 0 }
            }
            transition={{
              duration: 0.6,
              delay: delay + i * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
