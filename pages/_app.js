import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingBar from "react-top-loading-bar";
import Layout from "../components/Layout";
import CartContext from "../context/CartContext";
import UserContext from "../context/UserContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(20);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
  }, [router.events]);

  return (
    <>
      <UserContext>
        <CartContext>
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
          <Layout Component={Component} pageProps={pageProps} />
        </CartContext>
      </UserContext>
    </>
  );
}

export default MyApp;
