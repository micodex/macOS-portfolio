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

      <main className="h-full flex-1 bg-white dark:bg-stone-900 p-4 text-sm">
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${customScrollbar} flex-1 overflow-y-auto`}
        >
          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 dark:bg-stone-800 p-2 rounded-lg">
              <h3 className="text-gray-800 dark:text-gray-200 font-semibold">
                Appearance
              </h3>
              <div className="flex gap-4 mt-4">
                {APPEARANCE_BUTTONS.map(({ id, title, icon: Icon }) => (
                  <div className="flex flex-col items-center gap-1">
                    <button
                      key={id}
                      onClick={() => setAppearance(id)}
                      className={`rounded-xl border w-20 h-20 transition grid place-content-center
                ${
                  appearance === id
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-gray-300 dark:border-zinc-700"
                }`}
                    >
                      <span className="dark:text-gray-100">
                        <Icon />
                      </span>
                    </button>
                    <h3 className="font-light text-xs">{title}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-100 dark:bg-stone-800 p-2 rounded-lg">
              <h3 className="dark:text-gray-200 font-semibold ">Colour</h3>
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
              <div className="border-t pt-2 mt-2 border-t-gray-300 dark:text-gray-300">
                <p>text highlight colour</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SettingsApp;
