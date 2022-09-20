import React from "react";
import Form from "../components/checkout/form";
import Products from "../components/checkout/products";

export default function Checkout({ cart, subTotal }) {
  return (
    <>
      <div className="bg-gray-200 py-10 min-h-screen">
        <div className="container mx-auto">
          <div className=" p-4  leading-loose flex justify-evenly">
            <Products cart={cart} />
            <Form cart={cart} />
          </div>
        </div>
      </div>
    </>
  );
}
