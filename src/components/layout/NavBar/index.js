import React from "react";
import NavSearch from "./NavSearch";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import logo_main from "./logo_main.png"; //로고 위치 제대로 들

const Index = () => {
  const navigate = useNavigate();

  const togo = (e) => {
    const id = e.target.id;
    if (id === "listpage") {
      navigate("/list");
    } else if (id === "mypage") {
      navigate("/myPage");
    } else if (id === "loginpage") {
      navigate("/auth");
    } else if (id === "mainpage") {
      navigate("/");
    }
  };
  return (
    <div className="nav-layout">
      <div className="menu">
        <img
          className="logo-img"
          id="mainpage"
          src={logo_main}
          alt="logo"
          onClick={togo}
        />
      </div>
      <div className="menu">
        <div className="links" id="listpage" onClick={togo}>
          ART{"&"}RECIPE
        </div>
        <div className="links" id="mypage" onClick={togo}>
          MY PAGE
        </div>
        <div className="links" id="loginpage" onClick={togo}>
          LOG IN
        </div>
      </div>
    </div>
  );
};

export default Index;
