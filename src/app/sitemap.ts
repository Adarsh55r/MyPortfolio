import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/profile";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, priority: 1 },
    ...projects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}/`, priority: p.featured ? 0.8 : 0.5 })),
  ];
}
