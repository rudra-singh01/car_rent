import React from "react";

const Booking = () => {
  return (
    <div className="w-full h-[40vh] bg-[#F43E17] flex flex-col sm:flex-row items-center justify-evenly gap-5 md:gap-0 p-4">
      {/* Para Section */}
      <div className="para flex flex-col text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-bold">
          Book Us For All Of Your
        </h1>
        <h1 className="text-2xl sm:text-3xl font-bold">
          Luxury Transportation Needs
        </h1>
      </div>

      {/* Number Section */}
      <div className="number text-center sm:text-left">
        <p className="text-xl sm:text-2xl">For quick Live Assistance</p>
        <div className="flex justify-center sm:justify-start items-center gap-2 my-2">
          <span className="text-[#fff] text-xl sm:text-2xl">-★</span>
          <span className="text-[#1e90ff] text-xl sm:text-2xl">★</span>
          <span className="text-[#fff] text-xl sm:text-2xl">★-</span>
        </div>
        <p className="text-xl sm:text-2xl">+91-9811313632</p>
        <p className="text-xl sm:text-2xl">24*7</p>
      </div>
    </div>
  );
};

export default Booking;
