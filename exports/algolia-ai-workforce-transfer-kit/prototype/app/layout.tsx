import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Algolia AI Workforce Prototype",
  description:
    "An employee-facing prototype for orchestrating a personal team of specialised AI employees.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
