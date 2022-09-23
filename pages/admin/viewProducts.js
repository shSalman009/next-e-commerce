import mongoose from "mongoose";
import React from "react";
import Product from "../../model/Product";
import Sidebar from "./sidebar";

export default function viewProducts({ products }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" p-5 rounded-md shadow-md w-full">
        <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product
              </th>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-6">
                Quantity
              </th>
              <th scope="col" className="py-3 px-6">
                Peice
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr
                key={product._id}
                className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600 cursor-pointer"
              >
                <th
                  scope="row"
                  className="inline-flex items-center gap-2 py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white"
                >
                  <div className="w-10">
                    <img className="h-12" src={product.image} alt="" />
                  </div>
                  <span className="font-semibold text-md">{product.title}</span>
                </th>
                <td className="py-4 px-6">{product.category}</td>
                <td className="py-4 px-6">{product.availibleQty}</td>
                <td className="py-4 px-6">${product.price}.00</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const products = await Product.find();
  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  };
}
