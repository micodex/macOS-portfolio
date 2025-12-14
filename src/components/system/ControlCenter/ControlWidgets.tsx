import { useState } from "react";
import { type ControlItem } from "./controls.config";
import { Pause, Play, SkipBack, SkipForward } from "lucide-react";

// circualr control (1x1)
export const CircularControl = ({ data }: { data: ControlItem }) => {
  const [active, setActive] = useState(data.isActive);

  const handleClick = () => {
    setActive(!active);
    if (data.action) data.action();
  };

  return (
    <button
      onClick={handleClick}
      className={`
        liquid-glass h-16 w-16 rounded-full flex items-center justify-center
        ${
          active
            ? "bg-white text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            : "bg-black/10 text-white"
        }
      `}
    >
      <data.icon size={24} />
    </button>
  );
};

// wide control (2x1)
export const WideControl = ({ data }: { data: ControlItem }) => {
  const [active, setActive] = useState(data.isActive);

  const handleClick = () => {
    setActive(!active);
    if (data.action) data.action();
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
        <data.icon size={16} />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-xs font-bold">{data.label}</span>
        <span className="text-[10px] opacity-70">{active ? "On" : "Off"}</span>
      </div>
    </button>
  );
};

// slider control (4x1)
export const SliderControl = ({ data }: { data: ControlItem }) => {
  const [val, setVal] = useState(data.defaultValue || 50);

  return (
    <div className="liquid-glass w-full h-16 bg-black/10 rounded-3xl p-3">
      <div className="flex mb-1 px-1">
        <span className="text-xs font-bold text-white">{data.label}</span>
      </div>
      <div className="flex items-center">
        <div className="flex-none px-2 text-gray-100">
          <data.icon size={16} />
        </div>

        <div className="relative h-2 flex-1 bg-black/20 rounded-full overflow-hidden flex items-center group">
          <div
            className="absolute left-0 top-0 bottom-0 bg-white"
            style={{ width: `${val}%` }}
          />

          <input
            type="range"
            min="0"
            max="100"
            value={val}
            onChange={(e) => setVal(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>

        {/* mix blend ! */}
        <div className="flex-none px-2 text-gray-100 mix-blend-exclusion">
          <data.icon size={16} />
        </div>
      </div>
    </div>
  );
};

// music control (2x2)
export const MusicControl = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="liquid-glass h-full w-full bg-black/20 rounded-4xl p-4 flex flex-col justify-between text-white">
      {/* image cover */}
      <div className="mb-1 w-12 h-12 rounded-2xl shadow-lg shrink-0 overflow-hidden">
        <img draggable={false} src="/album-cover.jpg" className="" />
      </div>

      <div className="">
        <div className="font-bold text-sm truncate">Under the Water</div>
        <div className="text-[10px] text-white/60 truncate">
          AURORA . FOR THE METAL PEOPLE
        </div>
      </div>
      {/* music control buttons */}
      <div className="flex items-center justify-between px-2 mt-2">
        <SkipBack
          size={20}
          className="fill-white hover:opacity-70 cursor-pointer"
        />
        <button onClick={() => setPlaying(!playing)}>
          {playing ? (
            <Pause size={28} className="fill-white" />
          ) : (
            <Play size={28} className="fill-white" />
          )}
        </button>
        <SkipForward
          size={20}
          className="fill-white hover:opacity-70 cursor-pointer"
        />
      </div>
    </div>
  );
};
