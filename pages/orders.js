import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Orders() {
  // can add dark and light mode :: toggle class dark and light
  const [data, setData] = useState([]);

  const router = useRouter();
  const handleClick = (id) => {
    router.push(`/order?id=${id}`);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      const user = localStorage.getItem("user");

      if (user) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_HOST}/api/getOrders`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: user,
          }
        );

        const res = await response.json();

        setData(res);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl my-10 font-bold">My Orders</h2>
      <div className="overflow-x-auto relative my-5 rounded-md shadow-md">
        <table className="w-full text-sm text-left text-gray-500 light:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 light:bg-gray-700 light:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Order Id
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Price
              </th>
              <th scope="col" className="py-3 px-6">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.orders?.map((order) => (
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
}
