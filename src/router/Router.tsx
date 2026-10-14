import { createBrowserRouter } from "react-router";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "about",
        element: <About />,
      },

      {
        path: "portfolio",
        element: <Portfolio />,
      },

      {
        path: "blog",
        element: <Blog />,
      },

      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
