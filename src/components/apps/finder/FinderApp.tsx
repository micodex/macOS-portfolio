import { Activity, useState } from "react";
import { FINDER_SIDEBAR } from "@/data/finder";

import { customScrollbar } from "@/lib/scrollbar";
import { AboutTab, ProjectsTab, DownloadTab, SkillsTab } from "./Tabs";
import SideBar from "@/components/ui/SideBar";

const FinderApp = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="flex h-full w-full window-backdrop">
      {/* --- side bar --- */}
      <SideBar
        list={FINDER_SIDEBAR}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* --- main --- */}
      <main className="flex flex-1 h-full bg-background">
        {/*  tab content */}
        <div className={`${customScrollbar} flex-1 p-4 pt-0 overflow-y-auto`}>
          {/* render tabs */}
          <Activity mode={activeTab === "projects" ? "visible" : "hidden"}>
            <ProjectsTab />
          </Activity>

          <Activity mode={activeTab === "skills" ? "visible" : "hidden"}>
            <SkillsTab />
          </Activity>

          <Activity mode={activeTab === "about" ? "visible" : "hidden"}>
            <AboutTab />
          </Activity>

          <Activity mode={activeTab === "downloads" ? "visible" : "hidden"}>
            <DownloadTab />
          </Activity>
        </div>
      </main>
    </div>
  );
};

export default FinderApp;
