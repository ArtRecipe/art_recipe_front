import React from "react";
import { useNavigate } from "react-router-dom";
import Glogo from "../../assets/images/googlelogo.png";
import { getUserProfile } from "../../axios/User";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../../reducer/User";
import "./google-button.scss";

// TODO : [후순위] 버튼 디자인 다시 작업 필요

const Index = () => {
  const navigation = useNavigate();
  const logindata = useSelector((state) => state.user.isLoggedin);
  const dispatch = useDispatch();

  const GoogleBtn = async () => {
    console.log("SocialAuth Page");
    try {
      window.open("/api/oauth/google/login/", "_blank");
    } catch (err) {
      console.log("ERROR");
      console.error();
      alert("로그인에 실패했습니다. ");
    }
    navigation("/");
    const res = getUserProfile()
      .then(function (res) {
        console.log("login 상태로 전환중");
        dispatch(getUser());
      })
      .catch(function (err) {
        console.log(err);
        alert("로그인에 실패했습니다. ");
      });
  };

  return (
    <>
      <div className="g-button" onClick={GoogleBtn}>
        <img
          src={Glogo}
          style={{ width: "2rem", height: "2rem", margin: "0px" }}
          alt="logo"
        />{" "}
        Login
      </div>
    </>
  );
};

export default Index;
