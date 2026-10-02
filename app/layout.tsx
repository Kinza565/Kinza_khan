import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { PROFILE_NAME, PROFILE_ROLE, SITE_URL } from "@/lib/data";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${PROFILE_NAME} | ${PROFILE_ROLE}`;
const description =
  "Kinza Khan is a full-stack and AI integration specialist building modern web applications with Next.js, React, TypeScript, Tailwind CSS, Python, Node.js, PostgreSQL, AI integration and agentic AI.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${PROFILE_NAME}`,
  },
  description,
  applicationName: `${PROFILE_NAME} Portfolio`,
  keywords: [
    "Kinza Khan",
    "Full-Stack & AI Integration Specialist",
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Python",
    "Node.js",
    "PostgreSQL",
    "AI Integration",
    "Agentic AI",
    "Portfolio",
  ],
  authors: [{ name: PROFILE_NAME }],
  creator: PROFILE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: `${PROFILE_NAME} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { email: true, address: false, telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#08090F",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-crimson-500/30">
        <div className="ambient-bg" aria-hidden="true" />
        <div className="noise-bg" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}