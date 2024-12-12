import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Используем @svgr/webpack для импорта SVG как React-компонентов
    });
    return config;
  },
};

export default nextConfig;
