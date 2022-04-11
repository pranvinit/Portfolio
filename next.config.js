/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: { images: { layoutRaw: true } },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
