import mongoose from "mongoose";
import React from "react";
import Order from "../../model/Order";
import Sidebar from "./sidebar";

export default function orders({ orders }) {
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
            {orders?.map((order) => (
              <tr
                onClick={() => {
                  handleClick(order._id);
                }}
                key={order._id}
                className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600 cursor-pointer"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white"
                >
                  {order.orderId}
                </th>
                <td className="py-4 px-6">{order.email}</td>
                <td className="py-4 px-6">${order.amount}.00</td>
                <td className="py-4 px-6">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  {
    data?.orders?.map((order) => (
      <tr
        onClick={() => {
          handleClick(order._id);
        }}
        key={order._id}
        className="bg-white border-b light:bg-gray-800 light:border-gray-700 hover:bg-gray-50 light:hover:bg-gray-600 cursor-pointer"
      >
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap light:text-white"
        >
          {order.orderId}
        </th>
        <td className="py-4 px-6">{order.email}</td>
        <td className="py-4 px-6">${order.amount}.00</td>
        <td className="py-4 px-6">{order.status}</td>
      </tr>
    ));
  }
}
export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  const orders = await Order.find();
  return {
    props: { orders: JSON.parse(JSON.stringify(orders)) },
  };
}
