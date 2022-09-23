import Link from "next/link";
import React from "react";
import {
  MdAddCircle,
  MdOutlineFileUpload,
  MdRemoveRedEye,
  MdShoppingCart,
  MdSpaceDashboard,
} from "react-icons/md";

const dashboard = [
  { id: 1, name: "Dashboard", icon: <MdSpaceDashboard />, link: "/admin/" },
  { id: 2, name: "Orders", icon: <MdShoppingCart />, link: "/admin/orders" },
  {
    id: 3,
    name: "Add Product",
    icon: <MdAddCircle />,
    link: "/admin/addProduct",
  },
  {
    id: 4,
    name: "View Products",
    icon: <MdRemoveRedEye />,
    link: "/admin/viewProducts",
  },
  { id: 5, name: "Image Uploader", icon: <MdOutlineFileUpload />, link: "" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 " aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 bg-gray-50  dark:bg-gray-800 h-[calc(100vh-76px)]">
        <h4 className="text-white font-semibold text-xl mt-2 mb-5">
          Admin Dashboard
        </h4>
        <ul className="space-y-2">
          {dashboard.map((item) => (
            <li key={item.id}>
              <Link href={item.link}>
                <a className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  {item.icon}
                  <span className="ml-3">{item.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
