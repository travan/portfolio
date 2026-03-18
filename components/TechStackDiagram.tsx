"use client";

const PALETTE = [
  "var(--accent)",      // green
  "var(--accent-amber)", // amber
  "#58a6ff",            // blue
  "#bc8cff",            // purple
  "#f778ba",            // pink
  "#79c0ff",            // light blue
  "#7ee787",            // light green
  "#ffa657",            // orange
];

function getColor(index: number) {
  return PALETTE[index % PALETTE.length];
}

interface TechStackDiagramProps {
  readonly techStack: string[];
  /** Optional weights 0–1 per tech for bar width (default: equal) */
  readonly weights?: number[];
}

export default function TechStackDiagram({
  techStack,
  weights,
}: TechStackDiagramProps) {
  if (techStack.length === 0) return null;

  const total = weights
    ? weights.reduce((a, b) => a + b, 0)
    : techStack.length;
  const segments = techStack.map((tech, i) => ({
    tech,
    width: weights ? (weights[i] / total) * 100 : 100 / techStack.length,
    color: getColor(i),
  }));

  return (
    <div className="mt-4 rounded overflow-hidden border border-border">
      <p className="text-xs text-muted px-3 py-1.5 border-b border-border bg-background/50">
        Tech footprint
      </p>
      <div className="flex h-3 w-full min-w-0" role="img" aria-label="Tech stack distribution">
        {segments.map(({ tech, width, color }) => (
          <div
            key={tech}
            className="transition-all duration-300 hover:opacity-90 min-w-[4px]"
            style={{
              width: `${width}%`,
              backgroundColor: color,
            }}
            title={tech}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-1.5 px-2 py-2 bg-card-bg">
        {segments.map(({ tech, color }) => (
          <span
            key={tech}
            className="inline-flex items-center gap-1.5 text-xs"
            style={{ color: "var(--foreground)" }}
          >
            <span
              className="w-2 h-2 rounded-sm shrink-0"
              style={{ backgroundColor: color }}
              aria-hidden
            />
            <span>{tech}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
