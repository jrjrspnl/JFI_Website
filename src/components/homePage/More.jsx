import React from "react";
import wave7 from "../../assets/Waves/Wave7.svg";
import image1 from "../../assets/NU/image1.jpg";
import image2 from "../../assets/NU/image2.jpg";
import image3 from "../../assets/NU/image3.jpg";
import image4 from "../../assets/NU/image4.jpg";
import image5 from "../../assets/NU/image5.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards, Pagination, Autoplay } from "swiper/modules";

import "swiper/css/pagination";

const More = () => {
  return (
    <div className="w-full min-h-screen bg-[var(--primary-blue)] text-white px-4 relative pb-40 md:pb-70">
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between pt-10 md:pt-20 gap-10"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        {/* Text Section */}
        <div className=" md:w-1/2  justify-center items-center mx-3">
          <h1 className=" text-yellow-200 text-4xl sm:text-6xl lg:text-7xl text-center lg:text-left">
            HEAR MORE FROM US
          </h1>
          <p className="lg:text-left py-5 text-medium md:text-lg font-semibold text-center">
            May 19, 2022
          </p>
          <p className="lg:max-w-lg font-medium mb-10 ">
            From Campus to Career: NU Baliwag Students Get a Taste of Real-World
            Success with Jocker’s Foods!
            <br />
            <br />
            This partnership marks a significant step in providing students with
            world-class industry exposure and future-ready opportunities.
          </p>
          <button
            onClick={() => {
              window.open("https://www.facebook.com/jockersfoods");
            }}
            className="rounded-full cursor-pointer w-[250px] border border-[var(--primary-yellow)] bg-[var(--primary-yellow)] text-black text-sm font-semibold duration-200 hover:scale-105 py-3 mr-auto hidden md:block"
          >
            CHECK OUR FACEBOOK PAGE
          </button>
        </div>

        {/* Swiper Section */}
        <div className="flex justify-center items-center">
          <Swiper
            effect={"cards"}
            initialSlide={2}
            grabCursor={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[EffectCards, Pagination, Autoplay]}
            className="mySwiper w-[250px] h-[300px] sm:w-[280px] sm:h-[380px] lg:w-[300px] lg:h-[400px]"
          >
            <SwiperSlide>
              <img
                src={image1}
                className="w-full h-full object-cover rounded-xl "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image2}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image3}
                className="w-full h-full object-cover rounded-xl "
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image4}
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={image5}
                className="w-full h-full object-cover rounded-xl "
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <button
          onClick={() => {
            window.open("https://www.facebook.com/jockersfoods");
          }}
          className="rounded-full w-[250px] border border-[var(--primary-yellow)] bg-[var(--primary-yellow)] text-black text-sm font-semibold py-3 mx-auto md:hidden"
        >
          CHECK OUR FACEBOOK PAGE
        </button>
      </div>

      <img src={wave7} className="absolute bottom-0 left-0 w-full" alt="" />
    </div>
  );
};

export default More;
