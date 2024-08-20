import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { createElement } from 'react';
import { IPath } from '../interfaces';
import AcademicDepartment from '../pages/admin/AcademicManagement/AcademicDepartment';
import AcademicFaculty from '../pages/admin/AcademicManagement/AcademicFaculty';
import AcademicSemesters from '../pages/admin/AcademicManagement/AcademicSemesters';
import CreateAcademicDepartment from '../pages/admin/AcademicManagement/CreateAcademicDepartment';
import CreateAcademicFaculty from '../pages/admin/AcademicManagement/CreateAcademicFaculty';
import CreateAcademicSemester from '../pages/admin/AcademicManagement/CreateAcademicSemester';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CourseData from '../pages/admin/courseManagement/CourseData';
import CreateCourse from '../pages/admin/courseManagement/CreateCourse';
import CreateOfferedCourse from '../pages/admin/courseManagement/CreateOfferedCourse';
import CreateSemesterRegistration from '../pages/admin/courseManagement/CreateSemesterRegistration';
import OfferedCourses from '../pages/admin/courseManagement/OfferedCourses';
import RegisteredSemesterData from '../pages/admin/courseManagement/RegisteredSemesterData';
import AdminData from '../pages/admin/userManagement/AdminData';
import AdminDetails from '../pages/admin/userManagement/AdminDetails';
import CreateAdmin from '../pages/admin/userManagement/CreateAdmin';
import CreateFaculty from '../pages/admin/userManagement/CreateFaculty';
import CreateStudent from '../pages/admin/userManagement/CreateStudent';
import FacultyData from '../pages/admin/userManagement/FacultyData';
import FacultyDetails from '../pages/admin/userManagement/FacultyDetails';
import StudentData from '../pages/admin/userManagement/StudentData';
import StudentDetails from '../pages/admin/userManagement/StudentDetails';
import UpdateAdmin from '../pages/admin/userManagement/UpdateAdmin';
import UpdateFaculty from '../pages/admin/userManagement/UpdateFaculty';
import UpdateStudent from '../pages/admin/userManagement/UpdateStudent';

export const adminPaths: IPath[] = [
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
        path: 'student-data/:studentId',
        element: <StudentDetails />,
      },
      {
        path: 'student-data/edit/:studentId',
        element: <UpdateStudent />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        icon: createElement(UserOutlined),
        element: <CreateFaculty />,
      },
      {
        name: 'Faculties',
        path: 'faculties-data',
        icon: createElement(UserOutlined),
        element: <FacultyData />,
      },
      {
        path: 'faculty-data/:facultyId',
        element: <FacultyDetails />,
      },
      {
        path: 'faculty-data/edit/:facultyId',
        element: <UpdateFaculty />,
      },
      {
        name: 'Create Admin',
        path: 'create-admin',
        icon: createElement(UserOutlined),
        element: <CreateAdmin />,
      },
      {
        name: 'Admins',
        path: 'admins-data',
        icon: createElement(UserOutlined),
        element: <AdminData />,
      },
      {
        path: 'admin-data/:adminId',
        element: <AdminDetails />,
      },
      {
        path: 'admin-data/edit/:adminId',
        element: <UpdateAdmin />,
      },
    ],
  },
  {
    name: 'Course Management',
    icon: createElement(UserOutlined),
    children: [
      {
        name: 'Create S. Registration',
        path: 'create-semester-registration',
        icon: createElement(UserOutlined),
        element: <CreateSemesterRegistration />,
      },
      {
        name: 'Registered Semesters',
        path: 'registered-semesters',
        icon: createElement(UserOutlined),
        element: <RegisteredSemesterData />,
      },
      {
        name: 'Create Course',
        path: 'create-course',
        icon: createElement(UserOutlined),
        element: <CreateCourse />,
      },
      {
        name: 'Courses',
        path: 'courses',
        icon: createElement(UserOutlined),
        element: <CourseData />,
      },
      {
        name: 'Crete Offered Course',
        path: 'create-offered-course',
        icon: createElement(UserOutlined),
        element: <CreateOfferedCourse />,
      },
      {
        name: 'Offered Courses',
        path: 'offered-courses',
        icon: createElement(UserOutlined),
        element: <OfferedCourses />,
      },
    ],
  },
];
