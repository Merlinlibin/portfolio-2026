import { useEffect, useRef } from 'react';

export function Background() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        glow.style.opacity = '1';
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="bg-aurora" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
        <div className="bg-grid" />
        <div className="code-floaters">
          <span className="cf f1">{'const'}</span>
          <span className="cf f2">{'() => {}'}</span>
          <span className="cf f3">{'</>'}</span>
          <span className="cf f4">{'async/await'}</span>
          <span className="cf f5">{'{ ...props }'}</span>
          <span className="cf f6">{'npm run dev'}</span>
          <span className="cf f7">{'git push'}</span>
          <span className="cf f8">{'0 1 0 1'}</span>
          <span className="cf f9">{'<Merlin />'}</span>
          <span className="cf f10">{'return ()'}</span>
        </div>
        <div className="bg-noise" />
      </div>
      <div className="cursor-glow" ref={glowRef} aria-hidden="true" />
    </>
  );
}
