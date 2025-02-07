// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;



module.exports = {
  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Content-Type", value: "application/xml" },
        ],
      },
    ];
  },
};
