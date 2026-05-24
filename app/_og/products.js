import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const alt = "PROTON Products — RX, TX, ONE/VX, Studio & Cloud";

const families = [
  { tag: "RX SERIES", line: "Inside every panel" },
  { tag: "TX SERIES", line: "Drives the whole wall" },
  { tag: "ONE & VX", line: "Big-wall processing" },
  { tag: "STUDIO & CLOUD", line: "Software" },
];

export function render() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background:
            "linear-gradient(135deg, #0a1628 0%, #0c2148 55%, #060f1f 100%)",
          color: "#eaf1fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              background:
                "radial-gradient(circle at top left, #7db8ff, #2e7bff 55%, #0f3b7a)",
              boxShadow: "0 0 32px rgba(46,123,255,0.7)",
            }}
          />
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: 6 }}>
            PROTON
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 22, color: "#21c8e8", letterSpacing: 4 }}>
            PRODUCTS
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 1000,
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
            }}
          >
            <span>Four product families.</span>
            <span
              style={{
                background: "linear-gradient(120deg, #4f9dff, #21c8e8)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              One job.
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: 14 }}>
          {families.map((f) => (
            <div
              key={f.tag}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                padding: "18px 22px",
                borderRadius: 14,
                border: "1px solid rgba(110,150,220,0.30)",
                background: "rgba(18,34,62,0.55)",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  letterSpacing: 2,
                  color: "#4f9dff",
                  fontWeight: 700,
                }}
              >
                {f.tag}
              </div>
              <div style={{ fontSize: 18, color: "#eaf1fb" }}>{f.line}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
