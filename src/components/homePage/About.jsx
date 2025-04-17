import React from "react";
import bgBlue from "../../assets/backgroundImages/bgBlue.png";
import Marquee from "react-fast-marquee";
import jfiLogo from "../../assets/jfiLogo.png";
import marqueeMikMiK from "../../assets/marqueeImages/MIK-MIK.png";
import marqueeChoyoChoyo from "../../assets/marqueeImages/CHOYO-CHOYO.png";
import marqueePeasO from "../../assets/marqueeImages/PEAS-O.png";
import marqueeSugo from "../../assets/marqueeImages/SUGO.png";
import marqueeChewC from "../../assets/marqueeImages/CHEW-C.png";
import marqueeYokiYoki from "../../assets/marqueeImages/YOKI-YOKI.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div
      className="w-full min-h-screen object-cover bg-contain lg:bg-cover bg-center"
      style={{ backgroundImage: `url(${bgBlue})` }}
    >
      <Marquee className="w-full h-24 lg:h-32 bg-[var(--primary-yellow)] border-y-2 border-black drop-shadow-lg">
        <h2 className="pt-2 text-[var(--primary-red)] text-center">
          Take a break, it’s snack time
        </h2>
        <img src={jfiLogo} className="w-[200px] lg:w-[250px] mx-4" alt="" />
        <img
          src={marqueeMikMiK}
          className="w-[150px] lg:w-[200px] mx-4"
          alt=""
        />
        <img
          src={marqueeChoyoChoyo}
          className="w-[100px] lg:w-[150px] mx-4"
          alt=""
        />
        <img
          src={marqueePeasO}
          className="w-[100px] lg:w-[150px] mx-4"
          alt=""
        />
        <img src={marqueeSugo} className="w-[150px] lg:w-[200px] mx-4" alt="" />
        <img
          src={marqueeChewC}
          className="w-[150px] lg:w-[200px] mx-4"
          alt=""
        />
        <img src={marqueeYokiYoki} className="w-[100px] mx-4" alt="" />
        <img src={jfiLogo} className="w-[200px] lg:w-[250px] mx-4" alt="" />
      </Marquee>

      <div
        className="flex flex-col justify-center items-center max-w-7xl mx-auto min-h-screen "
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <h1 className="my-15  ">About us</h1>
        <p className="text-base sm:text-lg  text-justify sm:text-center mb-5 px-5 font-medium">
          Jocker's Foods Industries (JFI) is a single proprietorship involved
          with the manufacture and distribution of the quality snack foods.
          Established in 1992, JFI has grown to become one of the leading snack
          food manufacturers in the country for the CDE market. The leading
          brand the company produces includes Sugo Peanuts, Mik-Mik Milk Powder,
          and Mik-Mik Polvoron. JFI employs over 300 employees and maintains
          solid distribution channels in the Greater Luzon areas. The company
          has recently started to distribute its products in the Visayas and
          Mindanao areas.
        </p>
        <Link to="/about">
          <button class="rounded-full cursor-pointer w-[120px] xl:w-[200px] border border-[var(--primary-yellow)] py-2 xl:py-4 bg-[var(--primary-yellow)] text-black text-sm xl:text-xl font-semibold my-5 duration-200 hover:scale-105">
            LEARN MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
