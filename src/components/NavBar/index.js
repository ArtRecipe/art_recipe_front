import React from "react";
import NavSearch from "./NavSearch";
import "./navbar.scss";
import { useNavigate } from "react-router-dom";
import logo_main from "./logo_main.png";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../reducer/User";
import { Dispatch } from "react";
import { getUser } from "../../reducer/User";
// TODO : [후순위] Navbar 디자인 수정 작업 필요 + 검색추가 및 화면 축소시 자동으로 햄버거 버튼화

const Index = () => {
  const navigate = useNavigate();
  const logindata = useSelector((state) => state.user.isLoggedin);
  const dispatch = useDispatch();

  const togo = (e) => {
    const id = e.target.id;
    if (id === "listpage") {
      navigate("/list");
    } else if (id === "mypage") {
      const res = dispatch(getUser());
      console.log("REFETCH USER in Navbar");
      navigate("/myPage");
    } else if (id === "create") {
      navigate("/create");
    } else if (id === "loginpage") {
      navigate("/auth");
    } else if (id === "mainpage") {
      navigate("/");
    } else if (id === "logout") {
      dispatch(userLogout);
      navigate("/");
      alert("로그아웃 성공");
      console.log("로그아웃 추가 작업 필요: 리듀서에서 서버 로그아웃 처리");
    }
  };
  return (
    <div className="nav-layout">
      <div className="menu">
        <img className="logo-img" id="mainpage" src={logo_main} alt="logo" onClick={togo} />

        <div className="white-link" id="listpage" onClick={togo}>
          ART{"&"}RECIPE
        </div>
        <div className="white-link" id="create" onClick={togo}>
          WRITE
        </div>
        <div className="white-link" id="mypage" onClick={togo}>
          MY PAGE
        </div>
        {logindata ? (
          <div className="white-link" id="logout" onClick={togo}>
            LOG OUT
          </div>
        ) : (
          <div className="white-link" id="loginpage" onClick={togo}>
            LOG IN
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
