import { useEffect, useState } from 'react';

/**
 * Cycles through `words` with a typewriter effect.
 */
export function useTypewriter(words: string[], typeSpeed = 90, deleteSpeed = 45, pause = 1600) {
  const [text, setText] = useState('');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setText(words[0] ?? '');
      return;
    }

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer: number;

    const step = () => {
      const current = words[wordIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timer = window.setTimeout(step, pause);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
      }
      timer = window.setTimeout(step, deleting ? deleteSpeed : typeSpeed);
    };

    timer = window.setTimeout(step, typeSpeed);
    return () => window.clearTimeout(timer);
  }, [words, typeSpeed, deleteSpeed, pause]);

  return text;
}
