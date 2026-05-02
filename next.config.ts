import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
  serverExternalPackages: ["mongoose"],
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
