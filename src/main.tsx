import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { WallpaperProvider } from "./context/WallpaperContext";
import { ThemeProvider } from "./context/ThemeContext";
import { OSProvider } from "./context/OSContext";

import "@/index.css";
import App from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <OSProvider>
        <WallpaperProvider>
          <App />
        </WallpaperProvider>
      </OSProvider>
    </ThemeProvider>
  </StrictMode>,
);
