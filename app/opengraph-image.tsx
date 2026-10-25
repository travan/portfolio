import { ImageResponse } from "next/og";

export const alt =
  "Tra Nguyen — Senior Software Engineer. Building reliable systems and thoughtful web experiences.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f6f7f2",
        color: "#1d3028",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "70px 80px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 38, fontWeight: 700 }}>
          tn<span style={{ color: "#287052" }}>.</span>
        </span>
        <span style={{ fontSize: 22, color: "#287052" }}>
          TRA NGUYEN / SENIOR SOFTWARE ENGINEER
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          lineHeight: 1.12,
          letterSpacing: "-3px",
        }}
      >
        <span>Building reliable systems</span>
        <span style={{ color: "#287052" }}>and thoughtful web</span>
        <span>experiences.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid #cbd8cb",
          paddingTop: 24,
          fontSize: 20,
          color: "#53665a",
        }}
      >
        <span>Backend architecture · Fullstack development · Automation</span>
      </div>
    </div>,
    size,
  );
}
