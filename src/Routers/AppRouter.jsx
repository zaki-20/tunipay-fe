import ApplicationWrapper from "../components/common/layout/ContentWrapper";
import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../components/pages/single-product/ProductDetails";
import Registration from "../components/pages/login-signup/LoginSignup";
import Home from "../components/pages/home/Home";

const routes = [
  {
    path: "/",
    element: <ApplicationWrapper />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: "product-detail",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "/register",
    element: <Registration />,
  },
];
export default createBrowserRouter(routes);
