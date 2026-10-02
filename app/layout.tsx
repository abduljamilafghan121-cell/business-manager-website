import type { Metadata } from "next";
import "./globals.css";

const description =
  "Business Manager is a complete offline desktop system for sales, inventory, purchases, accounting, and reports — built for fast daily operations.";

/**
 * TODO(owner): set NEXT_PUBLIC_SITE_URL to your real domain, e.g.
 * https://businessmanager.app — in .env.local and in your host's dashboard.
 * Until then, canonical/OG/sitemap URLs point at a placeholder and will not be
 * indexed correctly.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Business Manager — Offline Retail & Business Management System",
    template: "%s | Business Manager"
  },
  description,
  keywords: [
    "offline business management software",
    "retail POS",
    "inventory management",
    "invoice software",
    "shop management system",
    "offline accounting software"
  ],
  applicationName: "Business Manager",
  authors: [{ name: "Business Manager" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Business Manager — Offline Retail & Business Management System",
    description,
    url: "/",
    siteName: "Business Manager",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Manager — Offline Retail & Business Management System",
    description
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen text-white antialiased">{children}</body>
    </html>
  );
}
