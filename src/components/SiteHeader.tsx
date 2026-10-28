import Link from "next/link";
import { person } from "@/content/profile";
import { DownloadIcon } from "./icons";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { ThemeToggle } from "./ThemeToggle";

export const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/articles/", label: "Articles" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    // Solid paper bar with a fine double rule, like a printed masthead. The
    // second line is drawn separately: a CSS double border collapses into one
    // line on scaled displays.
    <header className="sticky top-0 z-40 border-b border-muted/30 bg-bg after:pointer-events-none after:absolute after:inset-x-0 after:bottom-[3px] after:h-px after:bg-muted/30">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="font-serif text-lg font-semibold tracking-tight">
          {person.name}
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          <nav aria-label="Main" className="hidden md:block">
            <NavLinks items={navItems} />
          </nav>

          <a
            href={person.cv}
            download
            className="ml-1 inline-flex items-center gap-1.5 rounded-full border border-rule px-3.5 py-1.5 text-sm font-medium transition-colors hover:border-ink"
          >
            <DownloadIcon className="size-3.5" />
            CV
          </a>
          <ThemeToggle />
          <MobileMenu items={navItems} />
        </div>
      </div>
    </header>
  );
}
