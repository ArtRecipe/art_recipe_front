import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../../reducer/User";
import styles from "./navbar.module.scss";
import NavSearch from "./NavSearch";

import logo from "../../assets/images/logo/logo_4.png";
// TODO : 화면 축소시 자동으로 햄버거 버튼화, 리듀서에서 서버 로그아웃 처리

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const toGo = (e) => {
    const id = e.target.id;
    if (id === "main") {
      navigate("/");
    } else if (id === "list") {
      navigate("/list");
    } else if (id === "myPage") {
      navigate("/myPage");
    } else if (id === "logout") {
      dispatch(userLogout);
      navigate("/");
    } else if (id === "login") {
      navigate("/auth");
    }
  };

  return (
    <div className={styles.navbarWrap}>
      <img id="main" src={logo} alt="logo" onClick={toGo} />

      <NavSearch />

      <div className={styles.linkWrap}>
        <div className={styles.link} id="list" onClick={toGo}>
          ART{"&"}RECIPE
        </div>
        <div className={styles.link} id="myPage" onClick={toGo}>
          MY PAGE
        </div>
        {isLoggedIn ? (
          <div className={styles.link} id="logout" onClick={toGo}>
            LOG OUT
          </div>
        ) : (
          <div className={styles.link} id="login" onClick={toGo}>
            LOG IN
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
