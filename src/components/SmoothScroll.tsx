"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const nestedScrollCache = new WeakMap<HTMLElement, boolean>();

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
      respectReducedMotion: true,
      stopInertiaOnNavigate: true,
      prevent: (node) => {
        if (node === document.documentElement || node === document.body) {
          return false;
        }

        const cached = nestedScrollCache.get(node);
        if (cached !== undefined) {
          return cached;
        }

        const { overflowY } = window.getComputedStyle(node);
        const shouldPrevent =
          ["auto", "scroll", "overlay"].includes(overflowY) &&
          node.scrollHeight > node.clientHeight;

        nestedScrollCache.set(node, shouldPrevent);
        return shouldPrevent;
      },
    });

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
