import React from "react";
import ci from "./smallestci.png";
import button from "./sbutton.png";
import edit from "./pen-square-solid.svg";
import "./mypage.scss";
import axios from "axios";
import usePromise from "react-use-promise";

const MyPage = () => {
  const [loading, response, error] = usePromise(() => {
    return axios.get(`http://127.0.0.1:8000/api`);
  });
  //if(loading){return<div></div>};
  if (!response) {
    return null;
  }
  if (error) {
    console.log("Error");
    return <div></div>;
  }
  const { myinfo } = response.data;

  return (
    <div className="my-layout">
      <div className="my-center">
        <div className="row">
          <img src={ci} alt="default profile img" />
          <h3>USER_NAME</h3>
          <div className="my-box">
            <div className="make-row">
              <div className="contents">SNS</div>
              <div className="contents">@insta-id</div>
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
        <div className="row"></div>
      </div>
    </div>
  );
};
export default MyPage;
