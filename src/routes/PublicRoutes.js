import { Navigate } from "react-router-dom";

//layout
import LogoOnlyLayout from "../layouts/LogoOnlyLayout";

//
import Login from "../pages/Login";
import NotFound from "../pages/Page404";

const PublicRoutes = {
  path: "/",
  element: <LogoOnlyLayout />,
  children: [
    { path: "login", element: <Login /> },
    { path: "404", element: <NotFound /> },
    { path: "/", element: <Navigate to="/login" /> },
    { path: "*", element: <Navigate to="/404" /> },
  ],
};

export default PublicRoutes;
