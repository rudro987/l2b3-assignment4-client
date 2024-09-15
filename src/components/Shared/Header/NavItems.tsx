import { Link } from "react-router-dom";
import { menuItemsGenerator } from "../../../utils/menuItemsGenerator";
import { allPaths } from "../../../routes/allPaths";
import Banner from "../../ui/Banner";

const NavItems = () => {
  const menuItems = menuItemsGenerator(allPaths);
  console.log(menuItems);
  console.log(typeof menuItems);

  return (
    <>
      <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10">
      <div className="flex gap-5 py-2 max-w-[1440px] mx-auto bg-transparent">
          <div className="navbar">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  {menuItems?.map((item) => (
                    <li>
                      <Link to={`${item.path}`}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {menuItems?.map((item) => (
                  <li>
                    <Link to={`${item.path}`}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end">
              <a className="btn">Button</a>
            </div>
          </div>
        </div>
      </div>
        
      </div>

      <Banner />
    </>
  );
};

export default NavItems;
