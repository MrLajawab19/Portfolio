import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "../data/portfolio";

export default function Certifications() {
  return (
    <section id="certs" data-testid="certifications-section" className="relative py-24 md:py-32 border-t border-emergent-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-baseline gap-6 mb-12">
          <span className="font-serif text-6xl md:text-8xl text-emergent-green-light/30 leading-none">05</span>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-emergent-green-light">// Chapter Five</div>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-emergent-text">Credentials.</h2>
          </div>
        </div>

        <div className="border border-emergent-border">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.name}
              data-testid={`cert-${i}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`grid grid-cols-12 items-center gap-4 px-4 md:px-6 py-4 hover:bg-emergent-elevHover transition-colors ${
                i < CERTIFICATIONS.length - 1 ? "border-b border-emergent-border" : ""
              }`}
            >
              <div className="col-span-1 font-mono text-xs text-emergent-muted">{String(i + 1).padStart(2, "0")}</div>
              <div className="col-span-1"><Award className="w-4 h-4 text-emergent-green-base" /></div>
              <div className="col-span-6 md:col-span-7 font-display font-bold text-emergent-text">{c.name}</div>
              <div className="col-span-3 md:col-span-2 font-mono text-xs text-emergent-dim uppercase tracking-widest">{c.issuer}</div>
              <div className="col-span-1 flex justify-end">
                <span className="font-mono text-[10px] px-2 py-0.5 border border-emergent-border text-emergent-green-base">{c.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
