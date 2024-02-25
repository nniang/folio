import React from "react";
import Slider from "react-slick";
import img_slider1 from '../images/Java.jpg'
import img_slider2 from '../images/Django.jpg'
import MobileImage from '../images/mobile.png '
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
      <img src={img_slider1} alt="ami"  className='img'/>
      </div>
      <div>
      <img src={img_slider2} alt="ami"  className='img'/>
      </div>
      <div>
      <img src={img_slider2} alt="ami"  className='img'/>
      </div>
      <div>
      <img src={MobileImage} alt="ami"  className='img'/>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}