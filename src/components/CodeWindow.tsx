import { useTypedCode } from '../hooks/useTypedCode';
import { flatten, sliceLines, type Tok } from '../lib/typedLines';

// Helpers to keep the token table compact and readable.
const c = (t: string): Tok => ({ t, c: 'comment' });
const k = (t: string): Tok => ({ t, c: 'kw' });
const ty = (t: string): Tok => ({ t, c: 'type' });
const pr = (t: string): Tok => ({ t, c: 'prop' });
const s = (t: string): Tok => ({ t, c: 'str' });
const b = (t: string): Tok => ({ t, c: 'bool' });
const p = (t: string): Tok => ({ t, c: 'punct' });
const x = (t: string): Tok => ({ t, c: 'plain' });

// Each inner array is a line of code.
const CODE: Tok[][] = [
  [c('// developer.ts')],
  [k('const '), x('merlin'), p(': '), ty('Developer'), p(' = {')],
  [pr('  name'), p(': '), s('"Merlin Libin"'), p(',')],
  [pr('  role'), p(': '), s('"Full Stack Developer"'), p(',')],
  [pr('  experience'), p(': '), s('"3+ years"'), p(',')],
  [pr('  stack'), p(': ['), s('"React"'), p(', '), s('"React Native"'), p(', '), s('"Node"'), p('],')],
  [pr('  backend'), p(': ['), s('"NestJS"'), p(', '), s('"GraphQL"'), p(', '), s('"REST"'), p('],')],
  [pr('  databases'), p(': ['), s('"PostgreSQL"'), p(', '), s('"MySQL"'), p('],')],
  [pr('  available'), p(': '), b('true'), p(',')],
  [p('};')],
  [],
  [k('export default'), x(' merlin'), p(';')],
];

const { flat, total } = flatten(CODE);

export function CodeWindow() {
  const { ref, count } = useTypedCode(total, 30);
  const lines = sliceLines(flat, count);
  const typing = count < total;

  return (
    <div className="code-window" ref={ref} aria-hidden="true">
      <div className="code-titlebar">
        <span className="code-dot r" />
        <span className="code-dot y" />
        <span className="code-dot g" />
        <span className="code-file">developer.ts</span>
        <span className="code-badge">TypeScript</span>
      </div>
      <div className="code-body">
        <div className="code-gutter">
          {CODE.map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>
        <pre className="code-content">
          {CODE.map((_, lineIdx) => {
            const line = lines[lineIdx] ?? [];
            const isLastVisible = lineIdx === lines.length - 1;
            return (
              <div className="code-line" key={lineIdx}>
                {line.map((tok, j) => (
                  <span className={`tok-${tok.c}`} key={j}>
                    {tok.t}
                  </span>
                ))}
                {isLastVisible && typing && <span className="code-caret" />}
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
}
