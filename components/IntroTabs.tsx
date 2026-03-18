"use client";

import { useState } from "react";
import GreetingAnimation from "./GreetingAnimation";
import AboutMe from "./AboutMe";
import GithubSection from "./GithubSection";

type TabId = "greeting" | "about" | "github";

const TABS: { id: TabId; label: string }[] = [
  { id: "greeting", label: "Hello" },
  { id: "about", label: "About" },
  { id: "github", label: "GitHub" },
];

export default function IntroTabs() {
  const [activeTab, setActiveTab] = useState<TabId>("greeting");

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-16">
      <h2 className="text-accent text-lg md:text-xl font-mono mb-6">&gt; Intro</h2>
      <div
        role="tablist"
        aria-label="Intro tabs"
        className="flex gap-1 border-b border-border mb-6"
      >
        {TABS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-selected={activeTab === id}
            aria-controls={`panel-${id}`}
            tabIndex={activeTab === id ? 0 : -1}
            onClick={() => setActiveTab(id)}
            className={`px-4 py-2 text-sm font-mono rounded-t transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              activeTab === id
                ? "text-accent border-b-2 border-accent bg-card-bg -mb-px border-border border-b-accent"
                : "text-muted hover:text-foreground"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id="panel-greeting"
        aria-labelledby="tab-greeting"
        hidden={activeTab !== "greeting"}
        className={activeTab !== "greeting" ? "hidden" : undefined}
      >
        <GreetingAnimation />
      </div>
      <div
        role="tabpanel"
        id="panel-about"
        aria-labelledby="tab-about"
        hidden={activeTab !== "about"}
        className={activeTab !== "about" ? "hidden" : undefined}
      >
        <AboutMe />
      </div>
      <div
        role="tabpanel"
        id="panel-github"
        aria-labelledby="tab-github"
        hidden={activeTab !== "github"}
        className={activeTab !== "github" ? "hidden" : undefined}
      >
        <GithubSection />
      </div>
    </div>
  );
}
