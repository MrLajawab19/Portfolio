import { useEffect, useRef } from "react";

const SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export default function useKonami(onTrigger) {
  const idx = useRef(0);
  useEffect(() => {
    const handler = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = SEQUENCE[idx.current];
      if (key === expected) {
        idx.current += 1;
        if (idx.current === SEQUENCE.length) {
          idx.current = 0;
          onTrigger?.();
        }
      } else {
        idx.current = key === SEQUENCE[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onTrigger]);
}
