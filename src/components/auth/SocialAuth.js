import React, { useEffect } from "react";

import styled from "styled-components";

const SocialAuth = () => {
  const GoogleBtn = async () => {
    console.log("SocialAuth Page");
    try {
    } catch (err) {
      console.log("Social Auth ERR");
      console.error();
    }
  };
  return (
    <>
      <Bbutton onClick={GoogleBtn} bg="white">
        Google
      </Bbutton>
    </>
  );
};

let Bbutton = styled.button`
  background: ${(props) => props.bg};
  padding: 0px 15px 0px 15px;
  border: 0;
  color: ${(props) => (props.bg == "black" ? "white" : "gray")};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.176);
  border-radius: 20px;
  cursor: pointer;
`;

export default SocialAuth;