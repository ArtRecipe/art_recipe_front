import React, { useEffect, useState } from "react";
import "./gallery-page.scss";
import { useParams } from "react-router-dom";
import { getMyPost, getMyBookmarkPost } from "../../../axios/Post";
import { useSelector } from "react-redux";
import GalleryViewList from "../../../components/galleryViewList/index";

const Index = () => {
  const userId = useSelector((state) => {
    return state.user.user.id;
  });
  console.log(userId);
  const { galleryId } = useParams(); // 1은 내가 업데이트한 이미지 갤러리 // 2는 내가 북마크한 이미지 갤러리

  const colorIndex = [
    "linear-gradient(#aca4d3, #ffced9)",
    "white",
    "black",
    "lightGray",
  ];
  const [currentStatus, setCurrentStatus] = useState("Loading");
  const [data, setData] = useState(null);
  const [idx, setIdx] = useState(0);
  console.log("flag");
  console.log(galleryId);
  const changeBg = (e) => {
    const id = e.target.id;
    if (id === "pk") {
      setIdx(0);
    } else if (id === "wh") {
      setIdx(1);
    } else if (id === "bl") {
      setIdx(2);
    } else if (id === "gy") {
      setIdx(3);
    }
  };

  useEffect(() => {
    setCurrentStatus("Loading");
    if (galleryId == 1) {
      const response = getMyPost(userId)
        .then(function (res) {
          if (res.data.length === 0) {
            setCurrentStatus("업데이트한 작품이 없습니다.");
          } else {
            setData(res.data);
            console.log(res.data);
            setCurrentStatus(null);
          }
        })
        .catch((err) => {
          console.error();
          setCurrentStatus("ERROR");
        });
    } else if (galleryId == 2) {
      const response = getMyBookmarkPost(userId)
        .then((res) => {
          console.log("Mybookmark");
          if (res.data.length === 0) {
            setCurrentStatus("북마크한 작품이 없습니다.");
          } else {
            setData(res.data);
            setCurrentStatus(null);
          }
        })
        .catch((err) => {
          console.error();
          setCurrentStatus("ERROR");
        });
    }
  }, []);

  return (
    <div className="gallery-container" style={{ background: colorIndex[idx] }}>
      <div className="round-button" onClick={changeBg} id="pk">
        pk
      </div>
      <div className="round-button" onClick={changeBg} id="wh">
        wh
      </div>
      <div className="round-button" onClick={changeBg} name={"bl"} id="bl">
        bl
      </div>
      <div className="round-button" onClick={changeBg} name={"gy"} id="gy">
        gy
      </div>
      <GalleryViewList galleryId={galleryId} data={data} />
    </div>
  );
};

export default Index;
