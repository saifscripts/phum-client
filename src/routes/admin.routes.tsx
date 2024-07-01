import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { ReactNode, createElement } from 'react';
import { NavLink } from 'react-router-dom';
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
    icon: createElement(VideoCameraOutlined),
    element: <AdminDashboard />,
  },
  {
    name: 'User Management',
    icon: createElement(UserOutlined),
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        icon: createElement(UserOutlined),
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        icon: createElement(UserOutlined),
        element: <CreateFaculty />,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        icon: createElement(UserOutlined),
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
        path: child.path as string,
        element: child.element,
      });
    });
  }

  return routes;
}, []);

export const adminItems: MenuProps['items'] = adminPaths.map((item) => {
  if (item.children) {
    return {
      key: item.name,
      icon: item.icon,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        icon: child.icon,
        label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>,
      })),
    };
  }

  return {
    key: item.name,
    icon: item.icon,
    label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>,
  };
});
