import { profile, summary } from "@/data/cv";
import SkillsGrid from "./SkillsGrid";
import ExperienceTimeline from "./ExperienceTimeline";
import Education from "./Education";

export default function AboutMe() {
  return (
    <div className="space-y-8">
      {/* Summary & contact */}
      <div
        className="rounded-lg border border-border p-4 md:p-6 text-sm md:text-base space-y-4"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="font-semibold text-foreground text-lg">{profile.name}</span>
          <span className="text-muted">|</span>
          <span className="text-accent">{profile.title}</span>
        </div>
        <p className="text-muted">{profile.location}</p>
        <p className="text-foreground leading-relaxed">{summary}</p>
        <p className="text-muted text-sm pt-2">
          Contact:{" "}
          <a href={`mailto:${profile.email}`} className="text-accent hover:underline">
            {profile.email}
          </a>
          {" · "}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </div>

      {/* Skills */}
      <div>
        <h3 className="text-accent text-sm font-mono mb-3">&gt; Skills</h3>
        <SkillsGrid />
      </div>

      {/* Experience */}
      <div>
        <h3 className="text-accent text-sm font-mono mb-3">&gt; Experience</h3>
        <ExperienceTimeline />
      </div>

      {/* Education */}
      <div>
        <h3 className="text-accent text-sm font-mono mb-3">&gt; Education</h3>
        <Education />
      </div>
    </div>
  );
}
