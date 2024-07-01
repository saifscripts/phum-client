import { ReactNode } from 'react';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';

interface IRoute {
  index?: boolean;
  path: string;
  element: ReactNode;
}

const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
    ],
  },
];

export const adminRoutes = adminPaths.reduce<IRoute[]>((routes, route) => {
  if (route.path && route.element) {
    routes.push({
      path: route.path,
      element: route.element,
    });
  }

  if (route.children) {
    route.children.forEach((child) => {
      routes.push({
        path: child.path,
        element: child.element,
      });
    });
  }

  return routes;
}, []);
