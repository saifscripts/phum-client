import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';
import AcademicSemester from '../pages/admin/AcademicManagement/AcademicSemester';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';

export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: createElement(VideoCameraOutlined),
    element: <AdminDashboard />,
  },
  {
    name: 'Academic Management',
    icon: createElement(UserOutlined),
    children: [
      {
        name: 'Academic Semester',
        path: 'academic-semester',
        icon: createElement(UserOutlined),
        element: <AcademicSemester />,
      },
    ],
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
