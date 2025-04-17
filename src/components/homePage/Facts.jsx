import React from "react";
import heroImage2 from "../../assets/heroImage2.png";
import bgMikMik from "../../assets/backgroundImages/bgMikMik.png";
import Wave5 from "../../assets/Waves/Wave5.svg";

const Facts = () => {
  return (
    <div
      className="w-full min-h-96   text-white bg-cover bg-center bg-[var(--primary-brown)] relative"
      style={{ backgroundImage: `url(${bgMikMik})` }}
    >
      <img src={Wave5} className="w-full object-cover" alt="" />
      <div className="flex justify-center items-center pb-10">
        <div className="max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div
            className="max-w-4xl  flex flex-col px-5"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h1 className="py-5 mt-5 text-center  lg:text-left text-[var(--primary-yellow)]">
              DID YOU KNOW?
            </h1>
            <p className="text-sm md:text-lg font-medium text-center sm:text-center lg:text-left ">
              MikMik powder, a nostalgic Filipino snack, is actually a sweetened
              milk powder that you eat straight from the packet — usually by
              pouring it directly into your mouth or using the included straw.
              It became wildly popular in the 90s and remains a childhood
              favorite because of its playful, messy way of eating and its
              sweet, milky flavor.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={heroImage2}
              className="w-[300px] md:w-[400px] lg:w-[500px] object-cover md:mb-10 duration-300 hover:scale-110"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
