import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiBriefcase,
} from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { FaTwitter, FaPaperPlane } from "react-icons/fa";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kinza-khan-8b64462b7/",
    icon: FiLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/Kinza565",
    icon: FiGithub,
  },
  {
    name: "Email",
    href: "mailto:kinzasardar545@gmail.com",
    icon: FiMail,
  },
  {
    name: "X",
    href: "https://x.com/KinzaKhan183266",
    icon: FaTwitter,
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@falakhan54",
    icon: FaPaperPlane,
  },
];

export const freelanceLinks = [
  {
    name: "Upwork",
    href: "https://www.upwork.com/freelancers/~01a215d51a9b179a35",
    icon: FiBriefcase,
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/sellers/kinz_code/edit",
    icon: LuExternalLink,
  },
];

export const skills = [
  {
    name: "Next.js",
    description: "Server-side rendering, static generation & API routes for production applications",
    level: 95,
    color: "#000000",
  },
  {
    name: "TypeScript",
    description: "Type-safe development ensuring scalability and fewer bugs",
    level: 90,
    color: "#3178c6",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS for pixel-perfect, responsive UIs",
    level: 95,
    color: "#06b6d4",
  },
  {
    name: "API Integration",
    description: "RESTful API design, third-party integrations & real-time data handling",
    level: 88,
    color: "#10b981",
  },
  {
    name: "Responsive Design",
    description: "Mobile-first layouts that look flawless on every screen",
    level: 92,
    color: "#f59e0b",
  },
  {
    name: "UI/UX Design",
    description: "Clean interfaces focused on user experience and accessibility",
    level: 85,
    color: "#8b5cf6",
  },
];

export const projects = [
  {
    number: "01",
    title: "Zaviar Trader",
    category: "Business / Export Website",
    description:
      "Designed and developed a premium business website for Zaviar Trader, a Himalayan Pink Salt exporter, with a modern responsive interface focused on international buyers, product presentation, export quality, and business inquiries.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://zavi-trader-3zcknfi7g-kinzahs-projects.vercel.app",
    accent: "#0d9488",
    image: "/images/zaviar-trader.png",
  },
  {
    number: "02",
    title: "Rental Car Website",
    category: "Web Application",
    description:
      "A full-featured car rental platform with real-time availability, booking management, and secure payment integration. Features seamless user experience with blazing-fast load times.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://hackathone-template-7keenzah.vercel.app",
    githubUrl: "https://github.com/Kinza565/Hackathone-template-7-kinzah.git",
    accent: "#8b5cf6",
    image: "/images/rental-car.png",
  },
  {
    number: "03",
    title: "E-Commerce Website",
    category: "E-Commerce Platform",
    description:
      "A modern e-commerce application featuring product browsing, smart cart management, secure checkout, and real-time inventory tracking optimized for conversion.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://e-commerce-website-main-indol.vercel.app",
    githubUrl: "https://github.com/Kinza565/E-commerce-website.git",
    accent: "#ec4899",
    image: "/images/ecommerce.png",
  },
  {
    number: "04",
    title: "Blog Platform",
    category: "Content Platform",
    description:
      "A clean, modern blog platform with CMS backend, rich text editing, image optimization, and SEO-friendly architecture for content creators.",
    tech: ["Next.js", "Sanity CMS", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://blog-with-kinza.vercel.app",
    githubUrl: "https://github.com/Kinza565/test-sanity.git",
    accent: "#f59e0b",
    image: "/images/blog.png",
  },
  {
    number: "05",
    title: "Physical AI Humanoid Robotics",
    category: "AI / Machine Learning",
    description:
      "An interactive textbook-style web application exploring AI and humanoid robotics concepts with rich visualizations and educational interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI/ML"],
    liveUrl: "https://physical-ai-humanoid-robotics-liard-ten.vercel.app",
    githubUrl:
      "https://github.com/Kinza565/Physical-AI-Humanoid-Robotics.git",
    accent: "#10b981",
    image: "/images/ai-robotics.png",
  },
  {
    number: "06",
    title: "Edu Portal - School Management System",
    category: "Educational Platform",
    description:
      "A comprehensive school management system providing student enrollment, class scheduling, attendance tracking, grade management, and parent-teacher communication tools with a modern and intuitive interface.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    liveUrl: "https://edu-portal-school-management-system.vercel.app",
    accent: "#3b82f6",
    image: "/images/edu-portal.png",
  },
];

export const whyChooseMe = [
  {
    title: "Clean UI",
    description:
      "Pixel-perfect interfaces with modern aesthetics that leave a lasting impression on your users.",
    icon: "✨",
  },
  {
    title: "Fast Performance",
    description:
      "Optimized code and assets ensuring lightning-fast load times and excellent Core Web Vitals.",
    icon: "⚡",
  },
  {
    title: "Scalable Code",
    description:
      "Well-structured, maintainable code that grows seamlessly with your business needs.",
    icon: "🏗️",
  },
  {
    title: "Client-Focused",
    description:
      "Your vision is my priority. I deliver exactly what you need, on time and on budget.",
    icon: "🎯",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Kinza was an absolute pleasure. She delivered a beautiful, fast website that exceeded our expectations.",
    author: "Happy Client",
    role: "CEO",
  },
];

export { FiExternalLink, LuExternalLink };