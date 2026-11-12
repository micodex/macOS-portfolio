import { Mail, FileText, Globe, type LucideIcon } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IconType } from "react-icons";

export interface MobileLink {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon | IconType;
  external?: boolean;
}

export const MOBILE_CONFIG = {
  name: "Milad Gharibi",
  initials: "MG",

  role: "Frontend Developer",

  heading: "Best experienced on desktop.",

  description:
    "This portfolio recreates a macOS environment and is designed for desktop screens.",

  introduction: "Meanwhile, feel free to explore my work and connect with me.",

  wallpaper: `${import.meta.env.BASE_URL}wallpapers/mobile-wallpaper.avif`,

  links: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/micodex",
      icon: FaGithub,
      external: true,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/milad-gharibi-9ba94835a",
      icon: FaLinkedin,
      external: true,
    },
    {
      id: "email",
      label: "Email",
      href: "mailto:miladxgh@outlook.com",
      icon: Mail,
    },
    {
      id: "resume",
      label: "Resume",
      href: `${import.meta.env.BASE_URL}milad-gharibi-resume.pdf`,
      icon: FileText,
    },
    {
      id: "website",
      label: "Website",
      href: "https://micodex-portfolio.vercel.app/",
      icon: Globe,
      external: true,
    },
    {
      id: "instagram",
      label: "Instagram",
      href: "https://www.instagram.com/web.script/",
      icon: FaInstagram,
      external: true,
    },
  ] satisfies MobileLink[],
};
