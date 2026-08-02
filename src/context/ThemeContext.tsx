import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Appearance = "system" | "light" | "dark";

// type of the context data
interface ThemeContextValue {
  appearance: Appearance;
  isDark: boolean;
  setAppearance: (appearance: Appearance) => void;
  toggleDark: () => void;
}

// create the context
const ThemeContext = createContext<ThemeContextValue | null>(null);

// create the provider component
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [appearance, setAppearance] = useState<Appearance>(() => {
    return (
      (localStorage.getItem("appearance") as Appearance | null) ?? "system"
    );
  });

  const [systemDark, setSystemDark] = useState(
    // (prefers-color-scheme: dark) is a CSS media query that asks:
    // Does the user prefer dark color scheme?
    window.matchMedia("(prefers-color-scheme: dark)").matches, // check if the user's device is in dark mode.
  );

  useEffect(() => {
    // media is a special browser object that:
    // Stores the result of a media query check
    // Can notify you when the result changes
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
      setSystemDark(e.matches);
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const isDark = appearance === "system" ? systemDark : appearance === "dark";

  useEffect(() => {
    // save appearance
    localStorage.setItem("appearance", appearance);

    document.documentElement.classList.toggle("dark", isDark); // isDark -> false : removes the dark class
  }, [appearance, isDark]);

  const toggleDark = () => {
    setAppearance((prev) => {
      const current =
        prev === "system" ? (systemDark ? "dark" : "light") : prev;

      return current === "dark" ? "light" : "dark";
    });
  };

  const value = useMemo(
    () => ({
      appearance,
      isDark,
      setAppearance,
      toggleDark,
    }),
    [appearance, isDark],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext); //looks up the nearest Provider and gets its value
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};
