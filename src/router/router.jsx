import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "../layouts/root";
import NotFound from "../components/not-found";
import { Home } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={"/"} element={<Root />} errorElement={<NotFound />}>
        {/* define all your routes here */}
      <Route path="index" element={<Home />} />
    </Route>
  )
);

export default router;
