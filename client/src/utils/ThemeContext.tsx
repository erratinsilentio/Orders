import React, { useContext, useEffect } from "react";
import { createContext, useState } from "react";

const ThemeContext = createContext(undefined);

type Theme = "dark" | "light";
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.style.setProperty("--bodyColor", "#18181b")
      : document.documentElement.style.setProperty("--bodyColor", "#e0f2fe");
  }, [theme]);

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("Missing themeContext, it's not wrapped in ThemeProvider");
  }
  return ctx;
};
