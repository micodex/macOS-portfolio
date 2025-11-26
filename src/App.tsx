import "./App.css";
import Window from "./components/Window";
import { Terminal, Globe, type LucideIcon } from "lucide-react";

import { useState } from "react";

// types
interface AppData {
  id: string;
  title: string;
  icon: LucideIcon;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  x: number;
  y: number;
  z: number;
  content: string;
}

function Desktop() {
  // State: Which apps exist and are they open?
  const [maxZ, setMaxZ] = useState(2);
  const [apps, setApps] = useState<AppData[]>([
    {
      id: "safari",
      title: "Safari",
      icon: Globe,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      x: 100,
      y: 50,
      z: 1,
      content:
        "Safari is Apple's web browser. It is built on the WebKit engine.",
    },
    {
      id: "terminal",
      title: "Terminal",
      icon: Terminal,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 200,
      y: 150,
      z: 1,
      content:
        "Last login: Tue Nov 25 10:00:00 on ttys000\nType 'help' for more information.",
    },
    {
      id: "Files",
      title: "Files",
      icon: Terminal,
      isOpen: false,
      isMinimized: false,
      isMaximized: false,
      x: 200,
      y: 150,
      z: 1,
      content: "Files Type 'help' for more information.",
    },
  ]);

  // Partial<T> is a utility type that takes another type T and makes all of its properties optional.
  const updateApp = (id: string, updates: Partial<AppData>) => {
    setApps((prev) =>
      prev.map((app) => (app.id === id ? { ...app, ...updates } : app))
    );
  };

  const handleFocus = (id: string) => {
    // bring app to the front
    setMaxZ((z) => z + 1);
    updateApp(id, { z: maxZ + 1 });
  };

  const handleOpen = (id: string) => {
    const app = apps.find((app) => app.id === id);
    if (!app) return;

    if (!app.isOpen) {
      updateApp(id, { isOpen: true, isMinimized: false, z: maxZ + 1 });
      setMaxZ((z) => z + 1);
    } else if (app.isMinimized) {
      updateApp(id, { isMinimized: false, z: maxZ + 1 });
      setMaxZ((z) => z + 1);
    } else {
      updateApp(id, { z: maxZ + 1 });
      setMaxZ((z) => z + 1);
    }
  };

  const handleClose = (id: string) =>
    updateApp(id, { isOpen: false, isMaximized: false });

  const handleMinimize = (id: string) => updateApp(id, { isMinimized: true });

  const handleMaximize = (id: string) => {
    setApps((prev) =>
      prev.map((a) => (a.id === id ? { ...a, isMaximized: !a.isMaximized } : a))
    );
  };

  return (
    <div className="h-screen w-screen bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3270&auto=format&fit=crop')] bg-cover bg-center relative overflow-hidden font-sans">
      {/* Windows Layer */}
      {apps.map((app) => (
        <Window
          key={app.id}
          {...app}
          onClose={handleClose}
          onMinimize={handleMinimize}
          onMaximize={handleMaximize}
          onFocus={handleFocus}
        />
      ))}

      {/* Dock */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-2xl border border-white/20 p-2 rounded-2xl flex gap-3 shadow-2xl z-[9999]">
        {apps.map((app) => (
          <button
            key={app.id}
            onClick={() => handleOpen(app.id)}
            className={`
              relative group p-3 rounded-2xl transition-all duration-300 ease-out
              ${
                app.isOpen && !app.isMinimized
                  ? "bg-white/30 shadow-inner scale-110 -translate-y-2"
                  : "hover:bg-white/20 hover:scale-110 hover:-translate-y-2"
              }
            `}
          >
            <app.icon
              size={36}
              className={`text-white drop-shadow-lg transition-opacity ${
                app.isMinimized ? "opacity-50" : "opacity-100"
              }`}
            />

            <div
              className={`
              absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full shadow transition-all duration-300
              ${app.isOpen ? "opacity-100 scale-100" : "opacity-0 scale-0"}
            `}
            />

            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm pointer-events-none">
              {app.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Desktop;
