import { RouterProviderProps, createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/auth/Login';
import Registration from '../pages/auth/Registration';
import { adminRoutes } from './admin.routes';

const router: RouterProviderProps['router'] = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    children: adminRoutes,
  },
  {
    path: '/faculty',
    element: <App />,
    children: adminRoutes,
  },
  {
    path: '/students',
    element: <App />,
    children: adminRoutes,
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
