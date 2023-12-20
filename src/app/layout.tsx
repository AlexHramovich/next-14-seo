import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js 14 SEO checklist",
    default: "Next.js 14 SEO checklist",
  },
  generator: "Next.js",
  applicationName: "Next.js 14 SEO Checklist",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "SEO", "React", "Performance"],
  authors: [{ name: "Alex Hramovich" }],
  creator: "Alex Hramovich",
  publisher: "FocusReactive",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={`${inter.className} bg-white dark:bg-black`}>
        {children}
      </body>
    </html>
  );
}
