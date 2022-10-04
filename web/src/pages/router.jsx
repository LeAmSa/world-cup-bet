import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Home } from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export const Router = () => <RouterProvider router={router} />;
