import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// AOS init
import { initAOS } from "./components/Aos.js";

//navbar
import NavBar from "./components/Navbar";
//footer
import Footer from "./components/Footer";
//hero
import HeroAll from "./components/Hero";
//home page
import {
  About,
  Facts,
  Hero,
  More,
  Slider,
} from "./components/homePage/homePage";

//about page
import Story from "./components/aboutPage/Story";
import Quote from "./components/aboutPage/Quote";
import Commitment from "./components/aboutPage/Commitment";
import Latest from "./components/aboutPage/Latest";
//about page
import Product from "./components/productPage/Product";
//contact page
import Form from "./components/contactPage/Form";

//scroll to top
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Facts />
              <About />
              <Slider />
              <More />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <HeroAll title="WHO WE ARE" />
              <Story />
              <Quote />
              <Commitment />
              <Latest />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <HeroAll title="PRODUCTS" />
              <Product />
            </>
          }
        />
        <Route
          path="/contact-us"
          element={
            <>
              <HeroAll title="CONTACT US" />
              <Form />
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
