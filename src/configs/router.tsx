import Login from "@/pages/auth/login";
import Costs from "@/pages/costs";
import Home from "@/pages/home";
import Layout from "@/pages/layout";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  {
    path: "/", element: <Layout />, children: [
      { path: "/dash", element: <Home /> },
      { path: "/costs", element: <Costs /> },
    ]
  },
]);
