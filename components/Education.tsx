import { education } from "@/data/cv";

export default function Education() {
  return (
    <div
      className="card-hover rounded-lg border border-border p-4 md:p-5 hover:border-accent/50"
      style={{ backgroundColor: "var(--card-bg)" }}
    >
      <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
        <span className="font-semibold text-foreground">{education.school}</span>
        <span className="text-muted">|</span>
        <span className="text-accent">{education.degree}</span>
      </div>
      <p className="mt-3 text-sm text-foreground">
        <span className="text-muted">Graduation thesis: </span>
        {education.thesis}
      </p>
      <p className="mt-1 text-xs text-muted">{education.thesisPeriod}</p>
    </div>
  );
}
