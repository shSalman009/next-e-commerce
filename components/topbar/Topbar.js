import { Menu, Transition } from "@headlessui/react";

import Link from "next/link";
import React, { Fragment } from "react";
import { BsCartPlus } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useUser } from "../../context/UserContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Topbar() {
  const { user, logOut } = useUser();

  return (
    <header className="text-gray-600 body-font shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home</a>
          <Link href="/tShirts">
            <a className="mr-5 hover:text-gray-900">T-Shirts</a>
          </Link>
          <Link href="/hoodies">
            <a className="mr-5 hover:text-gray-900">Hoodies</a>
          </Link>

          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <Link href="/cart">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-500 hover:text-white transition duration-300  rounded text-base mt-4 md:mt-0">
            <BsCartPlus size={20} />
          </button>
        </Link>

        {user ? (
          <div className="flex items-center ml-10">
            <Menu as="div" className="relative inline-block text-left">
              <div className="flex">
                <Menu.Button>
                  <MdAccountCircle size={35} cursor="pointer" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Account settings
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Support
                        </a>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={logOut}
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full text-left px-4 py-2 text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        ) : (
          <div className="flex gap-2 ml-10">
            <Link href={"/login"}>
              <button className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-black transition duration-300  rounded text-base mt-4 md:mt-0">
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
