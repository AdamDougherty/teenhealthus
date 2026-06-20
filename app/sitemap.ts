import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { articles } from "@/content/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");

  const staticRoutes = [
    "",
    "/about",
    "/faq",
    "/how-we-work",
    "/our-why",
    "/our-work",
    "/our-story",
    "/leadership",
    "/get-involved",
    "/volunteer",
    "/give-monthly",
    "/brand-partner",
    "/program-sponsor",
    "/program-sponsor/dignity-kit-program",
    "/program-sponsor/land-initiative",
    "/youth-nutrition-initiative",
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
