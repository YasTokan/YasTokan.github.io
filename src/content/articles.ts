// Article index. To add an article, write src/content/articles/<slug>.md and
// add an entry here; the list page shows them newest first.
import { readFile } from "node:fs/promises";
import path from "node:path";
import { marked } from "marked";
import type { Article } from "./types";

const articles: Article[] = [
  {
    slug: "self-hosted-rag-security",
    title: "Self-Hosted RAG Is Not Automatically Private",
    summary:
      "Running AI on your own servers decides who hosts your data, not who can reach it. What 2026 security research found about vector stores and RAG permissions.",
    topic: "AI",
    keywords: [
      "self-hosted RAG security",
      "RAG access control",
      "vector database security",
      "embedding inversion",
      "private AI",
      "RAG data leakage",
    ],
    published: "2026-10-31",
  },
  {
    slug: "databases-for-ai-agents",
    title: "When the Main User of Your Database Is an AI Agent",
    summary:
      "Agents query data nothing like people do. What 2026 research on agentic speculation, data agents and branching means for how we design data systems.",
    topic: "AI",
    keywords: [
      "AI agents and databases",
      "agentic speculation",
      "agent-first data systems",
      "data agents benchmark",
      "database branching for AI agents",
    ],
    published: "2026-10-31",
  },
  {
    slug: "bm25-vs-embeddings-company-data",
    title: "Why BM25 Beat Embeddings on Company Data: Lessons for RAG",
    summary:
      "New research shows keyword search beating embeddings on company knowledge. What EnterpriseRAG-Bench and the ICLR 2026 LIMIT paper mean for anyone building RAG.",
    topic: "AI",
    keywords: [
      "BM25 vs embeddings",
      "RAG retrieval",
      "enterprise RAG",
      "vector search limitations",
      "EnterpriseRAG-Bench",
      "hybrid search",
    ],
    published: "2026-10-31",
  },
  {
    slug: "ai-avatar-tools-2025",
    title: "Top AI Avatar Tools in 2025: A New Era of Virtual Representation",
    summary:
      "HeyGen, Synthesia, D-ID, Hour One and DeepBrain compared: the leading AI avatar tools, their use cases, customization features, and pricing.",
    topic: "AI",
    keywords: [
      "AI avatar tools",
      "AI avatar generator",
      "HeyGen",
      "Synthesia",
      "D-ID",
      "Hour One",
      "DeepBrain",
    ],
    published: "2025-04-03",
    updated: "2025-06-10",
  },
  {
    slug: "hadoop-vs-spark",
    title: "Hadoop vs Apache Spark: Choosing the Right Big Data Engine",
    summary:
      "Hadoop and Apache Spark compared across architecture, performance, use cases, and ecosystem, to help you choose the right big data engine.",
    topic: "Big data",
    keywords: [
      "Hadoop vs Spark",
      "Apache Hadoop",
      "Apache Spark",
      "big data engine",
      "big data processing",
    ],
    published: "2025-01-03",
    updated: "2025-02-22",
  },
  {
    slug: "openai-vs-anthropic-vs-deepseek",
    title: "OpenAI vs Anthropic vs DeepSeek: Models, Safety and Cost Compared",
    summary:
      "The differences and similarities between OpenAI, Anthropic, and DeepSeek: models, alignment strategies, safety, cost, stability, and ecosystem.",
    topic: "AI",
    keywords: [
      "OpenAI vs Anthropic",
      "OpenAI vs DeepSeek",
      "Anthropic vs DeepSeek",
      "AI model comparison",
      "AI safety",
    ],
    published: "2024-12-03",
    updated: "2025-02-10",
  },
  {
    slug: "mapreduce-vs-orange",
    title: "MapReduce vs Orange: Classic and Modern Data Tools",
    summary:
      "The traditional MapReduce paradigm compared with the visual Orange platform, focusing on usability, flexibility, and real-world applications.",
    topic: "Big data",
    keywords: [
      "MapReduce vs Orange",
      "MapReduce",
      "Orange data mining",
      "visual data analysis",
      "big data tools",
    ],
    published: "2024-09-24",
    updated: "2024-12-10",
  },
  {
    slug: "understanding-big-data",
    title: "Understanding Big Data: Concepts, Challenges, and Opportunities",
    summary:
      "An introduction to the 5 V's of Big Data, the technologies behind it, where it's used, and how Apache Superset fits into a Big Data stack.",
    topic: "Big data",
    keywords: [
      "what is big data",
      "5 Vs of big data",
      "big data technologies",
      "big data challenges",
      "Apache Superset",
    ],
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

/** Other articles, those on the same topic first. */
export function getRelatedArticles(article: Article, count = 2): Article[] {
  return getArticles()
    .filter((other) => other.slug !== article.slug)
    .sort((a, b) => Number(b.topic === article.topic) - Number(a.topic === article.topic))
    .slice(0, count);
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
