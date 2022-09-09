import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import CheckoutForm from "../components/checkoutForm";

export default function Payment({ cart, subTotal }) {
  const [clientSecret, setClientSecret] = React.useState("");

  const buyerInfo = useRouter().query;

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
          items: [{ id: "xl-tshirt" }],
          buyerInfo: buyerInfo,
        }),
      });
      const data = await response.json();

      setClientSecret(data.clientSecret);
    };
    fetctRes();
  }, []);

  return (
    <>
      <div className="container mx-auto my-10">
        <div className="shadow-md p-10 rounded-md">
          {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm buyerInfo={buyerInfo} />
            </Elements>
          )}
        </div>
      </div>
    </>
  );
}