import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { Ornament } from "@/components/Ornament";
import {
  formatDate,
  getArticle,
  getArticleHtml,
  getArticles,
  getReadingMinutes,
  getRelatedArticles,
} from "@/content/articles";
import { person } from "@/content/profile";
import { articleSchema } from "@/content/schema";
import { sharedOpenGraph } from "@/content/seo";

// Only the articles in the index exist; required for the static export.
export const dynamicParams = false;

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/articles/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.summary,
    keywords: article.keywords,
    alternates: { canonical: `/articles/${article.slug}/` },
    openGraph: {
      ...sharedOpenGraph,
      type: "article",
      url: `/articles/${article.slug}/`,
      title: article.title,
      description: article.summary,
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: [`${person.siteUrl}/`],
      section: article.topic,
      tags: article.keywords,
    },
  };
}

export default async function ArticlePage(props: PageProps<"/articles/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const [html, minutes] = await Promise.all([
    getArticleHtml(article.slug),
    getReadingMinutes(article.slug),
  ]);
  const related = getRelatedArticles(article);

  return (
    <main id="main" className="mx-auto max-w-5xl px-4 pt-12 pb-24 sm:px-6 sm:pt-16">
      <JsonLd data={articleSchema(article)} />
      <article className="mx-auto max-w-2xl">
        <Link href="/articles/" className="text-sm text-muted transition-colors hover:text-ink">
          ← All articles
        </Link>

        <h1 className="mt-8 font-serif text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          {"By "}
          <Link href="/" rel="author" className="transition-colors hover:text-ink">
            {person.name}
          </Link>
          {" · "}
          <time dateTime={article.published}>{formatDate(article.published)}</time>
          {article.updated && (
            <>
              {" · Updated "}
              <time dateTime={article.updated}>{formatDate(article.updated)}</time>
            </>
          )}
          {/* Non-breaking spaces keep the reading time on one line. */}
          {` · ${minutes} min read`}
        </p>

        {/* Rendered from our own Markdown files at build time. */}
        <div
          className="article-body mt-10 border-t border-rule pt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <Ornament className="mx-auto mt-16 max-w-40" />

        <p className="mt-10 text-center font-serif text-muted italic">
          Written by{" "}
          <Link
            href="/"
            rel="author"
            className="text-ink underline decoration-muted/50 decoration-1 underline-offset-4 transition-colors hover:decoration-ink"
          >
            {person.name}
          </Link>
          , a Tech Lead in Dubai working on full stack systems and self-hosted AI.
        </p>

        <section aria-labelledby="related-heading" className="mt-14">
          <h2
            id="related-heading"
            className="text-xs font-medium tracking-[0.2em] text-muted uppercase"
          >
            More articles
          </h2>
          <ul className="mt-4 divide-y divide-rule border-y border-rule">
            {related.map((other) => (
              <li key={other.slug}>
                <Link
                  href={`/articles/${other.slug}/`}
                  className="block py-4 font-serif text-lg font-semibold tracking-tight decoration-accent decoration-1 underline-offset-[6px] hover:underline"
                >
                  {other.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8">
          <Link href="/articles/" className="text-sm text-muted transition-colors hover:text-ink">
            ← All articles
          </Link>
        </div>
      </article>
    </main>
  );
}
