import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toastError, toastSuccess } from "../components/Toast";

const Context = createContext();

export const useCart = () => {
  return useContext(Context);
};

export default function CartContext({ children }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const router = useRouter();

  const addToCart = (itemCode, qty, price, name, size, variant, img) => {
    let newCart = { ...cart };
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant, img };
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    toastSuccess("Add to cart successfully!");
  };

  const removeFromCart = (itemCode, qty) => {
    let newCart = { ...cart };
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));

    toastError("1 Item removed from cart");
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    const get = localStorage.getItem("cart");
    if (get) {
      setCart(JSON.parse(get));
    } else {
      setCart({});
    }
  }, [router.query]);

  useEffect(() => {
    // set total price
    const copy = { ...cart };
    if (copy) {
      let total = 0;
      for (let item in copy) {
        total += copy[item].price * copy[item].qty;
      }
      setSubTotal(total);
    }

    // set quantity
    let qty = 0;
    for (let item in cart) {
      qty += cart[item].qty;
    }
    setQuantity(qty);
  }, [cart]);

  return (
    <Context.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, subTotal, quantity }}
    >
      {children}
    </Context.Provider>
  );
}
