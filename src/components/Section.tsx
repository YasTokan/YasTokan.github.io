import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

/** A page section with a CV-style letter-spaced label in the left column. */
export function Section({ id, label, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-17 border-t border-rule py-16 sm:py-20"
    >
      <div className="grid gap-8 md:grid-cols-[11rem_1fr] md:gap-12">
        <h2
          id={headingId}
          className="text-xs font-medium tracking-[0.2em] text-muted uppercase md:pt-1.5"
        >
          {label}
        </h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
