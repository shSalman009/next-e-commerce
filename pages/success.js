import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

export default function Success() {
  const { query } = useRouter();

  return (
    <div className="bg-wj-100 h-screen">
      <div className="container mx-auto">
        <div className="bg-white p-6  md:mx-auto mt-20 shadow-md">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Payment Successful!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for purchase our product.
            </p>
            <p> Have a great day</p>
            <div className="py-10 flex items-center justify-center space-x-4">
              <Link href={"/"}>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-2">
                  <AiOutlineHome /> Go Home
                </button>
              </Link>
              <Link href={`order?id=${query.id}`}>
                <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Order Details &rarr;
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
