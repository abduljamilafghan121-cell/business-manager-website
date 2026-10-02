/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        // The Windows installer. Browsers cannot display an .exe, so we tell
        // them explicitly to save it as a file rather than open it.
        // The file name carries the version, so it can be cached for a year:
        // a new release gets a new file name and is never confused with this one.
        source: "/downloads/:path*",
        headers: [
          {
            // No filename here on purpose: the browser takes the name from the
            // URL, so there is no second copy to forget when you release a
            // new version.
            key: "Content-Disposition",
            value: "attachment"
          },
          { key: "Content-Type", value: "application/octet-stream" },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
          { key: "X-Content-Type-Options", value: "nosniff" }
        ]
      }
    ];
  }
};

export default nextConfig;
