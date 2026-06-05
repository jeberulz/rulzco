import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/seo/site-config";
import { sharedOpenGraph, sharedTwitter } from "@/lib/seo/shared-metadata";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildOrganization, buildWebSite } from "@/lib/seo/jsonld";

const DEFAULT_TITLE = `${SITE_NAME} — ${SITE_TAGLINE}`;

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
      "en-GB": "/",
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
      </body>
    </html>
  );
}
