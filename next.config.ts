import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The old internal Lex Conquer page now lives at the dedicated
      // product domain. Permanent redirects preserve any backlinks.
      {
        source: "/lex-conquer",
        destination: "https://lexconquer.com",
        permanent: true,
      },
      {
        source: "/lex-conquer/:path*",
        destination: "https://lexconquer.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
