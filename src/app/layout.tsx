import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js 14 SEO checklist",
    default: "Next.js 14 SEO checklist article",
  },
  generator: "Next.js",
  applicationName: "Next.js 14 SEO Checklist",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "SEO", "React", "Performance"],
  images: ["https://cdn.sanity.io/images/0xiy76wv/production/74e31f73a4cd86c932951002ef121b666da5c526-2298x1137.png?auto=format"],
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
      <body className={`${inter.className} bg-white dark:bg-black`}>
        {children}
      </body>
    </html>
  );
}
