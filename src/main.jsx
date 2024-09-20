import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
   path: "/addtodo",
   element: <AddTodo />
  },

  {
    path: "/login",
   element: <LogIn />
  },

  {
    path: "/signup",
   element: <SignUp />
  },

  {},

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);