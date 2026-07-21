import Marquee from "react-fast-marquee";

const ITEMS = [
  "FULL-STACK",
  "AI · ML ENGINEER",
  "CLOUD NATIVE",
  "200+ DSA SOLVED",
  "PROBLEM SOLVER",
  "BADMINTON GOLD",
  "AWS CERTIFIED",
  "SYSTEM DESIGN",
];

export default function EditorialMarquee() {
  return (
    <section data-testid="editorial-marquee" className="border-y border-emergent-border bg-emergent-surface py-6 overflow-hidden">
      <Marquee speed={40} gradient={false} pauseOnHover>
        {ITEMS.concat(ITEMS).map((t, i) => (
          <span
            key={i}
            className="editorial-outline text-6xl md:text-8xl lg:text-9xl mx-8"
          >
            {t}
            <span className="mx-8 text-emergent-green-base">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
