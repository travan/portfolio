"use client";

import { useState, useEffect } from "react";
import { profile } from "@/data/cv";

const PROMPT = "~ $ ";
const COMMAND = "cat cv.txt";
const FULL_TEXT = `${profile.name}\n${profile.title}\n${profile.location} | ${profile.phone} | ${profile.email}`;

interface TerminalProps {
  onComplete?: () => void;
}

export default function Terminal({ onComplete }: TerminalProps) {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [phase, setPhase] = useState<"command" | "output">("command");

  useEffect(() => {
    let i = 0;
    const cmd = COMMAND;
    const interval = setInterval(() => {
      if (phase === "command" && i <= cmd.length) {
        setDisplayText(cmd.slice(0, i));
        i++;
      } else if (phase === "command") {
        setPhase("output");
        setDisplayText("");
        i = 0;
      } else if (i <= FULL_TEXT.length) {
        setDisplayText(FULL_TEXT.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        onComplete?.();
      }
    }, 60);
    return () => clearInterval(interval);
  }, [phase, onComplete]);

  useEffect(() => {
    const t = setInterval(() => setCursorVisible((v) => !v), 530);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="w-full max-w-3xl mx-auto px-4 py-16 md:py-24">
      <div
        className="relative rounded-lg border border-border overflow-hidden shadow-2xl terminal-glow hover:border-accent/30 transition-colors duration-300"
        style={{ backgroundColor: "var(--card-bg)" }}
      >
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <span className="w-3 h-3 rounded-full bg-red-500/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <span className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-muted text-sm ml-2">terminal — Tra Nguyen</span>
        </div>
        <div className="p-4 md:p-6 font-mono text-sm md:text-base min-h-[200px]">
          <div className="text-accent">
            {PROMPT}
            {phase === "command" ? (
              <>
                {displayText}
                <span
                  className={`inline-block w-2 h-4 ml-0.5 bg-accent align-middle ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden
                />
              </>
            ) : (
              COMMAND
            )}
          </div>
          {phase === "output" && (
            <div className="mt-4 text-foreground whitespace-pre-wrap break-words">
              {displayText}
              <span
                className={`inline-block w-2 h-4 ml-0.5 bg-accent align-middle ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
