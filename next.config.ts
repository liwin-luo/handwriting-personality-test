import type { NextConfig } from "next";

/** Locales that were cut; every page under them 301s to its English twin. */
const RETIRED_LOCALES = ["es", "pt", "fr", "de", "id", "vi", "it", "tr"];

const retiredRedirects = RETIRED_LOCALES.flatMap((code) => [
  { source: `/${code}/chart`, destination: "/tools/sample-chart", statusCode: 301 },
  { source: `/${code}/tools/signature/size`, destination: "/guides/signature-size", statusCode: 301 },
  { source: `/${code}/tools/signature/body`, destination: "/guides/signature-writing", statusCode: 301 },
  { source: `/${code}`, destination: "/", statusCode: 301 },
  { source: `/${code}/:path*`, destination: "/:path*", statusCode: 301 },
]);

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
      ...retiredRedirects,
    ];
  },
};

export default nextConfig;
