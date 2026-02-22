import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Bernardo Ferrari";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#09090b",
          background: "linear-gradient(135deg, #09090b 0%, #1a1a2e 100%)",
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #a855f730 0%, transparent 70%)",
          }}
        />

        {/* Avatar circle placeholder */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            marginBottom: 32,
            background: "linear-gradient(135deg, #a855f7, #ec4899)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            color: "white",
            fontWeight: 700,
          }}
        >
          BF
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "white",
            marginBottom: 16,
            letterSpacing: "-0.02em",
          }}
        >
          Bernardo Ferrari
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
          }}
        >
          Building bridges between design and code
        </div>
      </div>
    ),
    { ...size }
  );
}
