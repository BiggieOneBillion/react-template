import React from "react";
import { Navigate } from "react-router-dom";
import { authStore } from "../store/user.store";

const RedirectIfAuthenticated = (props) => {
  const isAllowed = authStore((state) => state.isAllowed);

  return isAllowed ? <Navigate to={"/dashboard"} /> : props.children;
};

export default RedirectIfAuthenticated;
