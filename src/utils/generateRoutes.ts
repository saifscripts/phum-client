import { IPath, IRoute } from '../interfaces';

const generateRoutes = (items: IPath[]) => {
  const routes = items.reduce<IRoute[]>((acc, item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path as string,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};

export default generateRoutes;
