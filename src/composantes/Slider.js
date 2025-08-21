import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img_slider1 from "../images/mobile.png";
import img_slider2 from "../images/front.PNG";
import img_slider3 from "../images/Django.jpg";
import img_slider4 from "../images/Java.jpg";
import img_slider5 from "../images/react.PNG";
import img_slider6 from "../images/python.PNG";
import img_slider7 from "../images/javascript.PNG";

function ModernSlider() {
  return (
    <div className="slider-container px-3 py-5">
      <Swiper
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          // mobile
          0: {
            slidesPerView: 1,
          },
          // tablettes
          640: {
            slidesPerView: 2,
          },
          // pc
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <img src={img_slider1} alt="mobile" className="img-fluid rounded shadow" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_slider2} alt="frontend" className="img-fluid rounded shadow" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_slider3} alt="django" className="img-fluid rounded shadow" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_slider4} alt="java" className="img-fluid rounded shadow" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_slider5} alt="react" className="img-fluid rounded shadow" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_slider6} alt="python" className="img-fluid rounded shadow" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_slider7} alt="javascript" className="img-fluid rounded shadow" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ModernSlider;
