import { useEffect, useState } from "react";
import { useOS } from "@/context/useOS";
import { navLinks } from "@/data/navbar";

// icons
import {
  Bluetooth,
  BluetoothOff,
  Search,
  SquareMenu,
  Volume2,
  Wifi,
  WifiOff,
} from "lucide-react";
import { FaApple } from "react-icons/fa";

const Navbar = () => {
  const { state, dispatch } = useOS();

  const activeApp = state.apps.find((app) => app.id === state.activeAppId);
  const ccOpen = state.systemStatus.ccOpen; // is control center open?
  const title = activeApp ? activeApp.title : "Desktop";

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // update time every 1 sec
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // const formatedDate = new Intl.DateTimeFormat("fa-IR", {
  //   timeStyle: "short",
  //   dateStyle: "medium",
  // }).format(time);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      // weekday: "short",
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

  const iconSize: number = 22;

  return (
    <nav>
      <div className="separator">
        {/* logo */}
        <FaApple size={20} className="logo" />

        {/* active app */}
        <span className="app-title">{title}</span>

        {/* projects contact skills */}
        <ul className="nav-lists">
          {navLinks.map(({ name }) => (
            <li key={name}>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* task icons and time & date */}
      <div className="separator">
        <ul className="task-icons">
          <li>
            <Search size={iconSize} />
          </li>
          {state.systemStatus.wifi ? (
            <li>
              <Wifi size={iconSize} />
            </li>
          ) : (
            <li>
              <WifiOff size={iconSize} />
            </li>
          )}

          {state.systemStatus.bluetooth ? (
            <li>
              <Bluetooth size={iconSize} />
            </li>
          ) : (
            <li>
              <BluetoothOff size={iconSize} />
            </li>
          )}

          {state.systemStatus.playing ? (
            <li>
              <Volume2 size={iconSize} />
            </li>
          ) : null}
          {
            <li
              onClick={() => dispatch({ type: "TOGGLE_CC" })}
              className={ccOpen ? "opened" : ""}
            >
              <SquareMenu size={iconSize} />
            </li>
          }
        </ul>
        <time>
          <span>{formatDate(time)}</span>
          <span>{formatTime(time)}</span>
        </time>
      </div>
    </nav>
  );
};

export default Navbar;
