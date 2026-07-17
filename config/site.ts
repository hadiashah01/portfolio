import { personal } from "@/config/personal";

export const siteConfig = {
  name: personal.name,
  title: `${personal.name} | ${personal.professionalTitle}`,
  description: personal.tagline,
  keywords: [
    "frontend developer",
    "next.js",
    "typescript",
    "portfolio",
    "accessibility",
  ],
  author: personal.name,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "en_US",
  themeColor: "#0f4c5c",
  metadataDefaults: {
    openGraphImage: "/og/default-og-image.png",
    twitterCard: "summary_large_image",
  },
  links: {
    github: personal.github,
    linkedin: personal.linkedin,
    email: `mailto:${personal.email}`,
  },
} as const;

export type SiteConfig = typeof siteConfig;
