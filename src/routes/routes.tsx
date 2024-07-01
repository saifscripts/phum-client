import { RouterProviderProps, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/CreateAdmin';
import CreateFaculty from '../pages/admin/CreateFaculty';
import CreateStudent from '../pages/admin/CreateStudent';
import Login from '../pages/auth/Login';
import Registration from '../pages/auth/Registration';

const router: RouterProviderProps['router'] = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: 'dashboard',
        element: <AdminDashboard />,
      },
      {
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        path: 'create-student',
        element: <CreateStudent />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registration',
    element: <Registration />,
  },
]);

export default router;
