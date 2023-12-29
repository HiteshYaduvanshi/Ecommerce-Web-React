import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import brandOne from "../assets/logo-godrej.png";
import brandTwo from "../assets/logo-oppo.png";
import brandThree from "../assets/logo-coca-cola.png";
import brandFour from "../assets/logo-paypal.png";
import brandFive from "../assets/logo-philips.png";

function Brands() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="max-w-[1080px] mx-auto py-12">
        <Slider {...settings}>
          <div className="text-center custom-filter">
            <img src={brandOne} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img src={brandTwo} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img src={brandThree} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img src={brandFour} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img src={brandFive} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img src={brandOne} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img src={brandTwo} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img src={brandThree} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img src={brandFour} alt="" />
          </div>
          <div className="text-center custom-filter">
            <img src={brandFive} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Brands;
