import React, { useState } from "react";
import jfiLogo from "../assets/jfiLogo.png";
import facebookLogo from "../assets/Contacts/facebookLogo.png";
import emailLogo from "../assets/Contacts/emailLogo.png";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  //active navlinks
  const navlinksActive = ({ isActive }) => ({
    textDecorationLine: isActive ? "underline" : "none",
    textUnderlineOffset: "8px",
    textDecorationThickness: "4px",
    textDecorationColor: "var(--primary-blue)",
  });

  //active navlinks mobile

  //change color nav
  const [navColor, setnavColor] = useState(false);
  const navColorChange = () => {
    if (window.scrollY >= 80) {
      setnavColor(true);
    }
    if (window.scrollY < 80) {
      setnavColor(false);
    }
  };
  window.addEventListener("scroll", navColorChange);

  //mobile hamburger menu
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav
      className={
        navColor
          ? "w-full py-4 px-4 lg:px-10 flex justify-between lg:justify-between items-center fixed top-0 left-0 right-0 z-10 text-black drop-shadow-lg  duration-200 ease-in bg-[var(--primary-yellow)] "
          : "w-full py-4 px-4 lg:px-10 flex justify-between lg:justify-between items-center fixed top-0 left-0 right-0 z-10 text-black drop-shadow-lg transparent  duration-200 ease-out "
      }
    >
      <NavLink to="/">
        <img
          src={jfiLogo}
          className="w-[200px] h-auto cursor-pointer "
          alt="Logo"
        />
      </NavLink>

      <ul className="lg:flex hidden cursor-pointer font-medium text-[16px] gap-2 ">
        <li className="nav-bar">
          <NavLink to="/" style={navlinksActive}>
            HOME
          </NavLink>
        </li>
        <li className="nav-bar">
          <NavLink to="/about" style={navlinksActive}>
            ABOUT
          </NavLink>
        </li>
        <li className="nav-bar">
          <NavLink to="/product" style={navlinksActive}>
            PRODUCTS
          </NavLink>
        </li>
        <li className="nav-bar">
          <NavLink to="/contact-us" style={navlinksActive}>
            CONTACT US
          </NavLink>
        </li>
      </ul>

      {/*Hamburger*/}
      <div onClick={handleNav} className="lg:hidden z-10">
        {nav ? <IoCloseSharp size={20} /> : <GiHamburgerMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "absolute left-0 top-0 bg-[var(--primary-yellow)] w-full lg:hidden duration-200 ease-in-out  "
            : "absolute bottom-[100%]  "
        }
      >
        <img src={jfiLogo} className="w-[200px] pt-4 ml-4" alt="" />

        <div className="flex justify-center items-center py-5 pb-10 font-medium">
          <ul className="w-full text-center px-5">
            <li className="border-b-2 p-4">
              <Link to="/" onClick={handleNav}>
                HOME
              </Link>
            </li>
            <li className="border-b-2 p-4">
              <Link to="/about" onClick={handleNav}>
                ABOUT
              </Link>
            </li>
            <li className="border-b-2 p-4">
              <Link to="/product" onClick={handleNav}>
                PRODUCTS
              </Link>
            </li>
            <li className="p-4">
              <Link to="/contact-us" onClick={handleNav}>
                CONTACT US
              </Link>
            </li>
            <div className="flex justify-center flex-row gap-x-5">
              <img
                src={facebookLogo}
                onClick={() => {
                  window.open("https://www.facebook.com/jockersfoods");
                }}
                className="w-[30px]"
                alt="/"
              />
              <img
                src={emailLogo}
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=espenile.j.bscs@gmail.com"
                  );
                }}
                className="w-[30px]"
                alt="/"
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
