import React, { useEffect, useState } from "react";
import ci from "./ci.png";
import "./mypage.scss";
import { useDispatch, useSelector } from "react-redux";
import ProfileUpdateModal from "../../../components/ProfileUpdateModal";
import { MyPostListContainer } from "../../../containers/Post/MyPostListContainer";
import GalleryViewBtn from "../../../components/GalleryViewBtn";
import { getUser } from "../../../reducer/User";

const Index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [snsContents, setSnsContents] = useState("등록된 SNS가 없습니다.");
  const [descContents, setDescContents] = useState("등록된 작가소개가 없습니다.");
  dispatch(getUser);
  useEffect(() => {
    dispatch(getUser);
    if (state.user.profile) {
      if (state.user.profile.sns) {
        setSnsContents(state.user.profile.sns);
      }
    }
    if (state.user.profile) {
      if (state.user.profile.desc) {
        setDescContents(state.user.profile.desc);
      }
    }
  }, [state]);

  if (!state.isLoggedIn) {
    // isLoggedIn 값이 false 일때
    return (
      <div>
        <h2>ERROR</h2>
      </div>
    );
  }

  return (
    <div className="my-layout">
      <div className="my-center">
        <div className="row">
          <img src={ci} alt="default profile img" />
          <h3>{state.user.username}</h3>
          <div className="my-box">
            <div className="make-row">
              <div className="contents">SNS.</div>
              <div
                className="contents"
                onClick={() => {
                  window.open(snsContents, "_blank");
                }}
                style={{ textDecoration: "underline", cursor: "pointer" }}
              >
                {snsContents}
              </div>
            </div>
            <div className="make-row">
              <div className="contents">Intro.</div>
              <div className="contents">{descContents}</div>
            </div>
            <ProfileUpdateModal profile={state.user.profile} />
          </div>
        </div>
        <MyPostListContainer />
      </div>
      <GalleryViewBtn myGallery={true} />
    </div>
  );
};
export default Index;
