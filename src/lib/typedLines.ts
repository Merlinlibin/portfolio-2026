export interface Tok {
  t: string;
  /** token class -> styled via `.tok-${c}` in CSS */
  c: string;
}

const NL: Tok = { t: '\n', c: 'nl' };

/** Flatten lines (with newline markers) and report the total typeable length. */
export function flatten(lines: Tok[][]): { flat: Tok[]; total: number } {
  const flat = lines.flatMap((line, i) => (i === 0 ? line : [NL, ...line]));
  const total = flat.reduce((sum, tok) => sum + tok.t.length, 0);
  return { flat, total };
}

/** Return the lines visible after `revealed` characters have been typed. */
export function sliceLines(flat: Tok[], revealed: number): Tok[][] {
  const out: Tok[][] = [[]];
  let used = 0;
  for (const tok of flat) {
    if (used >= revealed) break;
    if (tok.t === '\n') {
      out.push([]);
      used += 1;
      continue;
    }
    const remaining = revealed - used;
    const text = tok.t.length <= remaining ? tok.t : tok.t.slice(0, remaining);
    out[out.length - 1].push({ t: text, c: tok.c });
    used += text.length;
  }
  return out;
}
