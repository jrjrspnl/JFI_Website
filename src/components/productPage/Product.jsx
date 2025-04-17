import React, { useState } from "react";
import bgSnack from "../../assets/backgroundImages/bgSnack.png";
import wave7 from "../../assets/Waves/wave7.svg";
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
      className="w-full min-h-screen  relative bg-[var(--primary-brown)] pb-50"
      style={{ backgroundImage: `url(${bgSnack})` }}
    >
      <div className="flex justify-center items-center pt-10">
        <div className="flex flex-row bg-[var(--primary-yellow)] p-2 sm:p-5 rounded-xl gap-x-5 sm:gap-x-10 md:gap-x-10 cursor-pointer sm:px-10 lg:px-15">
          <div>
            <img
              src={activeCategory === "AllProduct" ? aAllProduct : dAllProduct}
              className="w-[50px] sm:w-[70px] md:w-[90px] hover:scale-120 duration-300"
              alt=""
              onClick={() => setActiveCategory("AllProduct")}
            />
          </div>

          <img
            src={activeCategory === "Snacks" ? aSnacks : dSnacks}
            className="w-[50px] sm:w-[70px] lg:w-[90px] hover:scale-120 duration-300"
            alt=""
            onClick={() => setActiveCategory("Snacks")}
          />

          <img
            src={activeCategory === "BnW" ? aBnW : dBnW}
            className="w-[50px] sm:w-[70px] lg:w-[90px] hover:scale-120 duration-300"
            alt=""
            onClick={() => setActiveCategory("BnW")}
          />

          <img
            src={
              activeCategory === "Confectionery"
                ? aConfectionery
                : dConfectionery
            }
            className="w-[50px] sm:w-[70px] lg:w-[90px] hover:scale-120 duration-300"
            alt=""
            onClick={() => setActiveCategory("Confectionery")}
          />

          <img
            src={activeCategory === "Imported" ? aImported : dImported}
            className="w-[50px] sm:w-[70px] lg:w-[90px] hover:scale-120 duration-300"
            alt=""
            onClick={() => setActiveCategory("Imported")}
          />
        </div>
      </div>
      <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl  text-center my-5 md:my-10">
        {categoryTitles[activeCategory]}
      </h1>
      <div className="w-full flex justify-center text-black ">
        <div className="grid grid-cols-2 md:grid-cols-3  gap-5 lg:gap-10  py-10 ">
          {products[activeCategory].length > 0 ? (
            products[activeCategory].map((item) => (
              <div
                key={item.name}
                className="bg-white p-4 text-center shadow rounded-xl w-[150px] sm:w-[300px] md:w-[230px] lg:w-[300px] xl:w-[370px] cursor-pointer
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
