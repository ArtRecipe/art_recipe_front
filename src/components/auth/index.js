import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Glogo from "../../assets/images/googlelogo.png";
import { getUserProfile } from "../../axios/User";

// TODO : 버튼 디자인- 테두리 없애기

const Index = () => {
  const navigation = useNavigate();

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
        console.log(res);
        console.log("login success");
        // TODO : 여기에 로그인 성공 처리 (1)리덕스로 개인정보 저장 (2)로그인 버튼 로그아웃으로 바꾸기
      })
      .catch(function (err) {
        console.log(err);
        alert("로그인에 실패했습니다. ");
      });
  };

  return (
    <>
      <Bbutton onClick={GoogleBtn} bg="white">
        <img
          src={Glogo}
          style={{ width: "2rem", height: "2rem", margin: "0px" }}
          alt="logo"
        />{" "}
        Login
      </Bbutton>
    </>
  );
};

let Bbutton = styled.button`
  background: ${(props) => props.bg};
  text-align:center;
  line-height:center;
  // padding: 1px 25px 1px 25px;
  width: 30%;
  height:30%
  border: none;
  color: ${(props) => (props.bg == "black" ? "white" : "gray")};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.176);
  border-radius: 10px;
  cursor: pointer;
`;

export default Index;
