import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

const routes = ["", "/about", "/projects", "/journey", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
