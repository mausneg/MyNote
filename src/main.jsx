import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/home";
import Archive from "./components/pages/archive";
import CreateNote from "./components/pages/createNote";
import EditNote from "./components/pages/editNote";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/archive",
    element: <Archive />,
  },
  {
    path: "/create-note",
    element: <CreateNote />,
  },
  {
    path: "/edit-note/:id",
    element: <EditNote />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
