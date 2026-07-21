import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
  return (
    <div
      aria-hidden
      className="fixed pointer-events-none z-[3] hidden md:block"
      style={{
        left: pos.x - 250,
        top: pos.y - 250,
        width: 500,
        height: 500,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(0,255,0,0.15) 0%, rgba(0,255,0,0) 60%)",
        mixBlendMode: "screen",
        transition: "opacity 150ms ease",
      }}
    />
  );
}
