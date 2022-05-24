// 나의 프로필 정보(sns 와 내 소개)를 수정하는 모달창 입니다.
import React, { useState } from "react";
import "./profile-modal.scss";
import { postUserProfile, putUserProfile } from "../../axios/User";
import { getUser } from "../../reducer/User";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  const profile = useSelector((state) => state.user.user.profile);
  const [newProfileData, setNewProfileData] = useState({
    sns: profile.sns,
    desc: profile.desc,
  });
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const inputChange = (e) => {
    const value = e.target.value;
    if (e.target.id == "sns") {
      setNewProfileData({ ...newProfileData, sns: value });
    } else {
      setNewProfileData({ ...newProfileData, desc: value });
    }
  };

  const modalBtn = () => {
    setModalOpen(!modalOpen);
  };

  const submit = () => {
    if (profile === undefined) {
      submitCreate();
    } else if (
      newProfileData.sns === profile.sns &&
      newProfileData.desc === profile.desc
    ) {
      alert("수정된 내용이 없습니다.");
    } else {
      submitUpdate();
    }
    setModalOpen(!modalOpen);
  };

  const submitCreate = async () => {
    try {
      const res = await postUserProfile(newProfileData);
      dispatch(getUser);
      window.location.reload();
    } catch (err) {
      console.error();
      console.log(err);
      alert("프로필 수정 실패");
    }
    setModalOpen(false);
  };
  //TODO : submitUpdate
  const submitUpdate = async () => {
    try {
      const res = await putUserProfile(newProfileData, profile.id);
      console.log(res);
      dispatch(getUser);
      window.location.reload();
    } catch (err) {
      console.error();
      console.log(err);
      alert("프로필 수정 실패");
    }
    setModalOpen(!modalOpen);
  };

  if (modalOpen) {
    return (
      <>
        <div className="profile-modal-container ">
          <p>SNS.</p>
          {profile ? (
            <input
              className="profile-input"
              type="url"
              onChange={inputChange}
              id="sns"
              placeholder={profile.sns}
            />
          ) : (
            <input
              className="profile-input"
              type="url"
              onChange={inputChange}
              id="sns"
              placeholder="sns url을 입력해주세요."
            />
          )}
          <p>Intro.</p>
          {profile ? (
            <input
              className="profile-input"
              type="text"
              onChange={inputChange}
              id="desc"
              placeholder={profile.desc}
            />
          ) : (
            <input
              className="profile-input"
              type="text"
              onChange={inputChange}
              id="intro"
              placeholder="수정을 원하시면 정보를 입력해주세요."
            />
          )}
          <br />
          <button className="modal-button" onClick={submit}>
            저장
          </button>{" "}
        </div>
      </>
    );
  } else {
    return (
      <button className="modal-button" onClick={modalBtn}>
        수정
      </button>
    );
  }
};
export default Index;
