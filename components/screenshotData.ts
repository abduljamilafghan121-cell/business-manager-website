export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
};

/**
 * `width` / `height` are the real pixel dimensions of each file. They keep
 * next/image from reserving the wrong box and avoid layout shift.
 *
 * `alt` describes what is on screen for screen readers and search engines;
 * `caption` is the label shown on the thumbnail and in the preview.
 */
export const screenshots: Screenshot[] = [
  {
    src: "/screenshots/screen-01.webp",
    alt: "Choose which branch or business to open when starting Business Manager",
    width: 1792,
    height: 987,
    caption: "Select a branch"
  },
  {
    src: "/screenshots/screen-02.webp",
    alt: "Dashboard showing key figures for the business, with a sales chart, top products and customers, low stock alerts, expiring batches and recent invoices",
    width: 1793,
    height: 997,
    caption: "Dashboard"
  },
  {
    src: "/screenshots/screen-03.webp",
    alt: "Customer list with balances, contact details, credit limits and payment history",
    width: 1399,
    height: 879,
    caption: "Customers"
  },
  {
    src: "/screenshots/screen-04.webp",
    alt: "Invoice screen with fast keyboard-driven item entry, per-item and whole-bill discounts, and payment tracking",
    width: 1798,
    height: 1002,
    caption: "Invoices"
  },
  {
    src: "/screenshots/screen-05.webp",
    alt: "Inventory screen showing stock levels, batch numbers and expiry dates, stock movements and low stock and expiry alerts",
    width: 1793,
    height: 1004,
    caption: "Inventory"
  },
  {
    src: "/screenshots/screen-06.webp",
    alt: "Reports screen covering sales, inventory, customers, outstanding payments, discounts and salesman performance",
    width: 1803,
    height: 996,
    caption: "Reports"
  },
  {
    src: "/screenshots/screen-07.webp",
    alt: "Daily book bringing together sales, expenses, purchases and wallet movements for any chosen date range",
    width: 1914,
    height: 1010,
    caption: "Daily book"
  },
  {
    src: "/screenshots/screen-08.webp",
    alt: "Customer ledger table listing every invoice and payment with a running balance, filterable by currency and date",
    width: 1423,
    height: 810,
    caption: "Customer ledger"
  },
  {
    src: "/screenshots/screen-09.webp",
    alt: "Settings screen with backup and restore options, currencies, invoice design, screen lock and licence status",
    width: 1396,
    height: 870,
    caption: "Settings & licence"
  }
];
