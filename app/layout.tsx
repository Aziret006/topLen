import { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop/scrollToTop";
import { gilroy } from "./fonsts";

export const metadata: Metadata = {
  title:
    "ТОП — это современная онлайн-платформа, которая объединяет все аспекты футбольной жизни для любителей и профессионалов в СНГ и за его пределами",
  description:
    "Discover the best products and services in our curated Top 1000 list. Explore now!",
  openGraph: {
    title:
      "ТОП — это современная онлайн-платформа, которая объединяет все аспекты футбольной жизни для любителей и профессионалов в СНГ и за его пределами",
    description:
      "Discover the best products and services in our curated Top 1000 list. Explore now!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Top 1000 Landing Page",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://www.top1000.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 1000 - Your Ultimate Landing Page",
    description:
      "Discover the best products and services in our curated Top 1000 list. Explore now!",
    images: ["/og-image.jpg"],
    creator: "@top1000",
  },
  keywords: [
    "Top 1000",
    "products",
    "services",
    "curated list",
    "landing page",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gilroy.variable}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  );
}
