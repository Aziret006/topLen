import { Metadata } from "next";
import { Suspense } from "react";
import { gilroy } from "./fonsts";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop/scrollToTop";

export const metadata: Metadata = {
  title: "Top 1000 - Your Ultimate Landing Page",
  description:
    "Discover the best products and services in our curated Top 1000 list. Explore now!",
  openGraph: {
    title: "Top 1000 - Your Ultimate Landing Page",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Top 1000 - Your Ultimate Landing Page",
    description:
      "Discover the best products and services in our curated Top 1000 list. Explore now!",
    images: ["/og-image.jpg"],
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
        {children}
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  );
}
