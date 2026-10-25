import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import GithubSection from "@/components/GithubSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import AboutMe from "@/components/AboutMe";
import ContactBar from "@/components/ContactBar";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <GithubSection />
        <ExperienceTimeline />
        <AboutMe />
        <ContactBar />
      </main>
      <footer className="site-footer shell">
        <a className="wordmark" href="#top">
          <span className="monogram">
            tn<span>.</span>
          </span>
          <span>
            Built with care.
            <br />
            <span className="muted">
              Tra Nguyen © {new Date().getFullYear()}
            </span>
          </span>
          <span className="sr-only"> Back to top</span>
        </a>
        <a className="text-link" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  );
}
