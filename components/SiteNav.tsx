"use client";

import { useEffect, useState } from "react";

export const navLinks = [
  { href: "#screenshots", label: "Product" },
  { href: "#features", label: "Features" },
  { href: "#download", label: "Download" },
  { href: "#requirements", label: "Requirements" },
  { href: "#comparison", label: "Comparison" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" }
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/85 backdrop-blur-lg">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="pulse-glow flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-800"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="currentColor">
                <path d="M4 7h16v12a1 1 0 01-1 1h-5v-2h3v-2H7v2h3v2H5a1 1 0 01-1-1V7zm2 2v2h12V9H6zm2 6h4v2H8v-2z" />
              </svg>
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-slate-900">
                Business Manager
              </span>
              <span className="block text-xs text-slate-500">
                Shop &amp; Business Software
              </span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    aria-current={
                      activeId === l.href.slice(1) ? "true" : undefined
                    }
                    className="font-medium text-slate-600 transition-colors duration-200 hover:text-blue-700 aria-[current]:text-blue-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-800 sm:inline-flex"
            >
              Request demo
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-white text-slate-700 transition-colors hover:bg-slate-50 lg:hidden"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                aria-hidden="true"
              >
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-slate-200 bg-white lg:hidden"
      >
        <nav aria-label="Mobile" className="mx-auto w-full max-w-6xl px-5 py-2">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-slate-100 py-3 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3 sm:hidden">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white"
              >
                Request demo
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
