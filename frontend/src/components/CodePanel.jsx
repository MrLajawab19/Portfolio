import { useEffect, useState } from "react";
import { IDE_CODE } from "../data/portfolio";

const KEYWORDS = /(const|while|return|if|else|import|export|function)\b/g;
const STRINGS = /"[^"]*"/g;
const COMMENTS = /(\/\/[^\n]*)/g;
const NUMBERS = /\b(\d+)\b/g;

function highlight(line) {
  const parts = [];
  let idx = 0;
  const marks = [];
  const push = (regex, cls) => {
    let m;
    while ((m = regex.exec(line))) {
      marks.push({ start: m.index, end: m.index + m[0].length, text: m[0], cls });
    }
  };
  push(new RegExp(COMMENTS.source, "g"), "text-emergent-muted italic");
  push(new RegExp(STRINGS.source, "g"), "text-emergent-warning");
  push(new RegExp(KEYWORDS.source, "g"), "text-emergent-error");
  push(new RegExp(NUMBERS.source, "g"), "text-emergent-green-base");
  marks.sort((a, b) => a.start - b.start);
  const nonOverlap = [];
  let cursor = 0;
  for (const m of marks) {
    if (m.start < cursor) continue;
    nonOverlap.push(m);
    cursor = m.end;
  }
  cursor = 0;
  nonOverlap.forEach((m, i) => {
    if (m.start > cursor) parts.push(<span key={"t" + i}>{line.slice(cursor, m.start)}</span>);
    parts.push(<span key={"h" + i} className={m.cls}>{m.text}</span>);
    cursor = m.end;
  });
  if (cursor < line.length) parts.push(<span key="end">{line.slice(cursor)}</span>);
  return parts;
}

export default function CodePanel() {
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 2;
      setTyped(IDE_CODE.slice(0, i));
      if (i >= IDE_CODE.length) clearInterval(id);
    }, 24);
    return () => clearInterval(id);
  }, []);

  const lines = typed.split("\n");
  const totalLines = IDE_CODE.split("\n").length;

  return (
    <div data-testid="hero-code-panel" className="w-full border border-emergent-border bg-emergent-surface shadow-2xl">
      <div className="flex items-center justify-between px-3 py-2 border-b border-emergent-border">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-emergent-error" />
          <span className="w-3 h-3 rounded-full bg-emergent-warning" />
          <span className="w-3 h-3 rounded-full bg-emergent-green-base" />
        </div>
        <span className="font-mono text-xs text-emergent-dim">ayush.js</span>
        <span className="font-mono text-xs text-emergent-muted">⌘S</span>
      </div>
      <pre className="p-4 md:p-5 text-xs md:text-[13px] leading-relaxed font-mono min-h-[380px] whitespace-pre-wrap">
        {lines.map((ln, i) => (
          <div key={i} className="flex gap-3">
            <span className="text-emergent-muted w-6 text-right select-none">{i + 1}</span>
            <span className="flex-1 text-emergent-text">
              {highlight(ln)}
              {i === lines.length - 1 && lines.length < totalLines && (
                <span className="inline-block w-1.5 h-4 bg-emergent-green-base ml-0.5 animate-blink align-middle" />
              )}
            </span>
          </div>
        ))}
      </pre>
      <div className="flex items-center justify-between px-3 py-1.5 border-t border-emergent-border text-[10px] font-mono text-emergent-dim">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-emergent-green-base rounded-full" />
          Latest commit: building something amazing…
        </span>
        <span>UTF-8 · JS · Ln {lines.length}</span>
      </div>
    </div>
  );
}
