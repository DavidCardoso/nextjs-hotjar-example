import type { NextConfig } from "next";

import { HOTJAR_DOMAINS } from "./src/app/constants";

const nextConfig: NextConfig = {
  images: {
    domains: ["static.hotjar.com"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' ${HOTJAR_DOMAINS.join(" ")};
              connect-src 'self' ${HOTJAR_DOMAINS.join(" ")};
              frame-src 'self' ${HOTJAR_DOMAINS.join(" ")};
              img-src 'self' data: ${HOTJAR_DOMAINS.join(" ")};
              style-src 'self' 'unsafe-inline';
              font-src 'self' ${HOTJAR_DOMAINS.join(" ")};
            `
              .replace(/\s+/g, " ")
              .trim(),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
