import { education } from "@/data/cv";

const expertise = [
  {
    number: "01",
    title: "Backend & Systems",
    description: "The foundations that keep a product dependable as it grows.",
    technologies: "Node.js / NestJS / PostgreSQL / Redis",
    detail: "Microservices, API design, caching, and async processing.",
  },
  {
    number: "02",
    title: "Web Applications",
    description: "Connecting solid engineering with the experience on screen.",
    technologies: "React / Next.js / Angular / TypeScript",
    detail: "Fullstack applications, CMS platforms, and frontend development.",
  },
  {
    number: "03",
    title: "Testing & Delivery",
    description:
      "Confidence in the code, from a local test to a production release.",
    technologies: "Playwright / Jest / Docker / AWS",
    detail: "Browser automation, regression testing, and CI/CD workflows.",
  },
];

export default function AboutMe() {
  return (
    <section className="section shell" id="about" aria-labelledby="about-title">
      <div className="about-intro">
        <div>
          <p className="eyebrow section-label">03 / A LITTLE ABOUT ME</p>
          <h2 id="about-title">
            Systems thinking.
            <br />A builder’s mindset<span className="accent">.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p>
            I’m a Senior Fullstack Engineer with 7+ years of experience across
            backend systems, web applications, and developer tooling.
          </p>
          <p>
            My focus is backend architecture, with the frontend experience to
            connect the whole product. I’ve worked on system migrations, API
            performance, and browser automation, both with teams and
            independently.
          </p>
          <p>
            I’m comfortable collaborating remotely and use AI-assisted
            development as part of my engineering workflow.
          </p>
        </div>
      </div>
      <div className="expertise-grid">
        {expertise.map((item) => (
          <article className="expertise-item" key={item.title}>
            <span className="eyebrow expertise-number">/ {item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="expertise-detail">{item.detail}</p>
            <p className="expertise-tech">{item.technologies}</p>
          </article>
        ))}
      </div>
      <div className="education-row">
        <p className="eyebrow">FOUNDATIONS</p>
        <div>
          <h3>{education.school}</h3>
          <p>{education.degree}</p>
        </div>
        <span className="career-date">{education.schoolPeriod}</span>
      </div>
    </section>
  );
}
