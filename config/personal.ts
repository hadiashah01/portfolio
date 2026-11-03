export const personal = {
  name: "Hadia Shahjahan",
  professionalTitle: "Frontend Developer",
  tagline:
    "I build thoughtful, accessible interfaces and polished web experiences with modern frontend tools.",
  location: "Sialkot, Punjab, Pakistan",
  email: "hadiashah010@gmail.com",
  phone: "+92 334 7042123",
  github: "https://github.com/hadiashah01",
  linkedin: "https://www.linkedin.com/in/hadia-shahjahan",
  resumePath: "/assets/My_Resume.docx",
  availability: "Open to frontend development opportunities",
  education: "BSCS (2nd Year • 4th Semester) - Virtual University of Pakistan",
  intro:
    "I am a Sialkot-based frontend developer currently pursuing a BSCS (2nd Year, 4th Semester) at the Virtual University of Pakistan. I build responsive, accessible web interfaces using HTML5, CSS3, JavaScript, React, Tailwind CSS, and Bootstrap. My focus is on turning UI designs into clean, semantic code while applying web accessibility standards and maintainable component design.",
  currentFocus: [
    "Building polished, responsive interfaces with React and Next.js",
    "Practicing responsive design using modern layouts like Flexbox and Grid",
    "Ensuring accessibility standards across web components",
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
    "I learn best by building real products, iterating carefully, and practicing core frontend skills through project recreation and cloning.",
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
  heroTitle: "Crafting thoughtful interfaces with clarity and care",
  heroDescription:
    "I build accessible, responsive experiences that balance clean implementation with polished design.",
  primaryCtaLabel: "View Projects",
  secondaryCtaLabel: "Contact Me",
  currentFocusTitle: "Current focus",
  currentFocusDescription:
    "Building thoughtful experiences that balance clarity, performance, and accessibility.",
  featuredProjectsEyebrow: "Featured work",
  featuredProjectsTitle: "Selected projects",
  featuredProjectsDescription:
    "A snapshot of work that reflects how I approach layout precision, frontend craft, and project recreation.",
  skillsEyebrow: "Skills overview",
  skillsTitle: "Tools and strengths",
  skillsDescription:
    "I enjoy building interfaces with a mix of practical implementation and clean styles.",
  journeyEyebrow: "Learning journey",
  journeyTitle: "Milestones and momentum",
  journeyDescription:
    "Academic learning combined with hands-on practice building clones and dynamic applications.",
  ctaEyebrow: "Ready to connect?",
  ctaTitle: "Let’s build something together.",
  ctaDescription:
    "I’m interested in frontend development opportunities, collaborative work, and projects where I can ship clean code.",
  ctaLinkLabel: "Start a Conversation",
};

export const aboutPageContent = {
  eyebrow: "About",
  title: "A focused developer with a core frontend background",
  description:
    "I care about making digital experiences feel easy to use, visually coherent, and responsive.",
  quickProfileTitle: "Quick profile",
  quickProfileDescription:
    "Based in Sialkot, Punjab, Pakistan. Open to frontend development opportunities.",
  currentFocusTitle: "Current focus",
  technicalInterestsTitle: "Technical interests",
  learningPhilosophyTitle: "Learning philosophy",
};

export const projectsPageContent = {
  eyebrow: "Projects",
  title: "Selected work",
  description:
    "Each project below highlights the problem, the solution, and the lessons learned in my development process.",
};

export const journeyPageContent = {
  eyebrow: "Journey",
  title: "How the work has evolved",
  description:
    "My journey is shaped by structured academic learning combined with continuous hands-on cloning and project practice.",
  currentDirectionTitle: "Current direction",
  currentDirectionDescription:
    "Pursuing my BSCS degree while building responsive layouts and expanding my frontend skills.",
};

export const contactPageContent = {
  eyebrow: "Contact",
  title: "Let’s talk",
  description:
    "Whether it’s a project idea, a job conversation, or a collaboration request, I’d be glad to connect.",
  reachOutTitle: "Reach out",
  reachOutDescription:
    "I typically reply within a few days and enjoy discussing frontend development.",
  formTitle: "Contact form",
  formDescription: "Fill out the form below to send a message directly to my inbox.",
  nameLabel: "Name",
  emailLabel: "Email",
  subjectLabel: "Subject",
  messageLabel: "Message",
  submitLabel: "Send Message",
};

export type Personal = typeof personal;
