const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,  // <-- This is the key!
  },
};

module.exports = nextConfig;

