import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';
import AcademicDepartment from '../pages/admin/AcademicManagement/AcademicDepartment';
import AcademicFaculty from '../pages/admin/AcademicManagement/AcademicFaculty';
import AcademicSemesters from '../pages/admin/AcademicManagement/AcademicSemesters';
import CreateAcademicDepartment from '../pages/admin/AcademicManagement/CreateAcademicDepartment';
import CreateAcademicFaculty from '../pages/admin/AcademicManagement/CreateAcademicFaculty';
import CreateAcademicSemester from '../pages/admin/AcademicManagement/CreateAcademicSemester';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/userManagement/CreateAdmin';
import CreateFaculty from '../pages/admin/userManagement/CreateFaculty';
import CreateStudent from '../pages/admin/userManagement/CreateStudent';
import StudentData from '../pages/admin/userManagement/StudentData';

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
        element: <AcademicSemesters />,
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
        name: 'Create Student',
        path: 'create-student',
        icon: createElement(UserOutlined),
        element: <CreateStudent />,
      },
      {
        name: 'Students',
        path: 'students-data',
        icon: createElement(UserOutlined),
        element: <StudentData />,
      },
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
    ],
  },
];
