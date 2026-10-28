import { caseStudies, earlierProjects } from "@/content/profile";
import type { CaseStudy } from "@/content/types";
import { ArrowUpRightIcon } from "./icons";
import { Section } from "./Section";

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="rounded-xl border border-rule bg-surface p-6 sm:p-8">
      <p className="text-sm text-muted">
        {study.href ? (
          <a
            href={study.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline-offset-4 hover:text-ink hover:underline"
          >
            {study.organisation}
            <ArrowUpRightIcon className="size-3" />
          </a>
        ) : (
          study.organisation
        )}{" "}
        · {study.period}
      </p>
      <h3 className="mt-2 font-serif text-2xl font-semibold tracking-tight">
        {study.title}
      </h3>

      <p className="mt-4 leading-relaxed text-muted">{study.context}</p>

      <ul className="mt-5 space-y-2.5">
        {study.contributions.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed">
            <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-muted" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 border-l-2 border-accent pl-4 leading-relaxed font-medium">
        {study.outcome}
      </p>

      <ul aria-label="Stack" className="mt-6 flex flex-wrap gap-2">
        {study.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-rule px-3 py-1 text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function SelectedWork() {
  return (
    <Section id="work" label="Selected work">
      <div className="space-y-6">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>

      <h3 className="mt-12 text-sm font-medium">Also</h3>
      <ul className="mt-3 space-y-3">
        {earlierProjects.map((project) => (
          <li key={project.name} className="leading-relaxed text-muted">
            <span className="font-medium text-ink">{project.name}</span>
            {": "}
            {project.description}
          </li>
        ))}
      </ul>
    </Section>
  );
}
