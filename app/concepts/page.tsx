import type { Metadata } from "next";
import PanelFrame from "@/components/concepts/PanelFrame";
import TerminalPanel from "@/components/concepts/TerminalPanel";
import NodeGraphPanel from "@/components/concepts/NodeGraphPanel";
import DemoCardPanel from "@/components/concepts/DemoCardPanel";
import ParticlePanel from "@/components/concepts/ParticlePanel";
import AudioNavPanel from "@/components/concepts/AudioNavPanel";

export const metadata: Metadata = {
  title: "Interactive Portfolio Design Concepts",
  description:
    "Five interactive UI concepts for a developer portfolio: terminal showcase, node architecture visualiser, glassmorphic card hover, particle canvas and audio feedback toggle.",
  robots: { index: false, follow: false },
};

export default function ConceptsPage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      {/* Presentation canvas — plum on the left, desaturated navy-black on the right */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(105deg,#2A1440_0%,#1B0F26_28%,#120C1C_52%,#0C0F18_78%,#08090F_100%)]"
      />
      {/* Soft diffused crimson ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(58%_38%_at_12%_6%,rgba(216,30,54,0.16)_0%,transparent_62%),radial-gradient(46%_32%_at_88%_34%,rgba(122,32,168,0.18)_0%,transparent_65%)]"
      />
      <div aria-hidden="true" className="grid-bg pointer-events-none absolute inset-0 -z-20 opacity-50" />

      {/* Layered dark terrain curves at the base */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-56 w-full sm:h-72"
        viewBox="0 0 1440 260"
        preserveAspectRatio="none"
      >
        <path d="M0 118 C 240 56, 470 156, 760 118 C 1050 80, 1240 152, 1440 100 L1440 260 L0 260 Z" fill="#180F22" />
        <path d="M0 168 C 320 122, 560 190, 900 158 C 1160 134, 1310 186, 1440 156 L1440 260 L0 260 Z" fill="#0F0C18" />
        <path d="M0 214 C 360 182, 660 230, 1000 210 C 1220 198, 1340 224, 1440 212 L1440 260 L0 260 Z" fill="#08090F" />
      </svg>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-40 pt-24 sm:px-6 sm:pt-28">
        {/* Title */}
        <header className="max-w-3xl">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-crimson-400">
            <span className="h-px w-8 bg-crimson-500/60" aria-hidden="true" />
            Design showcase
          </p>
          <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-chalk sm:text-5xl">
            Interactive Portfolio Design Concepts
          </h1>
          <p className="mt-6 text-base leading-relaxed text-mist">
            Five interaction directions for the portfolio, each built as a working panel rather than a
            static mock. Move the pointer, hover the nodes and toggle the sound to see them behave.
          </p>
        </header>

        <div className="mt-20 space-y-20 sm:mt-24 sm:space-y-24">
          <PanelFrame
            index="01"
            title="Interactive Terminal Showcase"
            caption="A command surface in place of a conventional about block. The agent command types itself, a crimson node marks the AI agent working, and the summary resolves in place. Replayable at any time."
          >
            <TerminalPanel />
          </PanelFrame>

          <PanelFrame
            index="02"
            title="Interactive Node Architecture Visualizer"
            caption="How a request actually moves through the stack. Hover the FastAPI node and a crimson pulse runs outward along each connection, so the data path is legible instead of described."
          >
            <NodeGraphPanel />
          </PanelFrame>

          <PanelFrame
            index="03"
            title="Glassmorphic Live Demo Card Hover"
            caption="Project cards as dark glass with thin crimson edges. The focused card lifts on hover, a muted preview rises above the action, and the Live Demo button lights up."
          >
            <DemoCardPanel />
          </PanelFrame>

          <PanelFrame
            index="04"
            title="Custom Cursor & Particle Canvas"
            caption="A restrained particle network over deep plum. The pointer becomes a light source that draws nodes inward and leaves a short crimson trail, with a wide bokeh bloom behind it."
          >
            <ParticlePanel />
          </PanelFrame>

          <PanelFrame
            index="05"
            title="UI Audio Feedback & Toggle"
            caption="Navigation gains a quiet audio layer. Contact ripples on hover, and the speaker control mutes or restores a soft synthesised tone for UI feedback."
          >
            <AudioNavPanel />
          </PanelFrame>
        </div>
      </div>
    </div>
  );
}
