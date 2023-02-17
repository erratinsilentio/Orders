import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { ResponsiveAppBar } from "./components/menu/Menu";
import { LoginForm } from "./components/login/LoginForm";
import { QueryCache, QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import { UserProvider } from "./utils/UserContext";
import { useThemeContext } from "./utils/ThemeContext";
import { Notification } from "./components/modal/Notification";
import MuiModal from "./components/modal/MuiModal";
const queryClient = new QueryClient({
    queryCache: new QueryCache(),
});
function App() {
    let location = useLocation();
    const { theme } = useThemeContext();
    return (_jsx(UserProvider, { children: _jsx(QueryClientProvider, { client: queryClient, children: _jsxs("div", { className: theme === "dark" ? "dark" : "light", children: [_jsx(ResponsiveAppBar, {}), location.pathname === "/" && _jsx(LoginForm, {}), _jsx(Notification, {}), _jsx(MuiModal, {}), _jsx(Outlet, {})] }) }) }));
}
export default App;
