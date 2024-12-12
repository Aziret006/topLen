import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Включает строгий режим React
  swcMinify: true,       // Использует SWC для минимизации
  images: {
    domains: ["example.com"], // Разрешенные домены для изображений
    formats: ["image/avif", "image/webp"], // Поддерживаемые форматы изображений
  },
  i18n: {
    locales: ["en", "ru"], // Поддерживаемые локали
    defaultLocale: "en",   // Локаль по умолчанию
  },
};

export default nextConfig;