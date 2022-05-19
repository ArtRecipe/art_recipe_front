import React from "react";
import { Carousel } from "react-carousel-minimal";
// import CarouselCustomize from './carousel.js';
import JPG1 from "../../assets/images/slide2.png";
import JPG2 from "../../assets/images/banner_img.png";
import JPG3 from "../../assets/images/slide3.png";

const Index = () => {
  const data = [
    {
      image: JPG2,
      caption: `<div>
					  <br/>
					  <br/><br/><br/>
					  <br/><br/><br/><br/><br/>
					  Art RECIPE :  
					  <br /><br /><h2>Art · Life · Color · Archive</h2>
					</div>`,
    },
    {
      image: JPG1,
      caption: `<div>
			<br/>
			<br/><br/><br/><br/>
			<h2>함께 느껴요, 기쁨을. </h2>
			Art Recipe
			<br/><br/>
			 <br /><br />
			<br /><br />SNS로 전시를 열고, 소통해보세요.
			<h2>Art RECIPE</h2>

		  </div>`,
    },
    {
      image: JPG3,
      caption: `<div>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/><br/><br/><br/><br/>
			<br/>
			<h4>작품에 스토리를 더하세요</h4>스타일에 소통을 더하세요.
			
			

		  </div>`,
    },
  ];

  const captionStyle = {
    fontSize: "1em",
    // fontWeight: "bold",
  };
  const slideNumberStyle = {
    // fontSize: "20px",
    // fontWeight: "bold",
  };
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            padding: "0",
          }}
        >
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="50rem"
            captionStyle={captionStyle}
            radius="0px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="top"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="0px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            showNavBtn={false}
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "35rem",
              margin: "0rem",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
