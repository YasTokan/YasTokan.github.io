import { person } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted sm:flex-row sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {person.name}
        </p>
        <p>{person.location} · Built with Next.js</p>
      </div>
    </footer>
  );
}
