export const PROFILE = {
  name: "Ayush Bardhani",
  handle: "MrLajawab19",
  leetcode: "Ayush_Bardhani",
  title: "Software Engineer · Backend & AI/ML",
  location: "New Delhi, India",
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
  passions: ["Code", "AI/ML", "Backend", "Cloud"],
  bio:
    "Software engineer focused on developing full-stack applications, secure REST APIs, and production-deployed systems. I apply Python-based machine learning and deep learning alongside LLM APIs to ship AI-powered features.",
  chips: ["Full-Stack", "AI/ML", "DSA", "Cloud Architecture"],
  timeline: [
    { year: "2023", event: "Started B.Tech (AI & ML) at ABES Engineering College" },
    { year: "2024", event: "Built TrackAI & Stellaris (MLH Hackathon Finalist)" },
    { year: "2024", event: "Promotional Head at Trishul ABESEC" },
    { year: "2025", event: "Shipped ScrowX & AWS Cloud Cost Management System" },
    { year: "2027", event: "Expected Graduation" },
  ],
};

export const STATS = [
  { value: "200+", label: "DSA Problems", icon: "code" },
  { value: "4+", label: "Major Projects", icon: "layers" },
  { value: "AWS", label: "Academy Certified", icon: "cloud" },
  { value: "Finalist", label: "Stellaris MLH", icon: "trophy" },
  { value: "7.64", label: "CGPA", icon: "zap" },
];

export const PROJECTS = [
  {
    id: "scrowx",
    name: "ScrowX",
    tagline: "Secure Payment Infrastructure Layer For Informal Transactions",
    status: "LIVE",
    year: "2025",
    description:
      "Architected a secure payment infrastructure layer with an escrow engine, enforcing atomic fund lock/release via Prisma transactions.",
    long:
      "Built an AI-powered dispute arbitration engine (Google Gemini) that analyzes evidence and behavioral risk signals, with auto-escalation to human review. Deployed a full-stack system: React/Vite, Express + Socket.IO, PostgreSQL/Prisma, JWT auth, and an AI support assistant.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "PostgreSQL",
      "Prisma",
      "Razorpay",
      "Gemini",
    ],
    metrics: [
      { k: "AI", v: "Arbitration" },
      { k: "100%", v: "Audit Ledger" },
      { k: "Live", v: "Chat" },
    ],
    highlights: [
      "Escrow engine enforcing atomic fund lock/release",
      "Append-only wallet ledger for tamper-evident history",
      "AI-powered dispute arbitration engine with multi-round logic",
      "Real-time chat and KYC gating",
    ],
    links: { demo: "https://scrowx.netlify.app/", github: "https://github.com/MrLajawab19/Escrow" },
    accent: "#39d353",
  },
  {
    id: "aws-finops",
    name: "AWS Cloud Cost Management System",
    tagline: "FinOps Tool",
    status: "LIVE",
    year: "2025",
    description:
      "Built a full-stack finance tool to track live AWS usage/spend across EC2, S3, RDS, and Lambda via Boto3, with automated cost breakdowns.",
    long:
      "Implemented JWT auth with Fernet-encrypted credential storage for isolated multi-account monitoring. Built a cost-forecasting module (scikit-learn polynomial regression) and CloudWatch-based idle-resource detection with cost-ranked cleanup recommendations refreshed every 6 hours.",
    stack: ["Python", "FastAPI", "React", "Scikit-learn", "Boto3", "Docker", "SQLite", "AWS"],
    metrics: [
      { k: "R²", v: "Validation" },
      { k: "6h", v: "Refresh Rate" },
      { k: "Live", v: "Monitoring" },
    ],
    links: { github: "https://github.com/MrLajawab19/Cloud-Cost-Management" },
    accent: "#58a6ff",
  },
  {
    id: "trackai",
    name: "TrackAI",
    tagline: "Railway Traffic Data Pipeline & Delay Prediction",
    status: "AI/ML",
    year: "2024",
    description:
      "Built an end-to-end data pipeline to clean, engineer features from, and model large-scale railway traffic data.",
    long:
      "Trained delay-prediction models (85%+ accuracy) via k-fold cross-validation and hyperparameter tuning; built Matplotlib dashboards surfacing congestion hotspots and delay trends for timetable optimization.",
    stack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    metrics: [
      { k: "85%+", v: "Accuracy" },
      { k: "k-fold", v: "Cross-Val" },
      { k: "Trends", v: "Dashboard" },
    ],
    links: { github: "https://github.com/MrLajawab19/TRack-AI" },
    accent: "#d29922",
  },
  {
    id: "creditwise",
    name: "CreditWise",
    tagline: "Loan Approval Prediction",
    status: "NOTEBOOK",
    year: "2024",
    description: "Supervised machine learning notebook for loan approval prediction achieving 87.5% accuracy.",
    long: "Compared Logistic Regression, KNN, and Naive Bayes on 1,000 applicants. Reached 87.5% accuracy and 0.80 F1-score after feature engineering.",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    metrics: [
      { k: "87.5%", v: "Accuracy" },
      { k: "0.80", v: "F1-Score" },
      { k: "1K", v: "Applicants" },
    ],
    links: { github: "https://github.com/MrLajawab19/creditwise-loan-approval-ml" },
    accent: "#f85149",
  },
  {
    id: "smartcart",
    name: "SmartCart",
    tagline: "Customer Segmentation",
    status: "NOTEBOOK",
    year: "2024",
    description: "Unsupervised machine learning notebook segmenting 2,240 e-commerce customers into actionable groups.",
    long: "Applied PCA and K-Means/Agglomerative clustering (elbow method + silhouette scoring) to segment 2,240 e-commerce customers into 4 groups by income, spend, and channel behavior.",
    stack: ["Python", "Scikit-learn", "Clustering", "PCA"],
    metrics: [
      { k: "4", v: "Segments" },
      { k: "2.2K", v: "Customers" },
      { k: "PCA", v: "Reduction" },
    ],
    links: { github: "https://github.com/MrLajawab19/smartcart-customer-segmentation" },
    accent: "#a371f7",
  },
];

