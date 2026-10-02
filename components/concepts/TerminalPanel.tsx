"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";

const HELP_LINES = [
  { prompt: "$ kinzakhan --help", body: "commands: skills, projects, contact, ai-agent" },
];

const EXECUTE_LINE = '$ kinzakhan execute-agent --prompt "Summarize portfolio"';

const SUMMARY =
  "Kinza Khan is a full-stack and AI integration specialist building web apps with Next.js, TypeScript and AI integrations. Seven shipped projects, each with a live demo and a public repository.";

type Phase = "idle" | "help" | "execute" | "processing" | "done";

export default function TerminalPanel() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [typed, setTyped] = useState("");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clear = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const schedule = (fn: () => void, delay: number) => {
    timers.current.push(setTimeout(fn, delay));
  };

  const run = () => {
    clear();
    setPhase("idle");
    setTyped("");

    schedule(() => setPhase("help"), 150);
    schedule(() => setPhase("execute"), 1100);

    // Type the agent command character by character.
    for (let i = 1; i <= EXECUTE_LINE.length; i++) {
      schedule(() => setTyped(EXECUTE_LINE.slice(0, i)), 1400 + i * 28);
    }

    const typeEnd = 1400 + EXECUTE_LINE.length * 28;
    schedule(() => setPhase("processing"), typeEnd + 350);
    schedule(() => setPhase("done"), typeEnd + 2100);
  };

  useEffect(() => {
    run();
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative p-5 sm:p-8">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-white/8 pb-4">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-crimson-500/70" />
        </span>
        <span className="font-mono text-[11px] tracking-wide text-muted">~/kinza-portfolio — zsh</span>
        <span className="ml-auto rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-muted">
          Next.js runtime
        </span>
      </div>

      {/* Terminal body */}
      <div className="mt-5 min-h-[19rem] font-mono text-[13px] leading-relaxed sm:min-h-[21rem] sm:text-sm">
        {HELP_LINES.map((l) => (
          <div key={l.prompt}>
            <p className="text-chalk">{l.prompt}</p>
            {phase !== "idle" && <p className="text-mist">{l.body}</p>}
          </div>
        ))}

        {(phase === "execute" || phase === "processing" || phase === "done") && (
          <div className="mt-5 rounded-lg border-l-2 border-crimson-500 bg-crimson-500/[0.07] py-2 pl-4 pr-3">
            <p className="text-crimson-300">{typed}</p>
          </div>
        )}

        {phase === "processing" && (
          <p className="mt-4 flex items-center gap-2.5 text-mist">
            <span className="relative flex h-3 w-3" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-crimson-400 opacity-70" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-crimson-500" />
            </span>
            AI Agent processing
            <span className="text-crimson-400" aria-hidden="true">
              ▍
            </span>
          </p>
        )}

        {phase === "done" && (
          <div className="mt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-crimson-400">
              summary
            </p>
            <p className="mt-2 max-w-3xl text-mist">{SUMMARY}</p>
            <p className="mt-4 flex items-center gap-2 text-[11px] text-muted">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-crimson-500" aria-hidden="true" />
              agent finished in 1.9s
            </p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={run}
        className="mt-6 inline-flex items-center gap-2 rounded-full border border-crimson-400/30 bg-crimson-500/10 px-4 py-2 text-xs font-semibold text-crimson-200 transition-colors hover:border-crimson-400/60 hover:bg-crimson-500/20"
      >
        <RotateCcw size={14} aria-hidden="true" />
        Replay sequence
      </button>

      <span className="sr-only" aria-live="polite">
        {phase === "done" ? "Agent summary complete." : ""}
      </span>
    </div>
  );
}
