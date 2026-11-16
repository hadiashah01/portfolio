export const personal = {
  name: "Hadia Shahjahan",
  professionalTitle: "Frontend Developer",
  tagline:
    "Frontend developer building responsive, well-structured websites with React, Next.js, and Tailwind CSS.",
  location: "Sialkot, Punjab, Pakistan",
  email: "hadiashah010@gmail.com",
  phone: "+92 334 7042123",
  github: "https://github.com/hadiashah01",
  linkedin: "https://www.linkedin.com/in/hadia-shahjahan",
  resumePath: "/assets/My_Resume.pdf",
  availability: "Open to website projects and frontend roles",
  intro:
    "I am a frontend developer based in Sialkot, Pakistan. I build websites for small businesses and frontend interfaces with React, Next.js, and Tailwind CSS. My work focuses on layouts that adapt cleanly to every screen, semantic markup, and interactions that work with a keyboard as well as a mouse. Since starting my BSCS at Virtual University of Pakistan in 2024, I have built salon and restaurant websites, a course catalogue, a banking dashboard, and a notes app, each shipped with a live demo and public source code.",
  currentFocus: [
    "Building responsive websites that work across phones, tablets, and desktops",
    "Writing semantic, accessible frontend code with React and Next.js",
    "Designing clear page structures that guide visitors to the next step",
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
  heroDescription:
    "I build responsive websites for small businesses, with clear layouts that work on any screen. My own projects use React, Next.js, and Tailwind CSS.",
  primaryCtaLabel: "See the work",
  secondaryCtaLabel: "Contact me",
  featuredProjectsEyebrow: "Featured work",
  featuredProjectsTitle: "Selected projects",
  featuredProjectsDescription:
    "Two independent business websites aimed at local customers, plus React and Next.js projects that show how I structure frontend work. Each one has a live demo and source code.",
  skillsEyebrow: "Skills",
  skillsTitle: "What I work with",
  skillsDescription:
    "The technologies behind my projects, from markup and styling to React application structure.",
  journeyEyebrow: "Journey",
  journeyTitle: "How I got here",
  journeyDescription:
    "Education and the independent projects behind my frontend experience.",
  ctaEyebrow: "Next step",
  ctaTitle: "Have a project in mind?",
  ctaDescription:
    "Tell me about your website, your timeline, or the role you are hiring for. Use the form or email me directly.",
  ctaLinkLabel: "Send a message",
};

export const aboutPageContent = {
  eyebrow: "About",
  title: "Frontend developer focused on clear, responsive websites",
  description:
    "I build responsive websites and frontend interfaces with React and Next.js, with close attention to how pages adapt across screens and how they work with a keyboard and screen reader.",
  quickProfileTitle: "Quick profile",
  quickProfileDescription:
    "Open to website projects and frontend roles.",
  currentFocusTitle: "Current focus",
  technicalInterestsTitle: "Technical interests",
  learningPhilosophyTitle: "Working approach",
};

export const projectsPageContent = {
  eyebrow: "Projects",
  title: "Selected work",
  description:
    "Two business websites and three React and Next.js applications, each with a live demo, source code, and a breakdown of what was built.",
};

export const journeyPageContent = {
  eyebrow: "Journey",
  title: "Development journey",
  description:
    "Education and independent projects that shaped my frontend work.",
  currentDirectionTitle: "Current direction",
  currentDirectionDescription:
    "Building responsive interfaces and expanding practical experience across React and Next.js.",
};

export const contactPageContent = {
  eyebrow: "Contact",
  title: "Start a conversation",
  description:
    "Whether you need a website for your business or a frontend developer for your team, use the form or contact me directly.",
  reachOutTitle: "Reach out",
  reachOutDescription:
    "Messages come straight to me. Share your role, project scope, timeline, or what you would like to discuss.",
  formTitle: "Send a message",
  formDescription: "Your message goes directly to my inbox.",
  nameLabel: "Name",
  emailLabel: "Email",
  subjectLabel: "Subject",
  messageLabel: "Message",
  submitLabel: "Send message",
};

export type Personal = typeof personal;
