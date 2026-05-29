import { useState } from "react";
import { FINDER_SIDEBAR } from "@/data/finder";

import { customScrollbar } from "@/lib/scrollbar";
import { AboutTab, ProjectsTab, DownloadTab, SkillsTab } from "./Tabs";
import SideBar from "./SideBar";

const FinderApp = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="flex h-full w-full text-gray-900 bg-white/93 backdrop-blur-2xl">
      {/* --- side bar --- */}
      <SideBar
        list={FINDER_SIDEBAR}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* --- main --- */}
      <main className="flex flex-1 h-full flex-col bg-white">
        {/*  tab content */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${customScrollbar} flex-1 p-4 pt-0 overflow-y-auto`}
        >
          {/* render tabs */}
          {activeTab === "projects" && <ProjectsTab />}

          {activeTab === "skills" && <SkillsTab />}

          {activeTab === "about" && <AboutTab />}

          {activeTab === "downloads" && <DownloadTab />}
        </div>
      </main>
    </div>
  );
};

export default FinderApp;
