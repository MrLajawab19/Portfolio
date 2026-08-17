import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import resumePdf from "../assets/Ayush_Bardhani.pdf";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "LeetCode", href: "#stats" },
  { label: "Certs", href: "#certs" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.querySelector(n.href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.nav
      data-testid="main-navigation"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-emergent-surface/70 border-b border-emergent-border"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2 font-mono text-emergent-text" data-testid="nav-logo">
          <span className="text-emergent-green-base">&lt;/&gt;</span>
          <span className="font-display font-bold tracking-tight">Ayush_Bardhani</span>
          <span className="text-emergent-green-base animate-blink">_</span>
        </a>
        <ul className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <li key={n.label}>
              <a
                data-testid={`nav-link-${n.label.toLowerCase()}`}
                href={n.href}
                className={`glitch px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                  active === n.href.slice(1) ? "text-emergent-green-base" : "text-emergent-dim hover:text-emergent-text"
                }`}
                data-text={n.label}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-2 py-1 border border-emergent-border rounded-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emergent-green-base opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emergent-green-base" />
            </span>
            <span className="text-[10px] uppercase tracking-widest text-emergent-dim">Open to Work</span>
          </div>
          <a
            data-testid="nav-resume"
            href={resumePdf}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono px-3 py-1.5 border border-emergent-green-base text-emergent-green-base hover:bg-emergent-green-base hover:text-emergent-surface transition-colors"
          >
            resume.pdf ↓
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
