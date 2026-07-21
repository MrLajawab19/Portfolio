import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" data-testid="projects-section" className="relative py-24 md:py-32 border-t border-emergent-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div className="flex items-baseline gap-6">
            <span className="font-serif text-6xl md:text-8xl text-emergent-green-light/30 leading-none">02</span>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-emergent-green-light">// Chapter Two</div>
              <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-emergent-text">Selected work.</h2>
            </div>
          </div>
          <a
            href={PROJECTS[0].links.github}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-sm text-emergent-dim hover:text-emergent-green-base transition-colors inline-flex items-center gap-1"
            data-testid="projects-view-all"
          >
            view all repos <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {PROJECTS.map((p, i) => {
            const wide = i === 0;
            return (
              <motion.article
                key={p.id}
                data-testid={`project-${p.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative overflow-hidden border border-emergent-border bg-emergent-elev/50 hover:bg-emergent-elev transition-colors ${
                  wide ? "md:col-span-8 md:row-span-2" : "md:col-span-4"
                }`}
                style={{ ["--accent"]: p.accent }}
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-emergent-border">
                  <div
                    className="h-full transition-transform origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ background: p.accent, transitionDuration: "600ms" }}
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest" style={{ color: p.accent }}>
                        {p.tagline} · {p.year}
                      </div>
                      <h3 className="font-display font-black text-2xl md:text-4xl text-emergent-text mt-1 tracking-tight">
                        {p.name}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] px-2 py-1 border border-emergent-border text-emergent-dim shrink-0">
                      {p.status}
                    </span>
                  </div>

                  <p className="font-mono text-sm text-emergent-dim leading-relaxed max-w-2xl">
                    {wide ? p.long : p.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono px-2 py-0.5 border border-emergent-border text-emergent-dim"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className={`mt-6 grid ${wide ? "grid-cols-3" : "grid-cols-3"} gap-3`}>
                    {p.metrics.map((m) => (
                      <div key={m.v} className="border border-emergent-border/60 p-3">
                        <div className="font-display font-black text-lg md:text-xl" style={{ color: p.accent }}>
                          {m.k}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-emergent-dim mt-0.5">
                          {m.v}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href={p.links.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs px-3 py-2 border border-emergent-border text-emergent-text hover:border-emergent-green-base hover:text-emergent-green-base transition-colors"
                      data-testid={`project-demo-${p.id}`}
                    >
                      live_demo <ArrowUpRight className="w-3 h-3" />
                    </a>
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-mono text-xs px-3 py-2 border border-emergent-border text-emergent-text hover:border-emergent-green-base hover:text-emergent-green-base transition-colors"
                      data-testid={`project-github-${p.id}`}
                    >
                      github <Github className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
