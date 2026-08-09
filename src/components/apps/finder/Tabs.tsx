import ProjectCard from "./ProjectCard";
import ImageSkeleton from "@/components/ui/ImageSkeleton";

import { DOWNLOADS, MY_SKILLS, PROJECTS } from "@/data/finder";
import profilePic from "@/assets/images/profile.jpg";
import { ArrowUpRight } from "lucide-react";

import { useOS } from "@/context/useOS";
import TopBar from "./TopBar";
import { useState } from "react";

// ---
export const AboutTab = () => {
  const { dispatch } = useOS();

  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4">
      <ImageSkeleton
        src={profilePic}
        alt="profile image"
        className="aspect-square w-28 overflow-hidden rounded-full mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">Milad Gharibi</h2>
      <p className="max-w-md text-muted-foreground mb-4">
        I am a creative developer building interfaces that feel alive. Welcome
        to my digital garden.
      </p>
      <button
        onClick={() => dispatch({ type: "OPEN", id: "notes" })}
        className="flex items-center gap-2 text-primary hover:underline cursor-pointer"
      >
        Read full bio <ArrowUpRight size={14} />
      </button>
    </div>
  );
};

// ---

export const ProjectsTab = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="">
      <TopBar
        activeTab={"Projects"}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <div className="space-y-6">
        <div>
          <h2 className="text-xs font-semibold mb-4 px-1">2025 Projects</h2>
          <div
            className={`${
              viewMode === "grid"
                ? "grid grid-cols-4 gap-4"
                : "grid grid-cols-2 gap-10"
            }`}
          >
            {PROJECTS.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xs font-bold mb-4 px-1">Mini Projects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 opacity-70">
            {PROJECTS.slice(0, 2).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ---

export const SkillsTab = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="">
      <TopBar
        activeTab={"Skills"}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <div className="space-y-6">
        {MY_SKILLS.map(({ category, skills }) => (
          <div className="" key={category}>
            <h3 className="text-secondary-foreground text-xs font-semibold uppercase tracking-wider mb-3 ml-4 ">
              {category}
            </h3>
            {/* skills in a category */}
            <div className="grid grid-cols-7">
              {skills.map(({ label, icon, level }) => (
                <div
                  key={label}
                  className="group flex flex-col gap-2 items-center p-2 rounded-xl
                  hover:bg-accent/20 ring-accent hover:ring transition-colors"
                >
                  <ImageSkeleton
                    src={`${import.meta.env.BASE_URL}files/${icon}`}
                    alt={`${label} icon`}
                    className="w-16 aspect-9/10 dark:opacity-90"
                  />
                  <div className="text-sm font-medium text-center">
                    <span className="block group-hover:text-primary">
                      {label}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---

export const DownloadTab = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("list");

  return (
    <div>
      <TopBar
        activeTab={"Downloads"}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />
      <div
        className={`${
          viewMode === "grid"
            ? "grid grid-cols-4 gap-4 text-center"
            : "flex flex-col"
        }`}
      >
        {/* list view header */}
        {viewMode === "list" && (
          <div className="flex p-3 pt-0 mb-2">
            <h3 className="flex-3 text-left">Name</h3>
            <h3 className="flex-2">Date</h3>
            <h3 className="flex-1">Size</h3>
            <h3 className="flex-1">Kind</h3>
          </div>
        )}
        {DOWNLOADS.map(({ name, icon: Icon, date, size, kind, link }) => (
          <a
            key={name}
            href={link}
            className="even:bg-secondary text-card-foreground
              rounded-lg cursor-pointer p-3 hover:bg-accent 
              hover:text-accent-foreground group transition-colors"
            download
          >
            <div
              className={`${
                viewMode === "grid"
                  ? ""
                  : "flex items-center justify-between gap-3"
              } `}
            >
              {/* icons */}
              <div
                className={`${
                  viewMode === "grid"
                    ? "flex flex-col items-center gap-4"
                    : "flex-3 flex gap-2"
                }`}
              >
                <Icon
                  size={viewMode == "grid" ? 40 : 20}
                  className="text-muted-foreground group-hover:text-primary"
                />
                <span className="text-sm font-bold">{name}</span>
              </div>
              {/* show only on grid mode */}
              {viewMode === "list" && (
                <span className="flex-2 text-sm text-muted-foreground">
                  {date}
                </span>
              )}
              <span className="flex-1 text-sm text-muted-foreground">
                {size}
              </span>
              {/* show only on grid mode */}
              {viewMode === "list" && (
                <span className="flex-1 text-sm text-muted-foreground">
                  {kind}
                </span>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
