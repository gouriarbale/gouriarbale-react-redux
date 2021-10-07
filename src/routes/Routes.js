import { lazy } from "react";
import ProductDetails from "../product/ProductDetails";
const ProductList = lazy(() => import("../product/ProductList"));

export default [
  {
    title: "Producs",
    path: "/",
    showInMenu: true,
    role: "all",
    component: <ProductList />,
  },
  {
    title: "Productdetails",
    path: "/product/:id",
    showInMenu: true,
    role: "all",
    component: <ProductDetails />,
  },
];
