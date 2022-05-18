// 나의 프로필 정보(sns 와 내 소개)를 수정하는 모달창 입니다.
import React, { useDebugValue, useEffect, useState } from "react";
import "./profile-modal.scss";
import { postUserProfile, putUserProfile } from "../../axios/User";
import { getUser } from "../../reducer/User";
import { useDispatch, useSelector } from "react-redux";

const Index = ({ isModalOpen }) => {
  const [newProfileData, setNewProfileData] = useState({
    sns: "hello",
    desc: "hello",
  });
  const [modalOpen, setModalOpen] = useState(isModalOpen);
  const profile = useSelector((state) => state.user.user.profile);
  let putData = { id: 0, sns: "", desc: "" };

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
    } else if (newProfileData.sns || newProfileData.desc) {
      putData.sns = newProfileData.id;
      putData.sns = newProfileData.sns;
      putData.desc = newProfileData.desc;
      submitUpdate();
    } else {
      alert("업데이트된 내용이 없습니다.");
    }
    setModalOpen(!modalOpen);
  };

  //TODO : submitCreate
  const submitCreate = async () => {
    console.log(" profile create");
    console.log(JSON.stringify(newProfileData));
    try {
      const res = await postUserProfile(JSON.stringify(newProfileData));
      console.log("profile update - response" + res.data);
    } catch (err) {
      console.error();
      console.log(err);
      alert("프로필 수정 실패");
    }
    setModalOpen(false);
  };
  //TODO : submitUpdate
  const submitUpdate = async () => {
    console.log(" profile update (not create)");
    console.log(newProfileData);
    try {
      const res = await putUserProfile(JSON.stringify(newProfileData)); //JSON.stringify(putData)
      console.log("profile update - response" + res);
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
