import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { TECH_STACK } from "../data/portfolio";

const CATEGORIES = ["All", "Frontend", "Backend", "AI/ML", "Cloud", "Tools"];

export default function TechStack() {
  const [cat, setCat] = useState("All");
  const items = useMemo(
    () => (cat === "All" ? TECH_STACK : TECH_STACK.filter((t) => t.cat === cat)),
    [cat]
  );

  return (
    <section id="skills" data-testid="tech-stack-section" className="relative py-24 md:py-32 border-t border-emergent-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div className="flex items-baseline gap-6">
            <span className="font-serif text-6xl md:text-8xl text-emergent-green-light/30 leading-none">03</span>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-emergent-green-light">// Chapter Three</div>
              <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-emergent-text">
                Tech &amp; tooling.
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap gap-1 border border-emergent-border p-1">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                data-testid={`tech-filter-${c.toLowerCase().replace("/", "-")}`}
                onClick={() => setCat(c)}
                className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  cat === c ? "bg-emergent-green-base text-emergent-surface" : "text-emergent-dim hover:text-emergent-text"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={cat}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.03 } } }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3"
        >
          {items.map((t) => (
            <motion.div
              key={t.name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
              }}
              className="group aspect-square border border-emergent-border bg-emergent-elev/40 flex flex-col items-center justify-center gap-2 hover:border-emergent-green-base hover:bg-emergent-elevHover transition-colors relative overflow-hidden"
              data-testid={`tech-${t.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
            >
              <span className="font-display font-black text-2xl text-emergent-text group-hover:text-emergent-green-base transition-colors">
                {t.name[0]}
              </span>
              <span className="font-mono text-[10px] text-emergent-dim uppercase tracking-widest text-center px-1">
                {t.name}
              </span>
              <span className="absolute top-1 right-1 font-mono text-[8px] text-emergent-muted">{t.cat}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
