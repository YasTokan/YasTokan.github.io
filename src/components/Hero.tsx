import { person } from "@/content/profile";
import { Ornament } from "./Ornament";

const linkClass =
  "underline decoration-muted/50 decoration-1 underline-offset-4 transition-colors hover:decoration-ink";

/** Letterhead-style intro, like the top of a formal CV. */
export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-16 pb-16 text-center sm:pt-24 sm:pb-20">
      <h1
        id="hero-heading"
        className="font-serif text-3xl font-semibold tracking-[0.14em] uppercase sm:text-5xl"
      >
        {person.name}
      </h1>
      {/* Role and location share a line on larger screens and stack on phones. */}
      <p className="mt-4 font-serif text-lg text-muted italic sm:text-xl">
        <span className="block sm:inline">{person.currentRole}</span>
        <span className="sr-only">, </span>
        <span aria-hidden="true" className="hidden sm:inline"> · </span>
        <span className="block sm:inline">{person.location}</span>
      </p>

      <Ornament className="mx-auto mt-8 max-w-xl" />

      <p className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-1">
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

      <p className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-balance sm:text-xl sm:leading-relaxed">
        {person.intro}
      </p>
    </section>
  );
}
