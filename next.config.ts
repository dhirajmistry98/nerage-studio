import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Remove X-Powered-By header for security */
  poweredByHeader: false,

  /* Disable dev indicators badge */
  devIndicators: false,

  /* Export static HTML files to 'out' directory for Render / static hosts */
  output: "export",
  images: { unoptimized: true },

  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

};

export default nextConfig;
