export type Project = {
  slug: string;
  title: string;
  category?: string;
  projectType: string;
  description: string;
  problem?: string;
  solution?: string;
  functionality?: string[];
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "aaira-khan-salon-studio",
    title: "Aaira Khan Salon & Studio",
    category: "Salon website",
    projectType: "Independent website concept",
    description:
      "A salon website that brings services, offers, and portfolio photos into one place, with appointment inquiries sent straight to WhatsApp.",
    problem:
      "Customers had to check services, view the salon's work, find business details, and ask about appointments across separate platforms.",
    solution:
      "A responsive Next.js site with organized service and offer sections, an image gallery, location details, and direct WhatsApp inquiry links.",
    functionality: [
      "Browse services and current offers",
      "View gallery photos and business information",
      "Start appointment inquiries on WhatsApp",
      "Layouts that adapt to phones and desktops",
    ],
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "SEO",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/hadiashah01/aaira-khan-salon",
    demoUrl: "https://aaira-khan-salon.vercel.app/",
    featured: true,
    image: "/images/projects/aaira-khan-salon-studio.webp",
  },
  {
    slug: "fast-and-furious-cafe",
    title: "Fast & Furious Cafe",
    category: "Restaurant website",
    projectType: "Independent website concept",
    description:
      "A restaurant website that presents the menu, current deals, and location details on one page, with ordering handed off to Foodpanda.",
    problem:
      "Customers had to check the menu, deals, location, and ordering options across separate platforms.",
    solution:
      "A responsive Next.js site with a structured menu, deals section, restaurant information, location details, and a link to order on Foodpanda.",
    functionality: [
      "Browse the menu and current deals",
      "View restaurant and location information",
      "Contact the restaurant through the listed channels",
      "Continue ordering on Foodpanda, an external service",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Responsive Design",
    ],
    githubUrl: "https://github.com/hadiashah01/fast-and-furious-cafe",
    demoUrl: "https://fast-and-furious-cafe.vercel.app/",
    featured: true,
    image: "/images/projects/fast-and-furious-cafe.webp",
  },
  {
    slug: "learnhub",
    title: "LearnHub",
    category: "Learning platform",
    projectType: "Frontend project",
    description:
      "A course catalogue that shows how a learning site organises courses, course details, and route states like loading, error, and not found.",
    problem:
      "A learning site needs a clear path from a course list to a single course page, with visible feedback while pages load or fail.",
    solution:
      "A multi-route Next.js app with a catalogue, course detail pages, shared layouts, and dedicated loading, error, and not-found states.",
    functionality: [
      "Browse a catalogue of courses",
      "Open individual course pages by route",
      "Share layouts across routes",
      "See loading, error, and not-found states",
    ],
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Tailwind CSS",
      "App Router",
      "Error Handling",
    ],
    githubUrl: "https://github.com/hadiashah01/learnhub",
    demoUrl: "https://learnhub-two-kohl.vercel.app/",
    featured: true,
    image: "/images/projects/learnhub.webp",
  },
  {
    slug: "bank-account-manager",
    title: "Bank Account Manager",
    category: "Banking dashboard",
    projectType: "Frontend simulation",
    description:
      "A banking dashboard built on mock data to demonstrate account selection, transfers, balance updates, and transaction history.",
    problem:
      "Tracking several accounts and their transactions needs a layout that keeps balances and history readable as they change.",
    solution:
      "React components handle account selection, credit and debit actions, transfers between accounts, and a transaction log that updates with state.",
    functionality: [
      "Switch between mock accounts",
      "Record simulated credits and debits",
      "Transfer between demo accounts",
      "Watch balances and history update live",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "CSS",
      "State Management",
      "Component Architecture",
      "Responsive UI",
    ],
    githubUrl: "https://github.com/hadiashah01/bank-account-manager",
    demoUrl: "https://hadiashah01.github.io/bank-account-manager/",
    featured: true,
    image: "/images/projects/bank-account-manager.webp",
  },
  {
    slug: "notecraft-notes-app",
    title: "NoteCraft — Notes App",
    category: "Notes application",
    projectType: "Frontend project",
    description:
      "A notes app where you can add, view, and delete notes in a single interface, with no page reloads.",
    problem:
      "Writing quick notes is only useful if adding and removing them takes a click or two.",
    solution:
      "A React interface with controlled inputs, a live list, delete actions, and responsive layouts, all held in component state.",
    functionality: [
      "Add notes from a controlled form",
      "See notes appear in a live list",
      "Delete individual notes",
      "Keep notes for the current session",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "React Hooks",
      "State Management",
    ],
    githubUrl: "https://github.com/hadiashah01/react-notes-app",
    demoUrl: "https://hadiashah01.github.io/react-notes-app/",
    featured: false,
    image: "/images/projects/notecraft-notes-app.webp",
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 4);
