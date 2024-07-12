import { Outlet } from "react-router-dom";
import NavItems from "../Shared/Header/NavItems";

const MainLayout = () => {
  return (
    <div>
      <NavItems />
      <Outlet />
    </div>
  )
};

export default MainLayout;
