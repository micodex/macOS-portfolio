import { ChevronRight, LayoutGrid, List, Search } from "lucide-react";

interface TopBarProps {
  activeTab: string;
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
}

const TopBar = ({ viewMode, onViewModeChange, activeTab }: TopBarProps) => {
  return (
    <div className="sticky top-0 h-12 z-2 mb-2 border-b border-border flex items-center bg-background justify-between px-4">
      <div className="flex items-center gap-2  text-primary">
        <ChevronRight size={18} className="" />
        <span className="font-semibold capitalize">{activeTab}</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex bg-card p-0.5 rounded-lg border">
          <button
            onClick={() => onViewModeChange("grid")}
            className={`p-1 rounded-md ${
              viewMode === "grid"
                ? "bg-accent text-accent-foreground border"
                : "text-muted-foreground"
            }`}
          >
            <LayoutGrid size={14} className="" />
          </button>
          <button
            onClick={() => onViewModeChange("list")}
            className={`p-1 rounded-md ${
              viewMode === "list"
                ? "bg-accent text-accent-foreground border"
                : "text-muted-foreground"
            }`}
          >
            <List size={14} className="" />
          </button>
        </div>
        <div className="relative">
          <Search
            size={14}
            className="absolute left-2 top-1.5 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search"
            className="border border-input focus:ring-ring/50 pl-7 pr-3 py-1
              placeholder:text-muted-foreground rounded-md text-xs w-40 focus:w-48 outline-none 
              ring-2 ring-border bg-input/70 hover:bg-input/50 focus:ring-2 transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
