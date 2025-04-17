import React from "react";
import bg2 from "../assets/backgroundImages/bg2.png";
import wave6 from "../assets/Waves/Wave6.svg";
import { NavLink } from "react-router-dom";

const Contact = ({ title }) => {
  return (
    <div className="w-full h-64 md:h-80 lg:h-[400px] relative">
      <img src={bg2} className="w-full h-full object-cover" alt="" />
      <div className="absolute inset-0 flex justify-center items-center">
        <h1 className="text-[var(--primary-dark)] translate-y-5 md:translate-y-0 lg:text-8xl">
          {title}
        </h1>
      </div>
      <img src={wave6} className="absolute bottom-0 left-0 w-full" alt="/" />
    </div>
  );
};

export default Contact;
