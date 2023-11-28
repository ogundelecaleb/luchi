import React from "react";
import { NumericFormat } from "react-number-format";
import { addToCart } from "./StateManagement";

const ProductList = ({ data, setCart, cart }) => {
  // Create a mapping of categories to products
  const groupedProducts = data?.reduce((acc, product) => {
    product.categories.forEach((category) => {
      acc[category.name] = acc[category.name] || [];
      acc[category.name].push(product);
    });
    return acc;
  }, {});
  const isProductInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };
  const HandleCart = (product) => {
    // addToCart(product);
    addToCart(product);
    // HandleModalClose();
    const carti = localStorage.getItem("cart");
    setCart(JSON.parse(carti));
    // console.log('Cart==>>', cart);
    // addItemToBasket()
  };

  return (
    <div>
      {/* Map through the categories */}
      {groupedProducts &&
        typeof groupedProducts === "object" &&
        Object.entries(groupedProducts).map(([category, products]) => (
          <div key={category}>
            <p className="mb-[16px] lg:mb-[20px] font-medium">{category}</p>
            <div className="flex flex-col gap-2 mb-[28px]">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between"
                >
                  <div className="flex gap-2">
                    <input
                      checked={isProductInCart(product.id)}
                      onChange={() => HandleCart(product)}
                      type="checkbox"
                    />{" "}
                    <p>{product.name}</p>
                  </div>
                  <div>
                    <NumericFormat
                      value={product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"₦"}
                      decimalScale={0}
                      fixedDecimalScale={true}
                      renderText={(value) => (
                        <h3 className="text-[14px] md:text-[16px] lg:text-[18px] text-[#CA5834] font-bold">
                          {value}
                        </h3>
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
