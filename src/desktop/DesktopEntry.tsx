import { WallpaperProvider } from "@/context/WallpaperContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { OSProvider } from "@/context/OSContext";

import App from "@/App";

import "@/index.css";

export default function DesktopEntry() {
  return (
    <ThemeProvider>
      <OSProvider>
        <WallpaperProvider>
          <App />
        </WallpaperProvider>
      </OSProvider>
    </ThemeProvider>
  );
}
