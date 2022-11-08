import React from "react";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";
import ServiceDetails from "../../pages/Services/ServiceDetails";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";

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
        path: "/services/:id",
        loader: ({ params }) => {
          return fetch(`http://localhost:5000/servicesall/${params.id}`);
        },
        element: <ServiceDetails></ServiceDetails>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
export default router;
