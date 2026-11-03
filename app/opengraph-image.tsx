import { ImageResponse } from "next/og";

import { personal } from "@/config/personal";
import { siteConfig } from "@/config/site";

export const alt = `${personal.name} — ${personal.professionalTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e1211",
          color: "#efece4",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#f08a5d",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 78, fontWeight: 700, lineHeight: 1.05 }}>
            {personal.name}
          </div>
          <div style={{ marginTop: 24, fontSize: 36, color: "#a6ada7" }}>
            {personal.professionalTitle}
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#a6ada7" }}>
          {siteConfig.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    size,
  );
}
