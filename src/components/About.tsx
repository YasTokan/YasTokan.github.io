import { focusAreas, person } from "@/content/profile";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" label="About">
      <div className="max-w-2xl space-y-5 text-base leading-relaxed sm:text-lg sm:leading-relaxed">
        {person.summary.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <ul className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {focusAreas.map((area) => (
          <li key={area.title} className="border-t-2 border-accent pt-4">
            <h3 className="font-serif text-lg font-semibold">{area.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {area.description}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
