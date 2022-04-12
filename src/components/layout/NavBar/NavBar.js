import React from "react";
import NavTitle from "./NavTitle"; //로고 위치 제대로 들
import NavSearch from "./NavSearch";
import NavMenu from "./NavMenu";
import "./navbar.scss";
import { Link } from "react-router-dom";

import logo_main from "./logo_main.png"; //로고 위치 제대로 들

const NavBar = () => {
  return (
    <div className="nav-layout">
      <Link to="/" className="menu">
        <img className="logo-img" src={logo_main} alt="logo" />
      </Link>
      <div className="menu">
        <Link to="/list" className="links">
          <div>ART{"&"}RECIPE</div>
        </Link>
        <Link to="/MyPage" className="links">
          <div>MY PAGE</div>
        </Link>
        <Link to="/Auth" className="links">
          <div>LOG IN</div>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
