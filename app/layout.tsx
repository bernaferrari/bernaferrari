import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SiteFooter } from "@/components/site-footer";
import { ThemeProvider } from "@/components/theme-provider";

import { SiteHeader } from "@/components/site-header";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://bernaferrari.com"),
  title: {
    default: "Bernardo Ferrari",
    template: "%s | Bernardo Ferrari",
  },
  description:
    "Design engineer. I build the tools between a design and the app that ships, like Figma to Code, used by over 2 million people.",
  applicationName: "Bernardo Ferrari",
  authors: [{ name: "Bernardo Ferrari", url: "https://bernaferrari.com" }],
  creator: "Bernardo Ferrari",
  publisher: "Bernardo Ferrari",
  keywords: [
    "Bernardo Ferrari",
    "software engineering",
    "design engineering",
    "open source",
    "projects",
    "blog",
  ],
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    url: "https://bernaferrari.com",
    siteName: "Bernardo Ferrari",
    title: "Bernardo Ferrari",
    description:
      "Design engineer. I build the tools between a design and the app that ships, like Figma to Code, used by over 2 million people.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bernardo Ferrari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bernardo Ferrari",
    description:
      "Design engineer. I build the tools between a design and the app that ships, like Figma to Code, used by over 2 million people.",
    images: ["/opengraph-image"],
    creator: "@bernaferrari",
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
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
