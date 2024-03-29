import Link from "next/link";
import React from "react";

export default function cart({ cart, addToCart, removeFromCart, subTotal }) {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto mt-10">
        <div className="flex shadow-md my-10">
          <div className="w-3/4 bg-white px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {Object.keys(cart).length} Items
              </h2>
            </div>
            <div className="flex mt-10 mb-5">
              <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                Product Details
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Quantity
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Price
              </h3>
              <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                Total
              </h3>
            </div>
            {Object.keys(cart).length === 0 && (
              <div className="text-2xl font-semibold text-gray-400">
                Cart is empty
              </div>
            )}
            {Object.keys(cart).map((item) => {
              return (
                <div
                  key={item}
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                >
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={cart[item].img} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">
                        {cart[item].name}
                      </span>
                      <span className="text-red-500 text-xs">Apple</span>
                      <div
                        onClick={() => {
                          removeFromCart(item, cart[item].qty);
                        }}
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                      >
                        Remove
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <svg
                      onClick={() => {
                        removeFromCart(item, 1);
                      }}
                      className="fill-current text-gray-600 w-3 cursor-pointer"
                      viewBox="0 0 448 512"
                    >
                      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <div className="mx-2 border text-center w-8 select-none">
                      {cart[item].qty}
                    </div>

                    <svg
                      className="fill-current text-gray-600 w-3 cursor-pointer"
                      viewBox="0 0 448 512"
                      onClick={() => {
                        addToCart(item, 1);
                      }}
                    >
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    $.{cart[item].price}.00
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    $.{cart[item].price * cart[item].qty}.00
                  </span>
                </div>
              );
            })}

            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>

          <div id="summary" className="w-1/4 px-8 py-10">
            <h1 className="font-semibold text-2xl border-b pb-8">
              Order Summary
            </h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">
                Items {Object.keys(cart).length}
              </span>
              <span className="font-semibold text-sm">${subTotal}.00</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>${subTotal}.00</span>
              </div>

              <Link href={"/checkout"}>
                <button
                  disabled={Object.keys(cart).length == 0}
                  className="disabled:bg-indigo-300 disabled:cursor-not-allowed  bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                >
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
