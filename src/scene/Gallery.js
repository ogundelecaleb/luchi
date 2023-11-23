import React, { useState } from "react";
import api from "../api";
import { useQuery } from "@tanstack/react-query";

const Gallery = () => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");

  async function getImages(page, category) {
    const response = await api.getImages({ params: { page, category } });
    // console.log('products==>>', response);
    return response;
  }

  const imagesQuery = useQuery(['images', page, category], () =>
    getImages(page, category),
    {
      keepPreviousData: true, refetchOnWindowFocus: "always",
    }

  );

  async function getCategories() {
    const response = await api.getImageCategories();
    // console.log('categories==>>', response.data);
    return response.data;
  }

  const categoriesQuery = useQuery(['image-categories'], () =>
    getCategories(),
    {
      keepPreviousData: true, refetchOnWindowFocus: "always",
    }

  );
  return (
    <div className="">
      {" "}
      <div className="px-[16px] md:px-[24px] lg:px-[32px] py-[32px]">
        <h3 className="flex items-center text-[18px] md:text-[24px] lg:text-[28px] font-bold text-[#29361C] mb-[24px]">
          Our Gallery{" "}
          <img src="/hand.png" alt="hot food" className="h-[28px] " />
        </h3>
        <div className="mb-[24px] md:mb-[32px]">
          {categoriesQuery.isLoading ? (
            <h1>loading</h1>
          ) : (<ul className="flex overflow-x-auto gap-[8px] md:gap-[12px] pb-3">
            <li
              onClick={() => setCategory('')}
              className={`py-[4px] px-[18px] md:py-[8px] md:px-[18px] rounded-[24px] flex-shrink-0 ${category === ""
                ? "bg-[#CA5834] text-white"
                : "border border-[#CA5834] text-[#CA5834]"
                }  cursor-pointer`}>
              All
            </li>
            {categoriesQuery?.data?.map((cat) => (
              <li
                onClick={() => setCategory(cat.id)}
                key={cat.id}
                className={`py-[4px] px-[18px] md:py-[8px] md:px-[18px] rounded-[24px] flex-shrink-0 ${category === cat.id
                  ? "bg-[#CA5834] text-white"
                  : "border border-[#CA5834] text-[#CA5834]"
                  }  cursor-pointer`}>
                {cat.name}
              </li>))}

          </ul>)}
        </div>

        <div className="">

          {imagesQuery.isLoading ? (
            <h1>loading</h1>
          ) : (<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] mb-[50px] ">
            {imagesQuery?.data?.data?.map((prod) => (
              <div key={prod.id} className="flex flex-col w-full sm:max-w-[320px] md:max-w-[258px] rounded-lg">
                <img
                  src={prod.image}
                  alt="gallery"
                  className="rounded-lg "
                />

              </div>
            ))}
          </div>)}
        </div>

      </div>
    </div>
  );
};

export default Gallery;
