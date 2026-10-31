import { person } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-muted sm:px-6">
        <p>
          {person.role} · {person.headline} · {person.location}
        </p>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
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
      </div>
    </footer>
  );
}
