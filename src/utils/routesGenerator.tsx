import { TPath, TRoute } from "../types";

export const routesGenerator = (items: TPath[]) => {
    const routes = items.reduce((acc: TRoute[], item) => {
        if(item.path && item.element){
            acc.push({
                path: item.path,
                element: item.element,
            })
        }
        return acc;
      }, []);

      return routes;
}