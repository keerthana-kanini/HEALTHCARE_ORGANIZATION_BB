import React, { Component } from "react";
import Slider from "react-slick";       
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.jpg";
import image3 from "../Images/image3.jpg";

export class Home extends Component {
    render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 1000,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true, // Enable autoplay
          autoplaySpeed: 2000, // Set autoplay speed in milliseconds
        };
  const imgStyle = {
    width: "100%",
    height: "auto", 
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Slide 1" style={imgStyle} />
        </div>
        <div>
          <img src={image2} alt="Slide 2" style={imgStyle} />
        </div>
        <div>
          <img src={image3} alt="Slide 3" style={imgStyle} />
        </div>
      </Slider>
      
    </div>
    
    );
  }
}
