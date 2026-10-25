import { experience } from "@/data/cv";

export default function ExperienceTimeline() {
  const jobs = experience.filter((job) => job.company !== "Freelancer");
  const freelance = experience.find((job) => job.company === "Freelancer")!;
  return (
    <section
      className="section experience-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="shell experience-layout">
        <div className="experience-intro">
          <p className="eyebrow section-label">02 / EXPERIENCE</p>
          <h2 id="experience-title">
            Built over time<span className="accent">.</span>
          </h2>
          <p>
            From backend services to developer tools. A career grounded in
            building, improving, and taking ownership.
          </p>
          <div className="experience-note">
            <span aria-hidden="true">↳</span> Architecture. Automation.
            <br /> End-to-end delivery.
          </div>
        </div>
        <div className="experience-content">
          <ol className="career-list">
            {jobs.map((job, index) => (
              <li
                key={job.company}
                className={`career-item ${index < 2 ? "career-featured" : ""}`}
              >
                <div className="career-top">
                  <h3>{job.company}</h3>
                  <span className="career-date">
                    {job.period === "2018-2018"
                      ? "2018"
                      : job.period.replace("-", " — ")}
                  </span>
                </div>
                <p className="career-role">{job.role}</p>
                {index < 2 ? (
                  <>
                    <p className="career-products">
                      {job.products.join(" · ")}
                    </p>
                    <ul className="career-highlights">
                      {job.responsibilities
                        .slice(0, index === 0 ? 3 : 5)
                        .filter((_, i) => index === 0 || i !== 2)
                        .map((text) => (
                          <li key={text}>{text}</li>
                        ))}
                    </ul>
                    <ul
                      className="tags"
                      aria-label={`${job.company} technologies`}
                    >
                      {job.techStack.slice(0, 5).map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <p className="career-summary">{job.responsibilities[0]}</p>
                )}
              </li>
            ))}
          </ol>
          <aside className="freelance-note" aria-labelledby="freelance-title">
            <p className="eyebrow">
              IN PARALLEL / {freelance.period.replace("-", " — ")}
            </p>
            <h3 id="freelance-title">Independent development</h3>
            <p>
              Building and deploying fullstack systems with Node.js, PostgreSQL,
              and AWS, including CMS and simulation platforms.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
