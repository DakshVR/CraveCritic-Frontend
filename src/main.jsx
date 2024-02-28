import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Business } from "./pages/BusinessPage";
import { ErrorPage } from "./pages/ErrorPage";
import { Login } from "./pages/LoginPage";
import { Photo } from "./pages/PhotoPage";
import { Review } from "./pages/ReviewPage";
import { User } from "./pages/UsersPage";

import { Outlet } from "react-router-dom";
import "./index.css";
import { CreateAccount } from "./pages/CreateAccount";
import Layout from "./pages/Layout";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
  {
    path: "/newuser",
    element: (
      <Layout>
        <CreateAccount />
      </Layout>
    ),
  },
  {
    path: "/business",
    element: (
      <Layout>
        <Business />
      </Layout>
    ),
  },
  {
    path: "/photo",
    element: (
      <Layout>
        <Photo />
      </Layout>
    ),
  },
  {
    path: "/review",
    element: (
      <Layout>
        <Review />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
