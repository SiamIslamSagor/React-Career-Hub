import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Home from "./Components/Home/Home.jsx";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import JobsDetails from "./Components/JobsDetails/JobsDetails";
import Login from "./Components/Login/Login";
import AuthProvider from "./AuthProvider/AuthProvider";
import Register from "./Components/Register/Register";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: (
          <PrivetRoute>
            <AppliedJobs></AppliedJobs>
          </PrivetRoute>
        ),
        loader: () => fetch("/jobs.json"), // do not load all data. load only what you need
      },
      {
        path: "/job/:id",
        element: <JobsDetails></JobsDetails>,
        loader: () => fetch("/jobs.json"), // do not load all data. load only what you need
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
