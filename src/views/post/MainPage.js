import React, { Component } from "react";
import NavBar from "../../components/layout/NavBar/NavBar";
import MainCarousel from "../../";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <MainCarousel />
      <Footer />
    </div>
  );
};
export default MainPage;
