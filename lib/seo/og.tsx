import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "./site-config";

/** Shared Open Graph image config (1200×630 PNG). */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Render a branded 1200×630 OG/Twitter card.
 *
 * Uses the default system font (no network font fetch) for build reliability.
 * Long titles wrap and clamp so they never overflow the safe area.
 */
export function renderOgImage({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #08000f 0%, #1a0b2e 55%, #08000f 100%)",
          padding: "72px 80px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: eyebrow + accent bar */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{ display: "flex", alignItems: "center", gap: 16 }}
          >
            <div
              style={{
                width: 40,
                height: 8,
                borderRadius: 4,
                background: "#FFC703",
              }}
            />
            {eyebrow ? (
              <div
                style={{
                  fontSize: 24,
                  letterSpacing: 6,
                  textTransform: "uppercase",
                  color: "#c7b9d6",
                }}
              >
                {eyebrow}
              </div>
            ) : null}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: title.length > 60 ? 60 : 76,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -1.5,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            {title}
          </div>
        </div>

        {/* Bottom: wordmark + tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontSize: 34, fontWeight: 700, letterSpacing: -0.5 }}>
            {SITE_NAME}
          </div>
          <div style={{ fontSize: 22, color: "#9b8caa" }}>{SITE_TAGLINE}</div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
