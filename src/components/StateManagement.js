import { enqueueSnackbar } from "notistack";
import React from "react";
const totalCart = () => {
  const cartData = localStorage.getItem("cart");

  // return JSON.parse(cartData).length;
  return 1;
};

function fetchCart({ setProducts, setTotal, setEmptycart }) {
  const cartData = localStorage.getItem("cart");
  const cartTotal = localStorage.getItem("total");
  if (JSON.parse(cartData) == null) {
    setProducts([]);
  } else {
    setProducts(JSON.parse(cartData));
  }

  console.log("fetch initiated");
  setTotal(JSON.parse(cartTotal));

  // if(JSON.parse(cartData).length === 0){
  //   setEmptycart(true);
  //   console.log("empty");
  // }else{
  //   setEmptycart(false);

  // }
  // totalCart()
}

function addToCart(product) {
  try {
    // Get the current cart from  localStorage
    //  localStorage.removeItem('cart');
    //    localStorage.multiRemove(['cart', 'total']);
    // return;
    const cart = localStorage.getItem("cart");

    let cartArray = [];
    // If the cart exists
    if (cart) {
      // Parse the cart JSON string to an array
      cartArray = JSON.parse(cart);
    }

    // console.log(cartArray)
    // return;
    // Check if the product is already in the cart
    const existingProduct = cartArray.find((p) => p.id === product.id);

    // If the product is already in the cart, just increase its quantity
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      // If the product is not in the cart, add it to the cart with the quantity 1
      cartArray.push({ ...product, quantity: 1 });
    }

    // Calculate the total of the cart
    const total = cartArray.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );

    // Convert the updated cart array back to JSON string
    // const updatedCart = JSON.stringify({ cartArray, total });

    // Save the updated cart back to  localStorage
    localStorage.setItem("cart", JSON.stringify(cartArray));
    localStorage.setItem("total", JSON.stringify(total));
    //  localStorage.multiSet([['cart', JSON.stringify(cartArray)], ['total', JSON.stringify(total)]]);
    enqueueSnackbar('Item Added Successfully to cart 🥘', { variant: 'success' });
    let itemArray = localStorage.getItem("cart");
    console.log(itemArray);
  } catch (error) {
    console.error(error);
  }
}

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
      // showSuccess("Cart Updated 😃");
      // fetchCart();
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

      // console.log(itemArray);
    }
  } catch (error) {
    console.log(error);
  }
}

const removeProduct = async (product, setCart) => {
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
      // showSuccess("Item removed 😃");
      fetchCart();
      // setCart(newCart);
      //    localStorage.setItem('cart', JSON.stringify(newCart));
      // calculateTotal();
    }
  } catch (error) {
    console.log(error);
  }
};

function clearCart() {
  localStorage.removeItem('cart');
  localStorage.removeItem('total');
}

export {
  removeProduct,
  decreaseQuantity,
  increaseQuantity,
  addToCart,
  fetchCart,
  totalCart,
  clearCart
};
