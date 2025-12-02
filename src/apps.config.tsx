import TerminalApp from "./components/apps/TerminalApp";

export interface AppConfig {
  id: string;
  title: string;
  icon: string;
  component: React.ReactNode;
  width?: number;
  height?: number;
}

export const appsConfig: AppConfig[] = [
  {
    id: "finder",
    title: "Finder",
    icon: "finder.webp",
    width: 500,
    height: 350,
    component: "Files App",
  },
  {
    id: "safari",
    title: "Safari",
    icon: "safari.webp",
    width: 700,
    height: 500,
    component: "<SafariApp />",
  },
  {
    id: "terminal",
    title: "Terminal",
    icon: "terminal.webp",
    width: 500,
    height: 350,
    component: <TerminalApp />,
  },
  {
    id: "mail",
    title: "Mail",
    icon: "mail.webp",
    width: 500,
    height: 600,
    component: "Contact me",
  },
  {
    id: "notes",
    title: "Notes",
    icon: "notes.webp",
    width: 500,
    height: 350,
    component: "Notes",
  },
  {
    id: "settings",
    title: "Settings",
    icon: "settings.webp",
    width: 500,
    height: 500,
    component: "System Settings",
  },
];

// Helper to get component by ID
export const getAppComponent = (id: string) => {
  const app = appsConfig.find((app) => app.id === id);
  return app ? app.component : null;
};
