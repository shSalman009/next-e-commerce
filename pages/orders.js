import React from "react";

export default function orders() {
  // can add dark and light mode :: toggle class dark and light

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl my-10 font-bold">My Orders</h2>
      <div className="overflow-x-auto relative my-5 rounded-md shadow-md">
        <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th scope="col" className="py-3 px-6">
                Color
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600 cursor-pointer">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">$2999</td>
            </tr>
            <tr className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600 cursor-pointer">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">Laptop PC</td>
              <td className="py-4 px-6">$1999</td>
            </tr>
            <tr className="bg-white light:bg-gray-800 hover:bg-gray-50 light:hover:bg-gray-600  cursor-pointer">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
