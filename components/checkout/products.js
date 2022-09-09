import React from "react";

export default function Products({ cart }) {
  return (
    <div className="w-1/2">
      {Object.keys(cart).map((item) => {
        return (
          <div
            key={item}
            className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
          >
            <div className="flex w-2/5">
              <div className="w-20">
                <img
                  className="h-24"
                  src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">{cart[item].name}</span>
                <span className="text-red-500 text-xs">Apple</span>
                <div
                  onClick={() => {
                    removeFromCart(item, cart[item].qty);
                    console.log(cart);
                  }}
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer"
                >
                  Remove
                </div>
              </div>
            </div>
            {/* <div className="flex justify-center w-1/5">
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
        </div> */}
            <span className="text-center w-1/5 font-semibold text-sm">
              $.{cart[item].price}.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              $.{cart[item].price * cart[item].qty}.00
            </span>
          </div>
        );
      })}
    </div>
  );
}
