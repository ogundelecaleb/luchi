import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";
import { addToCart } from "../components/StateManagement";
import { fetchCart } from "../components/StateManagement";
import api from "../api";
import { useQuery } from "@tanstack/react-query";
import { NumericFormat } from "react-number-format";
import { SearchNormal } from "iconsax-react";
import ProductList from "../components/ProductsByCategoriesList";

const Menu = ({ }) => {
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState("");
  const [emptycart, setEmptycart] = useState(false);
  const [cart, setCart] = useOutletContext()
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");

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




  async function getProducts(page, category, name) {
    const response = await api.getProducts({ params: { page, category, name } });
    // console.log('products==>>', response);
    return response;
  }

  const productsQuery = useQuery(['products', page, category, name], () =>
    getProducts(page, category, name),
    {
      keepPreviousData: true, refetchOnWindowFocus: "always",
    }

  );

  async function getCategories() {
    const response = await api.getCategories();
    console.log('categories==>>', response.data);
    return response.data;
  }

  const categoriesQuery = useQuery(['categories'], () =>
    getCategories(),
    {
      keepPreviousData: true, refetchOnWindowFocus: "always",
    }

  );

  // const [totalPrice, setTotalPrice] = useState(product.price);
  const HandleCart = () => {
    // addToCart(product);
    addToCart(selectedProduct);
    HandleModalClose();
    const cart = localStorage.getItem("cart");
    setCart(JSON.parse(cart))
    // addItemToBasket()
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
        <div className=" hidden md:flex px-3 py-1 rounded-[40px] cursor-pointer md:w-[400px] lg:w-[480px]  bg-white items-center mb-7">
          <SearchNormal className="h-[16px] md:h-[16px]" color="#000" />
          <input
            placeholder="search for products"
            className="flex-1 focus:border-0 focus:outline-none border-0 "
            onChange={(e) => setName(e.target.value)}
          />{" "}
        </div>
        <div className="mb-[24px] md:mb-[32px]">
          {categoriesQuery.isLoading ? (
            <h1 className="text-[#CA5834]">loading...</h1>
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

          {productsQuery.isLoading ? (
            <h1 className="text-[#CA5834]">loading</h1>
          ) : (<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[20px] mb-[50px] ">
            {productsQuery?.data?.data?.map((prod) => (
              <div key={prod.id} className="flex flex-col w-full sm:max-w-[320px] md:max-w-[258px] rounded-lg">
                <img
                  src={prod?.images[Object.keys(prod.images)[0]]?.original_url}
                  // src="/jollof.png"
                  alt="product"
                  className="rounded-tl-lg rounded-tr-lg h-[124px]"
                />
                <div className="p-[16px] md:p-[16px] lg:p-[16px] bg-[#FFF] rounded-br-lg rounded-bl-lg">
                  <div className="pb-[24px] pd:mb-[40px] lg:pb-[48px]">
                    <h3 className="text-[18px] md:text-[20px] lg:text-[24px] text-black mb-[8px] font-bold">
                      {prod.name}
                    </h3>

                    {prod?.categories?.map((category) => (<p className="text-[14px] md:text-[16px] text-[#29361C]">
                      {category.name}
                    </p>))}
                  </div>

                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center ">
                    <div className="w-[30%]">
                      <NumericFormat
                        value={prod.price}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'₦'}
                        decimalScale={0}
                        fixedDecimalScale={true}
                        renderText={value => <h2 className="text-[18px] md:text-[18px] lg:text-[20px] text-[#CA5834] font-bold">
                          {value}
                        </h2>}
                      />
                      {/* <h2 className="text-[18px] md:text-[18px] lg:text-[20px] text-[#CA5834] font-bold">
                        ₦{prod.price}
                      </h2> */}
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
          </div>)}
        </div>
      </div>
      {/* More details on dish */}
      <Modal isOpen={isOpen} onClose={HandleModalClose}>
        <div className="inline-block overflow-hidden text-left relative align-bottom transition-all transform bg-[white] rounded-2xl shadow-xl sm:my-8 sm:align-middle w-full sm:max-w-[550px] sm:w-full">
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
              src={(selectedProduct.images && typeof selectedProduct.images === 'object') && selectedProduct?.images[Object.keys(selectedProduct?.images)[0]]?.original_url}
              alt="egusi"
              className="w-full h-[217px] rounded-lg mb-[24px]"
            />
            <div className="">
              <div className="flex justify-between border-b border-[#CA5834] border-dashed pb-[16px] md:pb-[20px] lg:pb-[24px] ">
                <div className="">
                  <h3 className="text-[18px] md:text-[24px] lg:text-[32px] text-black mb-[8px] font-bold">
                    {selectedProduct?.name}
                  </h3>
                  {selectedProduct?.categories?.map((category) => (<p className="text-[14px] md:text-[16px] text-[#29361C]">
                    ({category.name})
                  </p>))}
                  {/* <p className="text-[14px] md:text-[16px]">(Soup) </p> */}
                </div>
                <NumericFormat
                  value={selectedProduct?.price}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'₦'}
                  decimalScale={0}
                  fixedDecimalScale={true}
                  renderText={value => <h2 className="text-[18px] md:text-[20px] lg:text-[24px] text-[#CA5834] font-bold ">
                    {value}
                  </h2>}
                />

              </div>
              <div className="mb-[20px]">
                <h3 className="text-[16px] lg:text-[18px] font-medium">
                  Description:
                </h3>
                <div className=" flex justify-between items-center  border-b border-[#CA5834] border-dashed pb-[16px] md:pb-[20px] lg:pb-[24px] mb-[16px] md:mb-[20px] lg:mb-[24px]">
                  <p className="w-[70%] lg:[60%]">
                    {selectedProduct?.description}
                  </p>

                </div>
                <ProductList data={selectedProduct?.sellWithProducts} setCart={setCart} cart={cart} />
              </div>
              
              <div className="mt-[36px] md:mt-[48px] flex items-center justify-between  mb-[42px] md:mb-[56px] lg:mb-[72px] ">
                <div>
                  {/* <h3 className="text-[16px] lg:text-[18px] font-medium">
                    Total Order: ₦{totalPrice}
                  </h3> */}
                </div>
                <div className="flex flex-col-reverse items-center gap-2 md:flex-row">
                  <div
                    onClick={HandleCart}
                    className="py-[8px] px-[10px] md:py-[12px] md:px-[18px] rounded-[24px] flex-shrink-0 bg-[#CA5834] text-white cursor-pointer"
                  >
                    Add to cart
                  </div>
                  
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
