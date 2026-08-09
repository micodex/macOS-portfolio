import {
  Sun,
  Lock,
  Moon,
  Wifi,
  Eclipse,
  Volume2,
  Maximize,
  Bluetooth,
  type LucideIcon,
} from "lucide-react";

export type ControlType = "circular" | "wide" | "slider" | "music";

export interface ControlItem {
  id: string;
  type: ControlType;
  label?: string;
  icon?: LucideIcon;
  subtext?: string;
  defaultValue?: number;
  isActive?: boolean;
  colSpan?: string;
  rowSpan?: string;
  action?: () => void;
}

// helper actions
const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
};

export const Controls: ControlItem[] = [
  // row 1: focus mode (2x1) & music (Square)
  {
    id: "theme",
    type: "wide",
    label: "Dark",
    icon: Eclipse,
    isActive: false,
    colSpan: "col-span-2",
  },
  {
    id: "music",
    type: "music",
    colSpan: "col-span-2",
    rowSpan: "row-span-2",
  },

  // row 2: screen mirror (2x1)
  {
    id: "focus",
    type: "wide",
    label: "Focus",
    icon: Moon,
    isActive: false,
    colSpan: "col-span-2",
    action: () => console.log("Mirroring..."),
  },

  // row 3: sliders (4x1)
  {
    id: "brightness",
    type: "slider",
    label: "Display",
    icon: Sun,
    defaultValue: 80,
    colSpan: "col-span-4",
  },
  {
    id: "sound",
    type: "slider",
    label: "Sound",
    icon: Volume2,
    defaultValue: 50,
    colSpan: "col-span-4",
  },

  // row 4: grid of circles
  {
    id: "wifi",
    type: "circular",
    icon: Wifi,
    isActive: true,
    colSpan: "col-span-1",
    action: () => console.log("Wifi Toggled"),
  },
  {
    id: "bluetooth",
    type: "circular",
    icon: Bluetooth,
    isActive: false,
    colSpan: "col-span-1",
    action: () => console.log("BT Toggled"),
  },
  {
    id: "fullscreen",
    type: "circular",
    icon: Maximize,
    isActive: false,
    colSpan: "col-span-1",
    action: toggleFullScreen,
  },
  {
    id: "lock",
    type: "circular",
    icon: Lock,
    isActive: false,
    colSpan: "col-span-1",
    action: () => console.log("Lock Toggled"),
  },
];
