import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 确保静态导出时的基础路径配置
  assetPrefix: process.env.NODE_ENV === 'production' ? undefined : undefined,
  // 禁用服务器端功能以支持静态导出
  experimental: {
    // 如果需要的话可以启用
  },
};

export default nextConfig;
