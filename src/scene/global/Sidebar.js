/* eslint-disable */

import React from "react";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidebar = ({ isSidebarOpen, onClose }) => {
  const router = useLocation();

  return (
    <div
      className={` lg:block lg:relative ${
        isSidebarOpen ? "block z-20 fixed inset-0 transition-opacity" : "hidden"
      }`}
    >
      
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#29292980]  transition-opacity lg:relative"
      ></div>
      <div class="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
        <button
          onClick={onClose}
          type="button"
          class="rounded-md text-gray-700 hover:text-[white] focus:outline-none focus:ring-2 focus:ring-[white]"
        >
          <span class="sr-only">Close panel</span>

          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="w-[280px] min-h-screen bg-[#FDFBE4] border-r border-r-[#E4E7EC] pt-[16px] pb-7 sticky top-0  ">
        <img
          className="ml-[24px] mb-[40px] h-[57px]  border-[#E2E8F0] "
          src="./logo.png"
          alt="logo"
        />

        <Link
          to="/menu"
          className={`mx-[24px] pl-[17px] pr-[77px] rounded-[40px] py-[13px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/menu"
              ? "bg-[#CA5834] text-[white] rounded-[40px]"
              : "text-black"
          }`}
        >
          <svg
            class="mr-[12px]"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8248 19.4584H5.17484C2.8915 19.4584 1.0415 17.6001 1.0415 15.3167V9.14173C1.0415 8.00839 1.7415 6.58339 2.6415 5.88339L7.13317 2.38339C8.48317 1.33339 10.6415 1.28339 12.0415 2.26673L17.1915 5.87506C18.1832 6.56673 18.9582 8.05006 18.9582 9.25839V15.3251C18.9582 17.6001 17.1082 19.4584 14.8248 19.4584ZM7.89984 3.36673L3.40817 6.86673C2.8165 7.33339 2.2915 8.39173 2.2915 9.14173V15.3167C2.2915 16.9084 3.58317 18.2084 5.17484 18.2084H14.8248C16.4165 18.2084 17.7082 16.9167 17.7082 15.3251V9.25839C17.7082 8.45839 17.1332 7.35006 16.4748 6.90006L11.3248 3.29173C10.3748 2.62506 8.80817 2.65839 7.89984 3.36673Z"
              fill="currentColor"
            />
            <path
              d="M10 16.125C9.65833 16.125 9.375 15.8417 9.375 15.5V13C9.375 12.6583 9.65833 12.375 10 12.375C10.3417 12.375 10.625 12.6583 10.625 13V15.5C10.625 15.8417 10.3417 16.125 10 16.125Z"
              fill="currentColor"
            />
          </svg>
          Menu
        </Link>
        <Link
          to="/track"
          className={`mx-[24px] pl-[17px] pr-[77px] rounded-[40px] py-[13px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/track"
              ? "bg-[#CA5834] text-[white] rounded-[40px]"
              : "text-black"
          }`}
        >
                 { window.location.pathname === "/track" ? (<img src="/trackingwhite.png" alt="filter" className="mr-[12px]"/>) : (<img src="/tracking.png" alt="filter" className="mr-[12px]"/>)}

          Track Order
        </Link>

        <Link
          to="/gallery"
          className={`mx-[24px] pl-[17px] pr-[77px] rounded-[40px] py-[13px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/gallery"
              ? "bg-[#CA5834] text-[white] rounded-[40px]"
              : "text-black"
          }`}
        >         { window.location.pathname === "/gallery" ? (<img src="/gallerywhite.png" alt="filter" className="mr-[12px]"/>) : (<img src="/gallery.png" alt="filter" className="mr-[12px]"/>)}

          Gallery
        </Link>
        <Link
          to="/company"
          className={`mx-[24px] pl-[17px] pr-[77px] rounded-[40px] py-[13px]  flex tracking-[0.2px] font-medium text-[14px] leading-[21px] items-end mb-[12px] ${
            window.location.pathname === "/company"
              ? "bg-[#CA5834] text-[white] rounded-[40px]"
              : "text-black"
          }`}
        >
         { window.location.pathname === "/company" ? (<img src="/filterwhite.png" alt="filter" className="mr-[12px]"/>) : (<img src="/filter.png" alt="filter" className="mr-[12px]"/>)}
          Company
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
