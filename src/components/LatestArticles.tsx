import Link from "next/link";
import { formatDate, getArticles } from "@/content/articles";
import { Section } from "./Section";

export function LatestArticles() {
  return (
    <Section id="articles" label="Articles">
      <ul className="divide-y divide-rule border-y border-rule">
        {getArticles()
          .slice(0, 3)
          .map((article) => (
            <li key={article.slug}>
              <Link
                href={`/articles/${article.slug}/`}
                className="group flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <h3 className="font-serif text-lg font-semibold tracking-tight decoration-accent decoration-1 underline-offset-[6px] group-hover:underline">
                  {article.title}
                </h3>
                <time
                  dateTime={article.published}
                  className="shrink-0 text-sm text-muted tabular-nums"
                >
                  {formatDate(article.published)}
                </time>
              </Link>
            </li>
          ))}
      </ul>

      <Link
        href="/articles/"
        className="mt-6 inline-block text-sm text-muted transition-colors hover:text-ink"
      >
        All articles →
      </Link>
    </Section>
  );
}
