import React, { useState } from "react";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Menu = () => {
  const dispatch = useDispatch();

  const product = {
    id: "1",
    title: "Pounded Yam",
    price: 5000,
    description: " Pounded yam with hot soup of Egusi with ogufe  ",
  };
  const [totalPrice, setTotalPrice] = useState(product.price);

  const addItemToBasket = () => {
    const products = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
    };
    //push item into redux
    dispatch(addToBasket(products));
    HandleModalClose()
  };

  const increase = () => {
    const newTotal = totalPrice + product.price;
    setTotalPrice(newTotal);
  };
  const decrease = () => {
    if (totalPrice && totalPrice > 0) {
      const newTotal = totalPrice - product.price;
      setTotalPrice(newTotal);
    }
  };
  const [isOpen, setIsOpen] = useState(false);

  const HandleModalOpen = () => {
    setIsOpen(true);
  };

  const HandleModalClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="px-[16px] md:px-[24px] lg:px-[32px] py-[32px]">
        <div>
          <h3 className="flex items-center text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#29361C]">
            Welcome to <img src="/hand.png" alt="hand" className="h-[28px] " />
          </h3>
          <h3 className="text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#29361C]">
            Luchi’s Restaurant
          </h3>
        </div>
        <img src="/banner.png" alt="banner" className="rounded-lg my-[24px] " />
        <div className="mb-[24px] md:mb-[32px]">
          <ul className="flex overflow-x-auto gap-[8px] md:gap-[12px] pb-3">
            <li className="py-[8px] px-[10px] md:py-[12px] md:px-[18px] rounded-[24px] flex-shrink-0 bg-[#CA5834] text-white cursor-pointer">
              All Meal
            </li>
            <li className="py-[8px] px-[10px] md:py-[12px] md:px-[18px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer">
              Local Dishes
            </li>
            <li className="py-[8px] px-[10px] md:py-[12px] md:px-[18px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer">
              International Cousine
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[20px] mx-auto">
            {/* <div className="flex flex-wrap gap-[20px]"> */}
            <div className="flex flex-col max-w-[280px] rounded-lg">
              <img
                src="/egusi.png"
                alt="egusi"
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="p-[16px] md:p-[16px] lg:p-[16px] bg-[#FFF]">
                <div className="mb-[32px] md:mb-[40px] lg:mb-[48px]">
                  <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-black mb-[8px] font-bold">
                    Pounded Yam
                  </h3>
                  <p className="text-[14px] md:text-[16px]">
                    Pounded yam with hot soup of Egusi with ogufe
                  </p>
                </div>

                <div className="flex justify-between items-center ">
                  <div className="w-[30%]">
                    <h2 className="text-[18px] md:text-[18px] lg:text-[20px] text-[#CA5834] font-bold hover:text-white hover:bg-[#CA5834]">
                      N5,000.00
                    </h2>
                  </div>
                  <div className="w-[45%]">
                    <button
                      onClick={HandleModalOpen}
                      className="py-[px] px-[8px] md:py-[5px] md:px-[12px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer hover:text-white hover:bg-[#CA5834]"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col max-w-[280px] rounded-lg">
              <img
                src="/jollof.png"
                alt="egusi"
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="p-[16px] md:p-[16px] lg:p-[16px] bg-[#FFF]">
                <div className="mb-[32px] md:mb-[40px] lg:mb-[48px]">
                  <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-black mb-[8px] font-bold">
                    Pounded Yam
                  </h3>
                  <p className="text-[14px] md:text-[16px]">
                    Pounded yam with hot soup of Egusi with ogufe
                  </p>
                </div>

                <div className="flex justify-between items-center ">
                  <div className="w-[30%]">
                    <h2 className="text-[18px] md:text-[18px] lg:text-[20px] text-[#CA5834] font-bold hover:text-white hover:bg-[#CA5834]">
                      N16,000.00
                    </h2>
                  </div>
                  <div className="w-[45%]">
                    <button
                      onClick={HandleModalOpen}
                      className="py-[px] px-[8px] md:py-[5px] md:px-[12px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer hover:text-white hover:bg-[#CA5834]"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col max-w-[280px] rounded-lg">
              <img
                src="/sharwarma.png"
                alt="egusi"
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="p-[16px] md:p-[16px] lg:p-[16px] bg-[#FFF]">
                <div className="mb-[32px] md:mb-[40px] lg:mb-[48px]">
                  <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-black mb-[8px] font-bold">
                    Pounded Yam
                  </h3>
                  <p className="text-[14px] md:text-[16px]">
                    Pounded yam with hot soup of Egusi with ogufe
                  </p>
                </div>

                <div className="flex justify-between items-center ">
                  <div className="w-[30%]">
                    <h2 className="text-[18px] md:text-[18px] lg:text-[20px] text-[#CA5834] font-bold hover:text-white hover:bg-[#CA5834]">
                      N2,500.00
                    </h2>
                  </div>
                  <div className="w-[45%]">
                    <button
                      onClick={HandleModalOpen}
                      className="py-[px] px-[8px] md:py-[5px] md:px-[12px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer hover:text-white hover:bg-[#CA5834]"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-[280px] rounded-lg">
              <img
                src="/egusi.png"
                alt="egusi"
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="p-[16px] md:p-[16px] lg:p-[16px] bg-[#FFF]">
                <div className="mb-[32px] md:mb-[40px] lg:mb-[48px]">
                  <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-black mb-[8px] font-bold">
                    Pounded Yam
                  </h3>
                  <p className="text-[14px] md:text-[16px]">
                    Pounded yam with hot soup of Egusi with ogufe
                  </p>
                </div>

                <div className="flex justify-between items-center ">
                  <div className="w-[30%]">
                    <h2 className="text-[18px] md:text-[18px] lg:text-[20px] text-[#CA5834] font-bold hover:text-white hover:bg-[#CA5834]">
                      N5,000.00
                    </h2>
                  </div>
                  <div className="w-[45%]">
                    <button
                      onClick={HandleModalOpen}
                      className="py-[px] px-[8px] md:py-[5px] md:px-[12px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer hover:text-white hover:bg-[#CA5834]"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-[280px] rounded-lg">
              <img
                src="/jollof.png"
                alt="egusi"
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="p-[16px] md:p-[16px] lg:p-[16px] bg-[#FFF]">
                <div className="mb-[32px] md:mb-[40px] lg:mb-[48px]">
                  <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-black mb-[8px] font-bold">
                    Pounded Yam
                  </h3>
                  <p className="text-[14px] md:text-[16px]">
                    Pounded yam with hot soup of Egusi with ogufe
                  </p>
                </div>

                <div className="flex justify-between items-center ">
                  <div className="w-[30%]">
                    <h2 className="text-[18px] md:text-[18px] lg:text-[20px] text-[#CA5834] font-bold hover:text-white hover:bg-[#CA5834]">
                      N16,000.00
                    </h2>
                  </div>
                  <div className="w-[45%]">
                    <button
                      onClick={HandleModalOpen}
                      className="py-[px] px-[8px] md:py-[5px] md:px-[12px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer hover:text-white hover:bg-[#CA5834]"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-[280px] rounded-lg">
              <img
                src="/sharwarma.png"
                alt="egusi"
                className="rounded-tr-lg rounded-tl-lg"
              />
              <div className="p-[16px] md:p-[16px] lg:p-[16px] bg-[#FFF]">
                <div className="mb-[32px] md:mb-[40px] lg:mb-[48px]">
                  <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-black mb-[8px] font-bold">
                    Pounded Yam
                  </h3>
                  <p className="text-[14px] md:text-[16px]">
                    Pounded yam with hot soup of Egusi with ogufe
                  </p>
                </div>

                <div className="flex justify-between items-center ">
                  <div className="w-[30%]">
                    <h2 className="text-[18px] md:text-[18px] lg:text-[20px] text-[#CA5834] font-bold hover:text-white hover:bg-[#CA5834]">
                      N2,500.00
                    </h2>
                  </div>
                  <div className="w-[45%]">
                    <button
                      onClick={HandleModalOpen}
                      className="py-[px] px-[8px] md:py-[5px] md:px-[12px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer hover:text-white hover:bg-[#CA5834]"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* More Details on Merchant Channel */}
      <Modal isOpen={isOpen} onClose={HandleModalClose}>
        <div className="inline-block overflow-hidden text-left relative align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle sm:max-w-[713px] sm:w-full">
          <div className="py-4 flex justify-end px-5 border-b border-b-[#edf2f7]">
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
          <div className="px-5">
            <img
              src="/egusi.png"
              alt="egusi"
              className="w-full h-[217px] rounded-lg mb-[24px]"
            />
            <div>
              <div className="flex justify-between items-center">
                {" "}
                <div className="">
                  <h3 className="text-[18px] md:text-[24px] lg:text-[32px] text-black mb-[8px] font-bold">
                    Pounded Yam
                  </h3>
                </div>
                <h2 className="text-[18px] md:text-[20px] lg:text-[24px] text-[#CA5834] font-bold hover:text-white hover:bg-[#CA5834]">
                  {product.price}
                </h2>
              </div>
              <p className="text-[14px] md:text-[16px] mb-[24px] md:mb-[32px] xl:mb-[48px]">
                Pounded yam with hot soup of Egusi with ogufe
              </p>
              <div className="mb-[20px]">
                <h3 className="text-[16px] lg:text-[18px] font-medium">
                  How do you want it?
                </h3>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <input type="checkbox" /> <p>With Turkey</p>
                  </div>
                  <div>
                    <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                      N1,200.00
                    </h3>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <input type="checkbox" /> <p>With Cold Drink</p>
                  </div>
                  <div>
                    <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                      N1,500.00
                    </h3>
                  </div>
                </div>
              </div>
              <div className="mt-[36px] md:mt-[48px] flex items-center justify-between  mb-[42px] md:mb-[56px] lg:mb-[72px] ">
                <div>
                  <h3 className="text-[16px] lg:text-[18px] font-medium">
                    Total Order: {totalPrice}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-col-reverse  md:flex-row">
                  <div
                    onClick={addItemToBasket}
                    className="py-[8px] px-[10px] md:py-[12px] md:px-[18px] rounded-[24px] flex-shrink-0 bg-[#CA5834] text-white cursor-pointer"
                  >
                    Add to cart
                  </div>
                  <button className="md:py-[2px] px-[16px]  md:px-[24px] lg:px-[30px] border border-[#CA5834] rounded-[24px] flex items-center">
                    <p
                      onClick={decrease}
                      className="py-2 px-3 cursor-pointer hover:scale-150"
                    >
                      -
                    </p>
                    <p className="py-2 px-3 cursor-pointer text-[16] md:text-[18px] font-bold">
                      1
                    </p>
                    <p
                      onClick={increase}
                      className="py-2 px-3 cursor-pointer hover:scale-150"
                    >
                      +
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Menu;
