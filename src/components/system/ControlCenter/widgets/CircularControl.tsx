import { useEffect, useState } from "react";
import { useOS } from "@/context/useOS";
import { type ControlItem } from "../controls.config";

// circualr control (1x1)
export const CircularControl = ({ data }: { data: ControlItem }) => {
  const { state, dispatch } = useOS();
  const [isFullScreen, setIsFullScreen] = useState(
    !!document.fullscreenElement,
  );

  const Icon = data.icon;

  useEffect(() => {
    if (data.id !== "fullscreen") return;

    const handleFullscreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      console.log("return");
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [data.id]); // data.id = "wifi" → effect returns immediately, no listener attached.

  const active =
    data.id === "wifi"
      ? state.systemStatus.wifi
      : data.id === "bluetooth"
        ? state.systemStatus.bluetooth
        : data.id === "lock"
          ? state.systemStatus.lock
          : data.id === "fullscreen"
            ? isFullScreen // is fullscreen?
            : false;

  const handleClick = () => {
    if (data.id === "wifi") {
      dispatch({ type: "TOGGLE_WIFI" });
    } else if (data.id === "bluetooth") {
      dispatch({ type: "TOGGLE_BLUETOOTH" });
    } else if (data.id === "lock") {
      dispatch({ type: "TOGGLE_LOCKSCREEN" });
    } else if (data.id === "fullscreen") {
      data.action?.();
    }
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
      {Icon ? <Icon size={24} /> : null}
    </button>
  );
};

export default CircularControl;
