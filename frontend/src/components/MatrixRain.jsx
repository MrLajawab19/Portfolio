import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const FS = 14;
    let cols = Math.floor(w / FS);
    let drops = new Array(cols).fill(0).map(() => Math.random() * -100);
    const chars = "0123456789ABCDEF{}[]()<>/*+-;=!.$#@AYUSHBARDHANI";

    let rafId;
    let last = 0;

    const draw = (t) => {
      if (t - last > 60) {
        ctx.fillStyle = "rgba(13, 17, 23, 0.10)";
        ctx.fillRect(0, 0, w, h);
        ctx.font = `${FS}px 'Azeret Mono', monospace`;
        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          const y = drops[i] * FS;
          ctx.fillStyle = y < 30 ? "#c9d1d9" : "#00FF00";
          ctx.fillText(text, i * FS, y);
          if (y > h && Math.random() > 0.975) drops[i] = 0;
          drops[i]++;
        }
        last = t;
      }
      rafId = requestAnimationFrame(draw);
    };
    rafId = requestAnimationFrame(draw);

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / FS);
      drops = new Array(cols).fill(0).map(() => Math.random() * -100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, opacity: 0.10, mixBlendMode: "screen" }}
      aria-hidden
    />
  );
}
