import { Outlet } from "react-router-dom";
import "./App.css";
import { ResponsiveAppBar } from "./components/menu/Menu";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Outlet />
    </div>
  );
}

export default App;
