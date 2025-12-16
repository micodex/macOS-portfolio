import { type LucideIcon } from "lucide-react";
import { useState } from "react";

const Control = ({
  Icon,
  label,
  className,
}: {
  Icon: LucideIcon;
  label?: string;
  className?: string;
}) => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className={`p-2 text-white/80 bg-white/10 backdrop-blur-xl
      rounded-[34px] hover:backdrop-blur-3xl transition-all duration-300
      hover:scale-102 border-t-2 border-l-2
      border border-white/20 h-full
      ${className}
    `}
    >
      <div className="flex gap-3 items-center">
        <div
          onClick={() => setActive(!active)}
          className={` p-2 rounded-full aspect-square transition-colors ${
            active
              ? "text-sky-500/90 bg-white/70"
              : "bg-white/20 grid place-items-center"
          }`}
        >
          <Icon size={30} />
        </div>
        <div className="text-sm">
          <div>{label}</div>
          <div>{active ? "ON" : "OFF"}</div>
        </div>
      </div>
    </div>
  );
};

export default Control;
