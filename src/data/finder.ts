import {
  Folder,
  Home,
  Download,
  Briefcase,
  Code,
  User,
  Cloud,
  Tag,
} from "lucide-react";

export const SIDEBAR_ITEMS = [
  {
    category: "Favorites",
    items: [
      { id: "about", label: "About Me", icon: User, color: "text-blue-500" },
      {
        id: "projects",
        label: "Projects",
        icon: Briefcase,
        color: "text-purple-500",
      },
      { id: "skills", label: "Skills", icon: Code, color: "text-emerald-500" },
      {
        id: "resume",
        label: "Downloads",
        icon: Download,
        color: "text-blue-400",
      },
    ],
  },
  {
    category: "iCloud",
    items: [
      { id: "docs", label: "Documents", icon: Folder, color: "text-gray-400" },
      { id: "desktop", label: "Desktop", icon: Home, color: "text-gray-400" },
      {
        id: "drive",
        label: "iCloud Drive",
        icon: Cloud,
        color: "text-blue-400",
      },
    ],
  },
  {
    category: "Tags",
    items: [
      { id: "red", label: "Important", icon: Tag, color: "text-red-400" },
      { id: "orange", label: "Work", icon: Tag, color: "text-orange-400" },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Nebula AI",
    desc: "A spatial LLM wrapper built with React & Python.",
    tags: ["React", "Python", "AI"],
    color: "bg-gradient-to-br from-purple-500 to-indigo-600",
  },
  {
    id: 2,
    title: "CryptoDash",
    desc: "Real-time DeFi analytics dashboard using Web3.",
    tags: ["Next.js", "Solidity", "Tailwind"],
    color: "bg-gradient-to-br from-blue-400 to-cyan-500",
  },
  {
    id: 3,
    title: "Vim-Motion",
    desc: "A gamified way to learn Vim keybindings.",
    tags: ["Rust", "WASM", "GameDev"],
    color: "bg-gradient-to-br from-emerald-400 to-green-600",
  },
  {
    id: 4,
    title: "Hyper-OS",
    desc: "The operating system you are currently looking at.",
    tags: ["TypeScript", "Vite", "Zustand"],
    color: "bg-gradient-to-br from-orange-400 to-red-500",
  },
  {
    id: 5,
    title: "EcoTracker",
    desc: "IoT dashboard for monitoring smart city energy.",
    tags: ["Vue", "D3.js", "IoT"],
    color: "bg-gradient-to-br from-teal-400 to-blue-500",
  },
  {
    id: 6,
    title: "PixelArt",
    desc: "Browser-based sprite editor for game devs.",
    tags: ["Canvas API", "React"],
    color: "bg-gradient-to-br from-pink-400 to-rose-500",
  },
];

export const MY_SKILLS = [
  {
    category: "frontend",
    skills: [
      { label: "JavaScript.js", icon: "javascript.png", level: "72%" },
      { label: "TypeScript.ts", icon: "typescript.png", level: "72%" },
      { label: "React.js", icon: "react.png", level: "72%" },
      { label: "CSS", icon: "css.png", level: "72%" },
      { label: "Tailwind.css", icon: "less.png", level: "72%" },
    ],
  },
  {
    category: "backend",
    skills: [
      { label: "Node.js", icon: "sh.png", level: "72%" },
      { label: "Express.js", icon: "JSON.png", level: "72%" },
      { label: "Next.js", icon: "javascript.png", level: "72%" },
    ],
  },
  {
    category: "tools",
    skills: [
      { label: "Git", icon: "text.png", level: "72%" },
      { label: "Github", icon: "text.png", level: "72%" },
      { label: "Docker", icon: "plain.png", level: "30%" },
      { label: "CI/CD", icon: "sh.png", level: "72%" },
    ],
  },
];
