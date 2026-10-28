import { skillGroups } from "@/content/profile";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <dt className="font-medium">{group.name}</dt>
            <dd className="mt-2 leading-relaxed text-muted">
              {group.skills.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
