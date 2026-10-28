import Link from "next/link";
import { person } from "@/content/profile";

const linkClass =
  "underline decoration-muted/50 decoration-1 underline-offset-4 transition-colors hover:decoration-ink";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-16 pb-16 sm:pt-24 sm:pb-20">
      <h1
        id="hero-heading"
        className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl"
      >
        {person.name}
      </h1>
      <p className="mt-2 text-lg text-muted">
        {person.currentRole} ·{" "}
        <span className="whitespace-nowrap">{person.location}</span>
      </p>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed sm:text-xl sm:leading-relaxed">
        {person.intro}
      </p>

      <dl className="mt-8 grid max-w-2xl grid-cols-[5.5rem_1fr] gap-x-4 gap-y-2 sm:grid-cols-[7rem_1fr]">
        <dt className="text-muted">Currently</dt>
        <dd>{person.currently}</dd>

        <dt className="text-muted">Before</dt>
        <dd>{person.previously.join(" · ")}</dd>

        <dt className="text-muted">Writing</dt>
        <dd>
          <Link href="/articles/" className={linkClass}>
            Notes on AI and big data →
          </Link>
        </dd>
      </dl>

      <p className="mt-8 flex flex-wrap gap-x-2 gap-y-1">
        <a href={`mailto:${person.email}`} className={linkClass}>
          {person.email}
        </a>
        <span aria-hidden="true" className="text-muted">·</span>
        <a href={person.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
          LinkedIn
        </a>
        <span aria-hidden="true" className="text-muted">·</span>
        <a href={person.cv} download className={linkClass}>
          CV (PDF)
        </a>
      </p>
    </section>
  );
}
