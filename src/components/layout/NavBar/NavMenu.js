import React from "react";
import { Link } from "react-router-dom";
import "./navmenu.scss";

const NavMenu = () => {
  return (
    <div className="menu">
      <Link to="/list">
        <div className="links">ART{"&"}RECIPE</div>
      </Link>
      <Link to="/MyPage">
        <div className="links">MY PAGE</div>
      </Link>
      <Link to="/Auth">
        <div className="links">LOG IN</div>
      </Link>
    </div>
  );
};
export default NavMenu;
