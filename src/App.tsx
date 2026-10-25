import "@/index.css";

import Dock from "@/components/system/Dock";
import Window from "@/components/system/Window";
import Navbar from "@/components/system/Navbar";
import ControlCenter from "./components/system/ControlCenter/ControlCenter";

import { useOS } from "@/context/OSContext";
import { useWallpaper } from "@/context/WallpaperContext";
import Wallpaper from "./components/system/Wallpaper";

function Desktop() {
  const { state } = useOS();
  const { currentWallpaper } = useWallpaper();

  return (
    <div className="relative font-georama min-h-screen overflow-hidden">
      <Wallpaper src={currentWallpaper} />

      <div className="z-10 h-full">
        {/* control center */}
        <ControlCenter />

        {/* navigation */}
        <Navbar />

        {/* windows layer */}
        {state.apps.map((app) => (
          <Window key={app.id} app={app} />
        ))}

        {/* Dock */}
        <Dock />
      </div>
    </div>
  );
}

export default Desktop;
