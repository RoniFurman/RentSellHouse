import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuthStatus from "../Hooks/UseAuthStatus";
import Spinner from "./Spinner";
const PrivateRoute = () => {
  const { logedIn, checkingStatus } = UseAuthStatus();
  if (checkingStatus) {
    return <Spinner />;
  }
  return logedIn ? <Outlet /> : <Navigate to="/Sign-In" />;
};

export default PrivateRoute;
