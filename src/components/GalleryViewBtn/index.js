import React from "react";
import "./gallery-button.scss";
import { useNavigate } from "react-router-dom";

const Index = ({ myGallery }) => {
  const navigate = useNavigate();
  let params = 1;
  if (myGallery === false) {
    params = 2;
  }
  return (
    <div
      className="gallery-button"
      onClick={() => {
        navigate("/gallery/" + params);
      }}
    >
      갤러리 뷰
    </div>
  );
};
export default Index;
