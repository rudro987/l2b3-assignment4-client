import { Outlet } from "react-router-dom";
import NavItems from "../Shared/Header/NavItems";

const MainLayout = () => {
  return (
    <div className="">
      <NavItems />
      <div className="max-w-[1440px] mx-auto min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
