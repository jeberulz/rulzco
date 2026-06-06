import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";
import {
  SITE_DESCRIPTION,
  SITE_LOCALE,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo/site-config";
import { sharedOpenGraph, sharedTwitter } from "@/lib/seo/shared-metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildOrganization, buildWebSite } from "@/lib/seo/jsonld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const DEFAULT_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;

/** Google Search Console verification token, set per-environment. */
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFY;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: "/",
    languages: {
      [SITE_LOCALE]: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    ...sharedOpenGraph,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
  },
  twitter: {
    ...sharedTwitter,
    title: DEFAULT_TITLE,
    description: SITE_DESCRIPTION,
  },
  ...(GSC_VERIFICATION
    ? { verification: { google: GSC_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={inter.variable} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd data={buildOrganization()} />
        <JsonLd data={buildWebSite()} />
        <PreloaderWrapper />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
