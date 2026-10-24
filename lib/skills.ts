export interface Skill {
  name: string;
  focus: string;
  category: "Frontend & 3D" | "Languages" | "Backend & Database" | "DevOps & Tools";
}

export interface Badge {
  id: string;
  icon: string;
  label: string;
  description: string;
  color: string;
}

export const skills: Skill[] = [
  // Frontend & 3D
  { name: "Next.js",      focus: "App Router, SSR & Server Actions", category: "Frontend & 3D" },
  { name: "React",        focus: "Component Architecture & Hooks",    category: "Frontend & 3D" },
  { name: "Three.js",     focus: "WebGL, 3D Scenes & Shaders",       category: "Frontend & 3D" },
  { name: "Tailwind CSS", focus: "Responsive Design & Custom Themes", category: "Frontend & 3D" },
  { name: "Framer Motion",focus: "Physics & Micro-interactions",     category: "Frontend & 3D" },
  { name: "HTML5 / CSS3", focus: "Semantic Web & Modern CSS",        category: "Frontend & 3D" },

  // Languages
  { name: "TypeScript",   focus: "Strict Type Safety & Interfaces",  category: "Languages" },
  { name: "JavaScript",   focus: "ESNext, Asynchronous & DOM",       category: "Languages" },
  { name: "SQL",          focus: "Data Modeling & Queries",          category: "Languages" },

  // Backend & Database
  { name: "Node.js",      focus: "Server Runtime & API Endpoints",   category: "Backend & Database" },
  { name: "RESTful API",  focus: "Contract Design & HTTP Services",  category: "Backend & Database" },
  { name: "PostgreSQL",   focus: "Relational DB & Indexing",         category: "Backend & Database" },
  { name: "MySQL",        focus: "Relational Database Management",   category: "Backend & Database" },
  { name: "Prisma",       focus: "Type-safe ORM & Migrations",       category: "Backend & Database" },

  // DevOps & Tools
  { name: "Git",          focus: "Version Control & Git Flow",       category: "DevOps & Tools" },
  { name: "GitHub",       focus: "Code Reviews & Collaborations",    category: "DevOps & Tools" },
  { name: "Vercel",       focus: "Edge Deployments & Analytics",     category: "DevOps & Tools" },
  { name: "Docker",       focus: "Containerization & Multi-stage",   category: "DevOps & Tools" },
  { name: "CI/CD",        focus: "Automated Build, Test & Deploy",   category: "DevOps & Tools" },
  { name: "Figma",        focus: "UI/UX Prototyping & Design System", category: "DevOps & Tools" },
];

export const badges: Badge[] = [
  {
    id: "nextjs",
    icon: "▲",
    label: "Next.js",
    description: "App Router, Server Components, tối ưu SEO & Web Vitals.",
    color: "#8ab4d4",
  },
  {
    id: "typescript",
    icon: "📘",
    label: "TypeScript",
    description: "Strict typing, codebase nhất quán và an toàn.",
    color: "#b89fd8",
  },
  {
    id: "react",
    icon: "⚛️",
    label: "React Ecosystem",
    description: "Component-driven, hooks, state management và tối ưu rendering.",
    color: "#d8a9b5",
  },
  {
    id: "tailwind",
    icon: "💨",
    label: "Tailwind & UI",
    description: "Responsive layouts, theme tùy biến và micro-interactions.",
    color: "#8ab4d4",
  },
  {
    id: "git",
    icon: "🌿",
    label: "Git & CI/CD",
    description: "Git flow chuẩn chỉ, commit rõ ràng, deployment tự động.",
    color: "#b89fd8",
  },
  {
    id: "api",
    icon: "🔌",
    label: "API & Data",
    description: "Thiết kế và tích hợp REST APIs, quản lý dữ liệu hiệu quả.",
    color: "#d8a9b5",
  },
];
