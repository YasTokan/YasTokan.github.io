import { person } from "@/content/profile";
import { ArrowUpRightIcon, DownloadIcon } from "./icons";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
        {person.role}
      </p>
      <h1
        id="hero-heading"
        className="mt-4 font-serif text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl"
      >
        {person.name}
      </h1>
      <p className="mt-3 text-lg text-muted sm:text-xl">{person.headline}</p>

      <p className="mt-10 max-w-2xl text-xl leading-relaxed sm:text-2xl sm:leading-relaxed">
        {person.lede}
      </p>

      <p className="mt-6 text-sm text-muted">
        {person.location} · {person.yearsOfExperience}
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href={person.cv}
          download
          className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
        >
          <DownloadIcon />
          Download CV
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-rule px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
        >
          Get in touch
        </a>
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 py-2.5 text-sm text-muted transition-colors hover:text-ink sm:px-3"
        >
          LinkedIn
          <ArrowUpRightIcon className="size-3.5" />
        </a>
      </div>
    </section>
  );
}
