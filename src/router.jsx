import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./layouts/Layout";
import { Home } from "./views/Home";
import { AuthLayout } from "./layouts/AuthLayout";
import { Login } from "./views/Login";
import { AdminLayout } from "./layouts/AdminLayout";
import { AdminHome } from "./views/AdminHome";
import { UserForm } from "./components/UserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminHome />,
      },
      {
        path: "users/create",
        element: <UserForm />,
      },
    ],
  },
]);

export default router;
