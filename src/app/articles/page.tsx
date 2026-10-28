import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, getArticles } from "@/content/articles";

export const metadata: Metadata = {
  title: "Articles · Yasine Tokan",
  description: "Notes on AI tools, big data, and the systems I work with.",
  alternates: { canonical: "/articles/" },
};

export default function ArticlesPage() {
  const articles = getArticles();

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
                <h2 className="font-serif text-xl font-semibold tracking-tight underline-offset-4 group-hover:underline sm:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-2 max-w-2xl leading-relaxed text-muted">
                  {article.summary}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
