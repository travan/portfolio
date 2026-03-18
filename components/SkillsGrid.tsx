"use client";

import { useInView } from "@/hooks/useInView";
import { skillGroups } from "@/data/cv";

export default function SkillsGrid() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skillGroups.map((group, groupIndex) => (
        <div
          key={group.category}
          className={`rounded-lg border border-border p-4 md:p-5 transition-all duration-300 hover:border-accent/30 ${
            inView ? "animate-in" : "opacity-0 translate-y-4"
          }`}
          style={
            inView
              ? {
                  backgroundColor: "var(--card-bg)",
                  animationDelay: `${groupIndex * 0.12}s`,
                  animationFillMode: "backwards",
                }
              : { backgroundColor: "var(--card-bg)" }
          }
        >
          <h3 className="text-accent-amber text-sm font-mono mb-3">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="inline-block px-2.5 py-1 text-xs md:text-sm rounded border border-border bg-background/80 text-foreground font-mono hover:border-accent/50 hover:text-accent transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
