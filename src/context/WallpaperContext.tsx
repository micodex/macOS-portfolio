import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { useTheme } from "./ThemeContext";
import { wallpapers, type WallpaperId } from "../data/wallpapers";

interface WallpaperContextValue {
  selectedWallpaper: WallpaperId;
  currentWallpaper: string;
  setWallpaper: (id: WallpaperId) => void;
}

const WallpaperContext = createContext<WallpaperContextValue | undefined>(
  undefined,
);

export function WallpaperProvider({ children }: { children: ReactNode }) {
  const { isDark } = useTheme();

  const [selectedWallpaper, setSelectedWallpaper] = useState<WallpaperId>(
    () => {
      // get saved wallpaper from local storage
      const saved = localStorage.getItem("wallpaper");

      return wallpapers.some((wallpaper) => wallpaper.id === saved)
        ? (saved as WallpaperId)
        : "adaptive";
    },
  );

  useEffect(() => {
    // save selected wallpaper
    localStorage.setItem("wallpaper", selectedWallpaper);
  }, [selectedWallpaper]);

  const wallpaper =
    wallpapers.find((item) => item.id === selectedWallpaper) ?? wallpapers[0];

  // the actual wallpaper url
  const currentWallpaper =
    selectedWallpaper === "adaptive"
      ? isDark
        ? wallpaper.dark || ""
        : wallpaper.light
      : wallpaper.light;

  return (
    <WallpaperContext.Provider
      value={{
        selectedWallpaper,
        currentWallpaper,
        setWallpaper: setSelectedWallpaper,
      }}
    >
      {children}
    </WallpaperContext.Provider>
  );
}

export function useWallpaper() {
  const context = useContext(WallpaperContext);

  if (!context) {
    throw new Error("useWallpaper must be used inside WallpaperProvider");
  }

  return context;
}
