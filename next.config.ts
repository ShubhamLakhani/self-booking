import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  headers: async () => [
    {
      source: '/embed',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'ALLOWALL', // or use Content-Security-Policy instead
        },
      ],
    },
  ],
};

export default nextConfig;
