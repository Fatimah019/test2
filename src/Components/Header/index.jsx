import React from "react";
import "./index.css";
import Search from "../Search";

const Header = () => {
  return (
    <header>
      <h1 role="img">
        Sport <br />
        Time
      </h1>
      <div className="header-right">
        <p className="date">Apiril 18, 2021</p>
        <div className="search-box">
          <Search />
        </div>
        <div className="user-profile">
          <div className="user">
            <p className="user-name">Eleanor Pena</p>
            <p className="user-title">Admin</p>
          </div>
          <img src="/assets/images/profile-img.png" alt="user" />
        </div>
      </div>
      <i className="fa fa-bars"></i>
    </header>
  );
};
export default Header;
