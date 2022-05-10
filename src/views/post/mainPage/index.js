import React from "react";
import MainCarousel from "../../../components/carousel/index.js";
import MainPlayer from "../../../components/videoPlayer/index.js";
import Footer from "../../../components/footer/Footer.js";
import "./main-page.scss";
const index = () => {
  console.log("랜딩페이지");
  return (
    <div className="main-page-format">
      {/* <MainPlayer /> */}
      <MainCarousel />

      <div>Landing</div>
      <Footer />
    </div>
  );
};
export default index;
