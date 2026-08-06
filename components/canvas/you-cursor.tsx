"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/* A "YOU" collaborator cursor pinned mid-viewport that lags behind on
   scroll like a Figma multiplayer cursor, then springs back into place. */
export function YouCursor() {
  const { scrollY } = useScroll();
  const smooth = useSpring(scrollY, { stiffness: 120, damping: 18, mass: 0.6 });
  const offset = useTransform<number, number>([scrollY, smooth], ([raw, lag]) =>
    Math.max(-160, Math.min(160, (raw as number) - (lag as number)))
  );

  return (
    <motion.div
      className="fixed left-[46%] top-[47%] z-40 hidden md:flex flex-col items-start gap-0.5 pointer-events-none select-none"
      style={{ y: offset }}
      aria-hidden
    >
      <span className="size-4 rounded-full bg-ink" />
      <span className="font-mono text-xs uppercase px-2.5 py-1 rounded-full rounded-tl-none ml-2.5 bg-ink text-white">
        You
      </span>
    </motion.div>
  );
}
