import { experience } from "@/data/cv";
import TechStackDiagram from "./TechStackDiagram";

export default function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-3 top-0 bottom-0 w-px bg-border md:left-4" />
      <ul className="space-y-8">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative pl-10 md:pl-12">
            <span
              className="absolute left-0 w-3 h-3 rounded-full border-2 border-accent bg-background top-1.5 md:left-0.5"
              aria-hidden
            />
            <div
              className="card-hover rounded-lg border border-border p-4 md:p-5 hover:border-accent/50"
              style={{ backgroundColor: "var(--card-bg)" }}
            >
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <span className="font-semibold text-foreground">{job.company}</span>
                <span className="text-muted">|</span>
                <span className="text-accent">{job.role}</span>
                <span className="text-muted text-sm">{job.period}</span>
              </div>
              <div className="mt-2 text-sm text-muted">
                <span className="text-foreground/90">Product: </span>
                {job.products.join(", ")}
              </div>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {job.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block px-2 py-0.5 text-xs rounded border border-border bg-background/80 text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <TechStackDiagram techStack={job.techStack} />
              <ul className="mt-3 space-y-1.5 text-sm text-foreground list-disc list-inside">
                {job.responsibilities.map((r) => (
                  <li key={`${job.company}-${r.slice(0, 50)}`} className="leading-relaxed">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
