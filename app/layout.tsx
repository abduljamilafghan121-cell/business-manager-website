import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Manager — Offline Retail & Business Management System",
  description:
    "Business Manager is a complete offline desktop system for sales, inventory, purchases, accounting, and reports — built for fast daily operations.",
  openGraph: {
    title: "Business Manager — Offline Retail & Business Management System",
    description:
      "Run your retail operations fully offline with fast invoicing, inventory tracking, ledgers, and business reports.",
    type: "website"
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
