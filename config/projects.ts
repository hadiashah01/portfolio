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
      "An independently developed salon website concept for presenting services, offers, galleries, business information, and appointment inquiries.",
    problem:
      "Customers needed a convenient way to explore salon services, view its work, find essential business information, and inquire about appointments without navigating multiple platforms.",
    solution:
      "Built a responsive Next.js interface with organized service and offer sections, an image gallery, location information, and direct WhatsApp inquiry links.",
    functionality: [
      "Browse salon services and promotional offers",
      "View portfolio imagery and business information",
      "Open direct external WhatsApp appointment inquiries",
      "Use the concept responsively across mobile and desktop layouts",
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
      "An independently developed restaurant website concept with a static menu, deals, business information, location details, and external ordering access.",
    problem:
      "Customers had to navigate separate platforms to explore the cafe's menu, discover deals, find its location, and access ordering options.",
    solution:
      "Created a responsive Next.js interface with a structured menu, deals, restaurant information, location details, and Foodpanda as an external ordering destination.",
    functionality: [
      "Browse static menu items and deals",
      "View restaurant and location information",
      "Contact the restaurant through available channels",
      "Continue ordering through Foodpanda, an external service",
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
      "A frontend course catalogue that demonstrates route-based course discovery, course detail navigation, and clear loading, error, and not-found states.",
    problem:
      "A learning platform requires an organized interface through which users can discover courses, explore course information, and navigate between different sections with clear feedback.",
    solution:
      "Built a multi-route Next.js application featuring a course catalogue, course detail pages, shared layouts, and dedicated loading, error, and not-found states.",
    functionality: [
      "Browse a course catalogue",
      "Navigate to individual course detail routes",
      "Use shared layouts and route-based navigation",
      "View loading, error, and not-found application states",
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
      "A simulated banking interface using mock account data to demonstrate account selection, balance updates, transfers, and transaction history.",
    problem:
      "Managing multiple accounts and tracking transactions requires a clear interface that keeps account information and transaction activity organized.",
    solution:
      "Implemented account selection, credit and debit operations, account-to-account transfers, dynamic balance updates, and transaction history using React state and reusable components.",
    functionality: [
      "Select between mock accounts",
      "Apply simulated credit and debit actions",
      "Transfer amounts between demo accounts",
      "Review dynamically updated balances and transaction history",
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
      "A responsive notes management application that allows users to create, view, and delete notes through an interactive interface.",
    problem:
      "Users need a straightforward workspace to organize written notes and manage them without repeatedly reloading the interface.",
    solution:
      "Developed a React-based notes interface with controlled inputs, dynamic note creation, deletion, conditional rendering, and responsive layouts.",
    functionality: [
      "Create notes through controlled form inputs",
      "View notes in a dynamic list",
      "Delete individual notes",
      "Manage notes during the current app session",
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
