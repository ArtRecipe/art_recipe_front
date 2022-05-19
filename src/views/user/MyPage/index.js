import React, { useEffect, useState } from "react";
import ci from "./smallestci.png";
import button from "./sbutton.png";
import edit from "./pen-square-solid.svg";
import palette from "./palette.svg";
import "./mypage.scss";
import defaultimg from "./example.png";
import { useSelector } from "react-redux";
import ProfileUpdateModal from "../../../components/profileUpdateModal/index";
import { postUserProfile } from "../../../axios/User";
import PostCardList from "../../../components/MypostCardList/Index";
import GalleryViewBtn from "../../../components/galleryViewBtn/Index";

const Index = () => {
  const state = useSelector((state) => state.user);
  const [myGallery, setMyGallery] = useState(true);
  if (!state.isLoggedin) {
    // isLoggedin 값이 false 일때
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
              {state.user.profile ? (
                <>
                  {state.user.profile.sns ? (
                    <a
                      className="contents"
                      href={state.user.profile.sns}
                      style={{ weight: "600" }}
                    >
                      {state.user.username}님의 sns
                    </a>
                  ) : (
                    <div className="contents">등록된 SNS가 없습니다.</div>
                  )}
                </>
              ) : (
                <div className="contents">등록된 SNS가 없습니다.</div>
              )}
            </div>
            <div className="make-row">
              <div className="contents">Intro.</div>
              {state.user.profile ? (
                <>
                  {state.user.profile.desc ? (
                    <div className="contents">{state.user.profile.desc}</div>
                  ) : (
                    <div className="contents">작가님을 소개해보세요.</div>
                  )}
                </>
              ) : (
                <div className="contents">작가님을 소개해보세요.</div>
              )}
            </div>

            <ProfileUpdateModal profile={state.user.profile} />
          </div>
        </div>
        <div className="row">
          <div className="tab-button" onClick={() => setMyGallery(true)}>
            내 게시물
          </div>
          <div className="tab-button" onClick={() => setMyGallery(false)}>
            저장한 게시물
          </div>
        </div>
        <hr />
        <div className="image-box">
          <PostCardList myGallery={myGallery} />
        </div>
      </div>
      <GalleryViewBtn />
    </div>
  );
};
export default Index;
