import { Navigate } from "react-router-dom";

import DashboardLayout from "../layouts/dashboard";
import DashboardApp from "../pages/DashboardApp";
import { ServiceMenu } from "../pages/Services";
import CreateShop from "src/pages/CreateShop/CreateShop";
import { ShopList } from "src/pages/ShopList";

const AdminRoutes = {
  path: "/admin",
  element: <DashboardLayout />,
  children: [
    { element: <Navigate to="/admin/dashboard" replace /> },
    { path: "dashboard", element: <DashboardApp /> },
    { path: "services", element: <ServiceMenu /> },
    { path: "create-shop", element: <CreateShop /> },
    { path: "shops", element: <ShopList /> },
  ],
};

export default AdminRoutes;
