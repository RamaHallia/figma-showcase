import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const thunder = localFont({
  src: [
    {
      path: "./fonts/thunder-lc.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/thunder-mediumlc.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-thunder",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Figma Design System Showcase",
  description: "Démonstration complète du design system Figma",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${thunder.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
