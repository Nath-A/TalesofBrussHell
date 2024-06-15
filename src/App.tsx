import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/public/ContactPage";
import HomePage from "./pages/public/HomePage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "*",
      element: <h1>404</h1>,
    },
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/Contact",
      element: <ContactPage/>,
    },
   
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
