import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return <RouterProvider router={router} />;
};

export default Body;
