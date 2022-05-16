import React, { useEffect, useState } from "react";
// 나의 프로필 정보(sns 와 내 소개)를 수정하는 모달창 입니다.
import "./profile-modal.scss";
const Index = ({ isModalOpen, profile }) => {
  const preProfile = { profile };
  const [newProfileData, setNewProfileData] = useState({
    id: "1",
    sns: "등록된 SNS가 없습니다.",
    desc: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  console.log(profile);

  useEffect(() => {
    setModalOpen(isModalOpen);
  }, []);

  const inputChange = (e) => {
    if (e.target.id == "sns") {
      console.log("sns");
    } else {
      console.log("intro");
    }
  };

  const modalBtn = () => {
    if (modalOpen) {
      setModalOpen(false);
      if (profile) {
        submitUpdate();
      } else {
        submitUpdate();
      }
    } else {
      setModalOpen(true);
    }
  };

  const submitCreate = () => {
    console.log(" profile create");
  };
  const submitUpdate = () => {
    console.log(" profile update (not create)");
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
          {profile.dec ? (
            <input
              className="profile-input"
              type="text"
              onChange={inputChange}
              id="intro"
              placeholder={profile.dec}
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
