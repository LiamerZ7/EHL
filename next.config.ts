import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vinext also reads this config; retain Sites authentication there.
  env: { EHL_HOSTING: process.env.VERCEL === "1" ? "vercel" : "sites" },
  turbopack: {
    resolveAlias: { "cloudflare:workers": "./lib/cloudflare-unavailable.ts" },
  },
  webpack(config) {
    config.resolve.alias["cloudflare:workers"] =
      `${process.cwd()}/lib/cloudflare-unavailable.ts`;
    return config;
  },
};

export default nextConfig;
