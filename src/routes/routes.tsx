import { RouterProviderProps, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/auth/Login';
import Registration from '../pages/auth/Registration';
import { adminPaths } from './admin.routes';

const router: RouterProviderProps['router'] = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    children: adminPaths,
  },
  {
    path: '/faculty',
    element: <App />,
    children: adminPaths,
  },
  {
    path: '/students',
    element: <App />,
    children: adminPaths,
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
