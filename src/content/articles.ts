// Article index. To add an article, write src/content/articles/<slug>.md and
// add an entry here; the list page shows them newest first.
import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import type { Article } from "./types";

const articles: Article[] = [
  {
    slug: "ai-avatar-tools-2025",
    title: "Top AI Avatar Tools in 2025: A New Era of Virtual Representation",
    summary:
      "AI-generated avatars are booming in popularity. A look at the most capable AI avatar platforms, their use cases, customization features, and pricing.",
    published: "2025-04-03",
    updated: "2025-06-10",
  },
  {
    slug: "hadoop-vs-spark",
    title: "Hadoop vs Apache Spark: Choosing the Right Big Data Engine",
    summary:
      "Hadoop and Apache Spark compared across architecture, performance, use cases, and ecosystem, to help you choose the right big data engine.",
    published: "2025-01-03",
    updated: "2025-02-22",
  },
  {
    slug: "openai-vs-anthropic-vs-deepseek",
    title: "OpenAI vs Anthropic vs DeepSeek",
    summary:
      "The differences and similarities between OpenAI, Anthropic, and DeepSeek: models, alignment strategies, safety, cost, stability, and ecosystem.",
    published: "2024-12-03",
    updated: "2025-02-10",
  },
  {
    slug: "mapreduce-vs-orange",
    title: "MapReduce vs Orange: Classic and Modern Data Tools",
    summary:
      "The traditional MapReduce paradigm compared with the visual Orange platform, focusing on usability, flexibility, and real-world applications.",
    published: "2024-09-24",
    updated: "2024-12-10",
  },
  {
    slug: "understanding-big-data",
    title: "Understanding Big Data: Concepts, Challenges, and Opportunities",
    summary:
      "An introduction to the 5 V's of Big Data, the technologies behind it, where it's used, and how Apache Superset fits into a Big Data stack.",
    published: "2023-04-03",
    updated: "2025-02-10",
  },
];

export function getArticles(): Article[] {
  return [...articles].sort((a, b) => b.published.localeCompare(a.published));
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

function readArticle(slug: string): Promise<string> {
  const file = path.join(process.cwd(), "src", "content", "articles", `${slug}.md`);
  return readFile(file, "utf8");
}

/** Reads an article's Markdown and renders it to HTML at build time. */
export async function getArticleHtml(slug: string): Promise<string> {
  return marked.parse(await readArticle(slug));
}

/** Estimated reading time in whole minutes, at about 200 words a minute. */
export async function getReadingMinutes(slug: string): Promise<number> {
  const words = (await readArticle(slug)).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
