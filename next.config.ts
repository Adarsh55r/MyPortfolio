import type { NextConfig } from "next";

// Fully static export: every page is pre-rendered to HTML at build time,
// so the site can be hosted on any static host (Vercel, Netlify, GitHub Pages).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
