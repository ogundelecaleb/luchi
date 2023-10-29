import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { addToCart } from "../components/StateManagement";
import { fetchCart } from "../components/StateManagement";

const Menu = ({}) => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState("");
  const [emptycart, setEmptycart] = useState(false);
  const [cart, setCart] = useOutletContext()
  

  // const addItemToBasket = () => {
  //   const products = {
  //     id: product.id,
  //     title: product.title,
  //     price: product.price,
  //     description: product.description,
  //   };
  //   //push item into redux
  //   dispatch(addToBasket(products));
  //   HandleModalClose();
  // };


    
  const product = [
    {
      id: "1",
      title: "Pounded Yam",
      price: 5000,
      description: " Pounded yam with hot soup of Egusi with ogufe  ",
    },
    {
      id: "2",
      title: "Eba",
      price: 5000,
      description: " Pounded yam with hot soup of Egusi with ogufe  ",
    },
    {
      id: "3",
      title: "Rice",
      price: 4000,
      description: " Pounded yam with hot soup of Egusi with ogufe  ",
    },
    {
      id: "2",
      title: "Yam",
      price: 5000,
      description: " Pounded yam with hot soup of Egusi with ogufe  ",
    },
    {
      id: "2",
      title: "Shawarma",
      price: 5000,
      description: " Pounded yam with hot soup of Egusi with ogufe  ",
    },
  ];

