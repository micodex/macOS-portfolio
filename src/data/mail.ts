import { Box, Mail, Send, Globe, type LucideIcon } from "lucide-react";

interface SocialLink {
  label: string;
  icon: LucideIcon;
  url: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Email",
    icon: Mail,
    url: "url",
  },
  {
    label: "Github",
    icon: Mail,
    url: "url",
  },
  {
    label: "Linkedin",
    icon: Globe,
    url: "url",
  },
  {
    label: "Website",
    icon: Globe,
    url: "url",
  },
  {
    label: "Codepen",
    icon: Box,
    url: "url",
  },
  {
    label: "Instagram",
    icon: Send,
    url: "url",
  },
  {
    label: "Telegram",
    icon: Send,
    url: "url",
  },
];
