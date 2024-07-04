import { Layout, Menu } from 'antd';
import { USER_ROLE } from '../../constants';
import { useAppSelector } from '../../redux/hooks';
import { adminPaths } from '../../routes/admin.routes';
import { facultyPaths } from '../../routes/faculty.routes';
import { studentPaths } from '../../routes/student.routes';
import generateSidebarItems from '../../utils/generateSidebarItems';

const { Sider } = Layout;

const paths = {
  [USER_ROLE.admin]: adminPaths,
  [USER_ROLE.faculty]: facultyPaths,
  [USER_ROLE.student]: studentPaths,
};

const Sidebar = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
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
        items={generateSidebarItems(paths[user!.role], user!.role)}
      />
    </Sider>
  );
};

export default Sidebar;