export const TECH_STACK = [
  { name: "Java", cat: "Backend", icon: "java" },
  { name: "JavaScript", cat: "Frontend", icon: "js" },
  { name: "Python", cat: "Backend", icon: "python" },
  { name: "React", cat: "Frontend", icon: "react" },
  { name: "Node.js", cat: "Backend", icon: "node" },
  { name: "Express", cat: "Backend", icon: "express" },
  { name: "Django", cat: "Backend", icon: "django" },
  { name: "FastAPI", cat: "Backend", icon: "fastapi" },
  { name: "PostgreSQL", cat: "Database", icon: "postgres" },
  { name: "MongoDB", cat: "Database", icon: "mongo" },
  { name: "MySQL", cat: "Database", icon: "mysql" },
  { name: "SQLite", cat: "Database", icon: "sqlite" },
  { name: "AWS", cat: "Cloud", icon: "aws" },
  { name: "Docker", cat: "DevOps", icon: "docker" },
  { name: "GitHub Actions", cat: "DevOps", icon: "github" },
  { name: "Scikit-learn", cat: "AI/ML", icon: "sklearn" },
  { name: "TensorFlow", cat: "AI/ML", icon: "tensorflow" },
  { name: "Pandas", cat: "AI/ML", icon: "pandas" },
  { name: "NumPy", cat: "AI/ML", icon: "numpy" },
  { name: "OpenAI", cat: "AI/ML", icon: "openai" },
  { name: "Gemini", cat: "AI/ML", icon: "gemini" },
  { name: "Prisma", cat: "Backend", icon: "prisma" },
  { name: "Vercel", cat: "Cloud", icon: "vercel" },
  { name: "Railway", cat: "Cloud", icon: "railway" },
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
  title: "Software Engineer | Backend & AI/ML",
  location: "New Delhi, India",
  skills: ["Python", "Java", "Node.js", "React", "AWS", "ML/DL"],
  coreCS: ["DSA", "OOP", "DBMS", "System Design"],
  education: "B.Tech CSE (AI/ML) @ ABESEC",
  goals: "Build scalable, intelligent systems"
};

while (learning) {
  code();
  build();
  optimize();
  deploy();
  repeat();
}`;
