"use client";

const links = [{ href: "#intro", label: "Intro" }];

export default function Nav() {
  return (
    <nav
      className="sticky top-0.5 z-10 border-b border-border px-4 py-3 flex justify-center gap-4 md:gap-6 text-sm bg-background/95 backdrop-blur-sm"
      style={{ backgroundColor: "var(--background)" }}
      aria-label="Main"
    >
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="nav-link text-muted hover:text-accent transition-all duration-300 inline-block hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          &gt; {label}
        </a>
      ))}
    </nav>
  );
}
