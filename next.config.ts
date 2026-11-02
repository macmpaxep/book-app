import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/ventu/notebook",
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
        source: "/pay/ka",
        destination: "/pay/a/index.html",
      },
      {
        source: "/pay/km",
        destination: "/pay/b/index.html",
      },
      {
        source: "/pay/p",
        destination: "/pay/c/index.html",
      },
       {
        source: "/pay/be",
        destination: "/pay/d/index.html",
      },
      {
        source: "/pay/bg",
        destination: "/pay/e/index.html",
      },
      {
        source: "/pay/bu",
        destination: "/pay/f/index.html",
      },
    ];
  },
};

export default nextConfig;
