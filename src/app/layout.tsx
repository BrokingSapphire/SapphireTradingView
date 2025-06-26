// src/app/layout.tsx
import './globals.css'
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sapphire Terminal",
  description: "Manage your investments and trade efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Use Next.js Script component for better performance */}
        <Script
          src="charting_library/charting_library.standalone.js"
          strategy="beforeInteractive"
        />
        <Script
          src="datafeeds/udf/dist/bundle.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}