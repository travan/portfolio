import Arrow from "./Arrow";
import { profile } from "@/data/cv";

function EvidenceDiagram() {
  return (
    <figure className="evidence-figure">
      <div className="diagram-heading">
        <span className="status-dot" /> FROM HYPOTHESIS TO EVIDENCE{" "}
        <span aria-hidden="true">↗</span>
      </div>
      <svg
        className="evidence-svg"
        viewBox="0 0 420 376"
        role="img"
        aria-labelledby="evidence-title evidence-description"
      >
        <title id="evidence-title">VeriCause verification workflow</title>
        <desc id="evidence-description">
          An application supplies an AI claim and runtime observations.
          VeriCause compares the evidence and returns a verdict and guardrail
          decision for the application to enforce. This is a conceptual
          illustration.
        </desc>
        <defs>
          <pattern
            id="diagram-grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" fill="#c4d6c3" />
          </pattern>
          <marker
            id="arrowhead"
            markerWidth="6"
            markerHeight="6"
            refX="5"
            refY="3"
            orient="auto"
          >
            <path d="m0 0 6 3-6 3" fill="none" stroke="#68846b" />
          </marker>
        </defs>
        <rect width="420" height="376" fill="url(#diagram-grid)" />
        <path
          d="M210 106v41m0 68v41"
          stroke="#68846b"
          strokeWidth="1.5"
          markerEnd="url(#arrowhead)"
        />
        <path
          d="M372 72h24v218h-24"
          fill="none"
          stroke="#9bb69e"
          strokeDasharray="4 5"
        />
        <g fontFamily="var(--font-geist-mono), monospace">
          <rect
            x="48"
            y="38"
            width="324"
            height="68"
            rx="8"
            fill="#fbfdf8"
            stroke="#c1d2bd"
          />
          <text x="68" y="66" fill="#526957" fontSize="12">
            01 / INPUT
          </text>
          <text x="68" y="88" fill="#253c2a" fontSize="17">
            AI claim + observations
          </text>
          <circle cx="345" cy="72" r="5" fill="#287052" />
          <rect
            x="48"
            y="147"
            width="324"
            height="68"
            rx="8"
            fill="#fbfdf8"
            stroke="#c1d2bd"
          />
          <text x="68" y="175" fill="#526957" fontSize="12">
            02 / VERIFICATION
          </text>
          <text x="68" y="197" fill="#253c2a" fontSize="17">
            Compare runtime evidence
          </text>
          <path
            d="m340 181 5-7 5 7-5 7Z"
            fill="none"
            stroke="#287052"
            strokeWidth="1.5"
          />
          <rect
            x="48"
            y="256"
            width="324"
            height="68"
            rx="8"
            fill="#d9ebd4"
            stroke="#287052"
          />
          <text x="68" y="284" fill="#287052" fontSize="12">
            03 / DECISION
          </text>
          <text x="68" y="306" fill="#253c2a" fontSize="17">
            Verdict + guardrail policy
          </text>
          <path
            d="m338 290 5 5 10-11"
            fill="none"
            stroke="#287052"
            strokeWidth="2"
          />
          <text
            x="210"
            y="355"
            textAnchor="middle"
            fill="#526957"
            fontSize="12"
          >
            Your application enforces the decision.
          </text>
        </g>
      </svg>
      <figcaption>
        <span>VeriCause / Conceptual workflow</span>
        <span aria-hidden="true">FIG. 01</span>
      </figcaption>
    </figure>
  );
}

export default function Hero() {
  return (
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> {profile.title}
          </p>
          <h1 id="hero-title">
            Building reliable <span className="accent">systems</span> and
            thoughtful web experiences.
          </h1>
          <p className="hero-description">
            I’m Tra, a backend-focused fullstack engineer. I turn complex
            problems into dependable software, from system architecture to the
            experience on screen.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore my work <Arrow />
            </a>
            <a className="button button-quiet" href="#contact">
              Get in touch <Arrow diagonal />
            </a>
          </div>
        </div>
        <EvidenceDiagram />
      </div>
      <div className="hero-footnote">
        <p>
          <span className="accent">7+ years</span> building for the web
        </p>
        {profile.location && <p>Based in {profile.location}</p>}
        <a href="#work">
          SCROLL TO EXPLORE <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  );
}
