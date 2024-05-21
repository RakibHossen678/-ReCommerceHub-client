import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import AllProducts from "../Pages/AllProducts";
import AddProducts from "../Pages/AddProducts";
import MyPurchase from "../Pages/MyPurchase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allProducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path:'/addProducts',
        element:<AddProducts></AddProducts>
      },
      {
        path:'/purchase',
        element:<MyPurchase></MyPurchase>
      }
    ],
  },
]);
