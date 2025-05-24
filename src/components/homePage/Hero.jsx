import React from "react";
import bgHero from "../../assets/backgroundImages/bgHero.webp";
import charMikMik from "../../assets/Characters/charMikMik.webp";

const Hero = () => {
  return (
    <div
      className="w-full min-h-screen  bg-cover bg-center flex items-center justify-center bg-sky-200"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center px-5  max-w-lg lg:max-w-full gap-x-10 sm:mt-20 lg:mt-0">
        <img
          src={charMikMik}
          className="lg:mt-30 w-[300px] sm:w-[400px] md:w-[500px]   xl:w-[600px]"
          alt=""
        />
        <h1
          className="text-center lg:text-left text-[var(--primary-dark)] leading-slug  py-5 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          The Taste That{" "}
          <span className="text-[var(--primary-red)]">
            Brings Back Memories
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
