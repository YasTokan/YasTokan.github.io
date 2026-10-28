"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

type MobileMenuProps = {
  items: { href: string; label: string }[];
};

export function MobileMenu({ items }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="inline-flex size-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-rule/60 hover:text-ink"
      >
        {open ? <CloseIcon /> : <MenuIcon />}
      </button>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="absolute inset-x-0 top-16 border-b border-rule bg-bg"
        >
          <ul className="mx-auto max-w-5xl px-4 py-2 sm:px-6">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  // Close after the browser has followed the anchor; removing the
                  // link mid-click cancels the scroll to the section.
                  onClick={() => requestAnimationFrame(() => setOpen(false))}
                  className="block py-3 text-base text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
