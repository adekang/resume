/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: '.', // 使用相对路径前缀
  trailingSlash: true, // 确保路径以斜杠结尾
  images: {
    unoptimized: true // 静态导出时需要
  }
};

module.exports = nextConfig;
