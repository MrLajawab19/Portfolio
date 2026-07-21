import { motion } from "framer-motion";
import { PROFILE } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-12 gap-6 items-start">
          <div className="col-span-12 md:col-span-4 flex md:flex-col items-baseline md:items-start gap-4">
            <span className="font-serif text-8xl md:text-[9rem] leading-none text-emergent-green-light/30 select-none">01</span>
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-emergent-green-light mb-2">// Chapter One</div>
              <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-emergent-text leading-[1.05]">
                About<br />the human.
              </h2>
            </div>
          </div>

          <div className="col-span-12 md:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-mono text-base md:text-lg text-emergent-text leading-relaxed max-w-2xl"
            >
              {PROFILE.bio} When I&apos;m not shipping code, you&apos;ll find me on the
              badminton court (🥇 URJA 2025 gold), tinkering with LLMs, or plotting
              the next big product.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-2">
              {PROFILE.chips.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1 border border-emergent-border font-mono text-xs text-emergent-dim hover:text-emergent-green-base hover:border-emergent-green-base transition-colors"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-10 border border-emergent-border bg-emergent-elev/40 p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-emergent-green-light mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emergent-green-base rounded-full animate-blink" /> journey.log
              </div>
              <ul className="space-y-3">
                {PROFILE.timeline.map((t, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex items-baseline gap-4 font-mono text-sm"
                  >
                    <span className="text-emergent-green-base w-14 shrink-0">{t.year}</span>
                    <span className="w-2 h-2 rounded-full bg-emergent-green-base mt-1 shrink-0" />
                    <span className="text-emergent-text">{t.event}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
