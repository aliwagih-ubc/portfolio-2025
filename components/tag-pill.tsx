import { cn } from "@/lib/utils";

interface TagPillProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "muted";
}

export function TagPill({
  children,
  className,
  variant = "default",
}: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium whitespace-nowrap",
        variant === "default" &&
          "bg-muted/50 text-muted-foreground border border-border/50",
        variant === "accent" &&
          "bg-accent/10 text-accent border border-accent/30",
        variant === "muted" && "bg-muted/30 text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}
