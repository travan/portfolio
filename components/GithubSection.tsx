import { githubProfile } from "@/data/cv";
import Arrow from "./Arrow";
import ProjectArtwork from "./ProjectArtwork";

export default function GithubSection() {
  return (
    <section className="section shell" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow section-label">01 / SELECTED WORK</p>
          <h2 id="work-title">
            Ideas, put into practice<span className="accent">.</span>
          </h2>
        </div>
        <p>
          A closer look at the tools and
          <br className="desktop-break" /> experiences I’m building.
        </p>
      </div>
      <div className="project-list">
        {githubProfile.projects
          .filter((project) => project.featured)
          .map((project, index) => (
            <article className="project" key={project.name}>
              <ProjectArtwork
                kind={project.featured!.artwork}
                number={String(index + 1).padStart(2, "0")}
              />
              <div className="project-copy">
                <p className="eyebrow project-category">
                  {project.featured!.category}
                </p>
                <h3>{project.name}</h3>
                <div className="project-story">
                  <h4>The problem</h4>
                  <p>{project.featured!.problem}</p>
                </div>
                <div className="project-story">
                  <h4>The approach</h4>
                  <p>{project.featured!.solution}</p>
                </div>
                <ul
                  className="tags"
                  aria-label={`${project.name} technologies`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                {project.packages && (
                  <div
                    className="package-list"
                    aria-label="Published npm packages"
                  >
                    <p className="eyebrow">Published on npm</p>
                    {project.packages.map((pkg) => (
                      <div className="package-item" key={pkg.name}>
                        <a
                          className="package-link"
                          href={pkg.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {pkg.name} <Arrow diagonal />
                          <span className="sr-only"> (opens in a new tab)</span>
                        </a>
                        <p>{pkg.description}</p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="project-links">
                  {project.repositoryVisibility === "private" ? (
                    <span className="link-status">Private repository</span>
                  ) : (
                    <a
                      className="text-link"
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View repository <Arrow diagonal />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                  {project.demo && !project.demoUnavailable && (
                    <a
                      className="text-link accent"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live demo <Arrow diagonal />
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  )}
                  {project.demoUnavailable && (
                    <span className="link-status">
                      Live demo currently unavailable
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
      </div>
      <div className="work-more">
        <p>More experiments, tools, and side projects.</p>
        <a
          className="text-link"
          href={githubProfile.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Explore my GitHub <Arrow diagonal />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </section>
  );
}
