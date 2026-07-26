import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/work/rinkl",
        destination: "/work/margin",
        permanent: true,
      },
      {
        source: "/work/deskscapes",
        destination: "/work/draft",
        permanent: true,
      },
    ];
  },
  images: {
    // Serve modern formats; Next negotiates per-browser.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Tree-shake barrel imports to keep the client bundle (and INP) lean.
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
};

export default withBundleAnalyzer(nextConfig);
