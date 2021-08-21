import React, { Component } from "react";
import Slider from "react-slick";
import "./MainCarousel.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideImg1 from "./s5.png";
import SlideImg2 from "./slide2.jpg";
import SlideImg3 from "./s3.png";
import SlideImg4 from "./s4.png";

// import SlideImg3 from "./painter.jpg";
// import SlideImg4 from "./brush.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 20,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      // appendDots: (dots) => (
      //   <div style={{}}>
      //     <ul
      //       style={{
      //         margin: "0px",
      //         zindex: "100",
      //         marginTop: "0",
      //       }}
      //     >
      //       {" "}
      //       {dots}{" "}
      //     </ul>
      //   </div>
      // ),
    };
    return (
      <div className="carousel-layout">
        <Slider {...settings}>
          <div>
            <img src={SlideImg1} alt="slide img" />
            {/* <h3>1</h3> */}
          </div>
          <div>
            <img src={SlideImg3} alt="slide img" />
            {/* <h3>2</h3> */}
          </div>
          <div>
            <img src={SlideImg4} alt="slide img" />
            {/* <h3>3</h3> */}
          </div>
          <div>
            <img src={SlideImg2} alt="slide img" />
            {/* <h3>4</h3> */}
          </div>
        </Slider>
      </div>
    );
  }
}
