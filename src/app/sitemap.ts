import type { MetadataRoute } from "next";
import { getArticles } from "@/content/articles";
import { person } from "@/content/profile";

// Required for `output: "export"` so the route is rendered at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${person.siteUrl}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${person.siteUrl}/articles/`, changeFrequency: "monthly", priority: 0.7 },
    ...getArticles().map((article) => ({
      url: `${person.siteUrl}/articles/${article.slug}/`,
      lastModified: article.updated ?? article.published,
      priority: 0.5,
    })),
  ];
}
