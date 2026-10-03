import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Keep production builds from overwriting the running development preview.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  trailingSlash: true,
  // GitHub Pages serves the original files without an image optimization server.
  images: { unoptimized: true },
  poweredByHeader: false,
  devIndicators: false,
  turbopack: { root: process.cwd() },
};

export default nextConfig;
