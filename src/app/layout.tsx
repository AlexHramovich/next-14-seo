import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Next.js SEO checklist",
    default: "Next.js SEO checklist",
  },
  description:
    "All things you need to know about SEO in Next.js to make your website rank higher in search engines.",
  generator: "Next.js",
  applicationName: "Next.js SEO Checklist",
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

  openGraph: {
    title: "Next.js SEO Checklist",
    description:
      "All things you need to know about SEO in Next.js to make your website rank higher in search engines.",
    url: "https://next-seo-checklist.vercel.app",
    siteName: "Next.js SEO Checklist",
    type: "website",
    images: [
      "https://cdn.sanity.io/images/0xiy76wv/production/74e31f73a4cd86c932951002ef121b666da5c526-2298x1137.png?auto=format",
    ],
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
