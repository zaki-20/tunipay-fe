import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = () => {
  const { user } = useAuthContext();
  const location = useLocation()
  console.log("require auth user", user)
  return <>{user?.user ? <Outlet /> : <Navigate to="/register" state={{from:location}} replace/>}</>;
};

export default RequireAuth;
