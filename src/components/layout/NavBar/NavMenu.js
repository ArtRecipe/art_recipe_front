import React from "react";
import { Link } from "react-router-dom";
import "./navmenu.scss";

const NavMenu = () => {
  return (
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
  );
};
export default NavMenu;
