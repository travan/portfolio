"use client";

import { profile } from "@/data/cv";

/**
 * CSS-only friendly robot: antenna, LED eyes, metal body, obvious waving arm.
 */
export default function GreetingAnimation() {
  return (
    <div
      className="rounded-3xl border border-border p-8 md:p-12 flex flex-col lg:flex-row items-center lg:items-end justify-center gap-10 min-h-[280px] overflow-visible"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(57, 211, 83, 0.12) 0%, transparent 50%), var(--card-bg)",
      }}
    >
      {/* ——— Robot (larger, unmistakable) ——— */}
      <div className="robot-bob flex justify-center shrink-0" aria-hidden>
        <div
          className="relative"
          style={{ width: "140px", height: "200px" }}
        >
          {/* Antenna */}
          <div
            className="absolute left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
            style={{ top: "-8px" }}
          >
            <div
              className="robot-antenna-tip rounded-full"
              style={{
                width: "10px",
                height: "10px",
                background: "radial-gradient(circle at 30% 30%, #7ee787, #39d353)",
                boxShadow: "0 0 10px #39d353, 0 0 20px rgba(57,211,83,0.4)",
              }}
            />
            <div
              style={{
                width: "3px",
                height: "14px",
                background: "linear-gradient(180deg, #6b7280, #4b5563)",
                borderRadius: "2px",
              }}
            />
          </div>

          {/* Head */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-2xl z-10"
            style={{
              top: "12px",
              width: "88px",
              height: "72px",
              background:
                "linear-gradient(145deg, #d1d5db 0%, #9ca3af 35%, #6b7280 100%)",
              boxShadow:
                "0 8px 24px rgba(0,0,0,0.35), inset 0 2px 0 rgba(255,255,255,0.35), inset 0 -4px 8px rgba(0,0,0,0.15)",
              border: "2px solid #4b5563",
            }}
          >
            {/* Face screen */}
            <div
              className="absolute rounded-xl flex flex-col items-center justify-center gap-2"
              style={{
                inset: "10px 12px 14px 12px",
                background: "linear-gradient(180deg, #111827 0%, #1f2937 100%)",
                border: "1px solid #374151",
                boxShadow: "inset 0 2px 8px rgba(0,0,0,0.5)",
              }}
            >
              <div className="flex gap-4">
                <span
                  className="robot-led rounded-full block"
                  style={{ width: "12px", height: "12px", background: "#39d353" }}
                />
                <span
                  className="robot-led rounded-full block"
                  style={{ width: "12px", height: "12px", background: "#39d353" }}
                />
              </div>
              {/* Simple smile line */}
              <div
                style={{
                  width: "28px",
                  height: "6px",
                  borderBottom: "2px solid rgba(57, 211, 83, 0.5)",
                  borderRadius: "0 0 12px 12px",
                }}
              />
            </div>
          </div>

          {/* Neck */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-sm"
            style={{
              top: "82px",
              width: "24px",
              height: "10px",
              background: "linear-gradient(90deg, #6b7280, #9ca3af, #6b7280)",
            }}
          />

          {/* Body */}
          <div
            className="absolute left-1/2 -translate-x-1/2 rounded-3xl"
            style={{
              top: "92px",
              width: "96px",
              height: "88px",
              background:
                "linear-gradient(160deg, #e5e7eb 0%, #9ca3af 40%, #6b7280 100%)",
              boxShadow:
                "0 10px 28px rgba(0,0,0,0.3), inset 0 2px 0 rgba(255,255,255,0.25)",
              border: "2px solid #4b5563",
            }}
          >
            {/* Chest panel */}
            <div
              className="absolute rounded-lg"
              style={{
                left: "50%",
                top: "18px",
                transform: "translateX(-50%)",
                width: "52px",
                height: "36px",
                background: "linear-gradient(180deg, #1f2937, #111827)",
                border: "1px solid #374151",
                boxShadow: "inset 0 0 12px rgba(57,211,83,0.08)",
              }}
            >
              <div
                className="absolute rounded-sm"
                style={{
                  left: "8px",
                  top: "8px",
                  width: "8px",
                  height: "8px",
                  background: "#39d353",
                  opacity: 0.7,
                  boxShadow: "0 0 6px #39d353",
                }}
              />
              <div
                className="absolute rounded-sm"
                style={{
                  right: "8px",
                  bottom: "8px",
                  width: "8px",
                  height: "8px",
                  background: "#e6b400",
                  opacity: 0.8,
                }}
              />
            </div>
          </div>

          {/* Left arm (static) */}
          <div
            className="absolute rounded-full"
            style={{
              left: "-4px",
              top: "100px",
              width: "14px",
              height: "44px",
              background: "linear-gradient(90deg, #6b7280, #9ca3af)",
              boxShadow: "2px 4px 8px rgba(0,0,0,0.2)",
            }}
          />
          <div
            className="absolute rounded-lg"
            style={{
              left: "-10px",
              top: "138px",
              width: "18px",
              height: "14px",
              background: "linear-gradient(180deg, #9ca3af, #6b7280)",
              border: "1px solid #4b5563",
            }}
          />

          {/* Right arm — WAVES (whole arm rotates from shoulder) */}
          <div
            className="robot-wave-arm absolute"
            style={{
              right: "-2px",
              top: "96px",
              width: "56px",
              height: "90px",
            }}
          >
            {/* Upper arm */}
            <div
              className="absolute rounded-full"
              style={{
                right: "0",
                top: "0",
                width: "16px",
                height: "32px",
                background: "linear-gradient(90deg, #9ca3af, #6b7280)",
                boxShadow: "-2px 4px 8px rgba(0,0,0,0.2)",
              }}
            />
            {/* Forearm */}
            <div
              className="absolute rounded-full"
              style={{
                right: "-6px",
                top: "26px",
                width: "14px",
                height: "38px",
                background: "linear-gradient(135deg, #d1d5db, #6b7280)",
                transform: "rotate(18deg)",
                transformOrigin: "top center",
              }}
            />
            {/* Hand / claw — open “wave” */}
            <div
              className="absolute rounded-xl flex gap-0.5 p-1"
              style={{
                right: "-14px",
                top: "58px",
                width: "28px",
                height: "22px",
                background: "linear-gradient(180deg, #9ca3af, #4b5563)",
                border: "2px solid #374151",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              }}
            >
              <span className="flex-1 rounded-sm bg-gray-600" style={{ height: "10px" }} />
              <span className="flex-1 rounded-sm bg-gray-600" style={{ height: "12px" }} />
              <span className="flex-1 rounded-sm bg-gray-600" style={{ height: "10px" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div
        className="rounded-2xl px-6 py-4 text-center lg:text-left max-w-md"
        style={{
          border: "1px solid rgba(57, 211, 83, 0.35)",
          background:
            "linear-gradient(135deg, rgba(57, 211, 83, 0.1) 0%, var(--background) 55%)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <p className="text-xs font-mono text-accent mb-1">BOT-01 // greeting</p>
        <p className="text-xl md:text-2xl font-semibold text-foreground">
          Hello, I&apos;m {profile.name}
        </p>
        <p className="text-sm text-muted mt-2">
          Your friendly portfolio bot says hi.
        </p>
      </div>
    </div>
  );
}
