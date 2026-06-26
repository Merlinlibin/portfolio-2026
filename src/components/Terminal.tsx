import { useTypedCode } from '../hooks/useTypedCode';
import { flatten, sliceLines, type Tok } from '../lib/typedLines';

// Token helpers for terminal lines.
const prompt = (t: string): Tok => ({ t, c: 'prompt' });
const cmd = (t: string): Tok => ({ t, c: 'cmd' });
const out = (t: string): Tok => ({ t, c: 'out' });
const path = (t: string): Tok => ({ t, c: 'path' });
const ok = (t: string): Tok => ({ t, c: 'ok' });

const P = '➜  ~ ';

const SCRIPT: Tok[][] = [
  [prompt(P), cmd('whoami')],
  [out('merlin-libin')],
  [prompt(P), cmd('cat role.txt')],
  [out('Full Stack Developer')],
  [prompt(P), cmd('ls skills/')],
  [path('frontend  backend  mobile')],
  [prompt(P), cmd('npm run build')],
  [ok('✓ built in 0.68s')],
  [prompt(P), cmd('deploy --prod')],
  [ok('✓ shipped successfully')],
  [prompt(P)],
];

const { flat, total } = flatten(SCRIPT);

export function Terminal() {
  const { ref, count } = useTypedCode(total, 38);
  const lines = sliceLines(flat, count);

  return (
    <div className="code-window terminal-window" ref={ref} aria-hidden="true">
      <div className="code-titlebar">
        <span className="code-dot r" />
        <span className="code-dot y" />
        <span className="code-dot g" />
        <span className="code-file">merlin@portfolio: ~</span>
        <span className="code-badge term-badge">zsh</span>
      </div>
      <pre className="code-content terminal-content">
        {SCRIPT.map((_, lineIdx) => {
          const line = lines[lineIdx] ?? [];
          const isLastVisible = lineIdx === lines.length - 1;
          return (
            <div className="code-line" key={lineIdx}>
              {line.map((tok, j) => (
                <span className={`tok-${tok.c}`} key={j}>
                  {tok.t}
                </span>
              ))}
              {isLastVisible && <span className="code-caret term-caret" />}
            </div>
          );
        })}
      </pre>
    </div>
  );
}
