import React from "react";
import Header from "../Components/Header/index";
import SideBar from "../Components/sidebar";
import "./index.css";
import AppRoute from "./myroutes";

function Routes() {
  return (
    <div className="main">
      <Header />
      <SideBar />
      <main>
        <AppRoute />
      </main>
    </div>
  );
}

export default Routes;
