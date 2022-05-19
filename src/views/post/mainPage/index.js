import React from "react";
import MainCarousel from "../../../components/Carousel";
import Footer from "../../../components/Footer";
import styles from "./mainPage.module.scss";
{
  /* Todo : Footer */
}
const Index = () => {
  console.log("랜딩페이지");
  return (
    <div className={styles.mainPageFormat}>
      <MainCarousel />
      <Footer />
    </div>
  );
};
export default Index;
