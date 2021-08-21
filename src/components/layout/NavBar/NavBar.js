import React from "react";
import NavTitle from "./NavTitle"; //로고 위치 제대로 들
import NavSearch from "./NavSearch";
import NavMenu from "./NavMenu";
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="nav-layout">
      <NavTitle className="nav-title" />
      {/* <div> */}
      <NavSearch />
      <NavMenu />
      {/* </div> */}
    </div>
  );
};
export default NavBar;
