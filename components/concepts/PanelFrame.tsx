import type { ReactNode } from "react";

interface PanelFrameProps {
  index: string;
  title: string;
  caption: string;
  children: ReactNode;
}

export default function PanelFrame({ index, title, caption, children }: PanelFrameProps) {
  return (
    <section className="relative">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-mono text-[11px] font-semibold tracking-[0.2em] text-crimson-400">
          {index}
        </span>
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-chalk sm:text-base">
          {title}
        </h2>
      </div>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist">{caption}</p>

      <div className="glass relative mt-6 overflow-hidden rounded-[1.75rem]">
        <span
          aria-hidden="true"
          className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-crimson-500/50 to-transparent"
        />
        {children}
      </div>
    </section>
  );
}
