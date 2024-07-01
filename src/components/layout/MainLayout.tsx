import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { createElement } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const { Sider, Header, Content, Footer } = Layout;

const items: MenuProps['items'] = [
  {
    key: 'dashboard',
    icon: createElement(VideoCameraOutlined),
    label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
  },
  {
    key: 'user-management',
    icon: createElement(UserOutlined),
    label: 'User Management',
    children: [
      {
        key: 'create-admin',
        icon: createElement(UserOutlined),
        label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
      },
      {
        key: 'create-faculty',
        icon: createElement(UserOutlined),
        label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
      },
      {
        key: 'create-student',
        icon: createElement(UserOutlined),
        label: <NavLink to="/admin/create-student">Create Student</NavLink>,
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: '1.75rem',
            height: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p>PHUM</p>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            {/* Main Content */}
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
