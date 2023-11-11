/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      'www.google.com',
      'avatars.githubusercontent.com',
      'avatar.tobi.sh',
      'cloudflare-ipfs.com',
      'loremflickr.com'
    ]
  },
  experimental: {
    legacyBrowsers: false,
    browsersListForSwc: true
  }
};

module.exports = nextConfig;
