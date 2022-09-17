import mongoose from "mongoose";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import Product from "../model/Product";

const Context = createContext();

export const useCart = () => {
  return useContext(Context);
};

export default function CartContext({ children }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

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
    toast.success(" Add to cart successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    toast.error("1 Item removed from cart", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
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
    const copy = { ...cart };

    if (copy) {
      let total = 0;
      for (let item in copy) {
        total += copy[item].price * copy[item].qty;
      }
      setSubTotal(total);
    }
  }, [cart]);

  return (
    <Context.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, subTotal }}
    >
      {children}
    </Context.Provider>
  );
}
export async function getStaticProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const products = await Product.find();
  console.log(products);
  return {
    props: { products }, // will be passed to the page component as props
  };
}
