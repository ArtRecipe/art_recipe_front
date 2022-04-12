import React from "react";
import MainCarousel from "../../../components/carousel/MainCarousel.js";
import "./main-page.scss";
const index = () => {
  console.log("랜딩페이지");
  return (
    <div className="main-page-format">
      <MainCarousel />

      <div>Landing</div>
    </div>
  );
};
export default index;
