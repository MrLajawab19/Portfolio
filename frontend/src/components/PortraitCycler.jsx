import { useEffect, useMemo, useRef, useState } from "react";
import { PROFILE } from "../data/portfolio";
import halftoneImage from "../assets/Screenshot 2026-07-22 142049.png";

const EFFECTS = [
  { name: "ORIGINAL", cls: "", label: "original photo" },
  { name: "HALFTONE", cls: "fx-halftone", label: "halftone print" },
];

export default function PortraitCycler() {
  const [idx, setIdx] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIdx((i) => (i + 1) % EFFECTS.length);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  const current = EFFECTS[idx];

  const renderEffect = useMemo(
    () => {
      if (current.name === "HALFTONE") {
        return (
          <img
            alt="Ayush Bardhani Halftone"
            src={halftoneImage}
            className="w-full h-full object-cover"
          />
        );
      }
      return (
        <img
          alt="Ayush Bardhani"
          src={PROFILE.profileImage}
          className="w-full h-full object-cover"
        />
      );
    },
    [current.name]
  );

  return (
    <div
      data-testid="portrait-cycler"
      className="relative aspect-square w-full max-w-md mx-auto border border-emergent-border overflow-hidden bg-emergent-elev group"
      onMouseEnter={() => {
        paused.current = true;
      }}
      onMouseLeave={() => {
        paused.current = false;
      }}
    >
      <span className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-emergent-green-base z-20" />
      <span className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-emergent-green-base z-20" />
      <span className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-emergent-green-base z-20" />
      <span className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-emergent-green-base z-20" />

      {renderEffect}

      <div className="absolute top-3 right-3 z-20 flex items-center gap-2 px-2 py-1 bg-emergent-surface/85 border border-emergent-border">
        <span className="w-1.5 h-1.5 bg-emergent-green-base animate-blink" />
        <span className="font-mono text-[10px] tracking-widest text-emergent-text">
          MODE: {current.name}
        </span>
      </div>
      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between font-mono text-[10px] text-emergent-dim">
        <span>portrait.exe · {current.label}</span>
        <span>
          {String(idx + 1).padStart(2, "0")}/{String(EFFECTS.length).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-emergent-border z-20">
        <div
          className="h-full bg-emergent-green-base transition-[width] duration-300 ease-out"
          style={{ width: `${((idx + 1) / EFFECTS.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
