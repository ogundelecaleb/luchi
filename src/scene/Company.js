import React from "react";
import { Location, Call, Sms } from "iconsax-react";

const Company = () => {
  return (
    <div className="h-screen">
      {" "}
      <div className="px-[16px] md:px-[24px] lg:px-[32px] py-[32px]">
        <h3 className=" text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#29361C] mb-[24px]">
          Our Company
        </h3>
        <p className=" text-[18px] md:text-[20px] lg:text-[24px] font-medium text-[#29361C] mb-[24px]">
          Location and Contact
        </p>

        <img
          src="/map.png"
          alt="map"
          className="h-[] w-[] md:h-[406px] md:w-[631px]  mb-[24px]"
        />

        <div className="w-full md:w-[60%]">
          <div className="flex gap-1  mb-[24px]">
            <Location variant="Bold" size={24} />
            <p>
              3/4 Water Cooperation Road, Landmark Village Victoria Island, Near
              Landmark Centre, Water Corporation Road, Lagos Nigeria
            </p>
          </div>
          <div className="flex gap-2 ">
            <div className="flex gap-1">
              <Call size={24} /> <p>+234 9160001766, +234 9130222333 </p>
            </div>
            <div className="flex gap-1"><Sms size={24} /><a href="mailto:luchis@gmail.com">luchi@gmail.com</a></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
