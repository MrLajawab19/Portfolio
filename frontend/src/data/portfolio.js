export const PROFILE = {
  name: "Ayush Bardhani",
  handle: "MrLajawab19",
  leetcode: "Ayush_Bardhani",
  title: "Full-Stack Developer · AI/ML Engineer · Cloud Enthusiast",
  location: "Delhi, India",
  email: "ayushbardhani03119@gmail.com",
  phone: "+91 8126259501",
  socials: {
    github: "https://github.com/MrLajawab19",
    linkedin: "https://www.linkedin.com/in/ayushbardhani-java-developer/",
    twitter: "https://x.com/",
    leetcode: "https://leetcode.com/u/Ayush_Bardhani/",
  },
  profileImage:
    "https://customer-assets-gfyr7b9c.emergentagent.net/job_af6c4e3c-3cc8-4e34-98ea-2bf6cc698fac/artifacts/4hhrtuqd_Profile.png",
  passions: ["Coffee", "Code", "Badminton", "Innovation"],
  bio:
    "Computer Science student specializing in AI & ML, passionate about creating technology that makes a difference. I build full-stack apps, ship AI-powered systems, and swing rackets in my off-hours.",
  chips: ["Problem Solver", "Team Player", "Quick Learner", "Product Builder"],
  timeline: [
    { year: "2023", event: "Started B.Tech at ABES Engineering College" },
    { year: "2024", event: "Built first major ML project (TrackAI)" },
    { year: "2024", event: "AWS Certified · DSA Journey Started" },
    { year: "2025", event: "Building ScrowX & Cloud Cost System" },
    { year: "2025", event: "Gold Medalist Badminton (URJA)" },
    { year: "2026", event: "Target: Hackathons, Research & Internships" },
    { year: "2027", event: "Graduate → Build Something Big!" },
  ],
};

export const STATS = [
  { value: "200+", label: "LeetCode Problems", icon: "code" },
  { value: "3+", label: "Major Projects", icon: "layers" },
  { value: "AWS", label: "Cloud Certified", icon: "cloud" },
  { value: "GOLD", label: "Badminton Champion", icon: "trophy" },
  { value: "2027", label: "Graduating", icon: "zap" },
];

export const PROJECTS = [
  {
    id: "scrowx",
    name: "ScrowX",
    tagline: "Full-Stack Escrow Platform",
    status: "MVP LIVE",
    year: "2025",
    description:
      "Secure freelance escrow platform with AI-powered dispute resolution, milestone tracking, and smart automation. Multi-role dashboards for buyers, sellers, admins.",
    long:
      "Architected complete escrow workflow — fund locking, scope negotiation, milestone tracking, and automated dispute resolution powered by OpenAI + Gemini. REST APIs with JWT and RBAC across 3 roles, deployed with production-ready infrastructure.",
    stack: ["React", "Node.js", "Express", "PostgreSQL", "Prisma", "OpenAI", "Gemini"],
    metrics: [
      { k: "18+", v: "Service Categories" },
      { k: "3", v: "User Roles" },
      { k: "MVP", v: "Deployed" },
    ],
    links: { demo: "#", github: "https://github.com/MrLajawab19" },
    accent: "#39d353",
  },
  {
    id: "aws-finops",
    name: "AWS Cloud Cost Management",
    tagline: "FinOps System",
    status: "LIVE",
    year: "2025",
    description:
      "ML-powered cloud cost optimization with real-time monitoring, forecasting, and automated idle resource detection across EC2, S3, RDS, Lambda.",
    long:
      "Full FinOps stack — FastAPI + React (Vite), live AWS resource ingestion via Boto3, Fernet-encrypted credentials, JWT auth, per-user isolated pipelines, and scikit-learn polynomial regression forecasting 30-day cloud spend with R² validation.",
    stack: ["Python", "FastAPI", "React", "Vite", "Scikit-learn", "Boto3", "AWS"],
    metrics: [
      { k: "30%", v: "Avg Cost Savings" },
      { k: "85%", v: "Prediction Accuracy" },
      { k: "Live", v: "Monitoring" },
    ],
    links: { demo: "#", github: "https://github.com/MrLajawab19" },
    accent: "#58a6ff",
  },
  {
    id: "trackai",
    name: "TrackAI",
    tagline: "AI-Powered Railway Traffic",
    status: "AI/ML",
    year: "2024",
    description:
      "Train delay prediction with 85%+ accuracy using ensemble learning on real-world railway datasets. Visualization dashboards optimize scheduling.",
    long:
      "ML pipelines with k-fold CV and hyperparameter tuning. Congestion & seasonal delay pattern detection across intercity/suburban routes. Matplotlib dashboards for KPI monitoring and route optimization.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    metrics: [
      { k: "85%", v: "Accuracy" },
      { k: "10K+", v: "Data Points" },
      { k: "Live", v: "Dashboard" },
    ],
    links: { demo: "#", github: "https://github.com/MrLajawab19" },
    accent: "#d29922",
  },
  {
    id: "stellaris",
    name: "Stellaris",
    tagline: "MLH Hackathon Project",
    status: "HACKATHON",
    year: "2024",
    description:
      "Dispute resolution system for informal transactions in content/blog writing. Built end-to-end during a Major League Hacking event.",
    long: "Rapid MVP for informal transaction disputes — mediator flow, evidence uploads, and AI-summarised resolution memos.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    metrics: [
      { k: "48h", v: "Build Time" },
      { k: "MLH", v: "Hackathon" },
      { k: "AI", v: "Assisted" },
    ],
    links: { demo: "#", github: "https://github.com/MrLajawab19" },
    accent: "#f85149",
  },
];

