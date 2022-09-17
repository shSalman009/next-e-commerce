import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CheckoutForm from "../components/checkoutForm";

export default function Payment({ subTotal, cart, clearCart }) {
  const [clientSecret, setClientSecret] = useState("");

  const orderInfo = useRouter().query;

  const orderData = {
    ...orderInfo,
    cart,
    total: subTotal,
  };

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  useEffect(() => {
    const fetctRes = async () => {
      // Create PaymentIntent as soon as the page loads
      const response = await fetch("/api/payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: orderData,
        }),
      });
      const res = await response.json();

      if (res.success) {
        setClientSecret(res.clientSecret);
      } else {
        toast.error(res.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    };

    fetctRes();
  }, []);

  return (
    <>
      <div className="container mx-auto my-10">
        <div className="shadow-md p-10 rounded-md">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm
                orderId={orderData.orderId}
                totalPrice={subTotal}
                clearCart={clearCart}
              />
            </Elements>
          )}
        </div>
      </div>
    </>
  );
}
