import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages; `next build` writes the site to out/.
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    // A package-lock.json higher up (C:\Work) would otherwise be picked as the root.
    root: __dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
