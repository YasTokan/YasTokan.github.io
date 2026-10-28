import { ImageResponse } from "next/og";
import { person } from "@/content/profile";

// Rendered once at build time to out/og.png. A route handler is used instead of
// the opengraph-image convention so the exported file keeps its .png extension,
// which GitHub Pages needs to serve it as image/png.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#fbfaf7",
          color: "#1a1a1a",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 24,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#6b6862",
            }}
          >
            {person.role}
          </div>
          <div style={{ fontSize: 96, fontWeight: 700, marginTop: 24 }}>
            {person.name}
          </div>
          <div style={{ fontSize: 36, color: "#6b6862", marginTop: 12 }}>
            {person.headline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "4px solid #1e3a5f",
            paddingTop: 28,
            fontSize: 26,
            color: "#6b6862",
          }}
        >
          <span>{person.location}</span>
          <span>{person.siteUrl.replace("https://", "")}</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
