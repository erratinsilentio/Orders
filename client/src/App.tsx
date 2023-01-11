import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { ResponsiveAppBar } from "./components/menu/Menu";
import { LoginForm } from "./components/login/LoginForm";
import { QueryCache, QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { UserProvider } from "./utils/userContext";

const queryClient = new QueryClient({
  queryCache: new QueryCache(),
});

function App() {
  let location = useLocation();

  return (
    <UserProvider>
      {" "}
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools position="top-right" initialIsOpen={false} />
        )}
        <div className="App">
          <ResponsiveAppBar />
          {location.pathname === "/" && <LoginForm />}
          <Outlet />
        </div>
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
