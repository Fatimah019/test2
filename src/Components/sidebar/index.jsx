import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const sideBarMenu = [
  {
    icon: "/assets/icons/home.png",
    link_path: "/",
  },
  {
    icon: "/assets/icons/calendar.png",
    link_path: "/calendar",
  },
  {
    icon: "/assets/icons/profile-2user.png",
    link_path: "/user",
  },
  {
    icon: "/assets/icons/sms.png",
    link_path: "/sms",
  },
  {
    icon: "/assets/icons/setting-2.png",
    link_path: "/settings",
  },
];

const NavLinks = ({ link_path, icon }) => {
  const location = useLocation();

  const isActive = (currentLocation) => {
    if (location.pathname === currentLocation) {
      return {
        border: "2px solid var(--secondary-color)",
        borderLeft: "1px solid transparent",
      };
    }
  };

  return (
    <li style={isActive(link_path)}>
      <Link to={link_path}>
        <div className="menu-icon">
          <img src={icon} alt="menu-icon" />
        </div>
      </Link>
    </li>
  );
};

const SideBar = () => {
  return (
    <div className="side-bar">
      <ul>
        {sideBarMenu.map((menu, index) => {
          return (
            <NavLinks key={index} link_path={menu.link_path} icon={menu.icon} />
          );
        })}
      </ul>

      <div className="elipsis">
        {/* <i className="fa fa-ellipsis-h"></i> */}
        <img src="/assets/icons/elipsis.png" alt="elipsis" />
      </div>
    </div>
  );
};

export default SideBar;
