import { TMenuItems, TPath } from "../types";

export const menuItemsGenerator = (items: TPath[]) => {
    const menuItems = items.reduce((acc: TMenuItems[], item) => {
        if (item.path && item.name && item.name!=='Checkout' && item.name!=='Cart' && item.name!== 'Add Product' && item.name!=='Success' && item.name!== 'Single Products') {
          acc.push({
            name: item.name,
            path: item.path,
          });
        }
        return acc;
      }, []);
      return menuItems;
}