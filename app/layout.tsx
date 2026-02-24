import type { Metadata } from "next";
import { Mona_Sans, TikTok_Sans } from "next/font/google";
import Script from "next/script";

import "./globals.css";
import "swiper/css";
import "lenis/dist/lenis.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/providers/lenis-provider";
import { MotionProvider } from "@/components/providers/motion-provider";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const tiktokSans = TikTok_Sans({
  variable: "--font-tiktok-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cresco-ivory.vercel.app/"),
  title: {
    default: "Cresco AI | Smart Fitness Tracking & AI Coaching",
    template: "%s | Cresco AI",
  },
  description:
    "Track workouts, monitor performance, and get real-time AI coaching with Cresco AI. Smarter fitness tracking built for serious results.",
  keywords: [
    "AI fitness",
    "workout tracker",
    "smart gym coach",
    "Cresco AI",
    "fitness analytics",
  ],
  authors: [{ name: "Cresco AI" }],
  openGraph: {
    title: "Cresco AI | The Future of Fitness",
    description: "Real-time AI coaching for serious results.",
    url: "https://cresco-ivory.vercel.app/",
    siteName: "Cresco AI",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Cresco AI Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cresco AI | Smart Fitness Tracking",
    description: "AI-powered workout logging and coaching.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cresco AI",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    description:
      "Smarter fitness tracking built for serious results using artificial intelligence.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          strategy="beforeInteractive"
        >
          {JSON.stringify(jsonLd)}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${monaSans.variable} ${tiktokSans.variable} antialiased`}
      >
        <SmoothScroll>
          <MotionProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </MotionProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
