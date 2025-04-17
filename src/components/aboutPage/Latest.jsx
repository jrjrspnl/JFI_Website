import React from "react";
import wave7 from "../../assets/Waves/Wave7.svg";
import { LatestProducts } from "./index.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

const Latest = () => {
  return (
    <div className="w-full h-[600px] bg-[var(--primary-blue)] text-center relative px-5">
      <div data-aos="slide-up" data-aos-duration="600">
        <h1 className="py-15">Discover Our Newest Product</h1>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: "true",
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="w-full lg:max-w-7xl"
        >
          {LatestProducts.map((item) => (
            <SwiperSlide key={item.title}>
              <div className="flex justify-center items-center h-full">
                <div className="flex flex-col gap-6 group shadow-xl text-black rounded-xl  h-[200px] w-[250px] sm:h-[150px] sm:w-[200px] bg-gray-100 cursor-pointer p-5 ">
                  <div>
                    <img
                      src={item.product}
                      className="w-[170px] sm:w-[120px]  object-contain mx-auto"
                      alt=""
                    />
                    <p className="pt-1 font-medium text-medium sm:text-sm">
                      {item.title}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next "></div>
        </Swiper>
      </div>
      <img src={wave7} className="absolute bottom-0 left-0 w-full" alt="" />
    </div>
  );
};

export default Latest;
