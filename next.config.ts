import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/au/vecceo/books/id1",
        destination: "/books/au-vecceo-id1.html",
      },
    ];
  },
};

export default nextConfig;
