import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  allowedDevOrigins: ["192.168.0.101", "192.168.*.*"],
};

export default nextConfig;
