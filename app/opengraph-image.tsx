import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bernardo Ferrari, design engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#141416",
          color: "#f2f1ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://github.com/bernaferrari.png"
            width={72}
            height={72}
            alt=""
            style={{ borderRadius: 9999 }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 600 }}>Bernardo Ferrari</div>
            <div style={{ fontSize: 24, color: "#9a9aa2" }}>Design engineer</div>
          </div>
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 500,
            lineHeight: 1.05,
            letterSpacing: "-0.035em",
            maxWidth: 980,
          }}
        >
          I build the tools between a design and the app that ships.
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 24, color: "#9a9aa2" }}>
          <span>Figma to Code</span>
          <span>Kotlin Reforge</span>
          <span>Screenshot Studio</span>
          <span>KMPwright</span>
          <span>rport</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
