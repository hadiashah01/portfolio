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
  type?: "business" | "concept" | "technical";
};

export const projects: Project[] = [
  {
    slug: "the-kitchen-garden",
    title: "The Kitchen Garden",
    description:
      "A premium landing page for a hospitality destination, built with HTML and Tailwind CSS. Editorial-inspired layouts, responsive design, and modern UI components that bring a brand to life online.",
    problem:
      "Designing a high-fidelity visual layout that mirrors modern hospitality websites while staying performant and responsive.",
    solution:
      "Used Tailwind CSS utility classes to design editorial components, smooth spacing, and responsive headers that work across all device sizes.",
    learnings: [
      "Applying utility-first styling structures",
      "Visual spacing design principles",
    ],
    technologies: ["HTML5", "Tailwind CSS"],
    githubUrl: "https://github.com/hadiashah01/the-kitchen-garden",
    demoUrl: "https://hadiashah01.github.io/the-kitchen-garden/",
    featured: true,
    image: "/images/projects/the-kitchen-garden.png",
    type: "business",
  },
  {
    slug: "bbc-news-homepage-clone",
    title: "BBC News Homepage Clone",
    description:
      "A responsive BBC News homepage recreation built with HTML, CSS, and JavaScript. Displays dynamic news content fetched from an external API with DOM manipulation and responsive layouts.",
    problem:
      "Recreating a content-dense news portal layout that remains fully responsive across all device sizes.",
    solution:
      "Implemented clean semantic HTML elements and native CSS grids to map fetched dynamic content seamlessly.",
    learnings: [
      "DOM rendering optimization",
      "CSS grid placement techniques",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/hadiashah01/bbc-news-homepage-clone",
    demoUrl: "https://hadiashah01.github.io/bbc-news-homepage-clone/",
    featured: true,
    image: "/images/projects/bbc-news-homepage-clone.png",
    type: "technical",
  },
  {
    slug: "user-directory",
    title: "User Directory",
    description:
      "A responsive user directory built with HTML, CSS, Bootstrap, and JavaScript. Fetches user data from the JSONPlaceholder API with dynamic profile pages, URL parameter routing, loading states, and error handling.",
    problem:
      "Displaying external API directory listings dynamically with smooth routing and proper loading states.",
    solution:
      "Utilized JavaScript and Bootstrap to create layout grids fetching JSONPlaceholder endpoints with error handling.",
    learnings: [
      "Working with dynamic URL parameters in routing",
      "Managing state representation during REST API fetches",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/hadiashah01/user-directory",
    demoUrl: "https://hadiashah01.github.io/user-directory/",
    featured: true,
    image: "/images/projects/user-directory.png",
    type: "technical",
  },
  {
    slug: "winter-world-clone",
    title: "Winter World Clone",
    description:
      "A responsive front-end recreation of the Winter World Pakistan website, built with HTML and CSS. Practices modern layouts, Flexbox, media queries, and responsive web design for a commercial booking experience.",
    problem:
      "Replicating a commercial website's booking design to test layout precision across viewports.",
    solution:
      "Coded standard media queries and CSS layouts to support various viewport widths while preserving the original design intent.",
    learnings: [
      "Flexbox layout alignment",
      "Writing robust media queries",
    ],
    technologies: ["HTML5", "CSS3"],
    githubUrl: "https://github.com/hadiashah01/winterworld-lahore-clone",
    demoUrl: "https://hadiashah01.github.io/winterworld-lahore-clone/",
    featured: true,
    image: "/images/projects/winterworld-lahore-clone.png",
    type: "business",
  },
  {
    slug: "javascript-framework-sandbox",
    title: "JavaScript Framework Sandbox",
    description:
      "An organized workspace for experimenting with modern JavaScript frameworks and libraries in one place.",
    problem:
      "Need a unified workspace to explore and compare different JavaScript frameworks and libraries.",
    solution:
      "Created an organized repository with structured experiments for various modern JS frameworks.",
    learnings: [
      "Understanding different JavaScript framework paradigms",
      "Organizing multi-framework projects in a monorepo structure",
    ],
    technologies: ["JavaScript", "React", "TypeScript"],
    githubUrl: "https://github.com/hadiashah01/javascript-framework-sandbox",
    demoUrl: "",
    featured: false,
    image: "/images/projects/sandbox-placeholder.jpg",
    type: "technical",
  },
  {
    slug: "whatsapp-business-clone",
    title: "WhatsApp Business Platform Clone",
    description:
      "A responsive front-end recreation of the WhatsApp Business Platform website built with Tailwind CSS. Practices modern layouts, utility-first styling, and responsive UI implementation.",
    problem:
      "Cloning a premium enterprise interface with precise Tailwind configuration.",
    solution:
      "Engineered responsive UI grids using Tailwind CSS to mimic modern business dashboards.",
    learnings: [
      "Tailwind configuration practices",
      "Responsive container layout workflows",
    ],
    technologies: ["HTML5", "Tailwind CSS"],
    githubUrl: "https://github.com/hadiashah01/whatsapp-business-clone-tailwind",
    demoUrl: "https://hadiashah01.github.io/whatsapp-business-clone-tailwind",
    featured: false,
    image: "/images/projects/whatsapp-clone-placeholder.jpg",
    type: "concept",
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A full-stack personal portfolio built with React and Next.js, featuring responsive UI, contact management, and an admin dashboard for managing contact submissions.",
    problem:
      "A personal portfolio needs a secure way to collect contact queries and display dashboard metrics without relying on third-party form providers.",
    solution:
      "Built a Next.js full-stack site with a secure Prisma-integrated Supabase database, rate limiting, reCAPTCHA, and a protected dashboard.",
    learnings: [
      "Implementing Next.js middleware routing guards",
      "Handling database connections with Prisma 7 adapters",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma", "Supabase"],
    githubUrl: "https://github.com/hadiashah01/portfolio",
    demoUrl: "",
    featured: false,
    image: "/images/projects/portfolio-placeholder.jpg",
    type: "technical",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);