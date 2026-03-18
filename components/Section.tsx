"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`w-full max-w-4xl mx-auto px-4 py-12 md:py-16 scroll-mt-20 ${inView ? "animate-in" : "opacity-0 translate-y-4"}`}
    >
      <h2 className="text-accent text-lg md:text-xl font-mono mb-6">
        &gt; {title}
      </h2>
      <div className="text-foreground">{children}</div>
    </section>
  );
}
