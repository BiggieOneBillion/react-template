import React from "react";
import { Navigate } from "react-router-dom";
import { authStore } from "../store/user.store";

const ProtectedRoute = (props) => {
  const isAllowed = authStore((state) => state.isAllowed);

  //  for now we would use the useState hook to manage the auth state
  // later we would switch it to global state using zustand
  // const [auth] = useState<boolean>(true)

  return isAllowed ? props.children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
