/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // ESLint runs separately via `npm run lint`. Skipping during builds
    // avoids the eslint v9 / eslint-config-next compatibility break.
    ignoreDuringBuilds: true,
  },
};
export default nextConfig;
