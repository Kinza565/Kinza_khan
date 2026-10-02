import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kinza — Web Developer | Modern, Fast & Scalable Websites",
  description:
    "I build modern, fast & scalable websites using Next.js, TypeScript, and Tailwind CSS. Let's bring your vision to life.",
  keywords: [
    "Web Developer",
    "Next.js Developer",
    "Frontend Developer",
    "React Developer",
    "TypeScript Developer",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Kinza" }],
  openGraph: {
    title: "Kinza — Web Developer",
    description:
      "I build modern, fast & scalable websites using Next.js & Tailwind CSS.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {`(() => { try { const t = localStorage.getItem('theme'); if (t === 'light') { document.documentElement.classList.add('light'); } else { document.documentElement.classList.add('dark'); } } catch (e) {} })();`}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <ThemeProvider>{children}</ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}