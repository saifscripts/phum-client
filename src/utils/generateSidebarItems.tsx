import { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
import { IPath } from '../interfaces';

const generateSidebarItems = (items: IPath[], role: string) => {
  const sidebarItems: MenuProps['items'] = items.map((item) => {
    if (item.children) {
      return {
        key: item.name,
        icon: item.icon,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          icon: child.icon,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      };
    }

    return {
      key: item.name,
      icon: item.icon,
      label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
    };
  });

  return sidebarItems;
};

export default generateSidebarItems;
