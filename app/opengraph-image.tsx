import { SITE_TAGLINE } from "@/lib/seo/site-config";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/seo/og";

export const alt = "Rulz&Co — AI Product Design & Strategy";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Rulz&Co",
    title: SITE_TAGLINE,
  });
}
