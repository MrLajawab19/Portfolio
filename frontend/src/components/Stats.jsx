import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Github, Star, GitBranch, Users } from "lucide-react";
import { PROFILE } from "../data/portfolio";

const API = import.meta.env.VITE_BACKEND_URL
  ? `${import.meta.env.VITE_BACKEND_URL}/api`
  : "";

// Deterministic pseudo-random contribution grid for aesthetic
function makeGrid() {
  const cells = [];
  for (let i = 0; i < 7 * 26; i++) {
    const r = Math.sin(i * 12.9898) * 43758.5453;
    const v = Math.floor(((r - Math.floor(r)) * 5));
    cells.push(v);
  }
  return cells;
}

export default function Stats() {
  const [lc, setLc] = useState(null);
  const [gh, setGh] = useState(null);
  const [grid] = useState(makeGrid());

  useEffect(() => {
    const lcUrl = API ? `${API}/leetcode/${PROFILE.leetcode}` : `https://alfa-leetcode-api.onrender.com/${PROFILE.leetcode}`;
    const ghUrl = API ? `${API}/github/${PROFILE.handle}` : `https://api.github.com/users/${PROFILE.handle}`;
    
    axios.get(lcUrl).then((r) => setLc(r.data)).catch(() => {});
    axios.get(ghUrl).then((r) => setGh(r.data)).catch(() => {});
  }, []);

  const total = lc?.total_solved || lc?.totalSolved || 217;
  const easy = lc?.easy || lc?.easySolved || 92;
  const medium = lc?.medium || lc?.mediumSolved || 91;
  const hard = lc?.hard || lc?.hardSolved || 34;
  const maxEasy = 850, maxMed = 1800, maxHard = 800;

  return (
    <section id="stats" data-testid="stats-section" className="relative py-24 md:py-32 border-t border-emergent-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-baseline gap-6 mb-12">
          <span className="font-serif text-6xl md:text-8xl text-emergent-green-light/30 leading-none">04</span>
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-emergent-green-light">// Chapter Four</div>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-tighter text-emergent-text">Live signals.</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* LEETCODE */}
          <motion.div
            data-testid="leetcode-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 border border-emergent-border bg-emergent-elev/40 p-6 md:p-8"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border border-emergent-border bg-emergent-surface flex items-center justify-center font-display font-black text-emergent-warning">LC</div>
                <div>
                  <div className="font-mono text-xs text-emergent-dim uppercase tracking-widest">LeetCode</div>
                  <div className="font-display font-bold text-emergent-text">@{lc?.username || PROFILE.leetcode}</div>
                </div>
              </div>
              <span className="font-mono text-[10px] px-2 py-1 border border-emergent-border text-emergent-green-base flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${lc?.live ? "bg-emergent-green-base animate-blink" : "bg-emergent-warning"}`} />
                {lc?.live ? "LIVE" : "CACHED"}
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              <StatTile label="Solved" value={total} suffix="+" testid="lc-solved" />
              <StatTile label="Contest Rating" value={lc?.contest_rating || lc?.rating || 1650} testid="lc-rating" />
              <StatTile label="Top %" value={lc?.top_percentage || 18} suffix="%" testid="lc-top" />
            </div>

            <div className="space-y-3">
              <ProgressRow label="Easy"   value={easy}   max={maxEasy} color="#3fb950" />
              <ProgressRow label="Medium" value={medium} max={maxMed}  color="#d29922" />
              <ProgressRow label="Hard"   value={hard}   max={maxHard} color="#f85149" />
            </div>

            <a
              data-testid="lc-view-profile"
              href={PROFILE.socials.leetcode}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-1 font-mono text-xs text-emergent-dim hover:text-emergent-green-base transition-colors"
            >
              view full profile →
            </a>
          </motion.div>

          {/* GITHUB */}
          <motion.div
            data-testid="github-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 border border-emergent-border bg-emergent-elev/40 p-6 md:p-8 flex flex-col"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Github className="w-8 h-8 text-emergent-text" />
                <div>
                  <div className="font-mono text-xs text-emergent-dim uppercase tracking-widest">GitHub</div>
                  <div className="font-display font-bold text-emergent-text">@{gh?.username || PROFILE.handle}</div>
                </div>
              </div>
              <span className="font-mono text-[10px] px-2 py-1 border border-emergent-border text-emergent-green-base flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${gh?.live ? "bg-emergent-green-base animate-blink" : "bg-emergent-warning"}`} />
                {gh?.live ? "LIVE" : "CACHED"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <MiniStat icon={GitBranch} label="Repos" value={gh?.public_repos ?? "—"} testid="gh-repos" />
              <MiniStat icon={Star} label="Stars" value={gh?.total_stars ?? "—"} testid="gh-stars" />
              <MiniStat icon={Users} label="Followers" value={gh?.followers ?? "—"} testid="gh-followers" />
              <MiniStat icon={Users} label="Following" value={gh?.following ?? "—"} testid="gh-following" />
            </div>

            <div className="mt-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-emergent-dim mb-2">contribution graph</div>
              <div className="grid grid-flow-col grid-rows-7 gap-[3px]" data-testid="gh-contribution-grid">
                {grid.map((v, i) => (
                  <div key={i} className={`w-2.5 h-2.5 cg-${v}`} />
                ))}
              </div>
            </div>

            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noreferrer"
              className="mt-auto pt-4 inline-flex items-center gap-1 font-mono text-xs text-emergent-dim hover:text-emergent-green-base transition-colors"
              data-testid="gh-view-profile"
            >
              view full profile →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatTile({ label, value, suffix = "", testid }) {
  return (
    <div className="border border-emergent-border/60 p-3" data-testid={testid}>
      <div className="font-display font-black text-2xl md:text-3xl text-emergent-green-light">
        {value}
        {suffix}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-widest text-emergent-dim mt-1">{label}</div>
    </div>
  );
}

function MiniStat({ icon: Icon, label, value, testid }) {
  return (
    <div className="border border-emergent-border/60 p-3 flex flex-col gap-1" data-testid={testid}>
      <div className="flex items-center justify-between">
        <Icon className="w-3.5 h-3.5 text-emergent-dim" />
        <span className="font-display font-black text-lg text-emergent-text">{value}</span>
      </div>
      <span className="font-mono text-[10px] uppercase tracking-widest text-emergent-dim">{label}</span>
    </div>
  );
}

function ProgressRow({ label, value, max, color }) {
  const pct = Math.min(100, (value / max) * 100);
  return (
    <div>
      <div className="flex items-center justify-between font-mono text-xs mb-1">
        <span style={{ color }}>{label}</span>
        <span className="text-emergent-dim">
          <span className="text-emergent-text font-bold">{value}</span> / {max}
        </span>
      </div>
      <div className="h-1.5 bg-emergent-border/60 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={{ background: color }}
          className="h-full"
        />
      </div>
    </div>
  );
}
