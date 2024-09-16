import { Outlet } from "react-router-dom";
import NavItems from "../Shared/Header/NavItems";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavItems />
      <div className="max-w-7xl mx-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
