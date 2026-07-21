import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, Code2 } from "lucide-react";
import { PROFILE } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" data-testid="contact-section" className="relative py-24 md:py-32 border-t border-emergent-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-baseline gap-6 mb-12">
          <span className="font-serif text-6xl md:text-8xl text-emergent-green-light/30 leading-none">06</span>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-emergent-green-light">// End Transmission</div>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-emergent-text">Say hello.</h2>
          </div>
        </div>

        <div className="border border-emergent-border bg-emergent-elev/40 p-6 md:p-12">
          <motion.a
            data-testid="contact-mail-cta"
            href={`mailto:${PROFILE.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group block glitch"
            data-text={PROFILE.email}
          >
            <div className="font-display font-black text-3xl md:text-6xl lg:text-7xl text-emergent-text hover:text-emergent-green-base transition-colors break-all leading-tight">
              {PROFILE.email}
              <ArrowUpRight className="inline-block w-8 h-8 md:w-14 md:h-14 ml-2 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </div>
          </motion.a>

          <p className="font-mono text-sm md:text-base text-emergent-dim mt-6 max-w-2xl">
            Open to internships, collaborations, hackathon teams, research assistantships,
            and interesting side quests. If you&apos;re building something wild — talk to me.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoBlock label="Location" value={PROFILE.location} />
            <InfoBlock label="Phone" value={PROFILE.phone} href={`tel:${PROFILE.phone}`} />
            <InfoBlock label="Status" value={<span className="flex items-center gap-2"><span className="w-2 h-2 bg-emergent-green-base rounded-full animate-blink" /> Available for opportunities</span>} />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              { icon: Github, label: "github", href: PROFILE.socials.github, id: "github" },
              { icon: Linkedin, label: "linkedin", href: PROFILE.socials.linkedin, id: "linkedin" },
              { icon: Code2, label: "leetcode", href: PROFILE.socials.leetcode, id: "leetcode" },
              { icon: Twitter, label: "twitter", href: PROFILE.socials.twitter, id: "twitter" },
              { icon: Mail, label: "email", href: `mailto:${PROFILE.email}`, id: "email" },
            ].map(({ icon: Icon, label, href, id }) => (
              <a
                key={id}
                data-testid={`contact-social-${id}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-emergent-border text-emergent-text font-mono text-xs uppercase tracking-widest hover:border-emergent-green-base hover:text-emergent-green-base transition-colors"
              >
                <Icon className="w-4 h-4" /> {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoBlock({ label, value, href }) {
  const inner = <div className="font-display font-bold text-emergent-text">{value}</div>;
  return (
    <div className="border border-emergent-border/60 p-4">
      <div className="font-mono text-[10px] uppercase tracking-widest text-emergent-dim mb-1">{label}</div>
      {href ? <a href={href} className="hover:text-emergent-green-base">{inner}</a> : inner}
    </div>
  );
}
