import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Hocs/Layout";

import Register from "./components/Register";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Write from "./components/Write";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
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
        element: <Write />,
      },
    ],
  },
]);
