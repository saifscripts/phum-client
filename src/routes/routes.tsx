import { RouterProviderProps, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/auth/Login';
import Registration from '../pages/auth/Registration';
import generateRoutes from '../utils/generateRoutes';
import { adminPaths } from './admin.routes';
import { facultyPaths } from './faculty.routes';
import { studentPaths } from './student.routes';

const router: RouterProviderProps['router'] = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    children: generateRoutes(adminPaths),
  },
  {
    path: '/faculty',
    element: <App />,
    children: generateRoutes(facultyPaths),
  },
  {
    path: '/student',
    element: <App />,
    children: generateRoutes(studentPaths),
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
