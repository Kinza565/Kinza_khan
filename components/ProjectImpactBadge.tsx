"use client";

import { TrendingUp, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProjectImpactBadgeProps {
  /** Outcome or metric summary, e.g. "Direct WhatsApp Lead Generation". */
  label: string;
  /** Icon variant: TrendingUp for growth, Zap for speed/automation. */
  icon?: LucideIcon;
  /** Accessible description of what the badge reports. */
  labelText?: string;
  size?: "sm" | "md";
  className?: string;
}

const SIZE_CLASSES = {
  sm: "gap-1.5 px-2.5 py-1 text-[10px]",
  md: "gap-2 px-3 py-1.5 text-xs",
} as const;

const ICON_SIZES = {
  sm: 12,
  md: 14,
} as const;

export default function ProjectImpactBadge({
  label,
  icon: Icon = TrendingUp,
  labelText = "Business impact",
  size = "sm",
  className = "",
}: ProjectImpactBadgeProps) {
  return (
    <span
      className={`inline-flex max-w-full items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 font-semibold tracking-[0.08em] text-emerald-400 uppercase transition-colors duration-300 hover:border-emerald-500/35 hover:bg-emerald-500/[0.14] ${SIZE_CLASSES[size]} ${className}`}
    >
      <Icon size={ICON_SIZES[size]} aria-hidden="true" className="shrink-0" />
      <span className="truncate">{label}</span>
      <span className="sr-only"> — {labelText}</span>
    </span>
  );
}

export { TrendingUp, Zap };