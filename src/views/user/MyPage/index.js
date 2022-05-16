import React, { useEffect, useState } from "react";
import ci from "./smallestci.png";
import button from "./sbutton.png";
import edit from "./pen-square-solid.svg";
import palette from "./palette.svg";
import "./mypage.scss";
import defaultimg from "./example.png";
import { useSelector } from "react-redux";

const Index = () => {
  const myData = useSelector((state) => state.user);

  console.log(myData);

  return (
    <div className="my-layout">
      <div className="my-center">
        <div className="row">
          <img src={ci} alt="default profile img" />
          <h3>ArtChef</h3>
          <div className="my-box">
            <div className="make-row">
              <div className="contents">SNS</div>
              <div className="contents">@seolday_</div>
            </div>
            <div className="make-row">
              <div className="contents">소개</div>
              <div className="contents">
                안녕하세요 ! 아트레시피 개발자입니다 .
              </div>
            </div>
            {/* <div className="make-row">
              <img src={edit} />
            </div> */}
          </div>
        </div>
        <div className="row">
          <img className="icon" src={palette} alt="icon" />
          <h3>내 게시물 3 개</h3>
        </div>
        <hr />
        <div className="image-box">
          <img src={defaultimg} alt="sample img" />
          <img src={defaultimg} alt="sample img" />
          <img src={defaultimg} alt="sample img" />
        </div>
      </div>
    </div>
  );
};
export default Index;
