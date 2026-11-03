export type Project = {
  slug: string;
  title: string;
  description: string;
  problem?: string;
  solution?: string;
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
    description:
      "A responsive salon website designed to bring service discovery, promotional offers, portfolio galleries, customer testimonials, and appointment inquiries into one cohesive digital experience.",
    problem:
      "Customers needed a convenient way to explore salon services, view its work, find essential business information, and inquire about appointments without navigating multiple platforms.",
    solution:
      "Developed a responsive Next.js website with organized service and offer sections, an image gallery, testimonials, location information, and direct WhatsApp appointment inquiries.",
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
    description:
      "A responsive restaurant website built to make menu browsing, deal discovery, business information, and online ordering more accessible.",
    problem:
      "Customers had to navigate separate platforms to explore the cafe's menu, discover deals, find its location, and access ordering options.",
    solution:
      "Created a responsive Next.js website with a structured menu, deals, restaurant information, location details, and an external Foodpanda ordering destination.",
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
    description:
      "A responsive learning platform interface featuring course discovery, course details, reusable layouts, and structured navigation.",
    problem:
      "A learning platform requires an organized interface through which users can discover courses, explore course information, and navigate between different sections with clear feedback.",
    solution:
      "Built a multi-route Next.js application featuring a course catalogue, course detail pages, shared layouts, and dedicated loading, error, and not-found states.",
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
    description:
      "An interactive banking dashboard for managing multiple accounts, performing transactions, and monitoring account balances through a component-based React interface.",
    problem:
      "Managing multiple accounts and tracking transactions requires a clear interface that keeps account information and transaction activity organized.",
    solution:
      "Implemented account selection, credit and debit operations, account-to-account transfers, dynamic balance updates, and transaction history using React state and reusable components.",
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
    description:
      "A responsive notes management application that allows users to create, view, and delete notes through an interactive interface.",
    problem:
      "Users need a straightforward workspace to organize written notes and manage them without repeatedly reloading the interface.",
    solution:
      "Developed a React-based notes interface with controlled inputs, dynamic note creation, deletion, conditional rendering, and responsive layouts.",
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
