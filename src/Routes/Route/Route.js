import React from "react";
import Home from "../../pages/Home/Home/Home";
import Register from "../../pages/Register/Register";
import Login from "../../pages/Login/Login";
import Services from "../../pages/Services/Services";
import ServiceDetails from "../../pages/Services/ServiceDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import MyReviews from "../../pages/MyReviews/MyReviews";
import AddService from "../../pages/AddService/AddService";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services api="servicesall"></Services>,
      },
      {
        path: "/services/:serviceid",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/servicesall/${params.serviceid}`);
        },
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
