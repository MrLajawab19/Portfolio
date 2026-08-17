import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter, Code2 } from "lucide-react";
import { PROFILE, STATS } from "../data/portfolio";
import PortraitCycler from "./PortraitCycler";
import CodePanel from "./CodePanel";

const line = {
  hidden: { y: "110%" },
  show: (i = 0) => ({
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 2.4 + i * 0.08 },
  }),
};

export default function Hero() {
  const [dynamicLc, setDynamicLc] = useState(null);

  useEffect(() => {
    fetch(`https://alfa-leetcode-api.onrender.com/${PROFILE.leetcode}/solved`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.solvedProblem) {
          setDynamicLc(data.solvedProblem);
        }
      })
      .catch((err) => console.error("Failed to fetch LeetCode stats", err));
  }, []);
  return (
    <section id="home" data-testid="hero-section" className="relative pt-28 md:pt-32 pb-16 overflow-hidden">
      {/* subtle grid + noise */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] noise" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 border border-emergent-border bg-emergent-elev/60 mb-6"
              data-testid="hero-greeting"
            >
              <span className="w-2 h-2 rounded-full bg-emergent-green-base animate-blink" />
              <span className="font-mono text-xs text-emergent-dim">$ hello_world.sh</span>
            </motion.div>

            {["Ayush", "Bardhani.", "// building the future."].map((t, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  className={`font-display tracking-tighter leading-[0.95] ${
                    i === 2
                      ? "text-2xl md:text-3xl mt-4 text-outline-accent"
                      : i === 1
                      ? "text-6xl md:text-8xl lg:text-9xl text-emergent-green-light"
                      : "text-6xl md:text-8xl lg:text-9xl text-emergent-text"
                  }`}
                  variants={line}
                  initial="hidden"
                  animate="show"
                  custom={i}
                >
                  {t}
                </motion.h1>
              </div>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.0, duration: 0.6 }}
              className="mt-6 max-w-xl font-mono text-sm md:text-base text-emergent-dim leading-relaxed"
              data-testid="hero-tagline"
            >
              Full-Stack Developer · AI/ML Engineer · Cloud Enthusiast.
              <br />
              Building intelligent systems at the intersection of{" "}
              <span className="text-emergent-green-light">AI</span>,{" "}
              <span className="text-emergent-green-base">Web</span> &{" "}
              <span className="text-emergent-warning">Cloud</span>.
            </motion.p>

            {/* Passions annotated */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.2, duration: 0.6 }}
              className="mt-5 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-emergent-dim"
            >
              {PROFILE.passions.map((p) => (
                <li key={p}>
                  <span className="text-emergent-green-light">+</span> {p}
                </li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.4, duration: 0.5 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                data-testid="cta-view-work"
                href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-3 bg-emergent-green-base text-emergent-surface font-mono text-sm font-bold hover:bg-emergent-green-dark transition-colors"
              >
                view_my_work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                data-testid="cta-hire-me"
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 border border-emergent-border text-emergent-text font-mono text-sm hover:border-emergent-green-base hover:text-emergent-green-base transition-colors"
              >
                <Mail className="w-4 h-4" /> hire_me
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.6, duration: 0.5 }}
              className="mt-6 flex items-center gap-4"
            >
              {[
                { icon: Github, href: PROFILE.socials.github, id: "github" },
                { icon: Linkedin, href: PROFILE.socials.linkedin, id: "linkedin" },
                { icon: Code2, href: PROFILE.socials.leetcode, id: "leetcode" },
                { icon: Twitter, href: PROFILE.socials.twitter, id: "twitter" },
                { icon: Mail, href: `mailto:${PROFILE.email}`, id: "email" },
              ].map(({ icon: Icon, href, id }) => (
                <a
                  key={id}
                  data-testid={`social-${id}`}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 border border-emergent-border flex items-center justify-center text-emergent-dim hover:text-emergent-green-base hover:border-emergent-green-base transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: portrait + code */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.4, duration: 0.7 }}
            >
              <PortraitCycler />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.8, duration: 0.7 }}
            >
              <CodePanel />
            </motion.div>
          </div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.8, duration: 0.7 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-3"
        >
          {STATS.map((s, i) => {
            const isLeetCode = s.label.includes("DSA Problems");
            const displayValue = isLeetCode && dynamicLc ? `${dynamicLc}+` : s.value;

            return (
              <div
                key={s.label}
                data-testid={`hero-stat-${i}`}
                className="border border-emergent-border bg-emergent-elev/40 backdrop-blur px-4 py-4 hover:border-emergent-green-base hover:bg-emergent-elevHover transition-colors group"
              >
                <div className="font-display font-black text-2xl md:text-3xl text-emergent-text group-hover:text-emergent-green-base transition-colors">
                  {displayValue}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-emergent-dim mt-1">
                  {s.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
