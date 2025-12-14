import { useOS } from "@/context/OSContext";

import { navIcons, navLinks } from "@/data/navbar";
import { useEffect, useState } from "react";

const Navbar = ({ onToggleCC }: { onToggleCC: () => void }) => {
  const { state } = useOS();
  const activeApp = state.apps.find((app) => app.id === state.activeAppId);
  const title = activeApp ? activeApp.title : "Desktop";

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const handleClick = (id: string) => {
    switch (id) {
      case "control": // control center image
        onToggleCC();
        break;
      default:
        console.log(`Button ${id} clicked`);
    }
  };

  return (
    <nav>
      <div className="flex">
        <img src="/logo.svg" alt="logo" />
        {/* active app */}
        <span className="hover-effect font-bold">{title}</span>

        <ul>
          {navLinks.map(({ name }) => (
            <li key={name}>
              <span className="hover-effect">{name}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <button onClick={() => handleClick(id)}>
                <img
                  src={img}
                  alt={`icon-${id}`}
                  className="hover-effect icon-hover"
                />
              </button>
            </li>
          ))}
        </ul>
        <time>
          {formatDate(time)} &nbsp; {formatTime(time)}
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
