// import React, { ReactNode } from "react";
// import { userProp, userStore } from "../stores/global-store";
// import { Navigate } from "react-router-dom";
// // import { useToast } from "@chakra-ui/react";
// import { dashboardRoute } from "../utils/constants";

// export default function ProtectedRouteByRole({ children, allowedRoles }) {
//   const user = userStore((state) => state.user);
//   //  check if the user role is part of the allowed roles to view this route
//   if (!allowedRoles.includes(user.role)) {
//     // if role is not part of the allowedRoles then redirect to the previous path
//     // navigate(-1);
//     // show the user a toast message notifying them that they are not allowed to access the route.
//     // toast({
//     //   status: "error",
//     //   position: "top",
//     //   title: "Access Denied",
//     //   description: "You do not have permission to view this page",
//     //   duration: 3000,
//     // });
//     // return;
//     return <Navigate to={dashboardRoute} replace={true} />;
//   }
//   return children;
// }
