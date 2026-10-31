import { person } from "@/content/profile";
import { ArrowUpRightIcon, DownloadIcon, MailIcon } from "./icons";
import { Section } from "./Section";

const linkClass =
  "inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink";

export function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="max-w-2xl text-lg leading-relaxed">
        I&apos;m based in Dubai, and email is the best way to reach me. I&apos;m
        always glad to talk about engineering leadership, AI on private data, or
        a system that has become hard to change.
      </p>

      <a
        href={`mailto:${person.email}`}
        className="mt-8 inline-flex items-center gap-3 font-serif text-2xl font-semibold tracking-tight break-all underline decoration-rule decoration-2 underline-offset-8 transition-colors hover:decoration-accent sm:text-3xl"
      >
        <MailIcon className="size-6 shrink-0" />
        {person.email}
      </a>

      <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm">
        <li>
          <a href={person.linkedin} target="_blank" rel="me noopener noreferrer" className={linkClass}>
            LinkedIn
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        </li>
        <li>
          <a href={person.github} target="_blank" rel="me noopener noreferrer" className={linkClass}>
            GitHub
            <ArrowUpRightIcon className="size-3.5" />
          </a>
        </li>
        <li>
          <a href={person.cv} download className={linkClass}>
            Download CV (PDF)
            <DownloadIcon className="size-3.5" />
          </a>
        </li>
      </ul>
    </Section>
  );
}
