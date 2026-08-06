import { cn } from "@/lib/utils";

/* Figma-style selection frame with corner handles */
export function SelectionFrame({
  children,
  className,
  tone = "cyan",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "cyan" | "ink" | "yellow";
}) {
  const border =
    tone === "cyan" ? "border-cyan" : tone === "yellow" ? "border-yellow" : "border-ink";
  const handle =
    tone === "cyan" ? "bg-cyan" : tone === "yellow" ? "bg-yellow" : "bg-white";
  return (
    <div className={cn("relative border-2", border, className)}>
      {["-top-[7px] -left-[7px]", "-top-[7px] -right-[7px]", "-bottom-[7px] -left-[7px]", "-bottom-[7px] -right-[7px]"].map(
        (pos) => (
          <span
            key={pos}
            className={cn("absolute size-3 border-2 z-10", border, handle, pos)}
            aria-hidden
          />
        )
      )}
      {children}
    </div>
  );
}

/* IMAGE.JPG-style file chip overlaid on media */
export function FileChip({
  label,
  className,
  accent = "bg-cyan",
}: {
  label: string;
  className?: string;
  accent?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 bg-ink text-white font-mono uppercase text-xs px-2.5 py-1.5",
        className
      )}
    >
      <span className={cn("size-3 inline-block", accent)} aria-hidden />
      {label}
    </span>
  );
}

const NOTE_TONES = {
  cyan: "bg-cyan-pastel",
  yellow: "bg-yellow-pastel",
  green: "bg-green-pastel",
  pink: "bg-pink-pastel",
  orange: "bg-yellow text-ink",
} as const;

/* Rotated sticky-note card */
export function StickyNote({
  children,
  tone = "yellow",
  rotate = "-rotate-2",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof NOTE_TONES;
  rotate?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "px-5 py-4 shadow-[4px_6px_14px_rgba(17,18,18,0.12)]",
        NOTE_TONES[tone],
        rotate,
        className
      )}
    >
      {children}
    </div>
  );
}

/* Small folder-tab chip (tags, dates) */
export function FolderChip({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "folder-chip inline-block bg-muted font-mono uppercase text-sm px-4 py-2 text-ink",
        className
      )}
    >
      {children}
    </span>
  );
}

/* Handwritten annotation */
export function Handwritten({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("hand-note", className)}>{children}</span>;
}

/* Hand-drawn underline flourish */
export function SketchUnderline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 14"
      className={cn("w-24 h-3 text-ink", className)}
      fill="none"
      aria-hidden
    >
      <path d="M4 4 C 40 1, 80 1, 116 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 8 C 45 5, 75 5, 106 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M28 12 C 52 9.5, 68 9.5, 92 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

/* Hand-drawn curved arrow */
export function SketchArrow({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 90 40"
      className={cn("w-20 h-9 text-ink", flip && "-scale-x-100", className)}
      fill="none"
      aria-hidden
    >
      <path d="M4 6 C 30 26, 55 32, 80 27" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M80 27 L 68 21 M80 27 L 70 34" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const CURSOR_TONES = {
  cyan: { dot: "bg-cyan", pill: "bg-cyan text-ink" },
  pink: { dot: "bg-pink", pill: "bg-pink text-white" },
  green: { dot: "bg-green", pill: "bg-green text-ink" },
  yellow: { dot: "bg-yellow", pill: "bg-yellow text-ink" },
  ink: { dot: "bg-ink", pill: "bg-ink text-white" },
} as const;

/* Decorative collaborator cursor: dot + name pill */
export function CursorBadge({
  name,
  tone = "pink",
  className,
}: {
  name: string;
  tone?: keyof typeof CURSOR_TONES;
  className?: string;
}) {
  const t = CURSOR_TONES[tone];
  return (
    <span className={cn("inline-flex flex-col items-start gap-0.5 pointer-events-none select-none", className)} aria-hidden>
      <span className={cn("size-3.5 rounded-full", t.dot)} />
      <span className={cn("font-mono text-xs uppercase px-2.5 py-1 rounded-full rounded-tl-none ml-2", t.pill)}>
        {name}
      </span>
    </span>
  );
}

/* Giant pixel display heading */
export function PixelHeading({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "font-pixel font-extrabold uppercase leading-[0.95] tracking-tight text-ink",
        className
      )}
    >
      {children}
    </Tag>
  );
}
