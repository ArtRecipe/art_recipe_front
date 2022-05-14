import React from "react";
import styled from "styled-components";

const SocialAuth = () => {
  const GoogleBtn = () => {};
  return (
    <>
      <Bbutton
        onClick={GoogleBtn}
        bg="white"
        style={{ width: "5rem", height: "3rem" }}
      >
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
`;

export default SocialAuth;
