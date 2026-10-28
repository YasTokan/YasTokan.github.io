import { earlierRoles, experience } from "@/content/profile";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="space-y-12">
        {experience.map((role) => (
          <li key={`${role.company}-${role.start}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="text-lg font-semibold">
                {role.title}
                <span className="font-normal text-muted"> · {role.company}</span>
              </h3>
              <p className="shrink-0 text-sm text-muted tabular-nums">
                {role.start} – {role.end}
              </p>
            </div>
            <ul className="mt-4 space-y-2.5">
              {role.highlights.map((item) => (
                <li key={item} className="flex gap-3 leading-relaxed">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-muted" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>

      <h3 className="mt-14 text-sm font-medium">Earlier</h3>
      <ul className="mt-4 divide-y divide-rule border-y border-rule">
        {earlierRoles.map((role) => (
          <li
            key={role.company}
            className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-6"
          >
            <div>
              <p className="font-medium">
                {role.title}
                <span className="font-normal text-muted"> · {role.company}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {role.summary}
              </p>
            </div>
            <p className="shrink-0 text-sm text-muted tabular-nums">
              {role.start} – {role.end}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
