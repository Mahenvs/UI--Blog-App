import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Hocs/Layout";

import Register from "./components/Register";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Write from "./components/Write";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path:"",
        element:<Navigate to ="posts"/>
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "write",
        element: <ProtectedRoute >
          <Write/>
        </ProtectedRoute>, // Protect this route

      },
      {
        path: "profile",
        element: <ProtectedRoute >
          <Profile/>
        </ProtectedRoute>, // Protect this route

      },
      {
        path: "logout",
        element: <Login />,
      }
    ],
  },
]);
