/* eslint-disable */

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import Modal from "../../components/Modal";
import ModalLeft from "../../components/ModalLeft";
import { Bank, DocumentCopy, Trash } from "iconsax-react";
import { SearchNormal } from "iconsax-react";
// import { fetchCart } from "../../components/StateManagement";
// import { removeProduct } from "../../components/StateManagement";
import { clearCart, totalCart } from "../../components/StateManagement";
// import { increaseQuantity } from "../../components/StateManagement";
import { decreaseQuantity } from "../../components/StateManagement";
import { NumericFormat } from "react-number-format";
import { enqueueSnackbar } from "notistack";
import api from "../../api";
import CountdownTimer from "../../components/CountdownTimer";

const Topbar = ({ cart, setCart }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [isPaymentOptionOpen, setIsPaymentOptionOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [bizDetails, setBizDetails] = useState(true);
  const [summary, setSummary] = useState(false);
  const [completePaymentOpen, setCompletePaymentOpen] = useState(false);
  const [lga, setLga] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const items = useSelector(selectItems);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState("");
  const [emptycart, setEmptycart] = useState(false);
  const [withdeliveryTotal, setWithdeliveryTotal] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [comment, setComment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [paymentDetails, setPaymentDetails] = useState([]);

  useEffect(() => {
    fetchCart();

    const newtotal = total + 1200;
    setWithdeliveryTotal(newtotal);
  }, [total]);

  function fetchCart() {
    const cartData = localStorage.getItem("cart");
    const cartTotal = localStorage.getItem("total");

    if (JSON.parse(cartData) == null) {
      setProducts([]);
      setCart([])
    } else {
      setCart(JSON.parse(cartData));
      setProducts(JSON.parse(cartData));
      if (JSON.parse(cartData).length === 0) {
        setEmptycart(true);
        console.log("empty");
      } else {
        setEmptycart(false);
      }
    }

    setTotal(JSON.parse(cartTotal));
    console.log(cartData);
    console.log(products);

    // setPageLoading(false);
  }

  const removeProduct = async (product) => {
    console.log("hello");
    try {
      let cartData = localStorage.getItem("cart");
      if (cartData !== null) {
        cartData = JSON.parse(cartData);
        let newCart = cartData.filter((p) => p.id !== product);
        const existingProduct = cartData.find((p) => p.id === product);
        // const total = cartData.reduce((acc, curr) => acc - curr.price * curr.quantity, 0);
        const oldTotal = localStorage.getItem("total");
        const newTotal =
          +oldTotal - +existingProduct.price * +existingProduct.quantity;

        // Save the updated cart back to  localStorage
        localStorage.setItem("cart", JSON.stringify(newCart));
        localStorage.setItem("total", JSON.stringify(newTotal));
        enqueueSnackbar("Item removed 😃", { variant: 'success' });

        fetchCart();
        let Array = localStorage.getItem("cart", JSON.stringify(cartArray));
        setCart(Array);
        // setCart(newCart);
        //    localStorage.setItem('cart', JSON.stringify(newCart));
        // calculateTotal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  function increaseQuantity(productId) {
    try {
      // Get the current cart from  localStorage
      const cart = localStorage.getItem("cart");

      let cartArray = [];
      // If the cart exists
      if (cart) {
        // Parse the cart from  localStorage into a JavaScript object
        cartArray = JSON.parse(cart);
        // Find the index of the product in the cart
        const productIndex = cartArray.findIndex(
          (product) => product.id === productId
        );
        // Check if the product is in the cart
        // console.log(productIndex);
        if (productIndex !== -1) {
          // Increase the quantity of the product by 1
          cartArray[productIndex].quantity++;
          // Increase the total price by the product's price
          // cartArray[productIndex].total = cartArray[productIndex].total + cartArray[productIndex].price;
        }
        const oldTotal = localStorage.getItem("total");
        const newTotal = +oldTotal + +cartArray[productIndex].price;
        // console.log(newTotal);
        // return;
        // Save the updated cart to  localStorage
        //    localStorage.setItem('cart', JSON.stringify(cartArray));
        localStorage.setItem("cart", JSON.stringify(cartArray));
        localStorage.setItem("total", JSON.stringify(newTotal));
        enqueueSnackbar("Cart Updated 😃", { variant: 'success' });
        fetchCart();

        // let itemArray = localStorage.getItem(["cart", "total"]);
        // console.log(itemArray);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function decreaseQuantity(productId) {
    try {
      // Get the current cart from  localStorage
      const cart = localStorage.getItem("cart");

      let cartArray = [];
      // If the cart exists
      if (cart) {
        // Parse the cart from  localStorage into a JavaScript object
        cartArray = JSON.parse(cart);
        console.log(cartArray);
        // Find the index of the product in the cart
        const productIndex = cartArray.findIndex(
          (product) => product.id === productId
        );
        // Check if the product is in the cart
        // console.log(productIndex);

        if (productIndex !== -1 && cartArray[productIndex].quantity > 1) {
          // Increase the quantity of the product by 1
          cartArray[productIndex].quantity--;

          const oldTotal = localStorage.getItem("total");

          const newTotal = +oldTotal - +cartArray[productIndex].price;

          localStorage.setItem("cart", JSON.stringify(cartArray));
          localStorage.setItem("total", JSON.stringify(newTotal));
        } else {
          removeProduct(productId);
        }
        fetchCart();

        // console.log(itemArray);
        enqueueSnackbar("Cart Updated 😃", { variant: 'success' });
      }
    } catch (error) {
      console.log(error);
    }
  }

  const HandleModalOpen = () => {
    setIsOpen(true);
    fetchCart({ setProducts, setEmptycart, setTotal });
  };

  const HandleModalClose = () => {
    setIsOpen(false);
    setBizDetails(true);
    setSummary(false);
  };

  const HandleDetailsClose = () => {
    setIsDetailsModalOpen(false);
  };

  const HandleCheckout = () => {
    setIsOpen(false);
    setIsDetailsModalOpen(true);
  };

  const Handledelivery = (e) => {
    e.preventDefault();
    setBizDetails(false);
    setSummary(true);
  };
  const HandleChangeDescription = () => {
    setSummary(false);
    setBizDetails(true);
  };

  const HandleOptionOpen = () => {
    setIsDetailsModalOpen(false);

    setIsPaymentOptionOpen(true);
  };

  const HandleOptionClose = () => {
    setIsPaymentOptionOpen(false);
  };

  const HandleSuccessOpen = () => {
    setIsSuccessOpen(true);
    setCompletePaymentOpen(false);
    fetchCart();
  };

  const HandlSuccessClose = () => {
    setIsSuccessOpen(false);
  };

  const HandleCompletePaymentClose = () => {
    checkOrder();
    setCompletePaymentOpen(false);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    enqueueSnackbar('Account number succcessfully copied to clipboard', { variant: 'success' })
    // setCopySuccess(text);
    // setTimeout(() => {
    //   setCopySuccess("");
    // }, 3000);
  };

  const Lagos = [
    "Agege",
    "Ajeromi-Ifelodun",
    "Alimosho",
    "Amuwo-Odofin",
    "Apapa",
    "Badagry",
    "Epe",
    "Eti Osa",
    "Ibeju-Lekki",
    "Ifako-Ijaiye",
    "Ikeja",
    "Ikorodu",
    "Kosofe",
    "Lagos Island",
    "Lagos Mainland",
    "Mushin",
    "Ojo",
    "Oshodi-Isolo",
    "Shomolu",
    "Surulere",
  ];

  async function checkout(e) {
    e.preventDefault();
    if (!firstName) {
      enqueueSnackbar('Please input your first name', { variant: 'error' })
      return
    }

    if (!lastName) {
      enqueueSnackbar('Please input your last name', { variant: 'error' })
      return
    }

    if (!email) {
      enqueueSnackbar('Please input your email', { variant: 'error' })
      return
    }
    if (!phoneNumber) {
      enqueueSnackbar('Please input your phone number', { variant: 'error' })
      return
    }
    if (!address) {
      enqueueSnackbar('Please input your address', { variant: 'error' })
      return
    }

    if (!lga) {
      enqueueSnackbar('Please input your lga', { variant: 'error' })
      return
    }


    setIsLoading(true);

    // const idempotentKeyDetails = {
    //   title, amount: investment.unit_value * +unit, unit, plan_id: investment.id,
    // };


    try {
      const response = await api.checkout({
        products, first_name: firstName, last_name: lastName, email, phone: phoneNumber, total: withdeliveryTotal, shipping_fee: 1200, notes: note, address, city: lga, state: "Lagos", amount: total

      });

      setIsLoading(false);
      console.log('checkout===>', response);
      // showSuccess(response.message)
      setPaymentDetails(response.data)
      enqueueSnackbar(response.message, { variant: 'success' })

      setCompletePaymentOpen(true);
      setIsPaymentOptionOpen(false);
      // navigation.navigate(routes.MYINVESTMENTS);
    } catch (error) {
      console.log(error.message);
      enqueueSnackbar(error.message, { variant: 'error' })
      // showError(error.message);
      // setModalVisible(true)
      setIsLoading(false);
    }
  }

  async function checkOrder() {
    try {
      const response = await api.checkOrder({
        order_id: paymentDetails?.order_id,

      });
      if (response.paid) {
        HandleSuccessOpen()
        enqueueSnackbar('Checkout Successful', { variant: 'success' })
        clearCart()
        fetchCart();
      }
    } catch (error) {

    }

  }

  return (
    <div className="border-b border-b-[#E4E7EC] w-full py-3 px-6">
      <div className="flex  items-center justify-between  gap-[16px]  ">
        <div className="flex items-center">
          {/* <button
          class="h-12 w-12 bg-[#CA5834] relative px-3 py-3 rounded-full lg:hidden mr-2"
          onClick={setIsSidebar}
        > */}

          <img
            className=" h-[57px]  border-[#E2E8F0] md:hidden "
            src="./logo.png"
            alt="logo"
          />
          {/* <div className=" hidden md:flex px-3 py-1 rounded-[40px] cursor-pointer md:w-[400px] lg:w-[480px]  bg-white items-center">
            <SearchNormal className="h-[16px] md:h-[16px]" color="#000" />
            <input
              placeholder="search for products"
              className="flex-1 focus:border-0 focus:outline-none border-0 "
            />{" "}
          </div> */}

          {/* </button>{" "} */}
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
                {cart.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" md:hidden flex px-3 mt-3 py-1 rounded-[40px] cursor-pointer md:w-[400px] lg:w-[480px]  bg-white items-center">
        <SearchNormal className="h-[16px] md:h-[16px]" color="#000" />
        <input
          className="flex-1 focus:border-0 focus:outline-none border-0 "
          placeholder="search for products"
        />{" "}
      </div> */}

      {/* Create filter Modal */}
      <Modal isOpen={isDetailsModalOpen} onClose={HandleDetailsClose}>
        <div className="inline-block overflow-hidden text-left relative align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle min-w-[380px] sm:max-w-[420px] sm:w-[420px] md:max-w-[713px] md:w-full ">
          <div className="py-4 flex justify-end px-5 ">
            <svg
              onClick={HandleDetailsClose}
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
            <div className="min-w-[280px] sm:max-w-[420px] sm:w-[420px] md:max-w-[713px] md:w-full">
              <div className="text-center mb-[28px] md:mb-[32px] w-full">
                {" "}
                <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-[#29361C] font-medium">
                  Delivery Details
                </h3>
              </div>
              <div className="px-5  ">
                <form onSubmit={Handledelivery}>
                  <div>
                    <div className="flex items-center flex-col md:flex-row gap-[24px] justify-between mb-[24px]">
                      <div className="w-full md:w-[48%]">
                        <label className="text-black  text-[10px] leading-[21px] tracking-[0.2px] font-bold mb-[7px]">
                          First Name
                        </label>
                        <input
                          id="c_number"
                          type="text"
                          className="block w-full px-2 py-[5px] md:px-4 md:py-[9px]  placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                          placeholder=""
                          autoFocus
                          required
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
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
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="flex items-center flex-col md:flex-row gap-[24px] justify-between mb-[24px]">
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
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
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
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
                          value="Lagos"
                          disabled
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
                        <select
                          type="text"
                          className="block w-full px-2 py-[5px] md:px-4 md:py-[9px] placeholder:text-[#A0AEC0] placeholder:font-normal font-medium text-[#1A202C] text-[16px] leading-[24px] tracking-[0.3px] bg-white border border-[#E2E8F0]  rounded-md focus:outline-none focus:ring-[#124072] focus:border-[#124072] sm:text-sm"
                          autoFocus
                          required
                          value={lga}
                          onChange={(e) => setLga(e.target.value)}
                        >
                          <option value="">Select LGA </option>
                          {Lagos.map((currency, index) => (
                            <option key={index} value={currency}>
                              {currency}
                            </option>
                          ))}
                        </select>
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
                      onChange={(e) => setNote(e.target.value)}
                      autoFocus
                    />
                  </div>
                  <button

                    type="submit"
                    className="bg-[#CA5834] text-white rounded-[40px] text-center w-full py-[10px] mb-[32px] flex items-center justify-center"
                  >
                    Save and continue
                    {isLoading && (<svg
                      class="ml-4 w-6 h-6 text-white animate-spin"
                      xmlns="http://www.w3.org/2000/svg" fill="none"
                      viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12"
                        r="10" stroke="currentColor" stroke-width="4">
                      </circle>
                      <path class="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                      </path>
                    </svg>)}
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
                    <p className="text-[#29361C] font-medium">{firstName}</p>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3>Last Name</h3>
                    <p className="text-[#29361C] font-medium">{lastName}</p>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3>Email Address</h3>
                    <p className="text-[#29361C] font-medium">{email}</p>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3>Phone Number</h3>
                    <p className="text-[#29361C] font-medium">{phoneNumber}</p>
                  </div>
                  <div className="flex items-center justify-between  gap-2mb-1">
                    <h3 className="mr-2">Address</h3>
                    <div className="max-w-[60%]">
                      <p className="text-[#29361C] font-medium text-left">
                        {address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3>LGA</h3>
                    <p>{lga}</p>
                  </div>

                  <button
                    onClick={HandleChangeDescription}
                    className="text-center text-[#CA5834] "
                  >
                    <p>Change Delivery Details</p>
                  </button>
                </div>

                <div className="flex flex-col gap-3 mb-[80px] md:mb-[50px] ">
                  {" "}
                  <div className="flex items-center justify-between mb-1">
                    <h3>SubTotal</h3>
                    <p className="text-base lg:text-lg">₦{total}</p>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3>Delivery Fee</h3>
                    <p className="text-base lg:text-lg"> ₦1,200</p>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <h3>Total Fee</h3>
                    <p className="text-base lg:text-lg font-semibold">
                      ₦{withdeliveryTotal}
                    </p>
                  </div>
                </div>
                <button
                  onClick={HandleOptionOpen}
                  className="bg-[#CA5834] text-white rounded-[40px] text-center w-full py-[10px] mb-[32px]"
                >
                  Continue to pay
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
      <ModalLeft isOpen={isOpen} onClose={HandleModalClose}>
        <div className="p-[24px] h-full">
          <div className="flex pb-2 border-b mb-3">
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
            <div className="flex-1 text-center">
              <p className="text-[#29361C] text-[18px] md:text-[20px] lg:text-[24px] font-medium">
                View Cart
              </p>
            </div>
          </div>

          {products.length != 0 ? (
            <div className="flex flex-col  justify-between h-full">
              <div>
                {products.map((product) => (
                  <div key={product.id} className="flex mb-2 ">
                    <img
                      // src="/egusi.png"
                      src={(product?.images && typeof product?.images === 'object') && product?.images[Object.keys(product?.images)[0]]?.original_url}
                      alt="product"
                      className="h-[50px] md:h-[78px] mr-[16px]"
                    />{" "}
                    <div className="flex justify-between flex-col">
                      <p>{product.name}</p>
                      <div className="flex items-center">
                        <div
                          onClick={() => decreaseQuantity(product.id)}
                          className="h-4 w-4 flex justify-center items-center rounded-full border border-slate-300  cursor-pointer hover:scale-150"
                        >
                          <p className="">-</p>
                        </div>
                        <p className="py-2 px-3 cursor-pointer text-[16] md:text-[18px] font-bold">
                          {product.quantity}
                        </p>
                        <div
                          onClick={() => increaseQuantity(product.id)}
                          className="h-4 w-4 flex justify-center items-center rounded-full border border-slate-300  cursor-pointer hover:scale-150"
                        >
                          <p className="">+</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <NumericFormat
                        value={product?.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₦'}
                        decimalScale={0}
                        fixedDecimalScale={true}
                        renderText={value => <p className="self-end text-[#CA5834] font-bold">
                          {value}
                        </p>}
                      />

                      <div
                        onClick={() => removeProduct(product.id, setCart)}
                        className="cursor-pointer h-6 w-6 flex justify-center items-center rounded-full border border-slate-300 self-end "
                      >
                        <Trash size={18} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* checkout Bottom section */}
              <div>
                <div className="flex flex-col gap-2 mb-3">
                  <div className="flex justify-between items-center">
                    <p className="text-[#232323]">Menu Order</p>{" "}
                    <button className="bg-[#EDFFDC] text-black rounded-[24px] text-[14px] py-[6px] px-[12px]">
                      {products.length} orders
                    </button>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#232323]">Delivery Fee</p>{" "}
                    <p className="text-[#232323] font-bold"> ₦ 1,200.00 </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#232323]">SubTotal</p>{" "}
                    <NumericFormat
                      value={total}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₦'}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      renderText={value => <p className="text-[#232323] font-bold">
                        {value}
                      </p>}
                    />
                    {/* <p className="text-[#232323] font-bold">
                      {" "}
                      ₦ {total}{" "}
                    </p> */}
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-[#232323]">Total</p>{" "}
                    <NumericFormat
                      value={withdeliveryTotal}
                      displayType={'text'}
                      thousandSeparator={true}
                      prefix={'₦'}
                      decimalScale={2}
                      fixedDecimalScale={true}
                      renderText={value => <p className="text-[#232323] font-bold">
                        {value}
                      </p>}
                    />
                    {/* <p className="text-[#232323] font-bold">
                      {" "}
                      ₦ {withdeliveryTotal}{" "}
                    </p> */}
                  </div>
                </div>
                <button
                  onClick={HandleCheckout}
                  className="bg-[#CA5834] text-white rounded-[40px] text-center w-full py-[10px] mb-[32px]"
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="'flex justify-center">
              <p className="text-center text-[20px] py-5">
                Your Cart is Empty!!
              </p>
              <img
                src="/emptycart.png"
                alt="empty cart"
                className="mx-auto font-semibold h-[120px] mt-[80px]"
              />
            </div>
          )}
        </div>
      </ModalLeft>

      <Modal isOpen={isPaymentOptionOpen} onClose={HandleOptionClose}>
        <div className="inline-block overflow-hidden text-left relative align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle min-w-[280px] sm:max-w-[360px] sm: md:max-w-[713px] md:w-full">
          <div className="py-4 flex justify-end px-5 ">
            <svg
              className="cursor-pointer"
              onClick={HandleOptionClose}
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
          </div>
          <div className="text-center mb-[28px] md:mb-[32px]">
            {" "}
            <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-[#29361C] font-medium">
              Payment Methods
            </h3>
          </div>
          <form className="px-5 ">
            <div className="flex gap-2 w-full md:w-[80%] lg:w-[65%] mb-[36px] md:mb-[40px] lg:mb-[48px]">
              <div>
                <input disabled type="radio" className="align-top" />
              </div>{" "}
              <div>
                <div className="flex  gap-1">
                  <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-medium text-black">
                    Pay with Card
                  </h2>
                  <button className="bg-[#EDFFDC] text-black rounded-[24px] text-[14px] py-[6px] px-[12px]">
                    coming soon
                  </button>
                </div>
                <p className="text-[#545454] text-[14px] md:text-[16px]">
                  Our secure payment gateway enables you to conveniently pay for
                  your purchases using your credit or debit card.
                </p>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-[80%] lg:w-[65%] mb-[48px] md:mb-[92px]">
              <div>
                <input type="radio" checked className="" />
              </div>

              <div>
                <h2 className="text-[18px] md:text-[20px] lg:text-[24px] font-medium text-black">
                  Pay with Bank Transfer
                </h2>

                <p className="text-[#545454] text-[14px] md:text-[16px]">
                  Our secure payment gateway enables you to conveniently pay for
                  your purchases using our bank transfer.
                </p>
              </div>
            </div>
            <button
              type="button"
              disabled={isLoading}
              className="mt-[80px] bg-[#CA5834] text-white rounded-[40px] text-center w-full py-[10px] mb-[32px] flex items-center justify-center"
              onClick={checkout}
            >
              Make Payment
              {isLoading && (<svg
                class="ml-4 w-6 h-6 text-white animate-spin"
                xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12"
                  r="10" stroke="currentColor" stroke-width="4">
                </circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>)}
            </button>
          </form>
        </div>
      </Modal>
      <Modal isOpen={completePaymentOpen} onClose={HandleCompletePaymentClose}>
        <div className="inline-block overflow-hidden text-left relative align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle min-w-[280px] sm:max-w-[360px] sm: md:max-w-[713px] md:w-full">
          <div className="py-4 flex justify-end px-5 ">
            <svg
              className="cursor-pointer"
              onClick={HandleCompletePaymentClose}
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
          </div>
          <div className="text-center mb-[25px] md:mb-[28px]">
            {" "}
            <h3 className="text-clip    text-[18px] md:text-[20px] lg:text-[24px] text-[#29361C] font-medium">
              Pay Now
            </h3>
          </div>
          <div className="px-5 flex flex-col justify-center mb-[80px]">
            <div className="max-w-[411px] mx-auto">
              {/* <img
                src="/success.png"
                alt="food"
                className="h-[60px] md:h-[111px] mb-[24px] md:mb-[36px] lg:mb-[48px]
                   mx-auto"
              /> */}
              <NumericFormat
                value={paymentDetails?.amount}
                displayType={'text'}
                thousandSeparator={true}
                // prefix={'₦'}
                decimalScale={0}
                fixedDecimalScale={true}
                renderText={value => <h3 className="text-center mb-[18px] font-semibold text-[#000] md:mb-[20px] lg:mb-[20px]">
                  Transfer NGN {value} to {paymentDetails?.bank} Dynamic Account
                </h3>}
              />

              <div className="bg-[#FAFAFA] rounded-[8px] p-6 mb-5  ">
                <h2 className="text-[#AFAFAF] text-[14px]  font-normal mb-2 ">
                  BANK NAME
                </h2>
                <h2 className="text-[#000] text-[16px]  font-semibold mb-5  ">
                  {paymentDetails?.bank} MIcrofinance Bank
                </h2>
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <h2 className="text-[#AFAFAF] text-[14px]  font-normal mb-2 ">
                      ACCOUNT NUMBER
                    </h2>
                    <h2 className="text-[#000] text-[16px]  font-semibold   ">
                      {paymentDetails?.account_number}
                    </h2>
                  </div>
                  <DocumentCopy className="cursor-pointer" onClick={() => copyToClipboard(paymentDetails?.account_number)} variant="Linear" color="#838383" size={20} />
                </div>
                <h2 className="text-[#AFAFAF] text-[14px]  font-normal mb-2 ">
                  AMOUNT
                </h2>
                <NumericFormat
                  value={paymentDetails?.amount}
                  displayType={'text'}
                  thousandSeparator={true}
                  // prefix={'₦'}
                  decimalScale={0}
                  fixedDecimalScale={true}
                  renderText={value => <h2 className="text-[#000] text-[16px]  font-semibold   ">
                    NGN {value}
                  </h2>}
                />

              </div>
              <p className="text-center mb-[14px] md:mb-[20px] lg:mb-[24px]">
                Search for {paymentDetails?.bank} on your bank app or via ussd. Use this account for this transaction only
              </p>{" "}
              <Bank variant="Linear" color="#838383" size={24} className="justify-center mx-auto mb-4" />
              <p className="text-center text-[12px] mb-2">
                Expires in
              </p><CountdownTimer targetTime={paymentDetails?.valid_till} orderId={paymentDetails?.order_id} HandleSuccessOpen={HandleSuccessOpen} HandleCompletePaymentClose={HandleCompletePaymentClose} fetchCart={fetchCart} />
              <Link onClick={HandleCompletePaymentClose} to="/track">
                <div className="w-full flex justify-center">
                  <button className="bg-[#CA5834] text-white rounded-[40px] w-[70%] text-center mx-auto py-[10px] mb-[32px]">
                    I have sent the money
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
      <Modal isOpen={isSuccessOpen} onClose={HandlSuccessClose}>
        <div className="inline-block overflow-hidden text-left relative align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle min-w-[280px] sm:max-w-[360px] sm: md:max-w-[713px] md:w-full">
          <div className="py-4 flex justify-end px-5 ">
            <svg
              className="cursor-pointer"
              onClick={HandlSuccessClose}
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
          </div>
          <div className="text-center mb-[28px] md:mb-[32px]">
            {" "}
            <h3 className="text-clip    text-[18px] md:text-[20px] lg:text-[24px] text-[#29361C] font-medium">
              Order Successful
            </h3>
          </div>
          <div className="px-5 flex flex-col justify-center mb-[80px]">
            <div className="max-w-[411px] mx-auto">
              <img
                src="/success.png"
                alt="food"
                className="h-[60px] md:h-[111px] mb-[24px] md:mb-[36px] lg:mb-[48px]
                   mx-auto"
              />
              <h3 className="text-center mb-[18px] md:mb-[20px] lg:mb-[24px]">
                Your order is on its way!
              </h3>
              <p className="text-center mb-[18px] md:mb-[20px] lg:mb-[24px]">
                We have sent your order’s receipt to {email}. Kindly
                check your mail to see your order’s details.
              </p>{" "}
              <Link onClick={HandlSuccessClose} to="/track">
                <div className="w-full flex justify-center">
                  <button className="bg-[#CA5834] text-white rounded-[40px] w-[70%] text-center mx-auto py-[10px] mb-[32px]">
                    Track Order
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Topbar;
