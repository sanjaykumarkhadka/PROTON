import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const alt = "PROTON — Complete LED Signage Solutions, Made in India";

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
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0a1628 0%, #0c2148 55%, #060f1f 100%)",
          color: "#eaf1fb",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              background:
                "radial-gradient(circle at top left, #7db8ff, #2e7bff 55%, #0f3b7a)",
              boxShadow: "0 0 40px rgba(46,123,255,0.7)",
            }}
          />
          <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: 6 }}>
            PROTON
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 78,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1.5,
              maxWidth: 980,
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
            }}
          >
            <span>Complete LED signage,</span>
            <span
              style={{
                background: "linear-gradient(120deg, #4f9dff, #21c8e8)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              engineered end to end in India.
            </span>
          </div>
          <div style={{ fontSize: 28, color: "#9fb3d1", maxWidth: 880 }}>
            Displays, control electronics, CMS, install &amp; service —
            one Indian partner. Control + CMS built in-house.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#9fb3d1",
            letterSpacing: 2,
          }}
        >
          <div>MADE IN INDIA</div>
          <div>proton.in</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
