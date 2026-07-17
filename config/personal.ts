export const personal = {
  name: "Hadia",
  professionalTitle: "Frontend Developer",
  tagline:
    "I build thoughtful, accessible interfaces and polished web experiences with modern frontend tools.",
  location: "Available remotely",
  email: "hello@hadia.dev",
  github: "https://github.com/hadia",
  linkedin: "https://www.linkedin.com/in/hadia",
  resumePath: "/resume.pdf",
  profileImage: "/images/profile-placeholder.jpg",
  availability: "Open to internship and freelance opportunities",
  intro:
    "I am a frontend-focused developer who enjoys turning thoughtful design systems into clear, performant user experiences.",
  currentFocus: [
    "Building polished, responsive interfaces with Next.js and TypeScript",
    "Designing component systems that stay maintainable as products grow",
    "Improving accessibility and usability without sacrificing clarity",
  ],
  technicalInterests: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Accessibility",
    "Design Systems",
    "Performance",
  ],
  learningPhilosophy:
    "I learn best by building real products, iterating carefully, and documenting what works so the next version is clearer and stronger.",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Prisma",
    "Supabase",
    "Accessibility",
    "Responsive Design",
  ],
} as const;

export const homePageContent = {
  heroEyebrow: "Frontend developer",
  heroTitle: "Crafting thoughtful interfaces with clarity and care",
  heroDescription:
    "I build accessible, responsive experiences that balance product thinking with polished design.",
  primaryCtaLabel: "View Projects",
  secondaryCtaLabel: "Contact Me",
  currentFocusTitle: "Current focus",
  currentFocusDescription:
    "Building thoughtful experiences that balance clarity, performance, and accessibility.",
  featuredProjectsEyebrow: "Featured work",
  featuredProjectsTitle: "Selected projects",
  featuredProjectsDescription:
    "A snapshot of work that reflects how I approach product thinking, UI craft, and iterative improvement.",
  skillsEyebrow: "Skills overview",
  skillsTitle: "Tools and strengths",
  skillsDescription:
    "I enjoy building interfaces with a mix of practical implementation and thoughtful system design.",
  journeyEyebrow: "Learning journey",
  journeyTitle: "Milestones and momentum",
  journeyDescription:
    "The work is evolving from visual polish into deeper full-stack product thinking.",
  ctaEyebrow: "Ready to connect?",
  ctaTitle: "Let’s build something thoughtful together.",
  ctaDescription:
    "I’m interested in meaningful projects, collaborative product work, and opportunities to learn while shipping.",
  ctaLinkLabel: "Start a Conversation",
};

export const aboutPageContent = {
  eyebrow: "About",
  title: "A thoughtful developer with a product mindset",
  description:
    "I care about making digital experiences feel easy to use, visually coherent, and genuinely useful.",
  quickProfileTitle: "Quick profile",
  quickProfileDescription:
    "Based in a flexible remote setup. Open to internship and freelance opportunities.",
  currentFocusTitle: "Current focus",
  technicalInterestsTitle: "Technical interests",
  learningPhilosophyTitle: "Learning philosophy",
};

export const projectsPageContent = {
  eyebrow: "Projects",
  title: "Selected work",
  description:
    "Each project below highlights the problem, the solution, and the lessons learned in a case-study style format.",
};

export const journeyPageContent = {
  eyebrow: "Journey",
  title: "How the work has evolved",
  description:
    "The portfolio is being shaped by a mix of hands-on implementation, design thinking, and a focus on long-term maintainability.",
  currentDirectionTitle: "Current direction",
  currentDirectionDescription:
    "Building toward stronger product experiences and deeper full-stack fluency.",
};

export const contactPageContent = {
  eyebrow: "Contact",
  title: "Let’s talk",
  description:
    "Whether it’s a project idea, an internship conversation, or a collaboration request, I’d be glad to connect.",
  reachOutTitle: "Reach out",
  reachOutDescription:
    "I typically reply within a few days and enjoy discussing thoughtful product ideas.",
  formTitle: "Contact form",
  formDescription: "This form is styled and ready for Phase 2 integration.",
  nameLabel: "Name",
  emailLabel: "Email",
  subjectLabel: "Subject",
  messageLabel: "Message",
  submitLabel: "Send Message",
};

export type Personal = typeof personal;
