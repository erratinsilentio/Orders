import { jsx as _jsx } from "react/jsx-runtime";
import { useContext, useEffect } from "react";
import { createContext, useState } from "react";
const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        theme === "dark"
            ? document.documentElement.style.setProperty("--bodyColor", "#18181b")
            : document.documentElement.style.setProperty("--bodyColor", "#e0f2fe");
    }, [theme]);
    const toggleTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark");
    return (_jsx(ThemeContext.Provider, { value: { theme, toggleTheme }, children: children }));
};
export const useThemeContext = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("Missing themeContext, it's not wrapped in ThemeProvider");
    }
    return ctx;
};
