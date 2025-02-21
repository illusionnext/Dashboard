import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  crossOrigin: "anonymous",
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    authInterrupts: true, // to use forbidden() and unauthorized()
    cacheLife: {
      news: {
        stale: 3600, // 1 hour
        revalidate: 900, // 15 minutes
        expire: 86400, // 1 day
      },
    },
    cssChunking: true,
    dynamicIO: true, // to use cacheTag('my-data')
    ppr: "incremental",
    reactCompiler: true,
    serverActions: {
      bodySizeLimit: "1mb",
      allowedOrigins: ["my-proxy.com", "*.my-proxy.com"],
    },
    staleTimes: {
      dynamic: 30,
      static: 180,
    },

    // Authentication
    useCache: true,
    webVitalsAttribution: ["CLS", "LCP"],
  },
};

export default nextConfig;
