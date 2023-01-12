import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { ResponsiveAppBar } from "./components/menu/Menu";
import { LoginForm } from "./components/login/LoginForm";
import { QueryCache, QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UserProvider } from "./utils/userContext";
import { useThemeContext } from "./utils/ThemeContext";

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
});

function App() {
  let location = useLocation();
  const { theme } = useThemeContext();

  const colors = {
    primary: theme === "light" ? "#e0f2fe" : "#0c4a6e",
    font: theme === "light" ? "#0c4a6e" : "#e0f2fe",
  };

  return (
    <UserProvider>
      {" "}
      <QueryClientProvider client={queryClient}>
        {/* {process.env.NODE_ENV === "development" && ( */}
        {/*   <ReactQueryDevtools position="top-right" initialIsOpen={false} /> */}
        {/* )} */}
        <div className={theme === "dark" ? "dark" : "light"}>
          <ResponsiveAppBar />
          {location.pathname === "/" && <LoginForm />}
          <Outlet />
        </div>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
