import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';
import { IPath } from '../interfaces';
import OfferedCourse from '../pages/student/OfferedCourse';
import StudentDashboard from '../pages/student/StudentDashboard';

export const studentPaths: IPath[] = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    icon: createElement(VideoCameraOutlined),
    element: <StudentDashboard />,
  },
  {
    name: 'Offered Course',
    path: 'offered-course',
    icon: createElement(UserOutlined),
    element: <OfferedCourse />,
  },
];
