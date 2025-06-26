// src/app/layout.tsx
import './globals.css'
import { Inter } from "next/font/google";
import type { Metadata } from "next";

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
        <script src="charting_library/charting_library.standalone.js"></script>
        <script src="datafeeds/udf/dist/bundle.js"></script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}