import React from "react";
import "./footer.scss";

const Footer = () => {
  if (window.location.pathname === "/list") return null;
  return (
    <div className="foot-layout" style={{ fontSize: "1rem" }}>
      <div>ART Recipe Developers 설지원 · 손도희 · 이진희</div>
      <br />
      <div>Copyright &copy; 2021 ArtRecipe All rights reserved . </div>
    </div>
  );
};

export default Footer;
