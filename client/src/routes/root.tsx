import { Outlet } from "react-router-dom";
import { ResponsiveAppBar } from "../components/menu/Menu";

export const Root = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Outlet />
    </>
  );
};
