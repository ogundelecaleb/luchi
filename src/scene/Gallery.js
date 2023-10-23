import React from "react";

const Gallery = () => {
  return (
    <div className="h-screen">
      {" "}
      <div className="px-[16px] md:px-[24px] lg:px-[32px] py-[32px]">
        <h3 className="flex items-center text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#29361C] mb-[24px]">
          Our Gallery{" "}
          <img src="/hand.png" alt="hot food" className="h-[28px] " />
        </h3>
        <div className="mb-[24px] md:mb-[32px]">
          <ul className="flex overflow-x-auto gap-[8px] md:gap-[12px] pb-3">
            <li className="py-[8px] px-[10px] md:py-[12px] md:px-[18px] rounded-[24px] flex-shrink-0 bg-[#CA5834] text-white cursor-pointer">
              Restaurant{" "}
            </li>
            <li className="py-[8px] px-[10px] md:py-[12px] md:px-[18px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer">
              Dishes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
