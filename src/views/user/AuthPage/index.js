import React from "react";
import SocialAuth from "../../../components/auth/Index";
import "./authpage.scss";
import logo from "./logo_column.png";

const Index = () => {
  return (
    <div className="auth-layout">
      <div className="auth-box">
        <img className="logo-img" src={logo} alt="ci" />
        <SocialAuth />
        <div className="hashtag-info">
          예술 작품 · material · 소통 · archive
        </div>
        <p>로그인 없이도 ART RECIPE의</p>
        <p>작품을 감상하실 수 있습니다.</p>
      </div>
    </div>
  );
};
export default Index;
