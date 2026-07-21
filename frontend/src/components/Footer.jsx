import { PROFILE } from "../data/portfolio";
import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-emergent-border bg-emergent-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2 font-mono text-xs text-emergent-dim">
          <span className="text-emergent-green-base">&lt;/&gt;</span>
          <span>{PROFILE.name}</span>
          <span className="text-emergent-muted">·</span>
          <span>building the future, one commit at a time.</span>
        </div>
        <div className="flex items-center gap-3">
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="text-emergent-dim hover:text-emergent-green-base"><Github className="w-4 h-4" /></a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="text-emergent-dim hover:text-emergent-green-base"><Linkedin className="w-4 h-4" /></a>
          <a href={PROFILE.socials.leetcode} target="_blank" rel="noreferrer" className="text-emergent-dim hover:text-emergent-green-base"><Code2 className="w-4 h-4" /></a>
          <a href={`mailto:${PROFILE.email}`} className="text-emergent-dim hover:text-emergent-green-base"><Mail className="w-4 h-4" /></a>
        </div>
        <div className="font-mono text-xs text-emergent-muted">
          © {new Date().getFullYear()} · Made with <span className="text-emergent-error">♥</span> &amp; lots of ☕
        </div>
      </div>
    </footer>
  );
}
