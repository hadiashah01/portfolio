export const personal = {
  name: "Hadia Shahjahan",
  professionalTitle: "Frontend Developer",
  tagline:
    "Thoughtful websites. Carefully built. I build responsive web experiences for businesses and digital products.",
  location: "Sialkot, Punjab, Pakistan",
  email: "hadiashah010@gmail.com",
  phone: "+92 334 7042123",
  github: "https://github.com/hadiashah01",
  linkedin: "https://www.linkedin.com/in/hadia-shahjahan",
  resumePath: "/assets/My_Resume.docx",
  profileImage: "/images/profile.jpg",
  availability: "Open to frontend development opportunities",
  education: "BSCS (2nd Year • 4th Semester) - Virtual University of Pakistan",
  intro:
    "I am a frontend developer based in Sialkot, Punjab, Pakistan. I build responsive, well-crafted websites and digital experiences for businesses — with visual design, useful functionality, and clear communication. I focus on frontend work I can own from start to finish, using React, Next.js, Tailwind CSS, and modern web standards.",
  currentFocus: [
    "Building responsive websites for businesses and digital products",
    "Frontend development with React and Next.js",
    "Clear communication and maintainable component design",
  ],
  technicalInterests: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "JavaScript",
    "Responsive Design",
    "Accessibility",
  ],
  learningPhilosophy:
    "I learn best by building real products, iterating carefully, and practicing core frontend skills through project work.",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Responsive Web Design",
  ],
} as const;

export const homePageContent = {
  heroEyebrow: "Frontend Developer",
  heroTitle: "Thoughtful websites. Carefully built.",
  heroDescription:
    "I build responsive web experiences for businesses and digital products — bringing visual design, useful functionality, and clear communication together.",
  primaryCtaLabel: "Explore selected work",
  secondaryCtaLabel: "Discuss a project",
  currentFocusTitle: "What I build",
  currentFocusDescription:
    "Responsive websites and digital experiences for businesses, built with care and clear communication.",
  featuredProjectsEyebrow: "Selected work",
  featuredProjectsTitle: "Projects I've built",
  featuredProjectsDescription:
    "A selection of websites and digital experiences, each built with a clear purpose and thoughtful execution.",
  skillsEyebrow: "Tools",
  skillsTitle: "Frontend tools I work with",
  skillsDescription:
    "I build interfaces with React, Next.js, and Tailwind CSS — focused on clean implementation and maintainable code.",
  journeyEyebrow: "Background",
  journeyTitle: "How I work",
  journeyDescription:
    "I build real products, iterate carefully, and focus on frontend craft — from layout precision to accessible components.",
  ctaEyebrow: "Ready to connect?",
  ctaTitle: "Let's build something together.",
  ctaDescription:
    "Open to website projects and frontend development opportunities. Have something in mind? Let's talk.",
  ctaLinkLabel: "Start a Conversation",
};

export const aboutPageContent = {
  eyebrow: "About",
  title: "Frontend developer. Business websites. Thoughtful execution.",
  description:
    "I build responsive web experiences for businesses and digital products — focusing on frontend work I can own from start to finish.",
  quickProfileTitle: "Quick profile",
  quickProfileDescription:
    "Based in Sialkot, Punjab, Pakistan. Open to frontend development opportunities and website projects.",
  currentFocusTitle: "What I focus on",
  technicalInterestsTitle: "Frontend tools",
  learningPhilosophyTitle: "My approach",
};

export const projectsPageContent = {
  eyebrow: "Projects",
  title: "Selected work",
  description:
    "Each project below reflects how I approach layout precision, frontend craft, and clear communication.",
};

export const journeyPageContent = {
  eyebrow: "Background",
  title: "How my work has evolved",
  description:
    "Structured academic learning combined with continuous hands-on practice building responsive layouts and real products.",
  currentDirectionTitle: "Current direction",
  currentDirectionDescription:
    "Pursuing my BSCS degree while building responsive websites and expanding my frontend skills.",
};

export const contactPageContent = {
  eyebrow: "Contact",
  title: "Let's talk",
  description:
    "Whether it's a website project, a frontend opportunity, or a collaboration request, I'd be glad to connect.",
  reachOutTitle: "Reach out",
  reachOutDescription:
    "I typically reply within a few days and enjoy discussing frontend development and website projects.",
  formTitle: "Contact form",
  formDescription: "Fill out the form below to send a message directly to my inbox.",
  nameLabel: "Name",
  emailLabel: "Email",
  subjectLabel: "Subject",
  messageLabel: "Message",
  submitLabel: "Send Message",
};

export type Personal = typeof personal;