import type { Metadata } from "next";
import "./globals.css";
import PreloaderWrapper from "@/components/PreloaderWrapper";

export const metadata: Metadata = {
  title: "Rulz&Co — AI Product Design & Strategy",
  description: "AI Product Design & Strategy partner for startups shipping intelligent products. From idea → MVP → launch, with AI at the core.",
  openGraph: {
    title: "Rulz&Co — AI Product Design & Strategy",
    description: "AI Product Design & Strategy partner for startups shipping intelligent products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <PreloaderWrapper />
        {children}
      </body>
    </html>
  );
}
