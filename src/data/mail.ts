import type { SideBarItem } from "@/components/ui/SideBar";
import {
  FaInstagram,
  FaTelegramPlane,
  FaCodepen,
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaInbox,
} from "react-icons/fa";

export const SOCIAL_LINKS: SideBarItem[] = [
  {
    category: "Social Links",
    items: [
      {
        id: "email",
        label: "Email",
        icon: FaInbox,
        color: "text-purple-500",
        // url: "#",
      },
      {
        id: "Github",
        label: "Github",
        icon: FaGithub,
        color: "text-blue-500",
        // url: "https://github.com/micodex",
      },
      {
        id: "linkedin",
        label: "Linkedin",
        icon: FaLinkedin,
        color: "text-emerald-500",
        // url: "https://www.linkedin.com/in/milad-gharibi-9ba94835a",
      },
      {
        id: "website",
        label: "Website",
        icon: FaGlobe,
        color: "text-blue-400",
        // url: "https://micodex-portfolio.vercel.app",
      },
      {
        id: "codepen",
        label: "Codepen",
        icon: FaCodepen,
        color: "text-blue-400",
        // url: "https://codepen.io/mi_codex",
      },
      {
        id: "instagram",
        label: "Instagram",
        icon: FaInstagram,
        color: "text-blue-400",
        // url: "https://www.instagram.com/web.script/",
      },
      {
        id: "telegram",
        label: "Telegram",
        icon: FaTelegramPlane,
        color: "text-blue-400",
        // url: "https://t.me/heyitsmg",
      },
    ],
  },
];
