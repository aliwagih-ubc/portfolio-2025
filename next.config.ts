import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Local only: .nosync keeps iCloud from syncing build artifacts (fileproviderd
  // write storms during builds were stalling this 8GB machine into watchdog
  // panics). CI keeps the default .next so the Pages workflow's ./out upload works.
  ...(process.env.CI ? {} : { distDir: ".next.nosync" }),
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
