import React from "react";
import bgSnack from "../../assets/backgroundImages/bgSnack.png";
import sugoSachet from "../../assets/sugoSachet.svg";
import mikmikSachet from "../../assets/mikmikSachet.svg";
import Wave1 from "../../assets/Waves/Wave1.svg";

const Story = () => {
  return (
    <div
      className="w-full min-h-screen  text-black  px-5 py-10 bg-no-repeat bg-cover relative"
      style={{ backgroundImage: `url(${bgSnack})` }}
    >
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center  items-center text-center text-white gap-10"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div className="flex-1">
          <h1 className="text-5xl sm:text-7xl text-[var(--primary-yellow)] lg:text-left">
            OUR STORY
          </h1>
          <div className="mt-5 font-medium text-sm sm:text-base text-justify xl:text-left space-y-4">
            <p>
              Jocker’s Food Industries (JFI) was founded in 1992 with a vision
              to bring high-quality and affordable snack foods to Filipino
              households. What started as a small-scale manufacturing business
              has grown into one of the leading snack food producers in the
              Philippines, known for its commitment to taste, quality, and
              innovation.
            </p>
            <p>
              JFI initially gained popularity with its signature product,
              Mik-Mik Sweetened Milk Powder, a fun and nostalgic childhood
              favorite among Filipinos. Over the years, the company expanded its
              product line, introducing Sugo Peanuts, a well-loved flavored
              peanut snack, and Mik-Mik Powder, a modern twist on the
              traditional Filipino treat.
            </p>
            <p>
              As demand for its products grew, JFI expanded its production
              facilities and strengthened its distribution network, reaching key
              markets in Luzon, Visayas, and Mindanao. Today, JFI continues to
              thrive by upholding its core values of quality, affordability, and
              consumer satisfaction.
            </p>
            <p>
              With over 30 years of industry experience, Jocker’s Food
              Industries remains committed to creating delicious and affordable
              snacks that bring joy to every Filipino.
            </p>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col  justify-center items-center mb-10 space-x-2 sm:space-x-10 lg:sm:space-y-10">
          <img
            src={sugoSachet}
            className="w-[150px] sm:w-[200px] md:w-[300px] rotate-7 duration-300 hover:scale-105"
            alt=""
          />
          <img
            src={mikmikSachet}
            className="w-[150px] sm:w-[200px] md:w-[300px] -rotate-7 duration-300 hover:scale-105"
            alt=""
          />
        </div>
      </div>
      <div className="-mx-5 -my-10">
        <img
          src={Wave1}
          className="w-full h-[150px] lg:h-auto object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Story;
