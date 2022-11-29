module.exports = {
  reactStrictMode: true,
  experimental: {
    transpilePackages: ["ui"],
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/web',
        destination: `${process.env.WEB_URL}/web`,
      },
      {
        source: '/web/:path*',
        destination: `${process.env.WEB_URL}/web/:path*`,
      },
      {
        source: '/docs',
        destination: `${process.env.DOCS_URL}/docs`,
      },
      {
        source: '/docs/:path*',
        destination: `${process.env.DOCS_URL}/docs/:path*`,
      },
    ];
  },
};
