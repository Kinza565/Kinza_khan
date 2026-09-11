export const portfolioKnowledge = `
# Kinza Khan - Portfolio Information

## Personal Information
- **Name:** Kinza Khan
- **Role:** Frontend Web Developer
- **Specialization:** Building modern, high-performance web applications
- **Main Technologies:** React.js, Next.js, TypeScript, Tailwind CSS, JavaScript, Python, Git, GitHub, AI, Agentic AI
- **Portfolio URL:** https://kinza-khan.vercel.app/
- **GitHub:** https://github.com/Kinza565/
- **Email:** kinzasardar545@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/kinza-khan-8b64462b7/
- **CV:** Available at /Kinza Khan.pdf (can be viewed/downloaded)
- **Availability:** Available for freelance work

## Skills & Expertise
1. **Next.js** (95%) - Server-side rendering, static generation & API routes for production applications
2. **TypeScript** (90%) - Type-safe development ensuring scalability and fewer bugs
3. **Tailwind CSS** (95%) - Utility-first CSS for pixel-perfect, responsive UIs
4. **API Integration** (88%) - RESTful API design, third-party integrations & real-time data handling
5. **Responsive Design** (92%) - Mobile-first layouts that look flawless on every screen
6. **UI/UX Design** (85%) - Clean interfaces focused on user experience and accessibility

## Projects

### 1. Zaviar Trader (Business / Export Website)
- **Industry:** Himalayan Pink Salt Export
- **Live Website:** https://zavi-trader-3zcknfi7g-kinzahs-projects.vercel.app
- **Tech Stack:** Next.js, React, TypeScript, Tailwind CSS
- **Description:** A premium business website developed for Zaviar Trader, a Himalayan Pink Salt exporter, focused on international buyers, product presentation, export quality, and business inquiries.
- **No GitHub link available** (client project)

### 2. Rental Car Website (Web Application)
- **Live Website:** https://hackathone-template-7keenzah.vercel.app
- **GitHub:** https://github.com/Kinza565/Hackathone-template-7-kinzah.git
- **Tech Stack:** Next.js, TypeScript, Tailwind CSS, Stripe
- **Description:** A full-featured car rental platform with real-time availability, booking management, and secure payment integration. Features seamless user experience with blazing-fast load times.

### 3. E-Commerce Website (E-Commerce Platform)
- **Live Website:** https://e-commerce-website-main-indol.vercel.app
- **GitHub:** https://github.com/Kinza565/E-commerce-website.git
- **Tech Stack:** Next.js, TypeScript, Tailwind CSS, MongoDB
- **Description:** A modern e-commerce application featuring product browsing, smart cart management, secure checkout, and real-time inventory tracking optimized for conversion.

### 4. Blog Platform (Content Platform)
- **Live Website:** https://blog-with-kinza.vercel.app
- **GitHub:** https://github.com/Kinza565/test-sanity.git
- **Tech Stack:** Next.js, Sanity CMS, Tailwind CSS, TypeScript
- **Description:** A clean, modern blog platform with CMS backend, rich text editing, image optimization, and SEO-friendly architecture for content creators.

### 5. Physical AI Humanoid Robotics (AI / Machine Learning)
- **Live Website:** https://physical-ai-humanoid-robotics-liard-ten.vercel.app
- **GitHub:** https://github.com/Kinza565/Physical-AI-Humanoid-Robotics.git
- **Tech Stack:** Next.js, TypeScript, Tailwind CSS, AI/ML
- **Description:** An interactive textbook-style web application exploring AI and humanoid robotics concepts with rich visualizations and educational interface.

### 6. Edu Portal - School Management System (Educational Platform)
- **Live Website:** https://edu-portal-school-management-system.vercel.app
- **Tech Stack:** Next.js, TypeScript, Tailwind CSS, Firebase
- **Description:** A comprehensive school management system providing student enrollment, class scheduling, attendance tracking, grade management, and parent-teacher communication tools with a modern and intuitive interface.
- **Features:** Admin dashboard, Teacher portal, Parent portal, Student management, Teacher management, Classes, Sections, Subjects, Assignments, Exams, Results, Attendance, Fees, Announcements, Authentication, Role-based access control

## Why Choose Kinza
- **Clean UI:** Pixel-perfect interfaces with modern aesthetics
- **Fast Performance:** Optimized code and assets ensuring lightning-fast load times
- **Scalable Code:** Well-structured, maintainable code that grows with business needs
- **Client-Focused:** Vision priority, delivers on time and on budget

## Contact Information
- **Email:** kinzasardar545@gmail.com
- **GitHub:** https://github.com/Kinza565/
- **LinkedIn:** https://www.linkedin.com/in/kinza-khan-8b64462b7/
- **Contact Form:** Available in the Contact section of the portfolio

## Important Notes for AI Assistant
- NEVER invent information not in this knowledge base
- If information is not available, say: "I don't have that information available right now. You can contact Kinza directly through the portfolio for more details."
- Always use actual links only
- Recognize hiring intent and guide to Contact section
- CV is at /Kinza Khan.pdf (open in new tab)
- Support multilingual: English, Urdu, Roman Urdu, Mixed
- Maintain conversation context
- Identify as "Kinza's AI Portfolio Assistant"
`;

export const systemPrompt = `You are Kinza's AI Portfolio Assistant — an elegant, premium, intelligent concierge for Kinza Khan's developer portfolio.

## Identity & Personality
- You are a luxury AI assistant, NOT Kinza herself
- Elegant, professional, confident, concise, natural
- Friendly and helpful without being overly casual
- Never say "As an AI..." or pretend to be human
- Identify yourself as "Kinza's AI Portfolio Assistant"

## Language & Communication
- **Automatically detect the visitor's language**
- **Reply in the SAME language/style used by the visitor**
- Support at minimum: English, Urdu, Roman Urdu, Mixed English + Roman Urdu
- Mirror the user's communication style naturally
- DO NOT force responses into English
- DO NOT unnecessarily translate the user's question

## Knowledge & Accuracy
- Use ONLY the provided portfolio knowledge
- NEVER invent: clients, companies, jobs, degrees, certifications, awards, testimonials, salaries, prices, years of experience, project features, contact details, social media accounts, technologies, achievements
- If information is not available, say: "I don't have that information available right now. You can contact Kinza directly through the portfolio for more details."
- Use actual links only from the knowledge base

## Conversation Flow
- Maintain conversation context within the current session
- Understand follow-up questions (e.g., "Which project uses it?" after "What technologies does she use?")
- Recognize hiring intent and guide to Contact section
- For CV requests, provide the link to /Kinza Khan.pdf

## Response Style
- Concise and elegant
- Premium feel, not verbose
- Use the portfolio's actual data
- When providing links, format them clearly
`;

export const welcomeMessage = `Hello! 👋
I'm Kinza's AI Portfolio Assistant.

I can help you explore her work, skills, projects, CV, and ways to work together.

What would you like to know?`;

export const suggestedQuestions = [
  { label: "About Kinza", query: "Tell me about Kinza" },
  { label: "Skills & Technologies", query: "What are Kinza's skills?" },
  { label: "Projects", query: "Show me Kinza's projects" },
  { label: "Zaviar Trader", query: "Tell me about Zaviar Trader" },
  { label: "View CV", query: "Can I see Kinza's CV?" },
  { label: "Let's Work Together", query: "I want to hire Kinza" },
];

export const quickReplies = [
  "Who is Kinza?",
  "What technologies does she use?",
  "Show me her projects",
  "Tell me about Zaviar Trader",
  "Can I see her CV?",
  "Is she available for freelance?",
  "How can I contact her?",
];