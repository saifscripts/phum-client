import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, MenuProps } from 'antd';
import { createElement } from 'react';

const { Sider, Header, Content, Footer } = Layout;

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: createElement(VideoCameraOutlined),
    label: 'Dashboard',
  },
  {
    key: '2',
    icon: createElement(UserOutlined),
    label: 'Profile',
  },
  {
    key: '3',
    icon: createElement(UserOutlined),
    label: 'User Management',
    children: [
      {
        key: '31',
        icon: createElement(VideoCameraOutlined),
        label: 'Create Admin',
      },
      {
        key: '32',
        icon: createElement(UserOutlined),
        label: 'Create Student',
      },
      {
        key: '33',
        icon: createElement(UserOutlined),
        label: 'Create Faculty',
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
            Main Content Goes Here
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
