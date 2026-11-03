import { personal } from "@/config/personal";

export const siteConfig = {
  name: personal.name,
  title: `${personal.name} | ${personal.professionalTitle}`,
  description: personal.tagline,
  keywords: [
    "frontend developer",
    "next.js",
    "typescript",
    "react",
    "tailwind css",
    "bootstrap",
    "HTML5",
    "CSS3",
    "JavaScript",
    "responsive web design",
    "portfolio",
    "Hadia Shahjahan",
    "Sialkot",
    "Pakistan",
  ],
  author: personal.name,
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  locale: "en_US",
  themeColor: "#3ca2fa",
  links: {
    github: personal.github,
    linkedin: personal.linkedin,
    email: `mailto:${personal.email}`,
  },
} as const;

export type SiteConfig = typeof siteConfig;
