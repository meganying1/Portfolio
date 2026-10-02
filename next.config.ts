import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // GitHub Pages serves the original files without an image optimization server.
  images: { unoptimized: true },
  poweredByHeader: false,
  devIndicators: false,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
