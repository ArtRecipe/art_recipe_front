// 나의 프로필 정보(sns 와 내 소개)를 수정하는 모달창 입니다.
import React, { useEffect, useState } from "react";
import "./profile-modal.scss";
import { postUserProfile, putUserProfile } from "../../axios/User";

const Index = ({ isModalOpen, profile }) => {
  const preProfile = { profile };
  const [newProfileData, setNewProfileData] = useState({
    id: "1",
    sns: "",
    desc: "",
  });
  const [modalOpen, setModalOpen] = useState(isModalOpen);
  // console.log(profile); //작업용 콘솔 log

  const inputChange = (e) => {
    const value = e.target.value;
    if (e.target.id == "sns") {
      setNewProfileData({ ...newProfileData, sns: value });
      console.log(newProfileData.sns);
    } else {
      setNewProfileData({ ...newProfileData, desc: value });
      console.log(newProfileData.desc);
    }
  };

  const modalBtn = () => {
    if (modalOpen) {
      setModalOpen(false);
      if (profile) {
        submitUpdate();
      } else {
        submitCreate();
      }
    } else {
      setModalOpen(true);
    }
  };

  //TODO : submitCreate
  const submitCreate = async () => {
    await postUserProfile(newProfileData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //TODO : submitUpdate
  const submitUpdate = async () => {
    console.log(" profile update (not create)");
    try {
      const res = await putUserProfile(newProfileData);
      console.log("profile update - response" + res);
    } catch (err) {
      console.error();
      console.log(err);
      alert("프로필 수정 실패");
    }
    setModalOpen(false);
  };

  if (modalOpen) {
    return (
      <>
        <div className="profile-modal-container ">
          <h6>SNS.</h6>
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

          <h6>Intro.</h6>
          {profile ? (
            <input
              className="profile-input"
              type="text"
              onChange={inputChange}
              id="intro"
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
          <button onClick={modalBtn}>저장</button>
        </div>
      </>
    );
  } else {
    return <button onClick={modalBtn}>수정</button>;
  }
};
export default Index;
