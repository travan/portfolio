import { profile } from "@/data/cv";

export default function ContactBar() {
  return (
    <footer className="w-full border-t border-border mt-16">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm">
        <a
          href={`mailto:${profile.email}`}
          className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
        >
          {profile.email}
        </a>
        <a
          href={`tel:${profile.phone}`}
          className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
        >
          {profile.phone}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground hover:text-accent transition-all duration-300 hover:scale-105 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
        >
          LinkedIn
        </a>
        <span className="text-muted">{profile.location}</span>
      </div>
    </footer>
  );
}
