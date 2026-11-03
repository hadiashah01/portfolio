import { ImageResponse } from "next/og";

import { personal } from "@/config/personal";
import { siteConfig } from "@/config/site";

export const alt = `${personal.name} — ${personal.professionalTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const [firstName, ...nameRemainder] = personal.name.split(" ");
const lastName = nameRemainder.join(" ");

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#090d13",
        color: "#f4f8fd",
        padding: "72px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            fontSize: 24,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#3ca2fa",
          }}
        >
          {personal.professionalTitle}
        </div>
        <div
          style={{
            width: 220,
            height: 6,
            borderRadius: 999,
            background:
              "linear-gradient(90deg, #eab308 0%, #ef4444 22%, #80eeb4 44%, #06b6d4 68%, #8b5cf6 100%)",
          }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            gap: 28,
            fontSize: 92,
            fontWeight: 900,
            letterSpacing: -5,
            lineHeight: 0.9,
            textTransform: "uppercase",
          }}
        >
          <span>{firstName}</span>
          <span style={{ color: "#3ca2fa" }}>{lastName}</span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 30,
            color: "#93a8be",
            maxWidth: 880,
          }}
        >
          {personal.tagline}
        </div>
      </div>

      <div style={{ fontSize: 24, color: "#93a8be" }}>
        {siteConfig.url.replace(/^https?:\/\//, "")}
      </div>
    </div>,
    size,
  );
}
