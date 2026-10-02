"use client";

import { useState } from "react";
import { AlertCircle, CheckCircle2, Download, Eye, FileText, Github, Linkedin, Loader2, Send } from "lucide-react";
import Section from "@/components/Section";
import { sendLead, type LeadResult } from "@/app/actions";
import { CONTACT_EMAIL, SOCIALS, WHATSAPP_DISPLAY, WHATSAPP_URL } from "@/lib/data";

/** CV is served from public/Kinza Khan.pdf — the space must stay URL-encoded. */
const CV_PATH = "/Kinza%20Khan.pdf";

const fieldStyle =
  "w-full rounded-xl border border-white/10 bg-navy/60 px-4 py-3.5 text-base text-chalk placeholder:text-muted " +
  "focus:border-crimson-400/70 focus:bg-navy focus:outline-none focus:ring-4 focus:ring-crimson-500/12 " +
  "focus:shadow-[0_0_24px_-6px_rgba(216,30,54,0.55)] " +
  "transition-all duration-300";

const PROJECT_TYPES = [
  "Web app",
  "Business website",
  "API / backend",
  "AI integration",
  "Other",
];

const BUDGETS = ["Under $500", "$500 - $1,500", "$1,500 - $5,000", "$5,000+"];

export default function Contact() {
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<LeadResult | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setPending(true);
    setResult(null);

    try {
      const res = await sendLead(new FormData(form));
      setResult(res);
      if (res.ok) form.reset();
    } catch {
      setResult({ ok: false, message: "Something went wrong. Please try again." });
    } finally {
      setPending(false);
    }
  }

  const socialLinks = [
    { href: SOCIALS.linkedin, label: "LinkedIn", Icon: Linkedin, action: "Connect" },
    { href: SOCIALS.github, label: "GitHub", Icon: Github, action: "View Repos" },
  ];

  return (
    <Section
      id="contact"
      badge="Contact"
      title="Have a project in mind?"
      intro="Tell me what you need and I'll get back to you within 24 hours. Send a few details through the form, or reach me directly on WhatsApp or email."
    >
      <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
        {/* Primary: WhatsApp + email */}
        <div className="flex flex-col gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glass glow-card group flex items-center gap-5 rounded-2xl border border-white/8 p-6 sm:p-7"
          >
            <span className="shrink-0 rounded-2xl border border-crimson-400/25 bg-navy/80 p-3.5 text-crimson-300 transition-colors group-hover:border-crimson-400/35 group-hover:text-crimson-200">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 7.079 2.898a9.83 9.83 0 012.894 7.085c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.9 11.9 0 005.683 1.448h.005c6.585 0 11.946-5.336 11.949-11.896a11.87 11.87 0 00-3.421-8.449" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block text-lg font-semibold tracking-[-0.01em] text-chalk transition-colors group-hover:text-crimson-200">
                Let&rsquo;s discuss your project
              </span>
              <span className="mt-0.5 block text-sm text-mist">
                WhatsApp &middot; {WHATSAPP_DISPLAY}
              </span>
            </span>
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="glass glow-card group flex items-center gap-5 rounded-2xl border border-white/8 p-6 sm:p-7"
          >
            <span className="shrink-0 rounded-2xl border border-crimson-400/25 bg-navy/80 p-3.5 text-crimson-300 transition-colors group-hover:border-crimson-400/35 group-hover:text-crimson-200">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block text-lg font-semibold tracking-[-0.01em] text-chalk transition-colors group-hover:text-crimson-200">
                Email me directly
              </span>
              <span className="mt-0.5 block break-all text-sm text-mist">{CONTACT_EMAIL}</span>
            </span>
          </a>

          <div className="glass glow-card rounded-2xl border border-white/8 p-6 sm:p-7">
            <div className="flex items-center gap-5">
              <span className="shrink-0 rounded-2xl border border-crimson-400/25 bg-navy/80 p-3.5 text-crimson-300">
                <FileText size={26} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-lg font-bold text-chalk">Curriculum Vitae</p>
                <p className="mt-0.5 text-sm text-mist">Open or save a PDF copy of my CV</p>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <a
                href={CV_PATH}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View CV (opens in a new tab)"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-crimson-400/30 bg-crimson-500 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:border-crimson-300 hover:bg-crimson-300"
              >
                <Eye size={16} aria-hidden="true" />
                <span>View CV</span>
              </a>
              <a
                href={CV_PATH}
                download
                aria-label="Download CV as a PDF"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-crimson-400/25 bg-navy/60 px-5 py-3 text-sm font-semibold text-mist transition-all duration-300 hover:border-crimson-400/35 hover:bg-crimson-400/[0.06] hover:text-crimson-200"
              >
                <Download size={16} aria-hidden="true" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {socialLinks.map(({ href, label, Icon, action }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glow-card group flex flex-col items-center gap-2.5 rounded-2xl border border-white/8 px-4 py-6 text-center"
              >
                <Icon
                  size={22}
                  aria-hidden="true"
                  className="text-crimson-400 transition-colors group-hover:text-crimson-300"
                />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  {label}
                </span>
                <span className="text-sm font-semibold text-chalk transition-colors group-hover:text-crimson-200">
                  {action}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="glass glow-card h-fit space-y-4 rounded-3xl border border-white/8 p-6 backdrop-blur-2xl sm:p-8"
        >
          <h3 className="text-lg font-semibold tracking-[-0.01em] text-chalk">Send project details</h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <label htmlFor="name" className="sr-only">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              placeholder="Your Name"
              className={fieldStyle}
            />

            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="Email Address"
              className={fieldStyle}
            />

            <div>
              <label htmlFor="type" className="sr-only">
                Project Type
              </label>
              <select id="type" name="type" defaultValue="Web app" className={fieldStyle}>
                {PROJECT_TYPES.map((o) => (
                  <option key={o} value={o} className="bg-void text-chalk">
                    {o}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="budget" className="sr-only">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue="$500 - $1,500"
                className={fieldStyle}
              >
                {BUDGETS.map((o) => (
                  <option key={o} value={o} className="bg-void text-chalk">
                    {o}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <label htmlFor="message" className="sr-only">
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            required
            minLength={10}
            rows={5}
            placeholder="Describe your project, timeline and goals..."
            className={`${fieldStyle} resize-y`}
          />

          <button
            type="submit"
            disabled={pending}
            className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-crimson-300/40 bg-crimson-500 px-6 py-4 font-bold text-white transition-all duration-300 hover:border-crimson-300 hover:bg-crimson-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? (
              <>
                <Loader2 size={18} aria-hidden="true" className="animate-spin" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={18} aria-hidden="true" />
                <span>Send Message</span>
              </>
            )}
          </button>

          <div role="status" aria-live="polite">
            {result && (
              <p
                className={`flex items-start gap-2.5 rounded-xl border px-4 py-3.5 text-sm font-medium ${
                  result.ok
                    ? "border-crimson-400/25 bg-crimson-400/[0.07] text-crimson-200"
                    : "border-red-500/30 bg-red-500/10 text-red-300"
                }`}
              >
                {result.ok ? (
                  <CheckCircle2 size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
                ) : (
                  <AlertCircle size={18} aria-hidden="true" className="mt-0.5 shrink-0" />
                )}
                <span>{result.message}</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </Section>
  );
}