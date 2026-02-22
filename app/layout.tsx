import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/social-links";
import { ThemeProvider } from "@/components/theme-provider";

import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://bernaferrari.com"),
  title: {
    default: "Bernardo Ferrari",
    template: "%s | Bernardo Ferrari",
  },
  description:
    "I build open source tools and experiments at the intersection of design and engineering.",
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
      "I build open source tools and experiments at the intersection of design and engineering.",
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
      "I build open source tools and experiments at the intersection of design and engineering.",
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
    <html lang="en" className={`${inter.className}`} suppressHydrationWarning>
      <body className="antialiased tracking-tight">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col justify-between bg-background text-foreground transition-colors">
            <Header />
            <main className="max-w-2xl mx-auto w-full px-8 pt-28 pb-8 flex-1">
              {children}
            </main>
            <div className="px-8 pb-8 max-w-2xl mx-auto w-full">
              <Footer />
            </div>
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
