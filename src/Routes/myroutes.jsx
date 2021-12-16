import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Components/Home";

const AppRoute = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default AppRoute;
