import { SOCIAL_LINKS, PROFILE_NAME, PROFILE_ROLE, CONTACT_EMAIL, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/8 bg-navy/40 px-5 py-14 sm:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-crimson-400/25 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-40 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-crimson-500/[0.04] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* Identity */}
          <div>
            <p className="text-xl font-semibold tracking-[-0.02em] text-chalk sm:text-2xl">{PROFILE_NAME}</p>
            <p className="mt-1.5 text-sm font-medium tracking-wide text-crimson-400">{PROFILE_ROLE}</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-mist">
              Building modern web applications with Next.js, React, TypeScript, Python and AI
              integration.
            </p>
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-crimson-500">Navigate</h2>
            <ul className="mt-5 space-y-3.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-mist transition-colors hover:text-crimson-300"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-crimson-500">Connect</h2>
            <ul className="mt-5 space-y-3.5">
              {SOCIAL_LINKS.map(({ href, label, Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : { rel: "noopener noreferrer" })}
                    className="group inline-flex items-center gap-2.5 text-sm text-mist transition-colors hover:text-crimson-400"
                  >
                    <Icon
                      size={16}
                      aria-hidden="true"
                      className="text-muted transition-colors group-hover:text-crimson-300"
                    />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-5 inline-block break-all text-sm text-muted transition-colors hover:text-crimson-300"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        {/* Base bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-mutedd-dim">
            &copy; {year} {PROFILE_NAME}. All rights reserved.
          </p>
          <p className="text-xs text-mutedd-dim">
            Built with Next.js, Tailwind CSS and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}