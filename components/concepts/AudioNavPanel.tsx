"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const LINKS = ["Projects", "About", "Contact"];

type Blip = "on" | "off" | "hover";

export default function AudioNavPanel() {
  const [soundOn, setSoundOn] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);

  /** Tiny synthesised blip — no audio asset required. */
  const blip = useCallback(
    (kind: Blip) => {
      if (!soundOn) return;
      try {
        const Ctor =
          window.AudioContext ??
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (!Ctor) return;

        if (!ctxRef.current) ctxRef.current = new Ctor();
        const ctx = ctxRef.current;
        if (ctx.state === "suspended") void ctx.resume();

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.value = kind === "off" ? 300 : kind === "hover" ? 920 : 640;
        const peak = kind === "hover" ? 0.018 : 0.05;
        const now = ctx.currentTime;

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(peak, now + 0.012);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

        osc.connect(gain).connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.18);
      } catch {
        // Audio is decorative — never let it break the panel.
      }
    },
    [soundOn]
  );

  return (
    <div className="relative p-5 sm:p-8">
      <nav
        aria-label="Concept navigation preview"
        className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/8 bg-navy/70 px-4 py-3 backdrop-blur-xl sm:px-6"
      >
        <span className="mr-1 flex items-center gap-2.5 text-sm font-semibold text-chalk">
          <span className="h-2 w-2 rounded-full bg-crimson-500" aria-hidden="true" />
          Kinza Khan
        </span>

        <ul className="ml-auto flex items-center gap-1">
          {LINKS.map((label) => {
            const isContact = label === "Contact";
            const active = hovered === label;
            return (
              <li key={label} className="relative">
                <a
                  href={`#${label.toLowerCase()}`}
                  onMouseEnter={() => {
                    setHovered(label);
                    blip("hover");
                  }}
                  onMouseLeave={() => setHovered((h) => (h === label ? null : h))}
                  aria-label={`${label} navigation link concept`}
                  className={`relative block rounded-lg px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                    active ? "text-crimson-200" : "text-mist hover:text-chalk"
                  }`}
                >
                  {isContact && active && (
                    <>
                      <motion.span
                        aria-hidden="true"
                        initial={{ scale: 0.6, opacity: 0.55 }}
                        animate={{ scale: 2.4, opacity: 0 }}
                        transition={{ duration: 1.1, ease: "easeOut", repeat: Infinity }}
                        className="absolute inset-0 rounded-lg border border-crimson-400/60"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 rounded-lg bg-crimson-500/12 shadow-[0_0_22px_-6px_rgba(216,30,54,0.9)]"
                      />
                    </>
                  )}
                  <span className="relative">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="ml-3 flex items-center gap-2.5 border-l border-white/8 pl-3">
          <span
            className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-300 ${
              soundOn
                ? "border-crimson-400/40 bg-crimson-500/10 text-crimson-200"
                : "border-white/10 text-muted"
            }`}
          >
            Sound: {soundOn ? "On" : "Off"}
          </span>
          <button
            type="button"
            onClick={() => {
              const next = !soundOn;
              setSoundOn(next);
              blip(next ? "on" : "off");
            }}
            aria-pressed={soundOn}
            aria-label={soundOn ? "Turn interface sound off" : "Turn interface sound on"}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-mist transition-colors hover:border-crimson-400/50 hover:text-crimson-200"
          >
            {soundOn ? (
              <Volume2 size={15} aria-hidden="true" />
            ) : (
              <VolumeX size={15} aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <p className="mt-4 text-xs text-muted">
        Hover CONTACT for the ripple, toggle the speaker for the audio state. Tone is synthesised in
        the browser, so it only plays after a click and needs no audio file.
      </p>
    </div>
  );
}
