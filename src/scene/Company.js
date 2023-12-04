import React from "react";
import { Location, Call, Sms } from "iconsax-react";
import { Link } from "react-router-dom";

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
        <Link
          to="https://www.google.com/maps/place/Landmark+Centre/@6.4235715,3.4422598,17z/data=!3m1!4b1!4m6!3m5!1s0x103bf51427cd4857:0x61931b4bc90aba8e!8m2!3d6.4235715!4d3.4448347!16s%2Fg%2F1tcwbttj?hl=en-NG&entry=ttu"
          target="_blank"
        >
          <img
            src="/map.png"
            alt="map"
            className="h-[220px] w-[90%]   md:h-[320px] md:w-[531px]  mb-[24px]"
          />
        </Link>

        <div className="w-full md:w-[60%]">
          <div className="flex gap-1  mb-[24px]">
            <Location variant="Bold" size={24} />
            <p>
              3/4 Water Cooperation Road, Landmark Village Victoria Island, Near
              Landmark Centre, Water Corporation Road, Lagos Nigeria
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-1">
              <Call size={24} /> <p>+234 9160001766, +234 9130222333 </p>
            </div>
            <div className="flex gap-1">
              <Sms size={24} />
              <a href="mailto:info@luchiresturants.com" ><p className="underline underline-offset-1 ">info@luchiresturants.com</p></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
