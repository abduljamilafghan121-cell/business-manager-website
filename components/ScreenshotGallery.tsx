"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

type Screenshot = {
  src: string;
  alt: string;
};

export default function ScreenshotGallery({
  screenshots,
  className
}: {
  screenshots: Screenshot[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const active = useMemo(() => {
    if (openIndex === null) return null;
    return screenshots[openIndex] ?? null;
  }, [openIndex, screenshots]);

  const close = useCallback(() => setOpenIndex(null), []);

  const next = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return 0;
      return (i + 1) % screenshots.length;
    });
  }, [screenshots.length]);

  const prev = useCallback(() => {
    setOpenIndex((i) => {
      if (i === null) return 0;
      return (i - 1 + screenshots.length) % screenshots.length;
    });
  }, [screenshots.length]);

  useEffect(() => {
    if (openIndex === null) {
      const t = window.setTimeout(() => setIsVisible(false), 180);
      return () => window.clearTimeout(t);
    }

    setIsVisible(true);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close, next, openIndex, prev]);

  return (
    <div className={className}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setOpenIndex(idx)}
            className="group relative overflow-hidden rounded-2xl border border-white/20 glass-morphism hover-lift text-left transition-transform duration-300"
            aria-label={`Open screenshot ${idx + 1}`}
            style={{ animationDelay: `${idx * 60}ms` }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent px-4 pb-3 pt-10">
              <div className="text-xs font-semibold text-white/90">
                Screenshot {idx + 1}
              </div>
            </div>
          </button>
        ))}
      </div>

      {isVisible ? (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200 ${
            active ? "pointer-events-auto" : "pointer-events-none"
          } ${active ? "bg-black/80 opacity-100" : "bg-black/0 opacity-0"}`}
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot preview"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            className={`relative w-full max-w-6xl transition-all duration-200 ${
              active ? "translate-y-0 scale-100 opacity-100" : "translate-y-2 scale-[0.98] opacity-0"
            }`}
          >
            <div className="flex items-center justify-between gap-3 pb-3">
              <div className="text-sm font-semibold text-white">
                {active?.alt ?? ""}
              </div>
              <div className="text-xs text-white/80">
                <span className="inline-flex items-center rounded-full border border-white/20 bg-black/30 px-3 py-1 font-semibold shadow-lg backdrop-blur">
                  {openIndex !== null ? `${openIndex + 1} / ${screenshots.length}` : ""}
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-black">
              <div
                key={active?.src ?? "empty"}
                className="relative z-0 w-full overflow-auto"
                style={{ maxHeight: "75vh" }}
              >
                <div className="mx-auto w-fit p-2">
                  {active ? (
                    <Image
                      src={active.src}
                      alt={active.alt}
                      width={1600}
                      height={1000}
                      className="h-auto w-auto max-w-none"
                      priority
                    />
                  ) : null}
                </div>
              </div>

              <div className="absolute right-3 top-3 z-30 pointer-events-auto">
                <button
                  type="button"
                  onClick={close}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/60 text-base font-semibold text-white shadow-xl backdrop-blur hover:bg-black/75"
                  aria-label="Close preview"
                >
                  ✕
                </button>
              </div>

              <div className="absolute inset-y-0 left-0 z-20 flex items-center p-2">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/55 text-lg font-semibold text-white shadow-lg backdrop-blur hover:bg-black/70"
                  aria-label="Previous screenshot"
                >
                  ‹
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 z-20 flex items-center p-2">
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/55 text-lg font-semibold text-white shadow-lg backdrop-blur hover:bg-black/70"
                  aria-label="Next screenshot"
                >
                  ›
                </button>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/40 via-black/0 to-transparent px-4 pb-3 pt-10" />
            </div>

            <div className="pt-3 text-xs text-white/60">
              Tip: use Esc to close, and ←/→ keys to navigate.
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
