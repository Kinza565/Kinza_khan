import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Book from "@/components/Book";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-crimson-400 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-void"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <TechStack />
        <Services />
        <Projects />
        <Blog />
        <Book />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}