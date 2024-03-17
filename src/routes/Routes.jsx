import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TopPage from '../pages/TopPage';
import MyRecordPage from '../pages/MyRecordPage';
import ColumnPage from '../pages/ColumnPage';
import LoginPage from '../pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TopPage />
  },
  {
    path: '/my-record',
    element: <MyRecordPage />
  },
  {
    path: '/column',
    element: <ColumnPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
