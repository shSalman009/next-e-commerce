import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Slide, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import Footer from "../components/Footer";
import Topbar from "../components/topbar/Topbar";
import UserContext from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);

  const router = useRouter();

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
  };

  useEffect(() => {
    const get = localStorage.getItem("cart");
    if (get) {
      setCart(JSON.parse(get));
    }

    router.events.on("routeChangeStart", () => {
      setProgress(20);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router.events]);

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
    <>
      <UserContext>
        <LoadingBar
          color="blue"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />

        <ToastContainer
          position="top-center"
          transition={Slide}
          autoClose={2000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Topbar addToCart={addToCart} cart={cart} />

        <Component
          {...pageProps}
          cart={cart}
          subTotal={subTotal}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
        <Footer />
      </UserContext>
    </>
  );
}

export default MyApp;
