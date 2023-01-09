import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import { ResponsiveAppBar } from "./components/menu/Menu";
import { LoginForm } from "./components/login/LoginForm";

function App() {
  let location = useLocation();
  return (
    <div className="App">
      <ResponsiveAppBar />
      {location.pathname === "/" && <LoginForm />}
      <Outlet />
    </div>
  );
}

export default App;
