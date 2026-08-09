import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface SideBarProps {
  list: SideBarItem[];
  activeTab: string;
  onTabChange?: (id: string) => void;
}

export interface SideBarItem {
  category: string;
  items: {
    id: string;
    label: string;
    icon: LucideIcon | IconType;
    color: string;
  }[];
}

const SideBar = ({ list, activeTab, onTabChange }: SideBarProps) => {
  const handleTabChange = (id: string) => {
    onTabChange?.(id);
  };

  return (
    <aside className="w-49 px-2 py-4">
      {list.map(({ category, items }) => (
        <div key={category} className="mb-4 px-2 select-none">
          <h3 className="mb-1 pl-3 text-[10px] font-bold tracking-wide uppercase text-muted-foreground">
            {category}
          </h3>
          {items.map(({ label, id, icon: Icon, color }) => (
            <button
              key={id}
              type="button"
              id={id}
              onClick={() => handleTabChange(id)}
              aria-current={activeTab === id ? "page" : undefined}
              className={`
                    w-full px-3 py-1.5 flex items-center gap-2.5 text-sm rounded-lg cursor-pointer transition-colors
                    ${
                      activeTab === id
                        ? "text-sidebar-accent-foreground bg-sidebar-primary/30 bg-sidebar-accents font-semibold"
                        : "hover:bg-sidebar-primary/10 hover:text-sidebar-accent-foreground"
                    }
                  `}
            >
              <Icon
                size={16}
                className={
                  activeTab === id ? "text-sidebar-accent-foreground" : color
                }
              />
              <span>{label}</span>
            </button>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default SideBar;
