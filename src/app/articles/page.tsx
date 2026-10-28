import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getArticles, getReadingMinutes } from "@/content/articles";

export const metadata: Metadata = {
  title: "Articles · Yasine Tokan",
  description: "Notes on AI tools, big data, and the systems I work with.",
  alternates: { canonical: "/articles/" },
};

export default async function ArticlesPage() {
  const articles = await Promise.all(
    getArticles().map(async (article) => ({
      ...article,
      minutes: await getReadingMinutes(article.slug),
    })),
  );

  return (
    <main id="main" className="mx-auto max-w-5xl px-4 pt-16 pb-24 sm:px-6 sm:pt-20">
      <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        Articles
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Notes on AI tools, big data, and the systems I work with.
      </p>

      <ul className="mt-12 divide-y divide-rule border-y border-rule">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link
              href={`/articles/${article.slug}/`}
              className="group grid gap-2 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8"
            >
              <time dateTime={article.published} className="text-sm text-muted tabular-nums sm:pt-1.5">
                {formatDate(article.published)}
              </time>
              <div>
                <h2 className="font-serif text-xl font-semibold tracking-tight decoration-accent decoration-1 underline-offset-[6px] group-hover:underline sm:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                  {article.summary}
                </p>
                <p className="mt-3 text-sm text-muted">
                  <span className="font-serif italic">{article.minutes} min read</span>
                  <span
                    aria-hidden="true"
                    className="ml-2 inline-block text-accent group-hover:translate-x-1 motion-safe:transition-transform"
                  >
                    →
                  </span>
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
