import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ClarityAnalytics } from "@/components/ClarityAnalytics";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Franco Longhi | CV",
  description: "Building fintech products. At established companies and startups.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any"
      }
    ]
  }
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
      <script src="https://analytics.ahrefs.com/analytics.js" data-key="sxNRUvsypYdcdk/GmZTvFg" async></script>
      </head>
      <body>
        {children}
        <ClarityAnalytics />
      </body>
      <Analytics />
    </html>
  );
}
