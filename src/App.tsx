import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/public/ContactPage";
import HomePage from "./pages/public/HomePage";
import Dashboard from "./pages/admin/Dashboard";
import MyTable from "./pages/public/MyTable";

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
    {
      path: "/dashboard",
      element: <Dashboard/>,
    },
    {
      path: "/mytable",
      element: <MyTable/>,
    },
   
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
