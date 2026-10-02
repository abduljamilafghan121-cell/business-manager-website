"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Screenshot } from "@/components/screenshotData";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function ScreenshotGallery({
  screenshots,
  className
}: {
  screenshots: Screenshot[];
  className?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const restoreRef = useRef<HTMLElement | null>(null);
  const hideTimerRef = useRef<number | null>(null);

  const active = openIndex === null ? null : (screenshots[openIndex] ?? null);
  const total = screenshots.length;

  const open = useCallback((index: number) => {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    restoreRef.current = document.activeElement as HTMLElement | null;
    setZoomed(false);
    setIsVisible(true);
    setOpenIndex(index);
  }, []);

  const close = useCallback(() => {
    setOpenIndex(null);
    hideTimerRef.current = window.setTimeout(() => {
      setIsVisible(false);
      hideTimerRef.current = null;
    }, 200);
  }, []);

  const next = useCallback(() => {
    setZoomed(false);
    setOpenIndex((i) => (i === null ? 0 : (i + 1) % total));
  }, [total]);

  const prev = useCallback(() => {
    setZoomed(false);
    setOpenIndex((i) => (i === null ? 0 : (i - 1 + total) % total));
  }, [total]);

  useEffect(() => {
    const timer = hideTimerRef;
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    closeRef.current?.focus();
  }, [isVisible]);

  useEffect(() => {
    if (openIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) {
      restoreRef.current?.focus();
      restoreRef.current = null;
    }
  }, [openIndex]);

  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key === "ArrowRight") {
        next();
        return;
      }
      if (e.key === "ArrowLeft") {
        prev();
        return;
      }
      if (e.key !== "Tab") return;

      const nodes = dialogRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE);
      if (!nodes || nodes.length === 0) return;

      const list = Array.from(nodes);
      const first = list[0];
      const last = list[list.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [close, next, openIndex, prev]);

  return (
    <div className={className}>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {screenshots.map((s, idx) => (
          <li key={s.src}>
            <button
              type="button"
              onClick={() => open(idx)}
              aria-haspopup="dialog"
              className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lift"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div className="relative aspect-[16/9] w-full bg-slate-100">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-1 transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-4 pb-3 pt-10">
                <span className="text-xs font-semibold text-white">
                  {s.caption}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-black/40 px-2 py-0.5 text-[11px] font-semibold text-white/90 backdrop-blur">
                  Enlarge
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {isVisible ? (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={active ? `${active.caption} preview` : "Screenshot preview"}
          className={`fixed inset-0 z-50 flex items-center justify-center p-3 backdrop-blur-md transition-opacity duration-200 sm:p-6 ${
            active
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }`}
          style={{ background: "rgba(2, 6, 23, 0.82)" }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div
            className={`flex h-full max-h-full w-full max-w-6xl flex-col rounded-3xl bg-slate-900/60 p-3 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl transition-all duration-300 sm:p-4 ${
              active
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-3 scale-[0.97] opacity-0"
            }`}
          >
            {/* header */}
            <div className="flex shrink-0 items-center justify-between gap-4 pb-3">
              <div className="min-w-0">
                <div className="truncate text-sm font-bold text-white sm:text-base">
                  {active?.caption ?? ""}
                </div>
                <div className="text-xs text-slate-400">
                  Business Manager — product tour
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold tabular-nums text-white ring-1 ring-white/15">
                  {openIndex !== null ? `${openIndex + 1} / ${total}` : ""}
                </span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={close}
                  aria-label="Close preview"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/15 transition-all duration-200 hover:rotate-90 hover:bg-white/20"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* stage */}
            <div className="group relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-slate-950 ring-1 ring-white/10">
              {active ? (
                zoomed ? (
                  /* Native size with real scrolling. The scrolling box is a
                     block (not a flex-centred row) so the overflowing top stays
                     reachable instead of being cut off. */
                  <div className="h-full w-full overflow-auto overscroll-contain">
                    <Image
                      src={active.src}
                      alt={active.alt}
                      width={active.width}
                      height={active.height}
                      onClick={() => setZoomed(false)}
                      style={{ width: active.width }}
                      className="h-auto max-w-none cursor-zoom-out rounded-lg"
                    />
                  </div>
                ) : (
                  /* Fill the stage and let object-contain letterbox the image.
                     No percentage max-height to resolve, so it can never
                     overflow and get clipped. */
                  <div className="h-full w-full p-2 sm:p-3">
                    <Image
                      src={active.src}
                      alt={active.alt}
                      width={active.width}
                      height={active.height}
                      onClick={() => setZoomed(true)}
                      className="h-full w-full cursor-zoom-in object-contain"
                    />
                  </div>
                )
              ) : null}

              <button
                type="button"
                onClick={prev}
                aria-label="Previous screenshot"
                className="absolute left-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white/25 active:scale-95 sm:left-3 sm:h-12 sm:w-12"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next screenshot"
                className="absolute right-2 top-1/2 z-20 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition-all duration-200 hover:scale-110 hover:bg-white/25 active:scale-95 sm:right-3 sm:h-12 sm:w-12"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {active ? (
                <button
                  type="button"
                  onClick={() => setZoomed((v) => !v)}
                  aria-pressed={zoomed}
                  className="absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 rounded-full bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-slate-950"
                >
                  <svg
                    className="h-3.5 w-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    {zoomed ? (
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    ) : (
                      <>
                        <circle cx="11" cy="11" r="7" />
                        <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" />
                      </>
                    )}
                  </svg>
                  {zoomed ? "Fit to screen" : "Zoom in"}
                </button>
              ) : null}
            </div>

            {/* filmstrip */}
            <div className="shrink-0 pt-3">
              <ul className="flex snap-x gap-2 overflow-x-auto pb-1">
                {screenshots.map((s, idx) => {
                  const isActive = idx === openIndex;
                  return (
                    <li key={s.src} className="shrink-0 snap-center">
                      <button
                        type="button"
                        onClick={() => {
                          setZoomed(false);
                          setOpenIndex(idx);
                        }}
                        aria-label={`Go to ${s.caption}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`relative block h-14 w-24 overflow-hidden rounded-lg ring-2 transition-all duration-200 ${
                          isActive
                            ? "ring-blue-500"
                            : "opacity-50 ring-white/20 hover:opacity-90"
                        }`}
                      >
                        <Image
                          src={s.src}
                          alt=""
                          fill
                          sizes="96px"
                          className="object-contain p-0.5"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 pt-2 text-[11px] text-slate-400">
                <span>
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-sans text-white/80 ring-1 ring-white/15">
                    Esc
                  </kbd>{" "}
                  close
                </span>
                <span>
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-sans text-white/80 ring-1 ring-white/15">
                    &#8592;
                  </kbd>{" "}
                  <kbd className="rounded bg-white/10 px-1.5 py-0.5 font-sans text-white/80 ring-1 ring-white/15">
                    &#8594;
                  </kbd>{" "}
                  move
                </span>
                <span>
                  {zoomed
                    ? "scroll to pan, click to fit"
                    : "click the image to zoom in"}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
