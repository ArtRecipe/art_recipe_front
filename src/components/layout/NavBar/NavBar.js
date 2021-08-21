import React from "react";
import NavTitle from "./NavTitle"; //로고 위치 제대로 들
import NavSearch from "./NavSearch";
import NavMenu from "./NavMenu";

const NavBar = () => {
  return (
    <div>
      <NavTitle />
      <NavSearch />
      <NavMenu />
    </div>
  );
};
export default NavBar;
