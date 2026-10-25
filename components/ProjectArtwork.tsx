import type { GithubProject } from "@/data/cv";

type ArtworkKind = NonNullable<GithubProject["featured"]>["artwork"];

export default function ProjectArtwork({
  kind,
  number,
}: {
  kind: ArtworkKind;
  number: string;
}) {
  if (kind === "speech") {
    return (
      <div className="project-art speech-art" aria-hidden="true">
        <span className="art-caption">
          TOPIC-AWARE TEXT READER / CHROME EXTENSION
        </span>
        <svg className="speech-diagram" viewBox="0 0 360 225" fill="none">
          <rect
            x="40"
            y="40"
            width="116"
            height="140"
            rx="8"
            fill="#faf8fd"
            stroke="currentColor"
            strokeOpacity=".35"
          />
          <path
            d="M61 65h73M61 81h60M61 129h72M61 145h48"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeOpacity=".25"
          />
          <rect x="53" y="94" width="91" height="22" rx="4" fill="#d9c9e8" />
          <path
            d="M61 105h72"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M169 108h32m-6-6 6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
            <path d="M221 98v20M234 84v48M247 71v74M260 92v32M273 63v90M286 80v56M299 94v28M312 101v14" />
          </g>
          <g
            fill="currentColor"
            fontSize="10"
            fontFamily="var(--font-geist-mono), monospace"
            textAnchor="middle"
          >
            <text x="98" y="203">
              FIND YOUR TOPIC
            </text>
            <text x="266" y="181">
              LISTEN YOUR WAY
            </text>
          </g>
        </svg>
        <div className="art-title">
          A little less scrolling.
          <br />A little more listening<span>.</span>
        </div>
        <div className="art-bottom">
          <span>SCAN → FILTER → LISTEN</span>
          <span>{number}</span>
        </div>
      </div>
    );
  }
  if (kind === "travel") {
    return (
      <div className="project-art travel-art" aria-hidden="true">
        <span className="art-caption">
          PERSONALIZED JOURNEYS / WEB + MOBILE
        </span>
        <svg className="travel-map" viewBox="0 0 360 230" fill="none">
          <path
            d="M35 52c64-21 67 58 121 33s47-60 99-39 18 76 69 99M18 178c42-27 72-7 102 16s66-20 110-5 53-15 111-5"
            stroke="currentColor"
            strokeOpacity=".16"
          />
          <path
            d="M20 74c64-21 67 58 121 33s47-60 99-39 18 76 69 99M15 198c42-27 72-7 102 16s66-20 110-5 53-15 111-5"
            stroke="currentColor"
            strokeOpacity=".12"
          />
          <path
            d="M64 140c30-78 113-91 116-35s59 82 113 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="5 6"
          />
          <circle
            cx="64"
            cy="140"
            r="17"
            fill="#f9fcfd"
            stroke="currentColor"
          />
          <circle cx="64" cy="140" r="5" fill="currentColor" />
          <circle
            cx="180"
            cy="105"
            r="17"
            fill="#f9fcfd"
            stroke="currentColor"
          />
          <circle cx="180" cy="105" r="5" fill="currentColor" />
          <circle
            cx="293"
            cy="119"
            r="17"
            fill="#f9fcfd"
            stroke="currentColor"
          />
          <path d="m287 119 4 4 8-9" stroke="currentColor" strokeWidth="2" />
          <g
            fontSize="11"
            fontFamily="var(--font-geist-mono), monospace"
            fill="currentColor"
            textAnchor="middle"
          >
            <text x="64" y="177">
              DISCOVER
            </text>
            <text x="180" y="73">
              PLAN
            </text>
            <text x="293" y="156">
              EXPLORE
            </text>
          </g>
        </svg>
        <div className="art-title">
          Less planning.
          <br />
          More exploring<span>.</span>
        </div>
        <div className="art-bottom">
          <span>YOUR CITIES. YOUR PACE.</span>
          <span>{number}</span>
        </div>
      </div>
    );
  }
  if (kind === "verification") {
    return (
      <div className="project-art evidence-art" aria-hidden="true">
        <span className="art-caption">AI RELIABILITY / RUNTIME + LAYER</span>
        <div className="verify-art-mark">
          <span>[</span>
          <svg viewBox="0 0 100 100" fill="none">
            <path
              d="m22 52 20 20 39-44"
              stroke="currentColor"
              strokeWidth="6"
            />
          </svg>
          <span>]</span>
        </div>
        <div className="art-title">
          VeriCause<span>.</span>
        </div>
        <div className="art-bottom">
          <span>CLAIMS → EVIDENCE → VERDICTS</span>
          <span>{number}</span>
        </div>
      </div>
    );
  }
  return (
    <div className="project-art meals-art" aria-hidden="true">
      <span className="art-caption">RESTAURANT DISCOVERY</span>
      <div className="meal-orbit">
        <div className="meal-plate">
          <span />
          <span />
          <span />
        </div>
        <span className="orbit-label orbit-web">WEB</span>
        <span className="orbit-label orbit-api">API</span>
        <span className="orbit-label orbit-mobile">MOBILE</span>
      </div>
      <div className="art-title">
        Enjoy your meals<span>.</span>
      </div>
      <div className="art-bottom">
        <span>EXPLORE. DISCOVER. ENJOY.</span>
        <span>{number}</span>
      </div>
    </div>
  );
}
