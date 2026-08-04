import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "./context/ThemeContext";
import { OSProvider } from "./context/OSContext";

import "@/index.css";
import App from "@/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <OSProvider>
        <App />
      </OSProvider>
    </ThemeProvider>
  </StrictMode>,
);
