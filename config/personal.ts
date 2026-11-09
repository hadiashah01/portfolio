export const personal = {
  name: "Hadia Shahjahan",
  professionalTitle: "Frontend Developer",
  tagline:
    "Frontend developer building responsive, accessible web interfaces with React, Next.js, and modern CSS.",
  location: "Sialkot, Punjab, Pakistan",
  email: "hadiashah010@gmail.com",
  phone: "+92 334 7042123",
  github: "https://github.com/hadiashah01",
  linkedin: "https://www.linkedin.com/in/hadia-shahjahan",
  resumePath: "/assets/My_Resume.docx",
  availability: "Open to frontend development opportunities",
  intro:
    "I build responsive frontend experiences with React, Next.js, JavaScript, and Tailwind CSS. My work focuses on clear information architecture, semantic implementation, responsive behavior, and interfaces that remain usable across screen sizes and input methods.",
  currentFocus: [
    "Building polished, responsive interfaces with React and Next.js",
    "Applying responsive layouts through Flexbox, Grid, and component-based styling",
    "Implementing accessible interactions and clear interface states",
  ],
  technicalInterests: [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Bootstrap",
    "Responsive Design",
    "Accessibility",
  ],
  learningPhilosophy:
    "Strong interface work comes from clear structure, careful implementation, and repeated attention to responsive and accessible details.",
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "Git",
    "GitHub",
    "Responsive Web Design",
  ],
} as const;

export const homePageContent = {
  heroEyebrow: "Frontend Developer",
  heroTitle: "Frontend interfaces built for clarity and usability",
  heroDescription:
    "I build responsive web experiences with React, Next.js, and modern CSS, with practical attention to accessibility and interface structure.",
  primaryCtaLabel: "View Projects",
  secondaryCtaLabel: "Contact Me",
  currentFocusTitle: "Current focus",
  currentFocusDescription:
    "Building thoughtful experiences that balance clarity, performance, and accessibility.",
  featuredProjectsEyebrow: "Featured work",
  featuredProjectsTitle: "Selected projects",
  featuredProjectsDescription:
    "Independent projects that demonstrate responsive layouts, interaction design, and thoughtful frontend implementation.",
  skillsEyebrow: "Skills overview",
  skillsTitle: "Tools and strengths",
  skillsDescription:
    "Practical frontend technologies applied across responsive interfaces and interactive experiences.",
  journeyEyebrow: "Professional journey",
  journeyTitle: "Development milestones",
  journeyDescription:
    "Academic background and practical project work that shaped my frontend development direction.",
  ctaEyebrow: "Ready to connect?",
  ctaTitle: "Let’s build something together.",
  ctaDescription:
    "Open to frontend development opportunities, remote roles, freelance website projects, and professional collaborations.",
  ctaLinkLabel: "Start a Conversation",
};

export const aboutPageContent = {
  eyebrow: "About",
  title: "Frontend development with a practical, user-focused approach",
  description:
    "I turn interface requirements into responsive, accessible, and maintainable frontend experiences.",
  quickProfileTitle: "Quick profile",
  quickProfileDescription:
    "Based in Sialkot, Punjab, Pakistan. Open to frontend development opportunities.",
  currentFocusTitle: "Current focus",
  technicalInterestsTitle: "Technical interests",
  learningPhilosophyTitle: "Working approach",
};

export const projectsPageContent = {
  eyebrow: "Projects",
  title: "Selected work",
  description:
    "Independent frontend projects showing responsive implementation, interaction patterns, and interface structure.",
};

export const journeyPageContent = {
  eyebrow: "Journey",
  title: "Development journey",
  description:
    "A focused timeline of education and frontend projects that demonstrate practical implementation experience.",
  currentDirectionTitle: "Current direction",
  currentDirectionDescription:
    "Building responsive interfaces and expanding practical experience across React and Next.js.",
};

export const contactPageContent = {
  eyebrow: "Contact",
  title: "Start a conversation",
  description:
    "For frontend opportunities, remote roles, freelance website projects, or professional collaborations, use the form or contact me directly.",
  reachOutTitle: "Reach out",
  reachOutDescription:
    "Messages are reviewed directly. Include the role, project scope, timeline, or collaboration area that you would like to discuss.",
  formTitle: "Contact form",
  formDescription: "Fill out the form below to send a message directly to my inbox.",
  nameLabel: "Name",
  emailLabel: "Email",
  subjectLabel: "Subject",
  messageLabel: "Message",
  submitLabel: "Send Message",
};

export type Personal = typeof personal;
