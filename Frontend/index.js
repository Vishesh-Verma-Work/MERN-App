import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import MyNotes from "./src/components/MyNotes";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Landing from "./src/components/Landing";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/", 
        element: <Landing  />,
      },
      {
        path: "/mynotes",
        element: <MyNotes />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
