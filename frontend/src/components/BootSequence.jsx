import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  { text: "> ayush_os v2.0.27 :: initializing", d: 18 },
  { text: "> checking dependencies ... [OK]", d: 14 },
  { text: "> mounting /projects       ... [OK]", d: 14 },
  { text: "> loading neural_net_core  ... [OK]", d: 14 },
  { text: "> spawning creative_engine ... [OK]", d: 12 },
  { text: "> boot complete. welcome, visitor.", d: 16 },
];

export default function BootSequence({ onComplete = () => {} }) {
  const [visible, setVisible] = useState(true);
  const [linesShown, setLinesShown] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (linesShown >= LINES.length) {
      const t = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(t);
    }
    const line = LINES[linesShown];
    if (char < line.text.length) {
      const t = setTimeout(() => setChar((c) => c + 1), line.d);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLinesShown((n) => n + 1);
      setChar(0);
    }, 40);
    return () => clearTimeout(t);
  }, [linesShown, char]);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    if (!visible) onComplete?.();
  }, [visible, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="boot-sequence-overlay"
          className="fixed inset-0 z-[100] bg-emergent-surface flex items-center justify-center p-6"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="w-full max-w-2xl font-mono text-sm md:text-base">
            <div className="text-emergent-dim mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emergent-error" />
              <span className="w-2 h-2 rounded-full bg-emergent-warning" />
              <span className="w-2 h-2 rounded-full bg-emergent-green-base" />
              <span className="ml-3 text-emergent-dim">bash — ayush@portfolio ~ %</span>
            </div>
            {LINES.slice(0, linesShown).map((l, i) => (
              <div key={i} className="text-emergent-term">{l.text}</div>
            ))}
            {linesShown < LINES.length && (
              <div className="text-emergent-term">
                {LINES[linesShown].text.slice(0, char)}
                <span className="inline-block w-2 h-4 bg-emergent-green-base ml-1 animate-blink align-middle" />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
