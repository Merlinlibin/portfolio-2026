import { useEffect, useRef, useState } from 'react';

/**
 * Reveals `total` characters one-by-one (time-based) once the element
 * enters the viewport. Returns a ref to attach and the revealed count.
 */
export function useTypedCode(total: number, perChar = 16) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduced) {
        setCount(total);
        return;
      }

      const start = performance.now();
      const tick = (now: number) => {
        const shown = Math.min(total, Math.floor((now - start) / perChar));
        setCount(shown);
        if (shown < total) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      run();
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [total, perChar]);

  return { ref, count };
}
