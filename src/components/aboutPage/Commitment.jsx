import React from "react";
import Wave2 from "../../assets/Waves/Wave2.svg";
import Mission from "../../assets/Commitment/mission.png";
import Vision from "../../assets/Commitment/vision.png";
import Values from "../../assets/Commitment/values.png";
import Wave3 from "../../assets/Waves/Wave3.svg";

const Commitment = () => {
  return (
    <div className="w-full min-h-screen  bg-[var(--primary-yellow)]">
      <img
        src={Wave2}
        className="w-full h-[150px] lg:h-auto object-cover"
        alt=""
      />
      <div
        className="flex flex-col items-center text-center text-[var(--primary-dark)] "
        data-aos="slide-up"
        data-aos-duration="600"
      >
        <h1 className="text-[var(--primary-dark)] mb-30 text-5xl md:text-6xl lg:text-7xl">
          OUR COMMITMENT TO EXCELLENCE
        </h1>
        <div className="flex flex-wrap justify-center gap-x-30 gap-y-10 mb-10 ">
          <div className="w-[350px] shadow-xl bg-gray-100 flex flex-col p-5 rounded-lg hover:scale-105 duration-300 ">
            <img className="w-20 mx-auto mt-[-3rem] " src={Mission} alt="/" />
            <h1 className="text-3xl my-5">Mission</h1>

            <div className="text-justify  leading-relaxed px-5">
              <p>
                • To Satisfy our consumers nationwide of high quality snack
                foods products.{" "}
                <p>
                  • To Upgrade our systems, methods and competence to meet the
                  demands of our consumers.
                </p>{" "}
                <p>
                  • To Guarantee quality products and continuous innovation.
                </p>{" "}
                <p>
                  • To Optimize employee potentials training and development
                </p>
              </p>
            </div>
          </div>
          <div className="w-[350px] xl:h-[400px] shadow-xl bg-[var(--primary-blue)] flex flex-col p-5  lg:my-20 rounded-lg hover:scale-105 duration-300 text-white ">
            <img className="w-20 mx-auto mt-[-3rem] " src={Vision} alt="/" />
            <h1 className="text-3xl my-5">Vision</h1>
            <p className="text-justify leading-relaxed px-5 ">
              Jocker’s Foods Industries will be recognized as one of the top 5
              fast-moving consumer goods companies in the country, known for
              quality products, innovation, and strong customer.
            </p>
          </div>
          <div className="w-[350px]  shadow-xl bg-gray-100 flex flex-col p-5 rounded-lg hover:scale-105 duration-300 ">
            <img className="w-20 mx-auto mt-[-3rem] " src={Values} alt="/" />
            <h1 className="text-3xl my-5">Values</h1>
            <div className="text-justify leading-relaxed px-5">
              <p>
                <span className="font-bold">Integrity</span> – accuracy and
                truthfulness of information.
              </p>
              <p>
                <span className="font-bold">Quality Product</span> – maintains
                quality level of products.
              </p>
              <p>
                <span className="font-bold">Innovation</span> – discovery of new
                products and ideas.
              </p>
              <p>
                <span className="font-bold">Customer Focus</span> – dedicated to
                delight the customers.
              </p>
              <p>
                <span className="font-bold">Synergy</span> – teamwork in
                achieving the vision and mission.
              </p>
              <p>
                <span className="font-bold">Social Responsibility</span> –
                dedication towards social, community and environmental services.
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src={Wave3}
        className="w-full h-[150px] lg:h-auto object-cover"
        alt=""
      />
    </div>
  );
};

export default Commitment;
