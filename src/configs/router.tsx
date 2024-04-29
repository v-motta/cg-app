import ForgotPassword from "@/pages/auth/forgot-password";
import Login from "@/pages/auth/login";
import Costs from "@/pages/costs";
import Home from "@/pages/home";
import Layout from "@/pages/layout";
import ProtectedRoute from "@/services/ProtectedRoute";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  {
    element: <ProtectedRoute />, children: [
      {
        element: <Layout />, children: [
          { path: "/", element: <Home /> },
          { path: "/costs", element: <Costs /> },
        ]
      },
    ]
  },
]);
