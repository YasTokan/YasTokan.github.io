import { education, languages } from "@/content/profile";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" label="Education">
      <ul className="space-y-5">
        {education.map((item) => (
          <li
            key={item.qualification}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
          >
            <div>
              <p className="font-medium">{item.qualification}</p>
              <p className="text-sm text-muted">{item.institution}</p>
            </div>
            <p className="shrink-0 text-sm text-muted tabular-nums">
              {item.period}
            </p>
          </li>
        ))}
      </ul>

      <h3 className="mt-12 text-sm font-medium">Languages</h3>
      <p className="mt-2 text-muted">
        {languages.map((language) => `${language.name} (${language.level})`).join(" · ")}
      </p>
    </Section>
  );
}
