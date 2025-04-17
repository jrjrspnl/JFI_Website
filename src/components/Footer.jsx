import React from "react";
import jfiLogo from "../assets/jfiLogo.png";
import facebookLogo from "../assets/Contacts/facebookLogo.png";
import emailLogo from "../assets/Contacts/emailLogo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[var(--primary-yellow)] text-black py-10 lg:py-0">
        <footer className="min-h-48">
          <div className="flex flex-col lg:flex-row lg:justify-around items-center p-5 cursor-pointer">
            <Link to="/">
              {" "}
              <img
                src={jfiLogo}
                className="w-[200px] lg:w-[250px]"
                alt="Logo"
              />
            </Link>

            <nav className="w-full lg:w-auto">
              <ul className="lg:justify-around lg:flex text-center font-medium p-5 divide-y-2  divide-black gap-x-10">
                <li className="lg:border-none p-5 hover:text-[var(--primary-blue)]">
                  <Link to="/">HOME</Link>
                </li>
                <li className="lg:border-none p-5 hover:text-[var(--primary-blue)]">
                  <Link to="/about">ABOUT</Link>
                </li>
                <li className="lg:border-none p-5 hover:text-[var(--primary-blue)]">
                  <Link to="/product">PRODUCTS</Link>
                </li>
                <li className="lg:border-none p-5 hover:text-[var(--primary-blue)]">
                  <Link to="/contact-us">CONTACT US</Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-row gap-x-5">
              <img
                src={facebookLogo}
                onClick={() => {
                  window.open("https://www.facebook.com/jockersfoods");
                }}
                className="w-[40px]"
                alt="facebook"
              />
              <img
                src={emailLogo}
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=espenile.j.bscs@gmail.com"
                  );
                }}
                className="w-[40px] cursor-pointer"
                alt="Send Email"
              />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
