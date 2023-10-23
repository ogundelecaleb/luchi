import { SearchNormal } from "iconsax-react";
import React from "react";

const Track = () => {
  return (
    <div className="h-screen">
      {" "}
      <div className="px-[16px] md:px-[24px] lg:px-[32px] py-[32px] ">
        <h3 className="flex items-center text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#29361C] mb-[24px]">
          Track your Food Order{" "}
          <img src="/hotfood.png" alt="hot food" className="h-[28px] " />
        </h3>
        <p className="mb-[20px]">Please enter your tracking number</p>

        <div className="flex px-3 py-1 rounded-[40px] cursor-pointer w-full md:w-[70%] lg:w-[50%] bg-white items-center"><input className="flex-1 focus:border-0 focus:outline-none border-0 "/> <div className="h-[36px] w-[36px] md:h-[48px] md:w-[48px] bg-[#CA5834] rounded-full flex justify-center items-center"><SearchNormal className="h-[18px] md:h-[24px]" color="#fff"/></div></div>
      </div>
    </div>
  );
};

export default Track;
