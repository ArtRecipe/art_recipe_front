import React from "react";
import { Link } from "react-router-dom";
import logo_main from "./logo_main.png"; //로고 위치 제대로 들

const NavTitle = () => {
  return (
    <div>
      <Link to="/">
        <img src={logo_main} alt="logo" />
      </Link>
    </div>
  );
};
export default NavTitle;
