import type { MetadataRoute } from "next";
import { getArticles } from "@/content/articles";
import { person } from "@/content/profile";

// Required for `output: "export"` so the route is rendered at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getArticles().map((article) => ({
    url: `${person.siteUrl}/articles/${article.slug}/`,
    lastModified: article.updated ?? article.published,
  }));
  const latestArticle = articles.map((article) => article.lastModified).sort().at(-1);

  return [
    // The home page changes with each deploy, so the build date is accurate.
    { url: `${person.siteUrl}/`, lastModified: new Date() },
    { url: `${person.siteUrl}/articles/`, lastModified: latestArticle },
    ...articles,
  ];
}
