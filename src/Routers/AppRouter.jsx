import ApplicationWrapper from "../components/common/layout/ContentWrapper";
import { createBrowserRouter } from "react-router-dom";
import ProductDetails from "../components/pages/single-product/ProductDetails";
import Registration from "../components/pages/login-signup/LoginSignup";
import Home from "../components/pages/home/Home";
import Profile from "../components/pages/profile/profile";
import Users from "../components/pages/user/Users";
import ForgetPassword from "../components/pages/user/ForgetPassword";
import ResetPassword from "../components/pages/user/ResetPassword";
import { useAuthContext } from "../hooks/useAuthContext";
import RequireAuth from "../utils/RequireAuth";

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
      {
        index: true,
        path: "profile",
        element: (
          <RequireAuth>
            <Profile />
          </RequireAuth>
        ),
      },
      {
        index: true,
        path: "users",
        element: <Users />,
      },
      {
        index: true,
        path: "forgot-password",
        element: <ForgetPassword />,
      },
      {
        index: true,
        path: "reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },
  {
    path: "/register",
    element: <Registration />,
  },
];
export default createBrowserRouter(routes);
