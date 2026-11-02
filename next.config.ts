import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/au/vecceo/books/id1",
        destination: "/books/au-vecceo-id1.html",
      },
      {
        source: "/au/vecceo/lost90k",
        destination: "/books/au-vecceo-lost90k.html",
      },
      {
        source: "/au/vecceo/neokazakh",
        destination: "/books/au-vecceo-neokazakh.html",
      },
      {
        source: "/pay/ca",
        destination: "/pay/a/index.html",
      },
      {
        source: "/pay/cb",
        destination: "/pay/b/index.html",
      },
    ];
  },
};

export default nextConfig;
