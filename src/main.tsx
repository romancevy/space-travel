import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App.tsx";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/destination",
        element: <Destination />,
      },
      {
        path: "/crew",
        element: <Crew />,
      },
      {
        path: "/technology",
        element: <Technology />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
