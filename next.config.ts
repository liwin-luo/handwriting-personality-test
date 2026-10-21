import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  agentRules: false,
  experimental: { globalNotFound: true },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.handwritingpersonalitytest.online" }],
        destination: "https://handwritingpersonalitytest.online/:path*",
        permanent: true,
      },
      { source: "/chart", destination: "/tools/sample-chart", statusCode: 301 },
      { source: "/zh/chart", destination: "/zh/tools/sample-chart", statusCode: 301 },
      { source: "/tools/signature/size", destination: "/guides/signature-size", statusCode: 301 },
      { source: "/zh/tools/signature/size", destination: "/zh/guides/signature-size", statusCode: 301 },
      { source: "/tools/signature/body", destination: "/guides/signature-writing", statusCode: 301 },
      { source: "/zh/tools/signature/body", destination: "/zh/guides/signature-writing", statusCode: 301 },
    ];
  },
};

export default nextConfig;
