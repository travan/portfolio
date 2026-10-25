import { profile, githubProfile } from "@/data/cv";
import Arrow from "./Arrow";

export default function ContactBar() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="shell contact-layout">
        <div>
          <p className="eyebrow section-label">04 / LET’S CONNECT</p>
          <h2 id="contact-title">
            Have something
            <br />
            in mind<span className="accent">?</span>
          </h2>
          <p>
            A role, a product idea, or a technical conversation.
            <br className="desktop-break" /> I’d be glad to hear from you.
          </p>
        </div>
        <div className="contact-actions">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
            <Arrow diagonal />
          </a>
          <div className="contact-socials">
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <a
              className="text-link"
              href={githubProfile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          {profile.location && (
            <p className="eyebrow contact-location">{profile.location}</p>
          )}
        </div>
      </div>
    </section>
  );
}
