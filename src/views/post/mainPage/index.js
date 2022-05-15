import React from "react";
import MainCarousel from "../../../components/carousel/index.js";
import MainPlayer from "../../../components/videoPlayer/index.js";
import Footer from "../../../components/footer/Footer.js";
import styles from "./mainPage.module.scss";
const index = () => {
  console.log("랜딩페이지");
  return (
    <div className={styles.mainPageFormat}>
      {/* <MainPlayer /> */}
      <MainCarousel />
      <div>Landing</div>
      <Footer />
    </div>
  );
};
export default index;
