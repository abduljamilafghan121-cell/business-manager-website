import { download } from "@/lib/download";

type DownloadButtonProps = {
  /** "primary" sits in the hero, "outline" is the quieter secondary style. */
  variant?: "primary" | "outline";
  className?: string;
};

export function DownloadButton({
  variant = "primary",
  className = ""
}: DownloadButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2.5 px-5 py-3 text-sm font-semibold transition-all duration-200";

  const skin =
    variant === "primary"
      ? "bg-blue-700 text-white shadow-sm hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-md"
      : "border border-slate-300 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 hover:shadow-sm";

  return (
    <a
      href={download.url}
      download={download.fileName}
      className={`${base} ${skin} ${className}`}
    >
      <svg
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 4v12" />
        <path d="M7 11l5 5 5-5" />
        <path d="M5 20h14" />
      </svg>

      <span className="text-left leading-tight">
        <span className="block">Download for Windows</span>
        <span
          className={
            variant === "primary"
              ? "block text-[11px] font-medium text-blue-100"
              : "block text-[11px] font-medium text-slate-500"
          }
        >
          {download.sizeMb} &middot; version {download.version}
        </span>
      </span>
    </a>
  );
}
