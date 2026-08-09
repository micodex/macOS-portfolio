import { APPEARANCE_BUTTONS, SETTINGS_SIDEBAR } from "@/data/settings";
import { useTheme } from "@/context/ThemeContext";
import { customScrollbar } from "@/lib/scrollbar";
import SideBar from "@/components/ui/SideBar";
import { useState } from "react";

const SettingsApp = () => {
  const firstItemId = SETTINGS_SIDEBAR[0]?.items[0]?.id ?? "";
  const [activeTab, setActiveTab] = useState(firstItemId);
  const { appearance, setAppearance } = useTheme();

  return (
    <div className="flex h-full window-backdrop">
      <SideBar
        list={SETTINGS_SIDEBAR}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className="h-full bg-background flex-1 p-4 text-sm transition-colors">
        <div className={`${customScrollbar} flex-1 overflow-y-auto`}>
          <div className="flex flex-col gap-4">
            {/* card */}
            <div className="p-2 rounded-lg bg-card text-card-foreground border ">
              <h3 className="font-semibold">Appearance</h3>
              <div className="flex gap-4 mt-4">
                {APPEARANCE_BUTTONS.map(({ id, title, icon: Icon }) => (
                  <div className="flex flex-col items-center gap-1">
                    <button
                      key={id}
                      onClick={() => setAppearance(id)}
                      className={`w-20 h-20 rounded-xl border grid place-content-center cursor-pointer hover:outline
                ${appearance === id ? "outline bg-primary/20 " : ""}`}
                    >
                      <span className="">
                        <Icon />
                      </span>
                    </button>
                    <h3 className="font-light text-xs">{title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-2 rounded-lg bg-card text-card-foreground border">
              <h3 className="font-semibold ">Colour</h3>
              <div className="flex gap-4 mt-4 rounded-md">
                <div className="flex gap-2">
                  <div className="w-5 h-5 bg-sky-500 rounded-full"></div>
                  <div className="w-5 h-5 bg-purple-500 rounded-full"></div>
                  <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                  <div className="w-5 h-5 bg-gray-500 rounded-full"></div>
                  <div className="w-5 h-5 bg-amber-500 rounded-full"></div>
                  <div className="w-5 h-5 bg-pink-500 rounded-full"></div>
                </div>
              </div>
              <div className="border-t pt-2 mt-2">
                <p className="text-text-secondary">text highlight colour</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsApp;
