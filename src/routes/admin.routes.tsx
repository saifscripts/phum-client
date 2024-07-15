import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';
import AcademicDepartment from '../pages/admin/academicManagement/AcademicDepartment';
import AcademicFaculty from '../pages/admin/academicManagement/AcademicFaculty';
import AcademicSemester from '../pages/admin/academicManagement/AcademicSemester';
import CreateAcademicDepartment from '../pages/admin/academicManagement/CreateAcademicDepartment';
import CreateAcademicFaculty from '../pages/admin/academicManagement/CreateAcademicFaculty';
import CreateAcademicSemester from '../pages/admin/academicManagement/CreateAcademicSemester';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/userManagement/CreateAdmin';
import CreateFaculty from '../pages/admin/userManagement/CreateFaculty';
import CreateStudent from '../pages/admin/userManagement/CreateStudent';

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
        name: 'Create A. Semester',
        path: 'create-academic-semester',
        icon: createElement(UserOutlined),
        element: <CreateAcademicSemester />,
      },
      {
        name: 'Academic Semester',
        path: 'academic-semester',
        icon: createElement(UserOutlined),
        element: <AcademicSemester />,
      },
      {
        name: 'Create A. Faculty',
        path: 'create-academic-faculty',
        icon: createElement(UserOutlined),
        element: <CreateAcademicFaculty />,
      },
      {
        name: 'Academic Faculty',
        path: 'academic-faculty',
        icon: createElement(UserOutlined),
        element: <AcademicFaculty />,
      },
      {
        name: 'Create A. Department',
        path: 'create-academic-department',
        icon: createElement(UserOutlined),
        element: <CreateAcademicDepartment />,
      },
      {
        name: 'Academic Department',
        path: 'academic-department',
        icon: createElement(UserOutlined),
        element: <AcademicDepartment />,
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
