import React from "react";

const Quote = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[var(--primary-blue)]">
      <div
        className="w-full mx-auto p-5"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <p className="text-xl sm:text-3xl md:text-5xl text-center md:text-center   leading-relaxed font-bold pt-5 ">
          Snacking{" "}
          <span className="text-[var(--primary-yellow)]">made better</span>,
          <br />
          bringing you{" "}
          <span className="text-[var(--primary-yellow)]">
            flavors you love,
          </span>{" "}
          quality{" "}
          <span className="text-[var(--primary-yellow)]">you can trust,</span>
          <br /> and a future{" "}
          <span className="text-[var(--primary-yellow)]">we can enjoy.</span>
        </p>
      </div>
    </div>
  );
};

export default Quote;
