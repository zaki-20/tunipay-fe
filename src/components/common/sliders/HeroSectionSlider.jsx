import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import amazon from "../../../assets/amazon.png";
import ebay from "../../../assets/ebay.png";
import shein from "../../../assets/shein.png";

const HeroSectionSlider = () => {
  return (
    <div className="mt-20 mx-10">
      <Swiper
        effect={"coverflow"}
        watchSlidesProgress={true}
        className="mySwiper max-w-[1300px]"
        centeredSlides={true}
        spaceBetween={40}
        loop={true}
        initialSlide={2}
        breakpoints={{
          // when window width is below medium (md) breakpoint
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide className="bg-[#282627] rounded-md w-[900px]">
          <div className=" sm:h-[140px] md:h-[170px] flex items-center justify-center p-5">
            <img src={amazon} alt="" className=" w-[70%]" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#040404] rounded-md w-[900px]">
          <div className=" sm:h-[140px] md:h-[170px] flex items-center justify-center p-5">
            <img src={shein} alt="" className=" w-[70%]" />
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-[#0b1b6c] rounded-md ">
          <div className=" sm:h-[140px] md:h-[170px] flex items-center justify-center py-5 px-7">
            <img src={ebay} alt="" className=" w-[70%]" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSectionSlider;
