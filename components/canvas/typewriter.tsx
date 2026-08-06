"use client";

import { useEffect, useState } from "react";

export function Typewriter({ text, startDelay = 400 }: { text: string; startDelay?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= text.length) clearInterval(interval);
      }, 70);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, startDelay]);

  return (
    <span>
      {text.slice(0, count)}
      <span className="caret-blink inline-block w-[3px] h-[1em] bg-ink align-middle ml-0.5" aria-hidden />
    </span>
  );
}
