import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../ui/navigation-menu";
import { menuItemsGenerator } from "../../../utils/menuItemsGenerator";
import { allPaths } from "../../../routes/allPaths";

const NavItems = () => {
  const menuItems = menuItemsGenerator(allPaths);
  console.log(menuItems);
  console.log(typeof menuItems);

  return (
    <div className="flex gap-5">
      {menuItems.map((item) => (
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to={`${item.path}`}>
                <NavigationMenuLink>{item.name}</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}
    </div>
  );
};

export default NavItems;
