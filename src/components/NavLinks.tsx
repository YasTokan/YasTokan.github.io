"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinksProps = {
  items: { href: string; label: string }[];
};

/** Hash links point into the home page, so only page links can be current. */
export function isCurrentPath(pathname: string, href: string) {
  return !href.startsWith("/#") && pathname.startsWith(href.replace(/\/$/, ""));
}

export function NavLinks({ items }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-1">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
            className="px-3 py-2 text-sm text-muted decoration-muted/50 decoration-1 underline-offset-[6px] transition-colors hover:text-ink hover:underline aria-[current=page]:text-ink aria-[current=page]:underline aria-[current=page]:decoration-accent"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
