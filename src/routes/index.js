import { Navigate, useRoutes } from 'react-router-dom';
import AdminRoutes from './AdminRoutes';
import PublicRoutes from './PublicRoutes';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    AdminRoutes,
    PublicRoutes,
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}