import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Meal from "./components/Meal";
import DetailsMeal from "./components/DetailsMeal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/meal",
        loader: () =>
          fetch("https://www.themealdb.com/api/json/v1/1/search.php?s"),
        element: <Meal />,
      },
      {
        path: "/details/:idMeal",
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`
          ),
        element: <DetailsMeal />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
