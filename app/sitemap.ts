import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/posts";

const SITE_URL = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/projects", "/blog"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const postRoutes = getAllSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...postRoutes];
}
