import { person } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:items-baseline sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {person.name}.{" "}
          <span className="font-serif italic">
            Set in Playfair Display and Inter, built with Next.js.
          </span>
        </p>
        {/* "#top" scrolls to the top of the page without needing an anchor. */}
        <a href="#top" className="shrink-0 transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
