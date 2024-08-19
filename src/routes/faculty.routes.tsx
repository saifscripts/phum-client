import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';
import { IPath } from '../interfaces';
import FacultyDashboard from '../pages/faculty/FacultyDashboard';
import OfferedCourse from '../pages/faculty/OfferedCourse';

export const facultyPaths: IPath[] = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: createElement(UserOutlined),
    element: <FacultyDashboard />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    icon: createElement(VideoCameraOutlined),
    element: <OfferedCourse />,
  },
];