const [totalPrice, setTotalPrice] = useState(product.price);
  const HandleCart = () => {
    // addToCart(product);
    addToCart(selectedProduct);
    HandleModalClose();
    const cart = localStorage.getItem("cart");
setCart(JSON.parse(cart))
    // addItemToBasket()
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

  const HandleModalOpen = (p) => {
    setIsOpen(true);
    // HandleCart(p)
    setSelectedProduct(p);
  };

  const HandleModalClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <div className="px-[16px] md:px-[24px] lg:px-[32px] py-[32px]">
        <div>
          <h3 className="flex items-center text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#29361C] ">
            Welcome to <img src="/hand.png" alt="hand" className="h-[28px] " />
          </h3>
          <h3 className="text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#29361C]">
            Luchi’s Restaurant
          </h3>
        </div>
        <img src="/banner.png" alt="banner" className="rounded-lg my-[24px] " />
        <div className="mb-[24px] md:mb-[32px]">
          <ul className="flex overflow-x-auto gap-[8px] md:gap-[12px] pb-3">
            <li className="py-[4px] px-[18px] md:py-[8px] md:px-[18px] rounded-[24px] flex-shrink-0 bg-[#CA5834] text-white cursor-pointer">
              All Meal
            </li>
            <li className="py-[4px] px-[18px] md:py-[8px] md:px-[18px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer">
              Soup
            </li>
            <li className="py-[4px] px-[18px] md:py-[8px] md:px-[18px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer">
              Rice
            </li>
            <li className="py-[4px] px-[18px] md:py-[8px] md:px-[18px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer">
              Breakfast
            </li>
            <li className="py-[4px] px-[18px] md:py-[8px] md:px-[18px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer">
              Bread
            </li>
            <li className="py-[4px] px-[18px] md:py-[8px] md:px-[18px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer">
              Pasta
            </li>
            <li className="py-[4px] px-[18px] md:py-[8px] md:px-[18px] flex-shrink-0 rounded-[24px] border border-[#CA5834] text-[#CA5834] cursor-pointer">
              Snack
            </li>
          </ul>
        </div>
        <div className="">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[20px] ">
            {product.map((prod) => (
              <div className="flex flex-col w-full sm:max-w-[320px] md:max-w-[258px] rounded-lg">
                <img
                  src="/egusi.png"
                  alt="egusi"
                  className="rounded-tr-lg rounded-tl-lg"
                />
                <div className="p-[16px] md:p-[16px] lg:p-[16px] bg-[#FFF] rounded-br-lg rounded-bl-lg">
                  <div className="mb-[24px] md:mb-[40px] lg:mb-[48px]">
                    <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-black mb-[8px] font-bold">
                      {prod.title}
                    </h3>

                    <p className="text-[14px] md:text-[16px] text-[#29361C]">
                      Soup
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between gap-2 md:items-center ">
                    <div className="w-[30%]">
                      <h2 className="text-[18px] md:text-[18px] lg:text-[20px] text-[#CA5834] font-bold">
                      ₦{prod.price}
                      </h2>
                    </div>
                    <div className="w-[45%]">
                      <button
                        onClick={() => HandleModalOpen(prod)}
                        className=" text-[14px] flex py-[px] px-[8px] md:py-[10px] md:px-[14px] flex-shrink-0 rounded-[24px] border border-[#CA5834] whitespace-nowrap text-[#CA5834] cursor-pointer hover:text-white hover:bg-[#CA5834]"
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* More Details on Merchant Channel */}
      <Modal isOpen={isOpen} onClose={HandleModalClose}>
        <div className="inline-block overflow-hidden text-left relative align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle w-full sm:max-w-[713px] sm:w-full">
          <div className="py-4 flex justify-end px-5 border-b border-b-[#edf2f7]">
            <svg
              className="cursor-pointer"
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
          <div className="px-5 h-[80vh] overflow-y-auto">
            <img
              src="/egusi.png"
              alt="egusi"
              className="w-full h-[217px] rounded-lg mb-[24px]"
            />
            <div className="">
              <div className="flex justify-between border-b border-[#CA5834] border-dashed pb-[16px] md:pb-[20px] lg:pb-[24px] mb-[16px] md:mb-[20px] lg:mb-[24px]">
                <div className="">
                  <h3 className="text-[18px] md:text-[24px] lg:text-[32px] text-black mb-[8px] font-bold">
                  {selectedProduct.title}                  </h3>
                  <p className="text-[14px] md:text-[16px]">(Soup) </p>
                </div>
                <h2 className="text-[18px] md:text-[20px] lg:text-[24px] text-[#CA5834] font-bold hover:text-white hover:bg-[#CA5834]">
                  N {selectedProduct.price}
                </h2>
              </div>

              <div className="mb-[20px]">
                <h3 className="text-[16px] lg:text-[18px] font-medium">
                  Receipt:
                </h3>
                <div className=" flex justify-between items-center  border-b border-[#CA5834] border-dashed pb-[16px] md:pb-[20px] lg:pb-[24px] mb-[16px] md:mb-[20px] lg:mb-[24px]">
                  <p className="w-[70%] lg:[60%]">
                    Cocoyam,Dry Fish,Stock Fish,Cray Fish,Meat, Oziza Seed,Palm
                    Oil,Salt,Bitter Leaf,Ogiri
                  </p>
                  
                </div>
                <div>
                  {" "}
                  <h3 className="text-[16px] lg:text-[18px] font-medium">
                    How do you want it?
                  </h3>
                  <p className="mb-[16px] lg:mb-[20px] font-medium">Protein</p>
                  <div className="flex flex-col gap-2 mb-[28px]">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Cooked Titus</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Spicy grill chicken</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Peppered Snail</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Assorted Stew</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Goat Meat Stew</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" />{" "}
                        <p>Goat/Chicken/Assorted peppersoup</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Asun</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <p className="mb-[16px] lg:mb-[20px] font-medium">Swallow</p>
                  <div className="flex flex-col gap-2 mb-[28px]">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Starch</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Eba</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Fufu</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  {" "}
                  <p className="mb-[16px] lg:mb-[20px] font-medium">Drink</p>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Table water</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Cocacola</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex gap-2">
                        <input type="checkbox" /> <p>Chivita Active</p>
                      </div>
                      <div>
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          N1,500.00
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label>
                  <span className="font-semibold ">Comment</span>(optional)
                </label>
                <textarea className="border w-full rounded-lg" />
              </div>
              <div className="mt-[36px] md:mt-[48px] flex items-center justify-between  mb-[42px] md:mb-[56px] lg:mb-[72px] ">
                <div>
                  <h3 className="text-[16px] lg:text-[18px] font-medium">
                    Total Order: {totalPrice}
                  </h3>
                </div>
                <div className="flex items-center gap-2 flex-col-reverse  md:flex-row">
                  <div
                    onClick={HandleCart}
                    className="py-[8px] px-[10px] md:py-[12px] md:px-[18px] rounded-[24px] flex-shrink-0 bg-[#CA5834] text-white cursor-pointer"
                  >
                    Add to cart
                  </div>
                  {/* <button className="md:py-[2px] px-[16px]  md:px-[24px] lg:px-[30px] border border-[#CA5834] rounded-[24px] flex items-center">
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
                  </button> */}
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
