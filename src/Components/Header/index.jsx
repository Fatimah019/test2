import React, { useState } from "react";
import "./index.css";
import Search from "../Search";

const Header = () => {
  const [showProfile, setShowProfile] = useState(false);

  const handleShowProfile = () => {
    setShowProfile(true);
  };
  const handleCloseProfile = () => {
    setShowProfile(false);
  };

  const profileStyle = showProfile ? { display: "flex" } : {};
  return (
    <header>
      <h1 role="img">
        Sport <br />
        Time
      </h1>
      <nav className="nav" style={profileStyle}>
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
      </nav>
      {!showProfile ? (
        <i className="fa fa-bars" onClick={handleShowProfile}></i>
      ) : (
        <i className="fa fa-close" onClick={handleCloseProfile}></i>
      )}
    </header>
  );
};
export default Header;
