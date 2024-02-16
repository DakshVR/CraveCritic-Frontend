import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App, {
  ErrorPage,
  FilmData,
  FilmPage,
  Films,
  Home,
  People,
  PeoplePage,
  PersonData,
  PlanetData,
  PlanetPage,
  Planets,
} from "./App";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <App>
        <ErrorPage />
      </App>
    ),
    children: [
      { index: true, element: <Home /> },
      {
        path: "people",
        element: <People />,
        children: [
          { path: ":personData", element: <PersonData /> },
          { index: true, element: <PeoplePage /> },
        ],
      },
      {
        path: "planets",
        element: <Planets />,
        children: [
          { path: ":planetData", element: <PlanetData /> },
          { index: true, element: <PlanetPage /> },
        ],
      },
      {
        path: "films",
        element: <Films />,
        children: [
          { path: ":filmData", element: <FilmData /> },
          { index: true, element: <FilmPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
