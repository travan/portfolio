const links = ["Work", "Experience", "About", "Contact"];

export default function Nav() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href="#top">
          <span className="monogram">
            tn<span>.</span>
          </span>
          <span className="brand-name">
            Tra Nguyen<span className="brand-role">Software Engineer</span>
          </span>
          <span className="sr-only"> Home</span>
        </a>
        <nav aria-label="Main navigation">
          {links.map((label) => (
            <a key={label} href={`#${label.toLowerCase()}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
