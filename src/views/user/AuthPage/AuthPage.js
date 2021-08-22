import React from "react";
import "./authpage.scss";
import logo from "./logo_column.png";
import GoogleButton from "../../../components/auth/GoogleButton";

const AuthPage = () => {
  return (
    <div className="auth-layout">
      <div className="auth-box">
        <img src={logo} alt="ci" />
        <GoogleButton className="button" />
        <div className="hashtag-info">
          예술 작품 · material · 소통 · archive
        </div>
        <p>로그인 없이도 ART RECIPE의</p>
        <p>작품을 감상하실 수 있습니다.</p>
      </div>
    </div>
  );
};
export default AuthPage;