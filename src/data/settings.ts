import {
  Bell,
  Bluetooth,
  Eclipse,
  Fingerprint,
  Lock,
  LucideIcon,
  Monitor,
  Moon,
  Sun,
  Wifi,
} from "lucide-react";

import type { Appearance } from "@/context/ThemeContext";

export interface SideBarItem {
  category: string;
  items: {
    id: string;
    label: string;
    icon: LucideIcon;
    color: string;
  }[];
}

export const SETTINGS_SIDEBAR: SideBarItem[] = [
  {
    category: "Theme",
    items: [
      {
        id: "appearance",
        label: "Appearance",
        icon: Moon,
        color: "text-indigo-500",
      },
      {
        id: "wallpaper",
        label: "Wallpaper",
        icon: Monitor,
        color: "text-blue-500",
      },
      {
        id: "display",
        label: "Display",
        icon: Sun,
        color: "text-cyan-500",
      },
    ],
  },
  {
    category: "System",
    items: [
      {
        id: "wifi",
        label: "Wifi",
        icon: Wifi,
        color: "text-blue-500",
      },
      {
        id: "bluetooth",
        label: "Bluetooth",
        icon: Bluetooth,
        color: "text-purple-500",
      },
      {
        id: "focus",
        label: "Focus",
        icon: Moon,
        color: "text-cyan-600",
      },
      {
        id: "notification",
        label: "Notification",
        icon: Bell,
        color: "text-fuchsia-500",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        id: "lockscreen",
        label: "Lock Screen",
        icon: Lock,
        color: "text-grey-500",
      },
      {
        id: "touchid",
        label: "Touch ID",
        icon: Fingerprint,
        color: "text-fuchsia-500",
      },
    ],
  },
];

export interface appearanceButton {
  id: Appearance;
  title: string;
  icon: LucideIcon;
}

export const APPEARANCE_BUTTONS: appearanceButton[] = [
  {
    id: "system",
    title: "System",
    icon: Eclipse,
  },
  {
    id: "light",
    title: "Light",
    icon: Sun,
  },
  {
    id: "dark",
    title: "Dark",
    icon: Moon,
  },
];
