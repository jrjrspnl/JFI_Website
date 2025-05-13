import React, { useState } from "react";
import bgSnack from "../../assets/backgroundImages/bgSnack.png";
import wave7 from "../../assets/Waves/Wave7.svg";
// Dark (gray) icons
import dAllProduct from "../../assets/pCategories/dAllProducts.svg";
import dSnacks from "../../assets/pCategories/dSnacks.svg";
import dBnW from "../../assets/pCategories/dBnW.svg";
import dConfectionery from "../../assets/pCategories/dConfectionery.svg";
import dImported from "../../assets/pCategories/dImported.svg";

// Active (colored) icons
import aAllProduct from "../../assets/pCategories/aAllProducts.svg";
import aSnacks from "../../assets/pCategories/aSnacks.svg";
import aBnW from "../../assets/pCategories/aBnW.svg";
import aConfectionery from "../../assets/pCategories/aConfectionery.svg";
import aImported from "../../assets/pCategories/aImported.svg";

import allProducts from "./AllProducts.js";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("AllProduct");

  const products = {
    AllProduct: allProducts.AllProduct,
    Snacks: allProducts.Snacks,
    BnW: allProducts.BnW,
    Confectionery: allProducts.Confectionery,
    Imported: allProducts.Imported,
  };

  const categoryTitles = {
    AllProduct: "All Products",
    Snacks: "Snacks",
    BnW: "Biscuits and Wafer",
    Confectionery: "Confectionery",
    Imported: "Imported",
  };

  return (
    <div
      className="w-full min-h-screen  relative  pb-50"
      style={{ backgroundImage: `url(${bgSnack})` }}
    >
      <div className="flex justify-center items-center pt-10">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          className="w-full max-w-[90vw] lg:max-w-3xl bg-[var(--primary-yellow)] rounded-2xl px-4"
        >
          <SwiperSlide>
            <img
              src={activeCategory === "AllProduct" ? aAllProduct : dAllProduct}
              className="w-[50px] sm:w-[70px] md:w-[90px] hover:scale-110 duration-300 py-5 cursor-pointer mx-auto"
              alt=""
              onClick={() => setActiveCategory("AllProduct")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={activeCategory === "Snacks" ? aSnacks : dSnacks}
              className="w-[50px] sm:w-[70px] md:w-[90px] hover:scale-110 duration-300 py-5 cursor-pointer mx-auto"
              alt=""
              onClick={() => setActiveCategory("Snacks")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={activeCategory === "BnW" ? aBnW : dBnW}
              className="w-[50px] sm:w-[70px] md:w-[90px] hover:scale-110 duration-300 py-5 cursor-pointer mx-auto"
              alt=""
              onClick={() => setActiveCategory("BnW")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={
                activeCategory === "Confectionery"
                  ? aConfectionery
                  : dConfectionery
              }
              className="w-[50px] sm:w-[70px] md:w-[90px] hover:scale-110 duration-300 py-5 cursor-pointer mx-auto"
              alt=""
              onClick={() => setActiveCategory("Confectionery")}
            />
          </SwiperSlide>

          <SwiperSlide>
            <img
              src={activeCategory === "Imported" ? aImported : dImported}
              className="w-[50px] sm:w-[70px] md:w-[90px] hover:scale-110 duration-300 py-5 cursor-pointer mx-auto"
              alt=""
              onClick={() => setActiveCategory("Imported")}
            />
          </SwiperSlide>

          <div className="swiper-button-prev !text-[var(--primary-blue)]"></div>
          <div className="swiper-button-next !text-[var(--primary-blue)]"></div>
        </Swiper>
      </div>

      <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl  text-center my-5 md:my-10">
        {categoryTitles[activeCategory]}
      </h1>
      <div className="w-full flex justify-center text-black px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10  py-10 ">
          {products[activeCategory].length > 0 ? (
            products[activeCategory].map((item) => (
              <div
                key={item.name}
                className="bg-white p-4 text-center shadow rounded-xl w-full   cursor-pointer
                duration-300 hover:scale-105 relative "
              >
                <img
                  src={item.pImage}
                  alt={item.name}
                  className="w-full h-20 sm:h-50 object-contain hover:scale-105 duration-300 "
                />
                <p className="mt-2  text-sm sm:text-base lg:text-lg font-semibold">
                  {item.name}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-white text-xl mt-5 ">
              No products to display yet.
            </p>
          )}
        </div>
      </div>
      <img src={wave7} className="absolute bottom-0 left-0 w-full " alt="" />
    </div>
  );
};

export default Product;
