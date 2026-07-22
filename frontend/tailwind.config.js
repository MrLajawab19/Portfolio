/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        emergent: {
          // Base dark colors - black background with dark grey surfaces
          bg: "#000000",
          surface: "#0a0a0a",
          elev: "#111111",
          elevHover: "#1a1a1a",
          border: "#2a2a2a",
          text: "#ffffff",
          dim: "#a0a0a0",
          muted: "#666666",
          
          // Green accent colors from screenshot (exact values)
          green: {
            light: "#00FF00",
            base: "#00FF00",
            dark: "#00CC00",
            darker: "#009900",
          },
          
          // Purple accent colors from target site
          accent: "#6366f1",
          accent2: "#8b5cf6",
          
          // Warning/error (no green)
          warning: "#f59e0b",
          error: "#ef4444",
          
          // Neutral palette - dark grey/black
          neutral: {
            dark: {
              "00": "#0a0a0a",
              "04": "#1a1a1a",
              "05": "#1a1a1a",
              "12": "#0a0a0a",
            },
            light: {
              "00": "#ffffff",
              "02": "#e0e0e0",
              "03": "#c0c0c0",
              "04": "#a0a0a0",
            },
          },
        },
      },
      fontFamily: {
        // Match target site fonts
        sans: ["Figtree", "Inter", "Geist", "sans-serif"],
        display: ["Inter Tight", "Brockmann", "sans-serif"],
        mono: ["JetBrains Mono", "Geist Mono", "Berkeley Mono Trial", "monospace"],
        body: ["Istok Web", "Bricolage Grotesque", "sans-serif"],
        handwriting: ["Nanum Pen Script", "cursive"],
      },
      backgroundImage: {
        // Target site gradient effects
        'gradient-primary': 'radial-gradient(ellipse at 50% 104%, rgba(255,122,115,0.5) 0%, rgba(255,122,115,0.16) 18%, transparent 34%), radial-gradient(ellipse at 50% 62%, rgba(130,219,255,0.78) 0%, rgba(0,155,240,0.6) 36%, rgba(6,49,110,0.6) 72%, transparent 100%)',
        'gradient-secondary': 'radial-gradient(ellipse at 50% 80%, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.45) 28%, transparent 58%), radial-gradient(ellipse at 50% 100%, rgba(255,122,115,0.48) 0%, transparent 36%)',
        'galaxy-dark': 'radial-gradient(120% 90% at 50% 108%, rgba(67,167,255,0.18) 0%, transparent 60%), radial-gradient(80% 60% at 22% 12%, rgba(255,255,255,0.05) 0%, transparent 55%)',
        'galaxy-light': 'radial-gradient(72% 50% at 50% 100%, rgba(74,140,255,0.92) 0%, rgba(122,178,255,0.6) 28%, rgba(178,210,255,0.34) 54%, transparent 82%)',
      },
      keyframes: {
        // Target site animations
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        shake: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(1px, -1px)" },
          "50%": { transform: "translate(-1px, 1px)" },
          "75%": { transform: "translate(1px, 1px)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)", filter: "blur(2px)" },
          "100%": { opacity: "1", transform: "translateY(0)", filter: "blur(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0", filter: "blur(6px)" },
          "100%": { transform: "translateY(0)", opacity: "1", filter: "blur(0)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        gradientBreath: {
          "0%": { transform: "translate3d(-50%, 0, 0) scale(1)" },
          "100%": { transform: "translate3d(-50%, -0.55%, 0) scale(1.012)" },
        },
        bleedIn: {
          "0%": { opacity: "0", filter: "blur(11px)", transform: "translateY(5px) scale(0.96)" },
          "100%": { opacity: "1", filter: "blur(0)", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        blink: "blink 1s infinite",
        fadeIn: "fadeIn 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)",
        slideUp: "slideUp 1.05s cubic-bezier(0.19, 1, 0.22, 1)",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        gradientBreath: "gradientBreath 16s ease-in-out infinite alternate",
        bleedIn: "bleedIn 0.88s ease forwards",
      },
      backdropBlur: {
        // Target site blur values
        xs: '2px',
        '3xl': '32px',
        '4xl': '42px',
        '5xl': '72px',
      },
    },
  },
  plugins: [],
};
