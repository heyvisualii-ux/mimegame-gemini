import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

export default function createNextConfig(phase: string): NextConfig {
  return {
    distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
    output: "standalone",
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    experimental: {
      optimizePackageImports: ['lucide-react'],
    },
    webpack: (config, { isServer }) => {
      if (!isServer && config.output) {
        config.output.chunkLoadTimeout = 300000;
      }
      return config;
    },
  };
}
