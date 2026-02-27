import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/programs",
    "/learn",
    "/get-involved",
    "/about",
    "/give-monthly",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/learn/${a.slug}`,
    lastModified: new Date(a.updated),
  }));

  return [...staticRoutes, ...articleRoutes];
}
