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

            <span className="text-center w-1/5 font-semibold text-sm">
              $.{cart[item].price}.00
            </span>
            <span className="text-center w-1/5 font-semibold text-sm">
              $.{cart[item].price * cart[item].qty}.00
            </span>
          </div>
        );
      })}

      {Object.keys(cart).length == 0 && (
        <div className="text-center">
          <h4 className="text-4xl font-semibold text-gray-400 ">
            Product Not Available
          </h4>
        </div>
      )}
    </div>
  );
}
