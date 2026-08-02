import { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { type ControlItem } from "../controls.config";

// wide control (2x1)
export const WideControl = ({ data }: { data: ControlItem }) => {
  const [on, setOn] = useState(data.isActive);

  const Icon = data.icon;
  const { isDark, toggleDark } = useTheme();

  // is active based on state or internal state
  const active =
    data.id === "theme" ? isDark : data.id === "focus" ? on : false;

  const handleClick = () => {
    if (data.action) data.action();

    if (data.id === "theme") {
      toggleDark();
    } else if (data.id === "focus") {
      setOn(!on);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        liquid-glass h-16 w-full rounded-4xl flex items-center px-4 gap-3
        ${active ? "bg-blue-500/10 text-white" : "bg-black/10 text-white"}
      `}
    >
      <div
        className={`
        w-8 h-8 rounded-full flex items-center justify-center
        ${active ? "bg-white text-blue-500" : "bg-black/20"}
      `}
      >
        {Icon ? <Icon size={16} /> : null}
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xs font-bold">{data.label}</span>
        <span className="text-[10px] opacity-70">{active ? "On" : "Off"}</span>
      </div>
    </button>
  );
};

export default WideControl;
