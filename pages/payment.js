import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CheckoutForm from "../components/checkoutForm";
import { toastError } from "../components/Toast";

export default function Payment({ subTotal, cart, clearCart }) {
  const [message, setMessage] = useState("");
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
        setMessage(res.message);
      }
    };

    fetctRes();
  }, []);

  useEffect(() => {
    if (message) {
      toastError(message);
    }
  }, [message]);

  return (
    <>
      <div className="container mx-auto my-10">
        <div className="shadow-md p-10 rounded-md">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm
                orderData={orderData}
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
