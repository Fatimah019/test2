import React from "react";
import { Route } from "react-router-dom";
import Home from "../Components/Home";

const AppRoute = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
    </>
  );
};

export default AppRoute;
