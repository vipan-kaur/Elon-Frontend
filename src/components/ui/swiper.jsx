import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import banner1 from "../../assets/bag.jpeg";
import banner2 from "../../assets/dress.jpeg";
import banner3 from "../../assets/kidshomme.jpeg";
import banner4 from "../../assets/shirt.jpeg";
import banner5 from "../../assets/baghome.jpeg";
import banner6 from "../../assets/kidhome.jpeg";
import banner7 from "../../assets/shoe.png";

import { Navigation, Autoplay } from "swiper/modules";

const banner = [
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
];

const Slider = () => {
  return (
    <Swiper
      slidesPerView={5}
      spaceBetween={20}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
    >
      {banner.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white shadow-lg p-4 rounded">

            <img
              src={item}
              className="w-full h-48 object-cover rounded"
              alt="banner"
            />

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;