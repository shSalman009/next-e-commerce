import React, { useState } from "react";
import Input from "../../components/admin/input";
import {
  SelectCategory,
  SelectColor,
  SelectSize,
} from "../../components/admin/select";
import { toastError, toastSuccess } from "../../components/Toast";
import Sidebar from "./sidebar";

export default function AddProduct() {
  const [data, setData] = useState({
    title: "",
    slug: "",
    description: "",
    price: "",
    availibleQty: "",
    image: "",
    category: "",
    color: "",
    size: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addProducts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify([data]),
    });
    const response = await res.json();
    if (response.success) {
      toastSuccess(response.message);
    } else {
      toastError("Something wrong happen");
    }
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleColors = (selectedOptions) => {
    setData({
      ...data,
      color: selectedOptions.value,
    });
  };
  const handleSizes = (selectedOptions) => {
    setData({
      ...data,
      size: selectedOptions.value,
    });
  };
  const handleCategories = (selectedOptions) => {
    setData({
      ...data,
      category: selectedOptions.value,
    });
  };

  const { title, slug, description, price, availibleQty, image } = data;

  return (
    <>
      <style jsx global>{`
        footer {
          display: none;
        }
      `}</style>

      <div className="flex ">
        <Sidebar />
        <div className=" h-screen  w-full">
          <form className="p-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-6">
              <Input
                name="title"
                value={title}
                onchange={handleChange}
                type="text"
                placeholder="Add a title..."
              />

              <Input
                name="slug"
                value={slug}
                onchange={handleChange}
                type="text"
                placeholder="Add a slug..."
              />
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Description
              </label>
              <textarea
                required
                name="description"
                value={description}
                onChange={handleChange}
                id="description"
                placeholder="Write about product..."
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></textarea>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative  mb-6 w-full group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Corors
                </label>
                <SelectColor onChange={handleColors} />
              </div>
              <div className="relative  mb-6 w-full group">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Sizes
                </label>
                <SelectSize onChange={handleSizes} />
              </div>
            </div>

            <div className=" grid md:grid-cols-2 md:gap-6">
              <div>
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Price
                </label>
                <div className="relative mt-1 rounded-md shadow-sm ">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    required
                    name="price"
                    value={price}
                    onChange={handleChange}
                    type="number"
                    id="price"
                    className="block w-full  border-gray-300 pl-7 pr-12 focus:border-indigo-500 sm:text-sm bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="0.00"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center">
                    <label htmlFor="currency" className="sr-only">
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    >
                      <option>USD</option>
                      <option>CAD</option>
                      <option>EUR</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <Input
                  name="availibleQty"
                  value={availibleQty}
                  onchange={handleChange}
                  type="text"
                  placeholder="Add quantity"
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <label
                  htmlFor="base-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Category
                </label>
                <SelectCategory onChange={handleCategories} />
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <label
                  htmlFor="image"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Image{" "}
                  <span className="font-semibold text-gray-400">
                    (Only url)
                  </span>
                </label>{" "}
                <input
                  required
                  name="image"
                  value={image}
                  onChange={handleChange}
                  type="text"
                  placeholder="Add image url..."
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
