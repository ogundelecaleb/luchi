import { SearchNormal } from "iconsax-react";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";
import api from "../api";

const Track = () => {
  const [reference, setReference] = useState('');
  const [order, setOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function trackOrder(e) {
    e.preventDefault();
    if (!reference) {
      enqueueSnackbar('Please input your tracking id', { variant: 'error' })
      return
    }
    try {
      setIsLoading(true)
      const response = await api.trackOrder({
        number: reference,

      });
      // if (response.paid) {
      setOrder(response.data)
      enqueueSnackbar('Order fetched successfullly', { variant: 'success' })
      setIsLoading(false)
      // }
    } catch (error) {
      setIsLoading(false)
      enqueueSnackbar(error.message, { variant: 'error' })
    }

  }
  return (
    <div className="h-screen">
      {" "}
      <div className="px-[16px] md:px-[24px] lg:px-[32px] py-[32px] ">
        <h3 className="flex items-center text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#29361C] mb-[24px]">
          Track your Food Order{" "}
          <img src="/hotfood.png" alt="hot food" className="h-[28px] " />
        </h3>
        <p className="mb-[20px]">Please enter your tracking number</p>

        <div className="flex px-3 py-1 rounded-[40px] cursor-pointer w-full md:w-[70%] lg:w-[50%] bg-white items-center"><input
          onChange={(e) => setReference(e.target.value)}
          // onChange={(e) => setReference(e.target.value)}
          className="flex-1 focus:border-0 focus:outline-none border-0 " /> <div onClick={trackOrder} className="h-[36px] w-[36px] md:h-[48px] md:w-[48px] bg-[#CA5834] rounded-full flex justify-center items-center">
            {isLoading ? (<svg
              class=" w-6 h-6 text-white animate-spin"
              xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12"
                r="10" stroke="currentColor" stroke-width="4">
              </circle>
              <path class="opacity-75" fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
              </path>
            </svg>) : <SearchNormal className="h-[18px] md:h-[24px]" color="#fff" />}

          </div></div>
      </div>
      {order && (<div className="md:mx-8 mx-4">
        <h2 className="mb-6 text-[24px] leading-[24px] font-medium text-[#000] ">Tracking Details</h2>
        {order.items.map((item) => (
          <h3 key={item.id} className="mb-4 text-[20px] leading-[20px] font-medium text-[#000] ">{item.quantity} x {item.product.name}</h3>
        ))}

        <h3 className="mb-8 text-[16px] leading-[16px] font-normal text-[#545454] ">Tracking ID: #{order.number}</h3>
        <div className="flex pb-10 border-b border-b-[#545454] border-dashed mb-7">
          <div className="rounded-full h-4 w-4 bg-[#29361C] mr-4 md:mr-6 "></div>
          <div>
            <h3 className="mb-4 text-[16px] leading-[16px] font-normal text-[#545454] ">Delivered to:</h3>
            <h3 className="mb-4 text-[20px] leading-[20px] font-medium text-[#000] ">{order.address.street}</h3>
          </div>
        </div>
        <h3 className="mb-4 text-[20px] leading-[20px] font-medium text-[#000] "><b className="text-[#545454] ">Status:</b> Your order is {order.status}</h3>
      </div>)}
    </div>
  );
};

export default Track;
