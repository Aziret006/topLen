import { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop/scrollToTop";
import { gilroy } from "./fonsts";

export const metadata: Metadata = {
  title: "top born to play",
  description: "top born to play",
  openGraph: {
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ТОП Landing Page",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ТОП — Ваша платформа для футбольной жизни",
    description:
      "Исследуйте лучшие продукты и услуги для любителей и профессионалов футбола на платформе ТОП.",
    images: ["/og-image.jpg"],
    creator: "@top1000",
  },
  keywords: [
    "ТОП",
    "футбол",
    "платформа",
    "футбольная жизнь",
    "любители",
    "профессионалы",
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
  icons: {
    icon: "/Logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      />
      <body className={gilroy.variable}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <ScrollToTop />
        </Suspense>
      </body>
    </html>
  );
}
