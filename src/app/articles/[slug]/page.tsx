import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getArticle, getArticleHtml, getArticles } from "@/content/articles";
import { person } from "@/content/profile";

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
    title: `${article.title} · ${person.name}`,
    description: article.summary,
    alternates: { canonical: `/articles/${article.slug}/` },
    openGraph: {
      type: "article",
      url: `/articles/${article.slug}/`,
      title: article.title,
      description: article.summary,
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: [person.name],
    },
  };
}

export default async function ArticlePage(props: PageProps<"/articles/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const html = await getArticleHtml(article.slug);

  return (
    <main id="main" className="mx-auto max-w-5xl px-4 pt-12 pb-24 sm:px-6 sm:pt-16">
      <article className="mx-auto max-w-2xl">
        <Link href="/articles/" className="text-sm text-muted transition-colors hover:text-ink">
          ← All articles
        </Link>

        <h1 className="mt-8 font-serif text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
          {article.title}
        </h1>
        <p className="mt-4 text-sm text-muted">
          <time dateTime={article.published}>{formatDate(article.published)}</time>
          {article.updated && (
            <>
              {" · Updated "}
              <time dateTime={article.updated}>{formatDate(article.updated)}</time>
            </>
          )}
        </p>

        {/* Rendered from our own Markdown files at build time. */}
        <div
          className="article-body mt-10 border-t border-rule pt-10"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="mt-16 border-t border-rule pt-8">
          <Link href="/articles/" className="text-sm text-muted transition-colors hover:text-ink">
            ← All articles
          </Link>
        </div>
      </article>
    </main>
  );
}
