import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Topbar from "../components/topbar/Topbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  const addToCart = (itemCode, qty, price, name, size, variant, img) => {
    console.log(itemCode, qty, price, name, size, variant);
    let newCart = { ...cart };
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant, img };
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
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
  };

  useEffect(() => {
    const get = localStorage.getItem("cart");
    if (get) {
      setCart(JSON.parse(get));
    }
  }, []);

  return (
    <>
      <Topbar addToCart={addToCart} cart={cart} />

      <Component
        {...pageProps}
        addToCart={addToCart}
        cart={cart}
        removeFromCart={removeFromCart}
      />
      <Footer />
    </>
  );
}

export default MyApp;
