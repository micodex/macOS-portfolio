import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DeviceRouter from "./app/DeviceRouter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DeviceRouter />
  </StrictMode>,
);
