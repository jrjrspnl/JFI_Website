import React from "react";
import wave2 from "../../assets/Waves/Wave2.svg";
import wave3 from "../../assets/Waves/Wave3.svg";

import { CategoryProducts } from "./Categories.js";

import { Link } from "react-router-dom";

import styles from "./Slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="w-full h-330 lg:h-350  bg-[var(--primary-yellow)] text-black relative">
      <img
        src={wave2}
        alt="Yellow Wave"
        className="w-full h-[150px] lg:h-auto object-cover bg-[var(--primary-yellow)]"
      />

      <div
        className="w-full flex flex-col justify-center items-center"
        data-aos="slide-up"
        data-aos-duration="600"
      >
        <h1 className="max-w-5xl text-center mt-10 text-[var(--primary-dark)] mx-5 mb-20">
          Bringing You the Best in Filipino Snack Delights!
        </h1>

        <Swiper
          className="w-full mx-100"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          breakpoints={{
            570: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 4,
            },
          }}
          initialSlide={2}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
        >
          {CategoryProducts.map((items) => (
            <SwiperSlide key={items.pName} className={styles.swiper}>
              {({ isActive }) => (
                <div className="card bg-white mx-5 sm:mx-0 shadow-xl rounded-2xl relative ">
                  <figure className="w-full h-60 bg-white flex items-center justify-center">
                    <div className="w-5/6 h-3/4 bg-blue-400 rounded-lg shadow-md flex items-center justify-center px-2">
                      <img
                        src={items.pImg}
                        alt="BiscuitsNWafer"
                        className={`max-w-full max-h-full object-contain rounded-md transition-transform duration-300 ${
                          isActive ? "scale-150 opacity-100" : "opacity-70"
                        }`}
                      />
                    </div>
                  </figure>
                  <div className="card-body flex flex-col items-center">
                    <h3 className="card-title text-2xl">{items.pName}</h3>
                    <p className="card-text text-balance text-center mb-5">
                      {items.text}
                    </p>
                    <Link to="/product">
                      <div className="card-actions justify-center">
                        <button className="font-medium px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer duration-300 hover:scale-105">
                          View More
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <img
        src={wave3}
        alt="Yellow Wave"
        className="absolute bottom-0 left-0 w-full h-[150px] lg:h-auto object-cover"
      />
    </div>
  );
};

export default Slider;
