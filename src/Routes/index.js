import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../Components/Header/index";
import SideBar from "../Components/sidebar";
import AppRoute from "./myroutes";
import "./index.css";

function Routes() {
  return (
    <Router>
      <Switch>
        <div className="main">
          <Header />
          <SideBar />
          <main>
            <AppRoute />
          </main>
        </div>
      </Switch>
    </Router>
  );
}

export default Routes;
