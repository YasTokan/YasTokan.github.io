import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  // Replaces the site-wide "index" rule, which would contradict Next's noindex.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main" className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 text-muted">
        It may have moved when the site was rebuilt.
      </p>
      <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-accent">
        <Link href="/" className="underline underline-offset-4">
          Back to the home page
        </Link>
        <Link href="/articles/" className="underline underline-offset-4">
          Read the articles
        </Link>
      </p>
    </main>
  );
}
