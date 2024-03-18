import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TopPage from '../pages/TopPage';
import MyRecordPage from '../pages/MyRecordPage';
import ColumnPage from '../pages/ColumnPage';

const router = createBrowserRouter([
  {
    path: '/top',
    element: <TopPage />
  },
  {
    path: '/my-record',
    element: <MyRecordPage />
  },
  {
    path: '/',
    element: <ColumnPage />
  }
]);

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
