import React from "react";
import { useCart } from "../context/CartContext";
import Footer from "./Footer";
import Topbar from "./topbar/Topbar";

export default function Layout({ Component, pageProps }) {
  const { cart, addToCart, removeFromCart, clearCart, subTotal } = useCart();

  return (
    <>
      <Topbar />
      <Component
        {...pageProps}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />

      <Footer />
    </>
  );
}
