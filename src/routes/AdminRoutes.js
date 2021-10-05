import { Navigate } from "react-router-dom";

import DashboardLayout from "../layouts/dashboard";
import DashboardApp from "../pages/DashboardApp";
import { ServiceMenu } from "../pages/Services";

const AdminRoutes = {
  path: "/admin",
  element: <DashboardLayout />,
  children: [
    { element: <Navigate to="/admin/dashboard" replace /> },
    { path: "dashboard", element: <DashboardApp /> },
    { path: "services", element: <ServiceMenu /> },
  ],
};

export default AdminRoutes;
