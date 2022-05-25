import React, { useEffect, useState } from "react";
import ci from "./smallestci.png";
import "./mypage.scss";
import { useDispatch, useSelector } from "react-redux";
import ProfileUpdateModal from "../../../components/ProfileUpdateModal";
import PostCardList from "../../../components/MypostCardList";
import GalleryViewBtn from "../../../components/GalleryViewBtn";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../../reducer/User";

const Index = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.user);
  const [myGallery, setMyGallery] = useState(true);
  const [snsContents, setSnsContents] = useState("등록된 SNS가 없습니다.");
  const [descContents, setDescContents] =
    useState("등록된 작가소개가 없습니다.");
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
              {state.user.profile.sns ? (
                <div
                  className="contents"
                  onClick={() => {
                    window.open(snsContents, "_blank");
                  }}
                  style={{ textDecoration: "underline", cursor: "pointer" }}
                >
                  {snsContents}
                </div>
              ) : (
                <div className="contents">{snsContents}</div>
              )}
            </div>
            <div className="make-row">
              <div className="contents">Intro.</div>
              <div className="contents">{descContents}</div>
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
      <GalleryViewBtn myGallery={myGallery} />
    </div>
  );
};
export default Index;
