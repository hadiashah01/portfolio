export type Project = {
  slug: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  learnings: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A polished personal portfolio designed to showcase projects, experience, and professional direction.",
    problem:
      "A developer portfolio needs to communicate credibility, clarity, and modern design without overwhelming the visitor.",
    solution:
      "I structured the experience around a clear content hierarchy, reusable components, and responsive sections that keep the narrative simple.",
    learnings: [
      "Design systems make it easier to scale visual consistency",
      "Strong content hierarchy improves clarity for recruiters and clients",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/hadia/portfolio",
    demoUrl: "",
    featured: true,
    image: "/images/projects/portfolio-placeholder.jpg",
  },
  {
    slug: "user-directory",
    title: "User Directory",
    description:
      "A directory experience focused on clear content presentation and thoughtful interaction patterns.",
    problem:
      "Large collections of user data can become difficult to scan without strong layout and filtering systems.",
    solution:
      "I focused on concise cards, responsive grids, and an interface that reduces friction while maintaining readability.",
    learnings: [
      "Readable card layouts improve scanning speed",
      "Small interaction states can make dense data feel approachable",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/hadia/user-directory",
    demoUrl: "",
    featured: true,
    image: "/images/projects/user-directory-placeholder.jpg",
  },
  {
    slug: "kitchen-garden",
    title: "Kitchen Garden",
    description:
      "A concept product experience for a home gardening and meal-planning workflow.",
    problem:
      "The experience needed to feel calm and grounded while still being interactive and informative.",
    solution:
      "I created a focused UI built around strong spacing, clear sections, and approachable visual storytelling.",
    learnings: [
      "Editorial design can make practical tools feel more inviting",
      "Balanced whitespace helps products feel more premium",
    ],
    technologies: ["React", "CSS Modules"],
    githubUrl: "https://github.com/hadia/kitchen-garden",
    demoUrl: "",
    featured: false,
    image: "/images/projects/kitchen-garden-placeholder.jpg",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
