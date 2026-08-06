/* Pixel ruler strip (top of page under nav, or bottom of page) */
export function Ruler({ position = "top" }: { position?: "top" | "bottom" }) {
  const marks = Array.from({ length: 14 }, (_, i) => i * 100);
  return (
    <div
      className={
        "w-full overflow-hidden bg-white text-faint select-none " +
        (position === "top" ? "border-b border-grid" : "border-t border-grid")
      }
      aria-hidden
    >
      <div className="flex">
        {marks.map((m) => (
          <div key={m} className="relative shrink-0 w-[100px] h-8">
            <span
              className={
                "absolute left-0 w-px bg-faint " +
                (position === "top" ? "top-0 h-2.5" : "bottom-0 h-2.5")
              }
            />
            {[20, 40, 60, 80].map((t) => (
              <span
                key={t}
                className={
                  "absolute w-px bg-grid " +
                  (position === "top" ? "top-0 h-1.5" : "bottom-0 h-1.5")
                }
                style={{ left: t }}
              />
            ))}
            <span
              className={
                "absolute left-1.5 font-mono text-[10px] " +
                (position === "top" ? "bottom-0.5" : "top-0.5")
              }
            >
              {m}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
