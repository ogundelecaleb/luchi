/* eslint-disable */

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";

const Topbar = ({ setIsSidebar, userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const items = useSelector(selectItems);
  const handleIsModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleIsModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex border-b border-b-[#E4E7EC] w-full items-center justify-between px-6 gap-[16px] py-3">
      <div className="flex items-center">
        <button
          class="h-12 w-12 bg-[#CA5834] relative px-3 py-3 rounded-full lg:hidden mr-2"
          onClick={setIsSidebar}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>{" "}
        <h4 className="text-[24px] text-[#1a202c] font-bold hidden md:block">
          {location.pathname === "/dashboard"
            ? "Dashboard"
            : location.pathname === "/transaction"
            ? "Transactions"
            : location.pathname === "/settlement"
            ? "Settlements"
            : location.pathname === "/bank"
            ? "Bank"
            : location.pathname === "/channel"
            ? "Channel"
            : location.pathname === "/wallet"
            ? "Wallet"
            : location.pathname === "/country"
            ? "Country"
            : location.pathname === "/merchant"
            ? "Merchant"
            : location.pathname === "/name"
            ? "Name"
            : location.pathname === "/userAdmin"
            ? "User Admin"
            : location.pathname === "/isActive"
            ? "IsActive"
            : location.pathname === "/accountDetails"
            ? "Account Details"
            : location.pathname === "/currency"
            ? "Currency"
            : location.pathname === "/merchantChannel"
            ? "Merchants Channel"
            : location.pathname === "/configuration"
            ? "Switch Configurations"
            : ""}
        </h4>{" "}
      </div>
      <div className="flex flex-row gap-3">
        <div className="relative cursor-pointer">
          <div class="bg-[#FAFAFA] rounded-full h-[48px] w-[48px] px-3 py-3 ">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.34168 1.66663L4.32501 4.69163"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.6583 1.66663L15.675 4.69163"
                stroke="black"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M1.66669 6.54167C1.66669 5 2.49169 4.875 3.51669 4.875H16.4834C17.5084 4.875 18.3334 5 18.3334 6.54167C18.3334 8.33333 17.5084 8.20833 16.4834 8.20833H3.51669C2.49169 8.20833 1.66669 8.33333 1.66669 6.54167Z"
                stroke="black"
                stroke-width="1.5"
              />
              <path
                d="M8.13336 11.6666V14.625"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M11.9667 11.6666V14.625"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M2.91669 8.33337L4.09169 15.5334C4.35835 17.15 5.00002 18.3334 7.38335 18.3334H12.4084C15 18.3334 15.3834 17.2 15.6834 15.6334L17.0834 8.33337"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span className="absolute top-1 right-0 md:left-7 h-4 w-4 bg-[#CA5834] text-white flex justify-center items-center text-center rounded-full  font-bold">
              {items.length}
            </span>
          </div>

          {/* <div
            class="bg-[#FAFAFA] rounded-[1000px]  items-center lg:pl-[8px] lg:pr-[16px] pl-[6px] pr-[14px] py-2 flex cursor-pointer "
            onClick={() => {
              if (isModalOpen === false) {
                setIsModalOpen(true);
              } else {
                setIsModalOpen(false);
              }
            }}
          >
            <div class="flex items-center lg:mr-[14px] mr-[12px]">
              <svg
                class="mr-[12px]"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="#C4C4C4" />
              </svg>
              <h4 class="text-[#1A202C] lg:text-[16px] lg:leading-[24px] text-[14px] leading-[21px] tracking-[0.2px] font-extrabold ">
                {userData.fullName}
              </h4>
            </div>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6L8 10L12 6"
                stroke="#718096"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div> */}

          {/* <img
            src="./profile-pic.png"
            alt="profile-pic"
            className="h-[32px] rounded-full "
          />
          <h3>Emmanuel .O</h3>
          <button
            onClick={() => {
              if (isOpen === false) {
                setIsOpen(true);
              } else {
                setIsOpen(false);
              }
            }}
          >
            <img
              src="./dropdown.png"
              alt="dropdown icon"
              className="h-[16px]"
            />
          </button> */}
        </div>

        {/* Create filter Modal */}
        {/* <Modal isOpen={isModalOpen} onClose={handleIsModalClose}>
          <div className="inline-block absolute px-4 pb-3 right-4 top-10 overflow-hidden text-left align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle ">
            <div className="flex flex-col w-[200px] max-w-[200px] justify-between mx-0 mt-4">
              <div className=" border-b-[#edf2f7] border-b pb-[17px]">
                <h3 className="text-[16px] font-bold text-[#1a202c] pb-[4px]">
                  {userData.fullName}
                </h3>
                <p className="text-[12px] text-[#718096]">
                  {userData.role} account
                </p>
              </div>

              <div
                onClick={() => {
                  handleIsModalClose();
                  navigate("/accountDetails");
                  setIsOpen(false);
                }}
                className="flex flex-row gap-[12px] pt-[17px] mb-3 cursor-pointer"
              >
                <img src="./profile.png" alt="" />
                <p className=" text-[#1a202c] text-[14px] ">My Profile</p>
              </div>
              <div
                onClick={() => {
                  // navigate("/login");
                  handleIsModalClose();
                  api.logout();
                  navigate("/login");
                  setIsOpen(false);
                }}
                className="flex flex-row gap-[12px] pt-[23px] cursor-pointer mb-3"
              >
                <img src="./logout.png" alt="" />
                <p className=" text-[#1a202c] text-[14px] ">Log out</p>
              </div>
            </div>
          </div>
        </Modal> */}
      </div>
    </div>
  );
};

export default Topbar;
