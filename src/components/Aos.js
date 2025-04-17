// src/aos.js
import AOS from "aos";
import "aos/dist/aos.css";

export const initAOS = () => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true, // whether animation should only happen once
  });
};
