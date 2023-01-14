import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { ResponsiveAppBar } from "./components/menu/Menu";
import { LoginForm } from "./components/login/LoginForm";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UserProvider } from "./utils/UserContext";
import { useThemeContext } from "./utils/ThemeContext";
import { Notification } from "./components/modal/Notification";
import { useNotificationContext } from "./utils/NotificationContext";
import MuiModal from "./components/modal/MuiModal";
import { ModalProvider } from "./utils/ModalContext";

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
});

function App() {
  let location = useLocation();
  const { theme } = useThemeContext();

  theme === "dark"
    ? document.documentElement.style.setProperty("--bodyColor", "#18181b")
    : document.documentElement.style.setProperty("--bodyColor", "#e0f2fe");

  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        {/* {process.env.NODE_ENV === "development" && ( */}
        {/*   <ReactQueryDevtools position="top-right" initialIsOpen={false} /> */}
        {/* )} */}
        <div className={theme === "dark" ? "dark" : "light"}>
          <ResponsiveAppBar />
          {location.pathname === "/" && <LoginForm />}
          <Notification />
          <ModalProvider>
            <MuiModal />
          </ModalProvider>
          <Outlet />
        </div>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
