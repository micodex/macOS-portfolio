import { Activity, useState } from "react";
import SideBar from "@/components/ui/SideBar";
import { SETTINGS_SIDEBAR } from "@/data/settings";
import { customScrollbar } from "@/lib/scrollbar";
import { AppearanceTab, WallpaperTab } from "./Tabs";

const SettingsApp = () => {
  const firstItemId = SETTINGS_SIDEBAR[0]?.items[0]?.id ?? "";
  const [activeTab, setActiveTab] = useState(firstItemId);

  return (
    <div className="flex h-full window-backdrop">
      <SideBar
        list={SETTINGS_SIDEBAR}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div
        className={`${customScrollbar} flex-1 overflow-y-auto bg-background p-4 text-sm`}
      >
        <Activity mode={activeTab === "appearance" ? "visible" : "hidden"}>
          <AppearanceTab />
        </Activity>

        <Activity mode={activeTab === "wallpaper" ? "visible" : "hidden"}>
          <WallpaperTab />
        </Activity>
      </div>
    </div>
  );
};

export default SettingsApp;
