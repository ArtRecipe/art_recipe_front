import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Glogo from "../../assets/images/googlelogo.png";

const Index = () => {
  const navigation = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const GoogleBtn = async () => {
    console.log("SocialAuth Page");
    try {
      window.open("/api/oauth/google/login/", "_blank");
      setIsLogin(true);
    } catch (err) {
      console.log("Social Auth ERR");
      console.error();
    }
    navigation("/");
    axios
      .get("/api/accounts/user/profile/")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setIsLogin(true);
  };

  return (
    <>
      <Bbutton onClick={GoogleBtn} bg="white">
        <img
          src={Glogo}
          style={{ width: "2rem", height: "2rem", margin: "0px" }}
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
