/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // ── Images ──
  // Serve original images directly (no server-side conversion).
  // The 2GB droplet doesn't have enough RAM to resize/convert images
  // per request. Add Cloudflare for automatic optimization if needed.
  images: {
    unoptimized: true,
  },

  // ── Compression ──
  compress: true,

  // ── Powered-by header removal ──
  poweredByHeader: false,

  // ── Security & caching headers ──
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Static assets — long cache
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Images — long cache
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
