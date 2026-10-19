import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.handwritingpersonalitytest.online" }],
        destination: "https://handwritingpersonalitytest.online/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
