import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Business } from "./pages/BusinessPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Home } from "./pages/HomePage";
import { Login } from "./pages/LoginPage";
import { Photo } from "./pages/PhotoPage";
import { Review } from "./pages/ReviewPage";
import { User } from "./pages/UsersPage";

import { Outlet } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { index: true, element: <Login /> }, // Display login page by default
      { path: "business", element: <Business /> },
      { path: "photo", element: <Photo /> },
      { path: "review", element: <Review /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
