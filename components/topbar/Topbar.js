import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";

export default function Topbar() {
  const [show, setShow] = useState(true);

  const { userToken, logOut } = useUser();

  const router = useRouter();

  const { quantity } = useCart();

  useEffect(() => {
    setShow(false);
  }, [router.query]);

  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* LOGO */}
        <Link href="/">
          <span className="ml-3 text-2xl font-semibold cursor-pointer select-none">
            Next E-Shop
          </span>
        </Link>

        {/* MIDDLE NAV */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a className="mr-5 font-semibold hover:text-gray-900">Home</a>
          </Link>
          <Link href="/tShirts">
            <a className="mr-5 font-semibold hover:text-gray-900">T-Shirts</a>
          </Link>
          <Link href="/hoodies">
            <a className="mr-5 font-semibold hover:text-gray-900">Hoodies</a>
          </Link>
        </nav>

        {/* TOPBAR RIGHT SIDE */}
        <Link href="/cart">
          <button
            type="button"
            className="inline-flex relative items-center p-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <BsCartPlus size={20} />
            <span className="sr-only">Notifications</span>
            <div className="inline-flex absolute -top-2 -right-2 justify-center items-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900">
              {quantity}
            </div>
          </button>
        </Link>

        {userToken ? (
          <div className="flex items-center md:order-2 relative ml-5">
            <button
              onClick={() => setShow(!show)}
              type="button"
              className="inline-flex justify-center items-center  text-sm text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <MdAccountCircle size={35} />
            </button>

            {show && (
              <div className="w-36 absolute top-12 right-0 z-50 my-4 text-base list-none bg-slate-50 rounded divide-y divide-gray-100 shadow ">
                <ul className="py-1" role="none">
                  <li>
                    <Link href={"/myaccount"}>
                      <div className="block  items-center py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 ">
                        My Account
                      </div>
                    </Link>
                  </li>
                  <li>
                    <div
                      onClick={logOut}
                      className="block items-center py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      Sign Out
                    </div>
                  </li>
                </ul>
              </div>
            )}
            <button
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-language-select"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        ) : (
          <div className="flex gap-2 ml-10">
            <Link href={"/login"}>
              <button className="inline-flex items-center bg-gray-200 text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 hover:text-white transition duration-300  rounded text-base mt-4 md:mt-0">
                Log in
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black transition duration-300 rounded text-base mt-4 md:mt-0">
                Sign up
              </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
