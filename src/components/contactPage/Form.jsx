import React from "react";
import bgSnack from "../../assets/backgroundImages/bgSnack.png";
import wave7 from "../../assets/Waves/Wave7.svg";

const Form = () => {
  return (
    <div
      className="w-full min-h-screen text-[var(--primary-yellow)]  px-5 sm:px-10  relative pb-30 sm:pb-40 lg:pb-50"
      style={{ backgroundImage: `url(${bgSnack})` }}
    >
      <div className="flex justify-center">
        <h2
          className="mt-10 text-center"
          data-aos="zoom-in"
          data-aos-duration="600"
        >
          We'd love to hear from you!
        </h2>
      </div>

      <div className="w-full flex flex-col xl:flex-row lg:justify-around mt-10 gap-x-10 lg:px-10">
        <div className="w-full">
          <form className="flex flex-col rounded-2xl p-5 ">
            <label htmlFor="fname" className="mb-2 font-bold text-md ">
              NAME:
            </label>
            <input
              type="text"
              id="fname"
              name="fname"
              className="bg-white rounded-lg py-2 mb-5 px-2 text-black"
            />
            <label htmlFor="email" className="mb-2 font-bold text-md">
              EMAIL:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="bg-white rounded-lg py-2 mb-5 px-2 text-black"
            />
            <label htmlFor="contact" className="mb-2 font-bold text-md">
              CONTACT NUMBER:
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="bg-white rounded-lg py-2 mb-5 px-2 text-black"
            />
            <label htmlFor="location" className="mb-2 font-bold text-md">
              LOCATION:
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="bg-white rounded-lg py-2 mb-5 px-2 text-black"
            />
            <label htmlFor="purpose" className="mb-2 font-bold text-md">
              PURPOSE:
            </label>
            <select
              id="purpose"
              name="purpose"
              className="bg-white rounded-lg py-2 mb-5 px-2 text-black"
            >
              <option value="">Select a purpose</option>{" "}
              <option value="Sponsorship">Sponsorship</option>
              <option value="Partnership">Partnership</option>
              <option value="Career Opportunities">Opportunities</option>
              <option value="Logistics and Distribution">Distribution</option>
              <option value="Customer Feedback">Customer Feedback</option>
            </select>
            <label htmlFor="message" className="mb-2 font-bold text-md">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="bg-white rounded-lg py-2 mb-5 px-2 text-black"
            />
            <label className="text-white px-5 ">
              <input type="checkbox" /> *I have read and understood the{" "}
              <span className="underline text-[var(--primary-yellow)] cursor-pointer">
                Data Privacy Policy
              </span>{" "}
              and consent to the use of my information to resolve my inquiry.
            </label>
            <button
              type="submit"
              className="bg-[var(--primary-blue)] text-white font-bold py-4 px-5 rounded-3xl my-5 cursor-pointer"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="flex flex-col mt-10">
          <div className="w-full flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.660382316275!2d120.87047947487885!3d14.90025708562242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339654c1bbde4e19%3A0x1a39f8cbe201c121!2sJocker&#39;s%20Foods%20Industries!5e0!3m2!1sen!2sph!4v1743659164257!5m2!1sen!2sph"
              width="800"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full rounded-2xl shadow-lg "
            ></iframe>
          </div>

          <div className="flex flex-col md:flex-row md:justify-between min-h-30  px-4 py-4 mt-2 rounded-xl  text-white space-x-4">
            <div className="lg:w-2/3">
              <p className="font-bold  text-[var(--primary-yellow)]">
                Bulacan Office
              </p>
              <p className="font-medium  text-md  ">
                Address: 209 Laureano Avendaño St. Brgy. Sto. Cristo, Pulilan,
                Bulacan.
              </p>
              <p className="font-medium text-md ">
                Tels./Fax: (+63)(044)8815-2559; (+63)(02) 8552-5051;
                +63(02)8584-6891
              </p>
            </div>

            <div className="lg:w-2/3">
              <p className="font-bold  text-[var(--primary-yellow)]">
                Manila Office
              </p>
              <p className="font-medium text-md  ">
                Address: 79-F McArthur Highway Caloocan City
              </p>
              <p className="font-medium text-md ">Tels.: (+63)8361-3332;</p>
            </div>
          </div>
        </div>
      </div>

      <img src={wave7} className="absolute bottom-0 left-0  w-full " alt="" />
    </div>
  );
};

export default Form;
