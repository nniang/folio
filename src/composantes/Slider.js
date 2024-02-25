import React, { useRef } from "react";
import Slider from "react-slick";
import img_slider1 from "../images/mobile.png"
import img_slider2 from "../images/front.PNG"
import img_slider3 from "../images/Django.jpg"
import img_slider4 from "../images/Java.jpg"
import img_slider5 from "../images/react.PNG"
import img_slider6 from "../images/python.PNG"
import img_slider7 from "../images/javascript.PNG"
import { Button } from "react-bootstrap";

function AutoPlayMethods() {
  let sliderRef = useRef(null);
  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="slider-container">
      
      <Slider ref={slider => (sliderRef = slider)} {...settings} >
        <div>
          <h2><img src={img_slider1} alt="img" className="img-fluid"/></h2>
        </div>
        <div>
        <h2><img src={img_slider2} alt="img" className="img-fluid"/></h2>
        </div>
        <div>
        <h2><img src={img_slider3} alt="img" className="img-fluid"/></h2>
        </div>
        <div>
        <h2><img src={img_slider4} alt="img" className="img-fluid"/></h2>
        </div>
        <div>
        <h2><img src={img_slider5} alt="img" className="img-fluid"/></h2>
        </div>
        <div>
        <h2><img src={img_slider6} alt="img" className="img-fluid"/></h2>
        </div>
        <div>
        <h2><img src={img_slider7} alt="img" className="img-fluid"/></h2>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }} className="my-5">
        <Button variant="success" className="button m-2" onClick={play}>
          Play
        </Button>
        <Button variant="success" className="button" onClick={pause}>
          Pause
        </Button>
      </div>
    </div>
  );
}
export default AutoPlayMethods;
