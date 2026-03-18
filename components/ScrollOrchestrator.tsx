"use client";

import { useRef, useCallback } from "react";
import Terminal from "./Terminal";
import ContactBar from "./ContactBar";
import Nav from "./Nav";
import ScrollProgress from "./ScrollProgress";
import BackToTop from "./BackToTop";
import IntroTabs from "./IntroTabs";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function ScrollOrchestrator() {
  const startedRef = useRef(false);

  const startScrollSequence = useCallback(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    scrollToSection("intro");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sr-only">
        <h1>Tra Nguyen - Software Engineer Portfolio</h1>
      </header>
      <ScrollProgress />
      <Nav />
      <main className="flex-1">
        <Terminal onComplete={startScrollSequence} />
        <section id="intro" className="scroll-mt-20">
          <IntroTabs />
        </section>
      </main>
      <ContactBar />
      <BackToTop />
    </div>
  );
}
