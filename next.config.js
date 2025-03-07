/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Add trailing slashes to URLs
  env: {
    GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY,
  },
  // Ensure client-side scripts load correctly when hosted in subdirectory
  // Note: Remove this line if hosting at the root of your domain
  // assetPrefix: './',
};

module.exports = nextConfig;