export const TECH_STACK = [
  { name: "React", cat: "Frontend", icon: "react" },
  { name: "JavaScript", cat: "Frontend", icon: "js" },
  { name: "Tailwind", cat: "Frontend", icon: "tailwind" },
  { name: "Vite", cat: "Frontend", icon: "vite" },
  { name: "Recharts", cat: "Frontend", icon: "chart" },
  { name: "Node.js", cat: "Backend", icon: "node" },
  { name: "Express", cat: "Backend", icon: "express" },
  { name: "FastAPI", cat: "Backend", icon: "fastapi" },
  { name: "Java", cat: "Backend", icon: "java" },
  { name: "Python", cat: "Backend", icon: "python" },
  { name: "PostgreSQL", cat: "Backend", icon: "postgres" },
  { name: "Prisma", cat: "Backend", icon: "prisma" },
  { name: "JWT", cat: "Backend", icon: "jwt" },
  { name: "NumPy", cat: "AI/ML", icon: "numpy" },
  { name: "Pandas", cat: "AI/ML", icon: "pandas" },
  { name: "Scikit-learn", cat: "AI/ML", icon: "sklearn" },
  { name: "OpenAI", cat: "AI/ML", icon: "openai" },
  { name: "Gemini", cat: "AI/ML", icon: "gemini" },
  { name: "Claude", cat: "AI/ML", icon: "claude" },
  { name: "AWS", cat: "Cloud", icon: "aws" },
  { name: "EC2", cat: "Cloud", icon: "ec2" },
  { name: "S3", cat: "Cloud", icon: "s3" },
  { name: "Docker", cat: "Cloud", icon: "docker" },
  { name: "Vercel", cat: "Cloud", icon: "vercel" },
  { name: "Railway", cat: "Cloud", icon: "railway" },
  { name: "Git", cat: "Tools", icon: "git" },
  { name: "GitHub", cat: "Tools", icon: "github" },
  { name: "Postman", cat: "Tools", icon: "postman" },
  { name: "VS Code", cat: "Tools", icon: "vscode" },
];

export const CERTIFICATIONS = [
  { name: "AWS Academy Cloud Architecting", issuer: "AWS Academy", tag: "AWS" },
  { name: "AWS Academy Cloud Foundations", issuer: "AWS Academy", tag: "AWS" },
  { name: "AWS Academy Intro to Cloud", issuer: "AWS Academy", tag: "AWS" },
  { name: "Introduction to Cybersecurity", issuer: "Cisco", tag: "SEC" },
  { name: "Industrial Networking Essentials", issuer: "Cisco", tag: "NET" },
  { name: "Apply AI: Customer Reviews", issuer: "Cisco", tag: "AI" },
];

export const IDE_CODE = `// what drives me
const ayush = {
  education: "B.Tech CSE (AI/ML)",
  location: "India",
  passion: ["AI/ML", "System Design",
    "Web Dev", "Cloud", "Problem Solving"],
  currentlyLearning: ["LLMs", "MLOps", "DSA++"],
  dream: "Build scalable, impactful
    products and a global startup"
};

while (learning) {
  code();
  build();
  playBadminton();
  read();
  repeat();
}`;
