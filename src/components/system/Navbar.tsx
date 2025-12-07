import { useOS } from "@/context/OSContext";

import { navIcons, navLinks } from "@/data/navbar";
import { useEffect, useState } from "react";

const Navbar = () => {
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
      second: "numeric",
    });
  };

  return (
    <nav>
      <div className="flex">
        <img src="/logo.svg" alt="logo" />
        {/* active app */}
        <span className="font-bold">{title}</span>

        <ul>
          {navLinks.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} alt={`icon-${id}`} className="icon-hover" />
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
