/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // 移除相对路径前缀，Cloudflare Pages 处理更好
  // assetPrefix: '.',
};

module.exports = nextConfig;
