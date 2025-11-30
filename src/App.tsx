import "@/index.css";

import Window from "@/components/Window";
import Navbar from "@/components/Navbar";
import Dock from "@/components/Dock";

import { useOS } from "@/context/OSContext";

function Desktop() {
  const { state } = useOS();

  return (
    <div className="h-screen w-screen font-georama">
      {/* navigation */}
      <Navbar />

      {/* Windows Layer */}
      {state.apps.map((app) => (
        <Window key={app.id} app={app} />
      ))}

      {/* Dock */}
      <Dock panelHeight={90} baseItemSize={70} magnification={90} />
    </div>
  );
}

export default Desktop;
