/* eslint-disable */

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import Modal from "../../components/Modal";

const Topbar = ({ setIsSidebar, userData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bizDetails, setBizDetails] = useState(true);
  const [summary, setSummary] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const items = useSelector(selectItems);

  const HandleModalOpen = () => {
    setIsOpen(true);
    setBizDetails(true)
    setSummary(false)
  };

  const HandleModalClose = () => {
    setIsOpen(false);
  };

  const Handledelivery = (e)=> {
    e.preventDefault()
    setBizDetails(false)
    setSummary(true)
    
  }

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
        <div onClick={HandleModalOpen} className="relative cursor-pointer">
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
        <Modal isOpen={isOpen} onClose={HandleModalClose}>
          <div className="inline-block overflow-hidden text-left relative align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle sm:max-w-[713px] sm:w-full">
            <div className="py-4 flex justify-end px-5 ">
              <svg
                onClick={HandleModalClose}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#29361C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.17004 14.83L14.83 9.17004"
                  stroke="#29361C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.83 14.83L9.17004 9.17004"
                  stroke="#29361C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>{" "}
            {bizDetails && (
              <div>
                <div className="text-center mb-[28px] md:mb-[32px]">
                  {" "}
                  <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-[#29361C] font-medium">
                    Delivery Details
                  </h3>
                </div>
                <div className="px-5 min-w-[300px]">
                  <form>
                    <div>
                      <div className="flex items-center flex-col md:flex-row justify-between mb-[24px]">
                        <div className="w-full md:w-[48%]">
                          <label className="text-black  text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                            First Name
                          </label>
                          <input
                            id="c_number"
                            type="text"
                            className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                            placeholder=""
                            autoFocus
                            required
                          />
                        </div>
                        <div className="w-full md:w-[48%]">
                          <label className="text-black  text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                            Last Name
                          </label>
                          <input
                            id="c_number"
                            type="text"
                            className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                            placeholder=""
                            autoFocus
                            required
                          />
                        </div>
                      </div>
                      <div className="flex items-center flex-col md:flex-row justify-between mb-[24px]">
                        <div className="w-full md:w-[48%]">
                          <label className="text-black text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                            Email Adress
                          </label>
                          <input
                            id="c_number"
                            type="text"
                            className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                            placeholder=""
                            autoFocus
                            required
                          />
                        </div>
                        <div className="w-full md:w-[48%]">
                          <label className="text-black  text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                            Phone Number
                          </label>
                          <input
                            id="c_number"
                            type="text"
                            className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                            placeholder=""
                            autoFocus
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-[24px]">
                        <label className="text-black  text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                          Delivery address
                        </label>
                        <input
                          id="c_number"
                          type="text"
                          className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                          placeholder=""
                          autoFocus
                          required
                        />
                      </div>{" "}
                      <div className="flex items-center flex-col md:flex-row justify-between mb-[24px]">
                        <div className="w-full md:w-[48%]">
                          <label className="text-black text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                            Select State
                          </label>
                          <input
                            id="c_number"
                            type="text"
                            className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                            placeholder=""
                            autoFocus
                            required
                          />
                        </div>
                        <div className="w-full md:w-[48%]">
                          <label className="text-black  text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                            Select LGA
                          </label>
                          <input
                            id="c_number"
                            type="text"
                            className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                            placeholder=""
                            autoFocus
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mb-[40px]">
                      <label className="text-black  text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                        Delivery Note
                      </label>
                      <textarea
                        id="c_number"
                        type="text"
                        className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                        placeholder=""
                        autoFocus
                        
                      />
                    </div>
                    <button onClick={Handledelivery} type="submit" className="bg-[#CA5834] text-white rounded-[40px] text-center w-full py-[10px] mb-[32px]">
                      Save and continue
                    </button>
                  </form>
                </div>
              </div>
            )}
            {summary && (
              <div>
                <div className="text-center mb-[28px] md:mb-[32px]">
                  {" "}
                  <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-[#29361C] font-medium">
                    Delivery Details
                  </h3>
                </div>
                <div className="px-5 min-w-[300px]">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between mb-1">
                      <h3>First Name</h3>
                      <p>Tosin</p>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3>Last Name</h3>
                      <p>Tosin</p>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3>Email Address</h3>
                      <p>TosinT@Gmail.com</p>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3>Phone Number</h3>
                      <p>0812356498</p>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3>Address</h3>
                      <p>2, Agege Motor Road, Olojo Road, Ojo, Lagos Nigeria</p>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3>LGA</h3>
                      <p>Ojo</p>
                    </div>

                    <div className="text-center text-[#CA5834] ">
                      <p>Change Delivery Details</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mb-[40px] md:mb-[50px] ">
                    {" "}
                    <div className="flex items-center justify-between mb-1">
                      <h3>SubTotal</h3>
                      <p className="text-base lg:text-lg">N1,000.00</p>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3>Delivery Fee</h3>
                      <p className="text-base lg:text-lg">N1,000.00</p>
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <h3>Total Fee</h3>
                      <p className="text-base lg:text-lg font-semibold">N1,000.00</p>
                    </div>
                  </div>
                  <button className="bg-[#CA5834] text-white rounded-[40px] text-center w-full py-[10px] mb-[32px]">
                    Continue to pay
                  </button>
                </div>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Topbar;
