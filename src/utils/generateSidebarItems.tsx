import { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
import { IPath } from '../interfaces';

const generateSidebarItems = (items: IPath[], role: string) => {
  const sidebarItems: MenuProps['items'] = items
    .map((item) => {
      if (item.children && item.name && item.icon) {
        return {
          key: item.name,
          icon: item.icon,
          label: item.name,
          children: item.children
            .map((child) => {
              if (child.name && child.icon && child.path) {
                return {
                  key: child.name,
                  icon: child.icon,
                  label: (
                    <NavLink to={`/${role}/${child.path}`}>
                      {child.name}
                    </NavLink>
                  ),
                };
              }
            })
            .filter((item) => item !== undefined),
        };
      }

      if (item.name && item.icon && item.path) {
        return {
          key: item.name,
          icon: item.icon,
          label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
        };
      }
    })
    .filter((item) => item !== undefined);
  return sidebarItems;
};

export default generateSidebarItems;
