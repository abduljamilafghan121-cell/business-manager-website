import type { Metadata } from "next";
import "./globals.css";
import { siteUrl } from "@/lib/site";

const description =
  "Business Manager is a complete offline desktop system for sales, inventory, purchases, accounting, and reports — built for fast daily operations.";

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
