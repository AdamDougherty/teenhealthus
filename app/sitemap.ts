import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/program-sponsor",
    "/program-sponsor/youth-nutrition-initiative",
    "/program-sponsor/dignity-kit-program",
    "/program-sponsor/land-initiative",
    "/our-why",
    "/get-involved",
    "/about",
    "/give-monthly",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${base}/our-why/${a.slug}`,
    lastModified: new Date(a.updated),
  }));

  return [...staticRoutes, ...articleRoutes];
}
